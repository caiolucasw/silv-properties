"use server";

import connectDB from "@/config/database";
import Message from "@/models/Message";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

interface FormFields {
  name: string;
  email: string;
  phone: string;
  message: string;
  property: string;
  sender?: string;
  recipient?: string;
}

export default async function addMessage(fields: FormFields) {
  await connectDB();

  const user = await getSessionUser();

  if (!user || !user?.id) {
    throw new Error("O usuário precisa estar logado");
  }

  const property = await Property.findById(fields.property);
  if (!property) {
    return {
      status: 404,
      message: "Property not found",
    };
  }

  console.log(user, property, user.id === property.owner.toString());
  if (user.id === property.owner.toString()) {
    return {
      status: 400,
      message: "O usuário não pode enviar mensagem para ele mesmo",
    };
  }

  fields.sender = user.id;
  fields.recipient = property.owner;

  await Message.create(fields);

  return {
    status: 201,
    message: "Messsage created successfully",
  };
}
