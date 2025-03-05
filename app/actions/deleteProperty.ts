"use server";

import Property from "@/models/Property";
import connectDB from "@/config/database";
import cloudinary from "@/config/cloudinary";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

const deleteProperty = async (propertyId: string) => {
  await connectDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.id) {
    throw new Error("User ID is required");
  }

  const property = await Property.findOne({
    owner: sessionUser.id,
    _id: propertyId,
  });

  if (!property) {
    throw new Error("Property not found for this user");
  }

  // extract public ID from image URLS

  const idsImages = property.images.map((image: string) => {
    return image.split("/").at(-1)?.split(".").at(0);
  });

  if (idsImages.length > 0) {
    await cloudinary.api.delete_resources(idsImages);
  }

  await property.deleteOne();

  revalidatePath("/", "layout");
};

export default deleteProperty;
