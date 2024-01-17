//import Cookie from 'js.cookie'
import { Outlet, Navigate } from "react-router-dom";
import { routes } from "./helper";

const Protected = (props) => {
  const { isLoggedIn } = props;
  // const isLogin = Cookie.get('token')

  //  const {isLogin} = useAuth()

  //  Logic

  const isUserLoggedIn = isLoggedIn;
  return isUserLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
