//import Cookie from 'js.cookie'
import { Outlet, Navigate } from "react-router-dom";
import { routes } from "./helper";
import { useAuth } from "../hooks/useAuth";

const Protected = () => {
  // const isLogin = Cookie.get('token')

  const { isLoggedIn, userDetails } = useAuth();

  //  Logic
  const isUserLoggedIn = isLoggedIn;
  return isUserLoggedIn ? <Outlet /> : <Navigate to={routes.UNAUTHORIZED} />;
};

export default Protected;
