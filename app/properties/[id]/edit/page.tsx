import PropertyEditForm from "@/components/server/PropertyEditForm";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import convertToSerializeableObject from "@/utils/convert-plain-object";

interface PropertyPageProps {
  params: {
    id: string;
  };
}

const PropertyEditPage = async ({ params }: PropertyPageProps) => {
  await connectDB();

  const propertyDoc = await Property.findById(params.id).lean();
  const property = convertToSerializeableObject(propertyDoc);

  if (!property) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Propriedade não encontrada
      </h1>
    );
  }

  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <PropertyEditForm property={property} />
        </div>
      </div>
    </section>
  );
};

export default PropertyEditPage;
