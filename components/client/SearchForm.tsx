"use client"; // this file is client side only
import { useRouter } from "next/navigation";
import { useState } from "react";
const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [searchInfo, setSearchInfo] = useState({
    location: "",
    propertyType: "All",
  });

  const router = useRouter();

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearchInfo({
      ...searchInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url =
      searchInfo.location.trim().length <= 0 &&
      searchInfo.propertyType === "All"
        ? "/properties"
        : `/properties/search?location=${searchInfo.location}&propertyType=${searchInfo.propertyType}`;

    router.push(url);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center"
    >
      <div className="w-full md:w-9/12 md:pr-2 mb-4 md:mb-0">
        <label htmlFor="location" className="sr-only">
          Localização
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Busque por localização (Cidade, Estado, CEP, etc)"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
          onChange={(e) => handleSearchChange(e)}
          value={searchInfo.location}
        />
      </div>
      <div className="w-full md:w-3/12 md:pl-2">
        <label htmlFor="property-type" className="sr-only">
          Tipo
        </label>
        <select
          id="property-type"
          name="propertyType"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
          value={searchInfo.propertyType}
          onChange={(e) => handleSearchChange(e)}
        >
          <option value="All">Todos</option>
          <option value="Apartment">Apartamento</option>
          <option value="House">Casa</option>
          <option value="Room">Quarto</option>
          <option value="Other">Outro</option>
        </select>
      </div>
      <button
        type="submit"
        className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;
