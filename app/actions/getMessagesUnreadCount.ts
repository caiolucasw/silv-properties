"use server";

import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

const getUnreadMessageCount = async () => {
  const user = await getSessionUser();

  if (!user || !user?.id) {
    throw new Error("O usuário precisa estar logado!");
  }

  const messagesCount = await Message.countDocuments({
    recipient: user.id,
    read: false,
  });

  return messagesCount || 0;
};

export default getUnreadMessageCount;
