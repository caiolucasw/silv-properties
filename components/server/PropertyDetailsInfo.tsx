import { Property } from "@/types/interfaces";
import {
  FaBed,
  FaCheck,
  FaMapMarker,
  FaRulerCombined,
  FaTimes,
} from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import PropertyMap from "../client/PropertyMap";
import convertToPlainObject from "@/utils/convert-plain-object";
import {
  translateAmenitiesToBr,
  translateTypeToBr,
} from "@/utils/convertUSToBr";

const PropertyDetailsInfo = ({ property }: { property: Property }) => {
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">
          {translateTypeToBr(property?.type) || ""}
        </div>
        <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
          <FaMapMarker className="text-orange-700 mt-1 mr-1" />
          <p className="text-orange-700">
            {property.location.street} {property.location.city}{" "}
            {property.location.zipcode}
          </p>
        </div>

        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          Opções
        </h3>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Noite</div>
            <div className="text-2xl font-bold">
              {property?.options?.nightly ? (
                `R$${property?.options?.nightly?.price?.toLocaleString(
                  "pt-BR"
                )}`
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Semanal</div>
            <div className="text-2xl font-bold text-blue-500">
              {property?.options?.weekly?.price ? (
                `R$${property?.options?.weekly?.price?.toLocaleString("pt-BR")}`
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Mensal</div>
            <div className="text-2xl font-bold text-blue-500">
              {property?.options?.monthly?.price ? (
                `R$${property?.options?.monthly?.price?.toLocaleString(
                  "pt-BR"
                )}`
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Detalhes</h3>
        <div className="flex justify-center gap-4 text-black mb-4 text-xl space-x-9">
          <p>
            <FaBed /> {property.beds}
            <span className="hidden sm:inline">Camas</span>
          </p>
          <p>
            <FaBath />
            {property.baths}
            <span className="hidden sm:inline">Banheiros</span>
          </p>
        </div>
        <div>
          <p className="font-bold text-lg">Descrição</p>
          <p className="text-gray-500 mb-4">{property.description}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">O que esse local oferece</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
          {property?.amenities &&
            property.amenities.map((ame) => (
              <li key={ame}>
                <FaCheck className="inline-block text-green-600 mr-2" />{" "}
                {translateAmenitiesToBr(ame)}
              </li>
            ))}
        </ul>
      </div>
      {/* <!-- Map --> */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <PropertyMap property={property} />
      </div>
    </main>
  );
};

export default PropertyDetailsInfo;
