"use client";
import getMessagesUnreadCount from "@/app/actions/getMessagesUnreadCount";
import { useSession } from "next-auth/react";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";

interface GlobalStateInterface {
  unreadCount: number;
  setUnreadCount: Dispatch<SetStateAction<number>> | null;
}

const defaultValue: GlobalStateInterface = {
  unreadCount: 0,
  setUnreadCount: null,
};
// Create context
export const GlobalContext = createContext(defaultValue);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [unreadCount, setUnreadCount] = useState(0);

  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      getMessagesUnreadCount().then((count) => {
        if (count) setUnreadCount(count);
      });
    }
  }, [session]); // Remova getMessagesUnreadCount do array de dependências

  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// Create a custom hook to access context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
