import _ from "lodash";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import { endpoints } from "../endpoints";
import { handleLogin } from "../../redux/reducers/Authentication";
import { routes } from "../../router/helper";

export const getAdminCaseList = () => {
  return endpoints
    .getAdminCaseList()
    .then((res) => {
      if (res.status === 200) {
        console.log("Successfully !!", res);
        return res.data;
      }
    })
    .catch((err) => {
      console.log("Error message", err);
    });
};

export const useLoginMutation = (dispatch, setData, nevigate) => {
  return useMutation(async (credentials) => {
    const { email, password } = credentials;

    const data = {
      email: email,
      password: password,
    };

    const res = await endpoints.login(data);
    if (res.data.msg == null && res.status === 200) {
      toast.success("Login Successfully!! 😍");
      console.log(res.data, "data");
      setData(res.data);
      dispatch && dispatch(handleLogin(res.data));
      if (res?.data?.userType == "user") {
        nevigate(routes.USER);
      }
      if (res?.data?.userType == "admin") {
        nevigate(routes.USER);
      }
      return res.data;
    } else if (res.data.status === 400) {
      console.log("res.data.message", res.data.msg);
      toast.error(`${res.data.message} 😒`);
      throw new Error(res.data.message);
    } else {
      toast.error("Invalid username or password. 😒");
      throw new Error("Invalid username or password. 😒");
    }
  });
};

// export const login = async (dispatch, setData, payload, route) => {
//   let { email, password } = payload;
//   let data = {
//     name: email,
//     pass: password,
//   };

//   await endpoints
//     .login(data)
//     .then((res) => {
//       if (res.status === 200) {
//         toast(res.data.message, { type: "success" });
//         dispatch && dispatch(setData(res.data));
//         window.location.assign(route);
//       } else if (res.data.status === 400) {
//         toast(res.data.message, { type: "error" });
//       } else {
//         toast("Invalid username or password.", { type: "error" });
//       }
//     })
//     .catch((err) => {
//       console.log("Error message", err);
//       toast("Something went wrong.", { type: "error" });
//     });

//   // await endpoints
//   //   .otp({ type: "verify", username: email })
//   //   .then(async (res) => {
//   //     if (res.status === 200) {
//   //       if (res.data.status === 200) {
//   //         let token = await endpoints
//   //           .getCRSFToken()
//   //           .then((res) => {
//   //             if (res.status === 200) {
//   //               return res.data;
//   //             }
//   //           })
//   //           .catch((err) => {
//   //             console.log("Error message", err);
//   //           });

//   //         // let headers = {
//   //         //   "Content-Type": "application/json",
//   //         //   "X-CSRF-Token": token,
//   //         //   Accept: "application/json",
//   //         // };

//   //         await endpoints
//   //           .login(data)
//   //           .then((res) => {
//   //             if (res.status === 200) {
//   //               toast(res.data.message, { type: "success" });
//   //               dispatch && dispatch(setData(res.data));
//   //               window.location.assign(route);
//   //             } else if (res.data.status === 400) {
//   //               toast(res.data.message, { type: "error" });
//   //             } else {
//   //               toast("Invalid username or password.", { type: "error" });
//   //             }
//   //           })
//   //           .catch((err) => {
//   //             console.log("Error message", err);
//   //             toast("Something went wrong.", { type: "error" });
//   //           });
//   //       } else {
//   //         toast(res.data.message, { type: "error" });
//   //       }
//   //     }
//   //   })
//   //   .catch((err) => {
//   //     console.log("Error message", err);
//   //   });
// };

// export const register = async (navigate, route, setLoading, payload) => {
//   setLoading(true);

//   let { email, password, reEmail, name } = payload;
//   let data = {
//     name,
//     email,
//     conf_email: reEmail,
//     passw: password,
//     ipaddress: "192.168.0.222",
//   };

//   let headers = {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   };

//   await endpoints
//     .register(data, headers)
//     .then((res) => {
//       if (res.data.status === 200) {
//         navigate(route, { replace: true });
//         toast(res.data.message, { type: "success" });
//       } else {
//         toast(res.data.message, { type: "error" });
//       }
//       setLoading(false);
//     })
//     .catch((err) => {
//       setLoading(false);
//       console.log("Error message", err);
//       toast(err.message, { type: "error" });
//     });
// };
