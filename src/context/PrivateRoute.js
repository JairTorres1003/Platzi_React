import React, { useContext } from "react";
import { Login } from "../pages/Login";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ component: Component }, props) => {
  const { user } = useContext(AuthContext);

  return user ? <Component {...props} /> : <Login />;
};

export default PrivateRoute;
