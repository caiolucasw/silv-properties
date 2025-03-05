import PropertyCard from "@/components/server/PropertyCard";
import { Property as PropertyInterface } from "@/types/interfaces";
import connectDB from "@/config/database";
import PropertyModel from "@/models/Property";
import Property from "@/models/Property";
import Pagination from "@/components/server/Pagination";

const PropertiesPage = async ({ searchParams: { page = 1, size = 9 } }) => {
  await connectDB();
  const total = await Property.countDocuments();
  const skip = (page - 1) * size;
  const properties: PropertyInterface[] = await PropertyModel.find({})
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(size);

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No properties</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((prop) => {
              return <PropertyCard key={prop._id} property={prop} />;
            })}
          </div>
        )}
        {total > size && <Pagination page={page} size={size} total={total} />}
      </div>
    </section>
  );
};

export default PropertiesPage;
