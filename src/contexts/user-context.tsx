import React, { createContext, useState, useContext, ReactNode } from "react";
import Cookies from "js-cookie";

interface User {
  name: string;
  session_id: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  login: (user: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const uid = Cookies.get("uid");
    if (uid) {
      return {
        session_id: uid,
        name: "John Doe", // Use a placeholder or fetch the actual user name
      };
    }
    return null;
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = (user: User) => {
    Cookies.set("uid", user.session_id, { expires: 3 });
    setUser(user);
    setIsLoading(false);
  };

  const logout = () => {
    Cookies.remove("uid");
    setUser(null);
    setIsLoading(false);
  };

  return (
    <UserContext.Provider
      value={{ user, isLoading, setUser, setIsLoading, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
