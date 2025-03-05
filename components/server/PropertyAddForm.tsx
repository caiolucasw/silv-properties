"use client";
import addProperty from "@/app/actions/addProperty";
import { RefObject, useRef, useState } from "react";

const PropertyAddForm = () => {
  const inputFileRef = useRef(null) as RefObject<HTMLInputElement>;
  return (
    <form action={addProperty}>
      <h2 className="text-3xl text-center font-semibold mb-6">
        Adicionar Propriedade
      </h2>

      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
          Tipo
        </label>
        <select
          id="type"
          name="type"
          className="border border-black rounded w-full py-2 px-3"
          required
        >
          <option value="Apartment">Apartmento</option>
          <option value="House">Casa</option>
          <option value="Room">Quarto</option>
          <option value="Other">Outro</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Descrição
        </label>
        <textarea
          id="description"
          name="description"
          className="border  border-black rounded w-full py-2 px-3"
          rows={4}
          placeholder="Adicione uma descrição"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Local</label>
        <input
          type="text"
          id="street"
          name="location.street"
          className="border  border-black rounded w-full py-2 px-3 mb-2"
          placeholder="Rua"
        />
        <input
          type="text"
          id="city"
          name="location.city"
          className="border  border-black rounded w-full py-2 px-3 mb-2"
          placeholder="Cidade"
          required
        />
        <input
          type="text"
          id="state"
          name="location.state"
          className="border  border-black rounded w-full py-2 px-3 mb-2"
          placeholder="UF"
          required
        />
        <input
          type="text"
          id="zipcode"
          name="location.zipcode"
          className="border  border-black rounded w-full py-2 px-3 mb-2"
          placeholder="CEP"
        />
      </div>

      <div className="mb-4 flex flex-wrap">
        <div className="w-full sm:w-2/4 pr-2">
          <label htmlFor="beds" className="block text-gray-700 font-bold mb-2">
            Camas
          </label>
          <input
            type="number"
            id="beds"
            name="beds"
            className="border  border-black rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="w-full sm:w-2/4 px-2">
          <label htmlFor="baths" className="block text-gray-700 font-bold mb-2">
            Banheiros
          </label>
          <input
            type="number"
            id="baths"
            name="baths"
            className="border  border-black rounded w-full py-2 px-3"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          O que esse lugar oferece
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div>
            <input
              type="checkbox"
              id="amenity_wifi"
              name="amenities"
              value="Wifi"
              className="mr-2"
            />
            <label htmlFor="amenity_wifi">Wifi</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_kitchen"
              name="amenities"
              value="Full kitchen"
              className="mr-2"
            />
            <label htmlFor="amenity_kitchen">Cozinha Completa</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_washer_dryer"
              name="amenities"
              value="Washer & Dryer"
              className="mr-2"
            />
            <label htmlFor="amenity_washer_dryer">Máquina de Lavar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_free_parking"
              name="amenities"
              value="Free Parking"
              className="mr-2"
            />
            <label htmlFor="amenity_free_parking">Garagem</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_pool"
              name="amenities"
              value="Swimming Pool"
              className="mr-2"
            />
            <label htmlFor="amenity_pool">Piscina</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_24_7_security"
              name="amenities"
              value="24/7 Security"
              className="mr-2"
            />
            <label htmlFor="amenity_24_7_security">Segurança 24 horas</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="amenity_gym_fitness_center"
              name="amenities"
              value="Gym/Fitness Center"
              className="mr-2"
            />
            <label htmlFor="amenity_gym_fitness_center">
              Gym/Fitness Center
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_air_conditioning"
              name="amenities"
              value="Air Conditioning"
              className="mr-2"
            />
            <label htmlFor="amenity_air_conditioning">Ar-condicionado</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_smart_tv"
              name="amenities"
              value="Smart TV"
              className="mr-2"
            />
            <label htmlFor="amenity_smart_tv">Smart TV</label>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
          Imagens (Selecione até 4 imagens)
        </label>
        <input
          ref={inputFileRef}
          type="file"
          id="images"
          name="images"
          className="border border-black rounded w-full py-2 px-3 hidden"
          accept="image/*"
          multiple
          required
        />
        <button
          type="button"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover-opacity-80"
          onClick={() => inputFileRef?.current?.click()}
        >
          Carregar Imagens
        </button>
      </div>

      <div className="mb-4">
        <label
          htmlFor="seller_name"
          className="block text-gray-700 font-bold mb-2"
        >
          Nome do Proprietário
        </label>
        <input
          type="text"
          id="seller_name"
          name="seller_info.name"
          className="border border-black rounded w-full py-2 px-3"
          placeholder="Nome"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_email"
          className="block text-gray-700 font-bold mb-2"
        >
          Email do Proprietário
        </label>
        <input
          type="email"
          id="seller_email"
          name="seller_info.email"
          className="border  border-black rounded w-full py-2 px-3"
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_phone"
          className="block text-gray-700 font-bold mb-2"
        >
          Telefone
        </label>
        <input
          type="tel"
          id="seller_phone"
          name="seller_info.phone"
          className="border  border-black rounded w-full py-2 px-3"
          placeholder="Telefone"
        />
      </div>

      <div>
        <button
          className="bg-black hover:opacity-80 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Adicionar
        </button>
      </div>
    </form>
  );
};

export default PropertyAddForm;
