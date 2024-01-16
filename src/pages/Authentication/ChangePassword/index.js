import React from 'react'
import AuthCard from '../../../components/modules/authentication/authCard'
import * as yup from "yup";
import HorizontalLine from '../../../components/elements/horizontalLine';

const ChangePassword = () => {

  const handle = () => {
    console.log('Running');
  }

  const regSchema = yup.object().shape({
    email: yup.string().required("Please Enter a valid email!")
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
      <HorizontalLine
        title="Reset"
        marginTop="80px"
        marginLeft="100px"
        borderTop="2px solid white"
        width="100%"
        id="login"
      />
      <AuthCard
        title="Reset Password"
        id='changePass'
        schema={regSchema}
        onSubmit={onSubmit}
        LeftprimaryHeading="Reset Password"
        // height="70vh"
        padding="10px"
        margin="40px 0 0 0"
        fontSize="50px"
        width="800px"
        feildsData={[


          {
            id: "email",
            type: "email",
            label: "Email *",
            placeholder: "Enter Your Email",
            margin: "10px 0 10px 0"
          },

        ]}
        button={{
          buttonText: "RESET PROJECT",
          padding: "10px 0",
          width: "60%",
          margin: "-20px 0 20px 0"
        }}



        handle={handle}

      />
    </>
  )
}

export default ChangePassword