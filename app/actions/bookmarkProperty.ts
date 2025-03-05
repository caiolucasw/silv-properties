"use server";

import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

const bookmarkProperty = async (propertyId: string) => {
  await connectDB();
  const user = await getSessionUser();

  let res = {
    error: false,
    msg: "Propriedade salva nos favoritos",
  };
  try {
    if (!user || !user.id) {
      throw new Error("User ID is required");
    }
    const userHasProperty = await User.findOne({
      _id: user.id,
      bookmarks: propertyId,
    });

    console.log(userHasProperty);

    if (userHasProperty) {
      await User.updateOne(
        { _id: user.id },
        { $pull: { bookmarks: propertyId } }
      );

      res.msg = "Propriedade removida dos seus favoritos";
    } else {
      await User.updateOne(
        { _id: user.id },
        { $push: { bookmarks: propertyId } }
      );
    }
  } catch (error) {
    res = {
      error: true,
      msg: "Erro ao adicionar/remover propriedade dos favoritos",
    };
  }

  revalidatePath("/properties/saved", "page");
  return res;
};

export default bookmarkProperty;
