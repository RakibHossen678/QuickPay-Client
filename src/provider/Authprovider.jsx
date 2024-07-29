import { createContext, useEffect, useState } from "react";
import { deleteUser, getUser, saveUser } from "../lib/localStorage";

const AuthContext = createContext();
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = getUser();
    if (storedUser.length > 0) {
      setUser(storedUser[0]);
    }
  }, []);
  const login = (user) => {
    saveUser(user);
    setUser(user);
  };
  const logout = () => {
    deleteUser();
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext };
export default Authprovider;
