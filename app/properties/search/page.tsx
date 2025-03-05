import SearchForm from "@/components/client/SearchForm";
import PropertyCard from "@/components/server/PropertyCard";
import Property from "@/models/Property";
import { Property as PropertyInterface } from "@/types/interfaces";
import convertToPlainObject from "@/utils/convert-plain-object";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";

type Props = {
  searchParams?: Record<string, string | string[] | undefined>;
};

const SearchProperties = async ({ searchParams }: Props) => {
  const patternLocation = new RegExp(searchParams?.location as string, "i");
  let query = {
    $or: [
      { name: patternLocation },
      { description: patternLocation },
      { "location.street": patternLocation },
      { "location.city": patternLocation },
      { "location.state": patternLocation },
      { "location.zipCode": patternLocation },
    ],
    ...(searchParams?.propertyType !== "All" && {
      type: searchParams?.propertyType,
    }),
  };

  const propertiesRes = await Property.find(query).lean();
  const properties = convertToPlainObject(propertiesRes) as PropertyInterface[];

  return (
    <>
      <section className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6">
          <SearchForm />
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <Link
            href="/properties"
            className="flex items-center text-black hover:underline mb-3"
          >
            <FaArrowAltCircleLeft className="mr-2 mb-1" /> Voltar
          </Link>
          <h1 className="text-2xl mb-4">Buscar</h1>
          {properties.length === 0 ? (
            <p>Nenhuma propriedade encontrada</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchProperties;
