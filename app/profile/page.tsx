import Image from "next/image";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import profileDefault from "@/assets/images/profile.png";
import PropertiesProfileListing from "@/components/client/PropertiesProfileListing";
import convertToPlainObject from "@/utils/convert-plain-object";

const ProfilePage = async () => {
  await connectDB();
  const sessionUser = await getSessionUser();

  const { id, image } = sessionUser;

  if (!id) {
    throw new Error("User ID é obrigatório");
  }

  const propertiesLean = await Property.find({ owner: id }).lean();
  const propertiesMap = propertiesLean.map((property) =>
    convertToPlainObject(property)
  );
  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Perfil</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                <Image
                  className="h-24 w-24 md:h-32 md:w-32 rounded-full mx-auto md:mx-0"
                  src={image || profileDefault}
                  alt="User"
                  width={200}
                  height={200}
                />
              </div>

              <h2 className="text-xl mb-4">
                <span className="font-bold block">Nome: </span>{" "}
                {sessionUser.name}
              </h2>
              <h2 className="text-xl">
                <span className="font-bold block">Email: </span>{" "}
                {sessionUser.email}
              </h2>
            </div>

            <div className="md:w-3/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-4">Suas Propriedades</h2>
              <PropertiesProfileListing properties={propertiesMap} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
