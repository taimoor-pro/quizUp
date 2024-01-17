import { useState } from "react";
import "./App.css";
import NavBar from "./components/modules/Navbar";

import Router from "./router/index";
import { FaUser } from "react-icons/fa";
import ProfileModal from "./components/modules/Modals/modal";
import { useNavigate } from "react-router-dom";

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
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.setItem("role", "");
    setIsLoggedIn(false);
  };

  let role = localStorage.getItem("role");
  return (
    <>
      {isLoggedIn && role == "admin" ? (
        <NavBar
          id="admin"
          title="Admin"
          updateProfile="Update Profile"
          show={openModal}
          handleCloseModal={handleProfileClick}
          feildsData={[
            {
              link: "Create Case",
              url: "/create-case",
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
              id: "email",
              type: "text",
              label: "Email *",
              placeholder: "Enter Your email",
              margin: "10px 0 10px 0",
            },

            {
              id: "password",
              type: "password",
              label: "Password *",
              placeholder: "Enter Your Password",
              margin: "10px 0 10px 0",
            },

            {
              id: "cpassword",
              type: "text",
              label: "Confirm Password *",
              placeholder: "Enter Your Confirm Password",
              margin: "10px 0 10px 0",
            },

            {
              id: "cpassword",
              type: "text",
              label: "Confirm Password *",
              placeholder: "Enter Your Confirm Password",
              margin: "10px 0 10px 0",
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
      ) : isLoggedIn && role == "student" ? (
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
          inputFeildsData={[
            {
              id: "email",
              type: "text",
              label: "Email *",
              placeholder: "Enter Your email",
              margin: "10px 0 10px 0",
            },

            {
              id: "password",
              type: "password",
              label: "Password *",
              placeholder: "Enter Your Password",
              margin: "10px 0 10px 0",
            },

            {
              id: "cpassword",
              type: "text",
              label: "Confirm Password *",
              placeholder: "Enter Your Confirm Password",
              margin: "10px 0 10px 0",
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

      <Router isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </>
  );
}

export default App;
