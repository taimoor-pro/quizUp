import { useState } from "react";
import "./App.css";
import NavBar from "./components/modules/Navbar";
import * as yup from "yup";
import Router from "./router/index";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { handleLogin, handleLogout } from "./redux/reducers/Authentication";
import { useDispatch, useSelector } from "react-redux";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  localStorage.setItem("adEmail", "admin@example.com");
  localStorage.setItem("adPassword", "123456");
  localStorage.setItem("stEmail", "student@example.com");
  localStorage.setItem("stPassword", "123456");

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const regSchema = yup.object().shape({
    username: yup.string().required("Please Enter username!"),
    password: yup.string().min(5).max(10).required("Please Enter Password!"),
    email: yup.string().email().required("Please Enter Email!"),
    age: yup.string().required("Please Enter age!"),
    location: yup.string().required("Please Select Location!"),
    gender: yup.string().required("Please Select Gender!"),
    curentStatus: yup.string().required("Please Select Current Status!"),
    // confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

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
  const onSubmit = () => {
    console.log("sadsaf1234");
    setOpenModal(!openModal);
    console.log(openModal, "openModalooooooo");
  };

  const handleProfileClick = () => {
    setOpenModal(!openModal);
  };

  const handleLogin = () => {
    // setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const dispatch = useDispatch();
  // Function to handle logout
  const handleLogoutButton = () => {
    dispatch && dispatch(handleLogout());
    navigate("/");
    toast.success("Logout Sucessfully !!");
  };

  let role = localStorage.getItem("role");
  // const queryClient = new QueryClient();

  const loginState = localStorage.getItem("isLoggedIn");
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const { userDetails } = useSelector((state) => state.authentication);
  {
    console.log(isLoggedIn && userDetails?.data?.userType, "hiadh");
  }
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      {isLoggedIn == true && (
        <>
          {isLoggedIn && userDetails?.data?.userType == 1 ? (
            <NavBar
              id="admin"
              title="Admin"
              schema={regSchema}
              onSubmit={onSubmit}
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
                  onClick: handleLogoutButton,
                  color: "primary",
                },
              ]}
            />
          ) : isLoggedIn && userDetails?.data?.userType == 0 ? (
            <NavBar
              id="user"
              title="User"
              schema={regSchema}
              onSubmit={onSubmit}
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
                  options: ["One", "Two", "Three"],
                  margin: "10px 0 10px 0",
                },
                {
                  id: "gender",
                  label: "Gender *",
                  selectedOption: "Select Gender",
                  options: ["Male", "Female", "Other"],
                  margin: "10px 0 10px 0",
                },
                {
                  id: "curentStatus",
                  label: "Current Status *",
                  selectedOption: "Current Status",
                  options: [
                    "Undergraduate Student",
                    "Madical Student",
                    "Resident",
                    "Fellow",
                    "Attending",
                    "Other",
                  ],
                  margin: "10px 0 10px 0",
                },
                {
                  id: "currentYear",
                  label: "Current Year Of Medical Traning *",
                  selectedOption: "Current Year Of Medical Traning",
                  options: ["One", "Two", "Three"],
                  margin: "10px 0 10px 0",
                },
                {
                  id: "selectField",
                  label: "Select Your Field *",
                  selectedOption: "Select Your Field",
                  options: ["One", "Two", "Three"],
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
                  onClick: handleLogoutButton,
                  buttonText: "Logout",
                  color: "primary",
                },
              ]}
            />
          ) : null}
        </>
      )}

      <Router />
    </>
  );
}

export default App;
