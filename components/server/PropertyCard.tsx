import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";
import { Property } from "@/types/interfaces";
import { translateTypeToBr } from "@/utils/convertUSToBr";
interface IPropertyCard {
  property: Property;
}

const PropertyCard = ({ property }: IPropertyCard) => {
  const getRateDisplay = () => {
    const options = property?.options;
    if (options?.monthly?.price) {
      return `R$${options.monthly.price.toLocaleString("pt-BR")}/mês`;
    } else if (options?.weekly?.price) {
      return `R$${options.weekly.price.toLocaleString("pt-BR")}/semana`;
    } else if (options?.nightly?.price) {
      return `R$${options.nightly.price.toLocaleString("pt-BR")}/noite`;
    }
  };

  const typeBr = translateTypeToBr(property.type);

  return (
    // <!-- Listing 1 -->
    <Link href={`/properties/${property._id}`}>
      <div className="rounded-xl shadow-md relative">
        <Image
          src={property.images ? property.images[0] : ""}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="h-[300px] w-full rounded-t-xl"
        />
        <div className="p-4">
          <div className="text-left md:text-center lg:text-left mb-6">
            <div className="text-gray-600">{typeBr || ""}</div>
            <h3 className="text-xl font-bold">{property?.name || ""}</h3>
          </div>
          <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
            {getRateDisplay()}
          </h3>

          <div className="flex justify-center gap-4 text-gray-500 mb-4">
            <p>
              <FaBed className="inline" /> {property.beds}{" "}
              <span className="inline">Camas</span>
            </p>
            <p>
              <FaBath className="inline" /> {property.baths}{" "}
              <span className="inline">Banheiros</span>
            </p>
          </div>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="flex align-middle gap-2 mb-4 lg:mb-0">
              <FaMapMarker className="text-blue-500 mt-1" />
              <span className="text-blue-500">
                {" "}
                {`${property?.location?.city} ${property?.location?.state}`}{" "}
              </span>
            </div>
            <div className="h-[36px] bg-black hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm">
              Detalhes
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
