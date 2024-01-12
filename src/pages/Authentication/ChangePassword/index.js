import React from 'react'
import AuthCard from '../../../components/modules/authentication/authCard'
import * as yup from "yup";

const ChangePassword = () => {

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
  }
  return (
    <>
      <AuthCard
        title="Reset Password"
        id='changePass'
        schema={regSchema}
        onSubmit={onSubmit}
        LeftprimaryHeading="Reset Password"
        height = "40vh"
        width = "800px"
        feildsData={[


          {
            id: "email",
            type: "email",
            label: "Email *",
            placeholder: "Enter Your Email",
            margin: "10px 0 10px 0"
          },


          // {
          //   id: "role",
          //   type: "select",
          //   label: "Role",
          //   Select: [
          //     { text: "Admin", value: "Admin" },
          //     { text: "User", value: "User" },
          //     { text: "Viewer", value: "Viewer" }
          //   ],
          // },


        ]}
        button={{
          buttonText: "RESET PROJECT",
        }}



        handle={handle}

      />
    </>
  )
}

export default ChangePassword