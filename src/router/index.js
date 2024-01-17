// Router.js
import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Protected from "./Protected";
import { routes } from "./helper";
import UserRoutes from "./UserRoutes";
import { useAuth } from "../hooks/useAuth";
import AdminRoutes from "./AdminRoutes";

const Router = () => {
  const { isLoggedIn, userDetails } = useAuth();
  const NotFound = lazy(() => import("../pages/NotFound"));
  const Login = lazy(() => import("../pages/Authentication/Login"));
  const SignUp = lazy(() => import("../pages/Authentication/Signup"));
  const ChangePassword = lazy(() =>
    import("../pages/Authentication/ChangePassword")
  );
  return (
    <Routes>
      {/* Public Routes */}
      {isLoggedIn && userDetails?.userType ? (
        <>
          {userDetails?.userType === "admin" && <AdminRoutes />}
          {userDetails?.userType === "user" && <UserRoutes />}
        </>
      ) : (
        <Route path={routes.HOME} element={<Login />} />
      )}

      <Route path={routes.FORGOT_PASSWORD} element={<ChangePassword />} />
      <Route path={routes.SIGNUP} element={<SignUp />} />

      {/* Protected Routes */}
      <Route path="*" element={<Protected isLoggedIn={isLoggedIn} />}>
        {/* Fallback for unknown roles */}
        {userDetails?.userType !== "admin" &&
          userDetails?.userType !== "student" && (
            <Route path="*" element={<NotFound />} />
          )}
      </Route>
    </Routes>
  );
};

export default Router;
