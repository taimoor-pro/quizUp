import React, { useState } from "react";
import { Modal } from "antd";
import AuthCard from "../authentication/authCard";
import * as yup from "yup";
import Button from "../../elements/button";
import Heading from "../../elements/heading";
import HorizontalLine from "../../elements/horizontalLine";

export const ModalComponent = ({ openModal, setOpenModal }) => {
  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };
  const regSchema = yup.object().shape({
    firstname: yup.string().required("Please Enter First name!"),
    lastname: yup.string().required("Please Enter Last name!"),
    gender: yup.string().required("Please Select Gender!"),
    roles: yup.string().required("Please Select Roles!"),
    email: yup.string().email().required("Please Enter Email!"),
    password: yup.string().min(5).max(10).required("Please Enter Password!"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

  // });
  const onSubmit = (value) => {
    console.log(value, "sadsaf");
    //nevigate("/admin");
    // console.log(value)
    //   const existedEmail = data.filter((item) => item.email === value.email);
    //   if (existedEmail.length > 0) {
    //     toast.error("User Already Exist!");
    //   } else {
    //     let date = new  Date().toISOString().slice(0, 10);

    //     Object.assign(value, { id: shortid.generate() });
    //     Object.assign(value, { createdAt: date });

    //     if (dispatch(addUser(value))) {
    //       toast.success("User Created Successfully!");
    //       navigate("/user");
    //     }
    //   }
  };

  return (
    <>
      <Modal
        title={
          <Heading
            textColor="#3a3a3a"
            title={"Update Profile"}
            fontSize={18}
            fontFamily="Poppins , sans-serif"
            marginRight="325px"
            fontWeight="bold"
          />
        }
        // width={400}
        open={openModal} // Change from open to visible
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            backgroundColor={"rgb(139, 0, 58)"}
            title={"Update"}
            borderRadius="5px"
            width={85}
            marginLeft="390px"
            textColor={"white"}
          />,
        ]}
      >
        <HorizontalLine marginTop="20px" />
        <AuthCard
          id="Modal"
          //schema={regSchema}
          onSubmit={onSubmit}
          height="30vh"
          width="400px"
          backgroundColor="white"
          //type="submit"
          //   LeftprimaryHeading="Login Your Account"
          //   remeberMe="Remember Me"
          //   forgotPass="Forgot Password ?"
          //   signUp="Not Registered Yet?"
          feildsData={[
            {
              id: "username",
              type: "text",
              label: "Username *",
              color: "#21252",
              placeholder: "Enter Your username",
              margin: "10px 0 10px 0",
            },

            {
              id: "ModalField",
              type: "password",
              label: "Password *",
              placeholder: "Enter Your Password",
              margin: "10px 0 10px 0",
              color: "#21252",
            },
            {
              id: "email",
              type: "text",
              label: "Email*",
              color: "black",
              placeholder: "Enter Your user Email",
              margin: "10px 0 10px 0",
            },
          ]}
          //   button={{
          //     buttonText: "LOG IN",
          //   }}

          //handle={handle}
        />
        <HorizontalLine marginTop="50px" />
      </Modal>
    </>
  );
};

//export default ModalComponent;
