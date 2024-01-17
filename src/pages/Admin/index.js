import React from "react";
import { useState } from "react";
import CreateCase from "../../components/modules/CreateCase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import { handleLogout } from "../../redux/reducers/Authentication";
import NavBar from "../../components/modules/Navbar";
import * as yup from "yup";

const Admin = () => {
  const [openModal, setOpenModal] = useState(false);

  const regSchema = yup.object().shape({
    username: yup.string().required("Please Enter username!"),
    password: yup.string().min(5).max(10).required("Please Enter Password!"),
    email: yup.string().email().required("Please Enter Email!"),
    age: yup.string().required("Please Enter age!"),
    location: yup.string().required("Please Select Location!"),
    gender: yup.string().required("Please Select Gender!"),
    curentStatus: yup.string().required("Please Select Current Status!"),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = () => {
    navigate("/signup");
  };

  const onSubmit = () => {
    setOpenModal(!openModal);
    console.log(openModal, "openModalooooooo");
  };

  const handleProfileClick = () => {
    setOpenModal(!openModal);
  };


  // Function to handle logout
  const handleLogoutButton = () => {
    dispatch && dispatch(handleLogout());
    navigate("/");
    toast.success("Logout Sucessfully !!");
  };

  // const { isLoggedIn } = useSelector((state) => state.authentication);
  // const { userDetails } = useSelector((state) => state.authentication);

  return (
    <>
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
      <CreateCase />
    </>
  );
};

export default Admin;
