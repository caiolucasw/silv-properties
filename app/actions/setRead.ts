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

export default async function addMessage(id: string) {
  await connectDB();

  const user = await getSessionUser();

  if (!user || !user?.id) {
    throw new Error("O usuário precisa estar logado");
  }

  await Message.findOneAndUpdate(
    { _id: id, recipient: user.id },
    { read: true }
  );

  return {
    status: 200,
  };
}
