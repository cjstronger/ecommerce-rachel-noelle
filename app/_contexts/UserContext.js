"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getSession() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    }
    getSession();
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("Cannot use user context outside of the provider");
  return context;
}

export { useUser, UserProvider };
