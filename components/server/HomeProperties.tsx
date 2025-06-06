import Link from "next/link";
import PropertyCard from "./PropertyCard";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { Property as IProperty } from "@/types/interfaces";

const HomeProperties = async () => {
  await connectDB();
  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean<IProperty[]>()
    .exec();

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          {recentProperties.length === 0 ? (
            <p>No properties</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentProperties.map((prop) => {
                return <PropertyCard key={prop._id} property={prop} />;
              })}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-lg my-6 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          Ver todas
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
