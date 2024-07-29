import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";

const PrivateRoute = ({ children }) => {
  const user = useContext(AuthContext);
  console.log(user);
  if (user) {
    return children;
  }
  Navigate("/login");
};

export default PrivateRoute;
