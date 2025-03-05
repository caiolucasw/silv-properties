import { getServerSession } from "next-auth";
import { authOptions } from "./auth-options";

export const getSessionUser = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return null;
  }

  return session.user;
};
