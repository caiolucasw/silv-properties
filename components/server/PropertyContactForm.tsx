"use client";
import { Property } from "@/types/interfaces";
import addMessage from "@/app/actions/addMessage";
import { useActionState, useState } from "react";
import { toast } from "react-toastify";

const defaultFields = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const PropertyContactForm = ({ property }: { property: Property }) => {
  const [formFields, setFormFields] = useState(defaultFields);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormFields((curr) => ({
      ...curr,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await addMessage({
      ...formFields,
      property: property._id || "",
    });

    if (res?.status === 201) {
      toast.success("A mensagem foi enviada com sucesso!");
      // clear fields
      setFormFields(defaultFields);
    } else {
      toast.error(res.message);
    }

    setLoading(false);
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-6">Contate o Proprietário</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nome:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            value={formFields.name}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            value={formFields.email}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Telefone:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            name="phone"
            type="text"
            value={formFields.phone}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Mensagem:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            value={formFields.message}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button
            className="bg-black hover:opacity-80 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
            type="submit"
            disabled={loading}
          >
            <i className="fas fa-paper-plane mr-2"></i>{" "}
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyContactForm;
