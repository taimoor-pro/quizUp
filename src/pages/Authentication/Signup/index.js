import React from 'react'
import AuthCard from '../../../components/modules/authentication/authCard'
import * as yup from "yup";

const SignUp = () => {


  const handle = () => {
    console.log('Running');
  }

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
    console.log(value, "sadsaf")
  }

 
  return (
    <AuthCard
      title="Signup"
      id='signup'
      schema={regSchema}
      onSubmit={onSubmit}
      height="80vh"
      width="900px"
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
          id: "passsword",
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
      }}

      select={[
        {
          id: "location",
          label: "Location *",
          selectedOption: "Select Location",
          margin: "10px 0 10px 0"
        },
        {
          id: "gender",
          label: "Gender *",
          selectedOption: "Select Gender",
          margin: "10px 0 10px 0"
        },
        {
          id: "curentStatus",
          label: "Current Status *",
          selectedOption: "Current Status",
          margin: "10px 0 10px 0"
        },
      ]}
      handle={handle}

    />
  )
}

export default SignUp