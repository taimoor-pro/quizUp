import { useSelector } from "react-redux";

export const useAuth = () => {
  const isLogin = localStorage.getItem("token") !== null;

  const { isLoggedIn, userDetails } = useSelector(
    (state) => state.authentication
  );

  const login = () => {
    // Perform login logic, set isLogin to true
    localStorage.setItem("token", "your_token_here");
  };

  const logout = () => {
    // Perform logout logic, set isLogin to false
    localStorage.removeItem("token");
  };

  return { isLoggedIn, login, logout, userDetails };
};
