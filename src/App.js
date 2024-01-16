import { useState } from "react";
import "./App.css";
import NavBar from "./components/modules/Navbar";

import Router from "./router/index";
import { FaUser } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  localStorage.setItem("adEmail", "admin@example.com");
  localStorage.setItem("adPassword", "123456");
  localStorage.setItem("stEmail", "student@example.com");
  localStorage.setItem("stPassword", "123456");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const noop = () => {};

  if (process.env.REACT_APP_BASE === "production") {
    console.log = noop;
    console.warn = noop;
    console.error = noop;
    console.info = noop;
    console.debug = noop;
  }
  console.log("Taimoor Nawaz", process.env.REACT_APP_BASE);

  const signup = () => {
    navigate("/signup");
  };

  const handleProfileClick = () => {
    setOpenModal(!openModal);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.setItem("role", "");
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", false);
    navigate("/");
  };

  let role = localStorage.getItem("role");
  // const queryClient = new QueryClient();

  const loginState = localStorage.getItem("isLoggedIn");
  return (
    <>
      {loginState && role == "admin" ? (
        <NavBar
          id="admin"
          title="Admin"
          updateProfile="Update Profile"
          show={openModal}
          handleCloseModal={handleProfileClick}
          feildsData={[
            {
              link: "Create Case",
              url: "/dashboard/admin",
            },
            {
              link: "Genral Feedback",
              url: "/all-surveys",
            },
            {
              link: "Cases List",
              url: "/work-list",
            },
          ]}
          inputFeildsData={[
            {
              id: "username",
              type: "text",
              label: "Username *",
              placeholder: "Enter Your username",
              margin: "10px 0 10px 0",
              defaultValue: "Taimoor",
            },

            {
              id: "password",
              type: "password",
              label: "Password *",
              placeholder: "Enter Your Password",
              margin: "10px 0 10px 0",
              defaultValue: "123456",
            },

            {
              id: "email",
              type: "email",
              label: "Email *",
              placeholder: "Enter Your Email",
              margin: "10px 0 10px 0",
              defaultValue: "admin@example.com",
            },
          ]}
          logo="image"
          button={[
            {
              id: "profile",
              onClick: "modal",
              buttonText: <FaUser className="me-1 fs-4" />,
              onClick: handleProfileClick,
              color: "primary",
            },
            {
              id: "admin-create",
              onClick: signup,
              buttonText: "Create Admin User",
              color: "primary",
            },
            {
              id: "logout",
              buttonText: "Logout",
              onClick: handleLogout,
              color: "primary",
            },
          ]}
        />
      ) : loginState && role == "student" ? (
        <NavBar
          id="user"
          title="User"
          updateProfile="Update Profile"
          show={openModal}
          handleCloseModal={handleProfileClick}
          feildsData={[
            {
              link: "Work List",
              url: "/dashboard/student",
            },
          ]}
          select={[
            {
              id: "location",
              label: "Location *",
              selectedOption: "Select Location",
              margin: "10px 0 10px 0",
            },
            {
              id: "gender",
              label: "Gender *",
              selectedOption: "Select Gender",
              margin: "10px 0 10px 0",
            },
            {
              id: "curentStatus",
              label: "Current Status *",
              selectedOption: "Current Status",
              margin: "10px 0 10px 0",
            },
            {
              id: "currentYear",
              label: "Current Year Of Medical Traning *",
              selectedOption: "Current Year Of Medical Traning",
              margin: "10px 0 10px 0",
            },
            {
              id: "selectField",
              label: "Select Your Field *",
              selectedOption: "Select Your Field",
              margin: "10px 0 10px 0",
            },
          ]}
          inputFeildsData={[
            {
              id: "username",
              type: "text",
              label: "Username *",
              placeholder: "Enter Your username",
              margin: "10px 0 10px 0",
              defaultValue: "Albert",
            },
            {
              id: "email",
              type: "email",
              label: "Email *",
              placeholder: "Enter Your Email",
              margin: "10px 0 10px 0",
              defaultValue: "admin@example.com",
            },
            {
              id: "age",
              type: "number",
              label: "Age *",
              placeholder: "Enter Your Age",
              margin: "10px 0 10px 0",
              defaultValue: "18",
            },

            {
              id: "password",
              type: "password",
              label: "Password *",
              placeholder: "Enter Your Password",
              margin: "10px 0 10px 0",
              defaultValue: "123456",
            },
          ]}
          logo="image"
          button={[
            {
              id: "profile",
              onClick: handleProfileClick,
              buttonText: <FaUser className="me-1 fs-4" />,
              color: "primary",
            },
            {
              id: "logout",
              onClick: handleLogout,
              buttonText: "Logout",
              color: "primary",
            },
          ]}
        />
      ) : null}

      <Router isLoggedIn={loginState} onLogin={handleLogin} />
    </>
  );
}

export default App;
