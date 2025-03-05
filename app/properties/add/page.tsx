import PropertyAddForm from "@/components/server/PropertyAddForm";

const PropertiesAddPage = () => {
  return (
    <section className="bg-white">
      <div className="container m-auto max-w-2xl py-16">
        <div className="bg-white px-6 py-6 mb-4 shadow-md rounded-md border m-2 md:m-0">
          <PropertyAddForm />
        </div>
      </div>
    </section>
  );
};

export default PropertiesAddPage;
