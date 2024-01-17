import React, { useState } from "react";
import DataTable from "../../components/modules/DataTable";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import * as yup from "yup";
import NavBar from "../../components/modules/Navbar";
import { useDispatch } from "react-redux";
import { handleLogout } from "../../redux/reducers/Authentication";

const User = () => {
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const regSchema = yup.object().shape({
    username: yup.string().required("Please Enter username!"),
    password: yup.string().min(5).max(10).required("Please Enter Password!"),
    email: yup.string().email().required("Please Enter Email!"),
    age: yup.string().required("Please Enter age!"),
    location: yup.string().required("Please Select Location!"),
    gender: yup.string().required("Please Select Gender!"),
    curentStatus: yup.string().required("Please Select Current Status!"),
  });


  const onSubmit = () => {
    setOpenModal(!openModal);
    console.log(openModal, "openModalooooooo");
  };

  const handleProfileClick = () => {
    setOpenModal(!openModal);
  };
  const dispatch = useDispatch();
  // Function to handle logout
  const handleLogoutButton = () => {
    dispatch && dispatch(handleLogout());
    navigate("/");
    toast.success("Logout Sucessfully !!");
  };

  return (
    <>
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

      <DataTable
        id="workList"
        MainHeading="WorkList"
        placeholder="Search Cases Here"
        tableHeading={[
          {
            heading: "Case Number",
          },
          {
            heading: "Case Title",
          },
          {
            heading: "Note",
          },
          {
            heading: "Date",
          },

          {
            heading: "Actions",
          },
          {
            heading: "Status",
          },
        ]}
      />
    </>
  );
};

export default User;
