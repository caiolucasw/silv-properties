import PropertyDetailsInfo from "@/components/server/PropertyDetailsInfo";
import PropertyHeader from "@/components/server/PropertyHeader";
import ImagesProperty from "@/components/server/ImagesProperty";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { Property as IProperty } from "@/types/interfaces";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import BookmarkButton from "@/components/server/BookmarkButton";
import ShareButtons from "@/components/server/ShareButtons";
import PropertyContactForm from "@/components/server/PropertyContactForm";
import convertToPlainObject from "@/utils/convert-plain-object";
import { getSessionUser } from "@/utils/getSessionUser";
import User from "@/models/User";

const PropertyDetails = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  await connectDB();
  const propertyPlain = await Property.findById(id)?.lean();
  const property = convertToPlainObject(propertyPlain);
  const user = await getSessionUser();
  const propertyBookMarked = await User.findOne({
    _id: user?.id,
    bookmarks: id,
  });

  if (!property) return <></>;

  const isBookMarked = propertyBookMarked ? true : false;
  const isLoggedIn = user && user?.id;

  return (
    <>
      <PropertyHeader image={property.images ? property.images[0] : ""} />
      {/* <!-- Go Back --> */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-black hover:opacity-80 flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Voltar
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            {/* Property info */}
            <PropertyDetailsInfo property={property} />
            <aside className="space-y-4">
              <BookmarkButton property={property} bookMarked={isBookMarked} />
              <ShareButtons property={property} />
              {isLoggedIn && <PropertyContactForm property={property} />}
            </aside>
          </div>
        </div>
      </section>
      <ImagesProperty images={property.images} />
    </>
  );
};

export default PropertyDetails;
