export function translateTypeToBr(type: string) {
  let typeBr = "";

  switch (type) {
    case "Apartment":
      typeBr = "Apartamento";
      break;
    case "House":
      typeBr = "Casa";
      break;
    case "Room":
      typeBr = "Quarto";
      break;
    default:
      typeBr = "Outro";
  }
  return typeBr;
}

export function translateAmenitiesToBr(amenity: string) {
  let amenityBr = "";

  switch (amenity) {
    case "Full kitchen":
      amenityBr = "Cozinha Completa";
      break;
    case "Washer & Dryer":
      amenityBr = "Máquina de Lavar";
      break;
    case "Free Parking":
      amenityBr = "Garagem";
      break;
    case "Washer & Dryer":
      amenityBr = "Máquina de Lavar";
      break;
    case "Free Parking":
      amenityBr = "Garagem";
      break;
    case "Swimming Pool":
      amenityBr = "Piscina";
      break;
    case "24/7 Security":
      amenityBr = "Segurança 24 horas";
      break;

    case "Gym/Fitness Center":
      amenityBr = "Academia";
      break;

    case "Air Conditioning":
      amenityBr = "Ar-condicionado";
      break;
    default:
      amenityBr = amenity;
  }
  return amenityBr;
}
