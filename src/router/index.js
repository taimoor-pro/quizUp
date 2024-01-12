import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./helper";

import Protected from "./Protected";

const NotFound = lazy(() => import("../pages/NotFound"));
const Login = lazy(() => import("../pages/Authentication/Login"));
const SignUp = lazy(() => import("../pages/Authentication/Signup"));
const ChangePassword = lazy(() =>
  import("../pages/Authentication/ChangePassword")
);
const Admin = lazy(() => import("../pages/Admin"));
const User = lazy(() => import("../pages/User"));
const GeneralFeedback = lazy(() => import("../pages/GeneralFeedback"));
const WorkList = lazy(() => import("../pages/WorkList"));
const StudentResultList = lazy(() => import("../pages/StudentResultList"));
const StudentPaper = lazy(() => import("../pages/StudentPaper"));
const CommentFeedback = lazy(() => import("../pages/CommentFeedback"));

const Router = (props) => {
  const { isLoggedIn, onLogin } = props;
  let role = localStorage.getItem("role");
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path={routes.SIGNUP} element={<SignUp />} />
        <Route path={routes.HOME} element={<Login onLogin={onLogin} />} />
        <Route path={routes.FORGOT_PASSWORD} element={<ChangePassword />} />

        {/* Protected Routes */}
        <Route element={<Protected isLoggedIn={isLoggedIn} />}>
          {/* Role Auth */}
          {role === "admin" && (
            <>
              <Route path={routes.ADMIN} element={<Admin />} />
              <Route path={routes.CREATE_CASE} element={<Admin />} />

              <Route path={routes.SURVEYS} element={<GeneralFeedback />} />
              <Route
                path={routes.STUDENT_RESULT}
                element={<StudentResultList />}
              />


              <Route path={routes.WORK_LIST} element={<WorkList />} />
              <Route path={routes.VIEWVER} element={<WorkList />} />
            </>
          )}
          {role === "student" && (
            <>
              <Route path={routes.USER} element={<User />} />
              <Route
                path={routes.COMMENT_FEEDBACK}
                element={<CommentFeedback />}
              />
              <Route path={routes.WORK_LIST} element={<WorkList />} />
              <Route path={routes.STUDENT_PAPER} element={<StudentPaper />} />
              <Route path={routes.SURVEY} element={<WorkList />} />
            </>
          )}
          {role !== "admin" && role !== "student" && (
            <Route path="*" element={<NotFound />} />
          )}
        </Route>
      </Routes>
    </>
  );
};

export default Router;
