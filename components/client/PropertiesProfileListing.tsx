"use client";
import { Property } from "@/types/interfaces";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import deleteProperty from "@/app/actions/deleteProperty";
import { toast } from "react-toastify";

const PropertiesProfileListing = ({
  properties: propertiesProp,
}: {
  properties: Property[];
}) => {
  const [properties, setProperties] = useState(propertiesProp);

  const handlePropertyDelete = async (id: string) => {
    const confired = window.confirm("Deseja excluir a propriedade?");
    if (!confired) return;

    await deleteProperty(id);

    setProperties((prevProperties) =>
      prevProperties.filter((property) => property._id !== id)
    );

    toast.success("Propriedade excluída com sucesso");
  };
  return (
    <>
      {properties.map((property, index) => (
        <div className="mb-10" key={property._id}>
          <Link href={`/property/${property._id}`}>
            <Image
              className="h-32 w-full rounded-md object-cover"
              src={property.images ? property.images[0] : ""}
              alt={`Property ${index + 1}`}
              width={1000}
              height={200}
            />
          </Link>
          <div className="mt-2">
            <p className="text-lg font-semibold">{property.name}</p>
            <p className="text-gray-600">
              Endereço:{" "}
              {`${property.location.street} ${property.location.city} ${property.location.state}`}
            </p>
          </div>
          <div className="mt-2">
            <Link
              href={`/property/${property._id || ""}/edit`}
              className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
            >
              Editar
            </Link>
            <button
              className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
              type="button"
              onClick={() => property._id && handlePropertyDelete(property._id)}
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertiesProfileListing;
