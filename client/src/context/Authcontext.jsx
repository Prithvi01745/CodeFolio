import { createContext, useState } from "react";
import AuthProvider from "./context/Authcontext";

export const Authcontext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Authcontext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}

export default AuthProvider;