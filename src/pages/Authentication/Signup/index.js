import React from 'react'
import AuthCard from '../../../components/modules/authentication/authCard'
import * as yup from "yup";
import HorizontalLine from '../../../components/elements/horizontalLine';

const SignUp = () => {


  const handle = () => {
    console.log('Running');
  }

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

  // });
  const onSubmit = (value) => {
    console.log(value, "sadsaf")
  }


  return (

    <>
      <HorizontalLine
        title="Signup"
        marginTop="80px"
        borderTop="2px solid white"
        width="100%"
        id="signup"
      />
      <AuthCard
        title="Signup"
        id='signup'
        schema={regSchema}
        onSubmit={onSubmit}
        height="100vh"
        width="1100px"
        fontSize="50px"
        padding="10px"
        boxShadow="0px 0px 40px #555555"
        margin="40px 0 20px 0"
        LeftprimaryHeading="Sign Up"
        feildsData={[
          {
            id: "username",
            type: "text",
            label: "Username *",
            placeholder: "Enter username",
            margin: "10px 0 10px 0"
          },

          {
            id: "password",
            type: "password",
            label: "Password *",
            placeholder: "Enter Your Password",
            margin: "10px 0 10px 0"
          },
          {
            id: "email",
            type: "email",
            label: "Email *",
            placeholder: "Enter Email",
            margin: "10px 0 10px 0"
          },
          {
            id: "age",
            type: "number",
            label: "Age *",
            placeholder: "Enter Your Age",
            margin: "10px 0 10px 0"
          },

        ]}
        button={{
          buttonText: "SIGN UP NOW",
          padding: "15px 0",
          margin:"-20px 0 40px 0"
        }}

        select={[
          {
            id: "location",
            label: "Location *",
            selectedOption: "Select Location",
            margin: "10px 0 10px 0",
            options: ["One", "Two", "Three"]
          },
          {
            id: "gender",
            label: "Gender *",
            selectedOption: "Select Gender",
            margin: "10px 0 10px 0",
            options: ["Male", "Female", "Other"]
          },
          {
            id: "curentStatus",
            label: "Current Status *",
            selectedOption: "Current Status",
            margin: "10px 0 10px 0",
            options: ["Undergraduate Student", "Madical Student", "Resident", "Fellow", "Attending", "Other"]
          },
        ]}
        handle={handle}

      />
    </>

  )
}

export default SignUp