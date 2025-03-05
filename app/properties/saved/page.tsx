import bookmarkProperty from "@/app/actions/bookmarkProperty";
import PropertyCard from "@/components/server/PropertyCard";
import connectDB from "@/config/database";
import User from "@/models/User";
import { Property, User as UserInterface } from "@/types/interfaces";
import { authOptions } from "@/utils/auth-options";
import { getServerSession } from "next-auth";

const BookMarkPropertiesPage = async () => {
  connectDB();
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user || !user.id) return <></>;

  const userInfo = (await User.findById(user.id).populate(
    "bookmarks"
  )) as UserInterface;

  let bookMarkedProperties = (userInfo?.bookmarks || []) as Property[];
  return (
    <section className="px-4 py-6">
      <div className="container lg:container m-auto px-4 py-6">
        <h1 className="text-2xl mb-4 font-bold">Propriedades Salvas</h1>
        {bookMarkedProperties && bookmarkProperty.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookMarkedProperties.map((property) => (
              // card bookmarked
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        ) : (
          <div>Nenhuma propriedade salva</div>
        )}
      </div>
    </section>
  );
};

export default BookMarkPropertiesPage;
