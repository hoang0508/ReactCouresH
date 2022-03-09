import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState({
    userId: 1,
    fullname: "Huy Hoàng",
    email: "hoang@gmail.com",
  });
  const value = [user, setUser];
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
};

const userAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within a CountProvider");
  return context;
};
