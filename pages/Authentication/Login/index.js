import React from "react";
import AuthCard from "../../../components/modules/authentication/authCard";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../router/helper";
import { notifyError, notifySuccess } from "../../../utils/toasts";

const Login = (props) => {
  const { onLogin } = props;
  console.log(onLogin);
  // Hooks
  const navigate = useNavigate();

  const handle = () => {
    console.log("Running");
  };

  const regSchema = yup.object().shape({
    email: yup.string().email().required("Please Enter Email!"),
    password: yup.string().min(5).max(10).required("Please Enter Password!"),
  });

  // });
  const onSubmit = (value) => {
    console.log(value, "sadsaf");
    let getUserEmail = localStorage.getItem("stEmail");
    let getUserPass = localStorage.getItem("stPassword");
    let getAdminEmail = localStorage.getItem("adEmail");
    let getAdminPass = localStorage.getItem("adPassword");

    console.log(getUserEmail);

    if (getUserEmail == value.email && getUserPass == value.password) {
      localStorage.setItem("role", "student");
      navigate(routes.USER);
      notifySuccess("Student Login Successfully");
      onLogin();
    } else if (getAdminEmail == value.email && getAdminPass == value.password) {
      localStorage.setItem("role", "admin");
      navigate(routes.ADMIN);
      notifySuccess("Admin Login Successfully");
      onLogin();
    } else {
      notifyError("User Does Not Exist");
    }

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
    <AuthCard
      title="Login"
      id="login"
      schema={regSchema}
      onSubmit={onSubmit}
      height="60vh"
      width="400px"
      type="submit"
      LeftprimaryHeading="Login Your Account"
      remeberMe="Remember Me"
      forgotPass="Forgot Password ?"
      signUp="Not Registered Yet?"
      feildsData={[
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
      ]}
      button={{
        buttonText: "LOG IN",
      }}
      handle={handle}
    />
  );
};

export default Login;
