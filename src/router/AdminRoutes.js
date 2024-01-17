// AdminRoutes.js
import React, { lazy } from "react";
import { Route } from "react-router-dom";
import { routes } from "./helper";

const AdminRoutes = () => {
  
  const Admin = lazy(() => import("../pages/Admin"));
  const GeneralFeedback = lazy(() => import("../pages/GeneralFeedback"));
  const WorkList = lazy(() => import("../pages/WorkList"));
  const StudentResultList = lazy(() => import("../pages/StudentResultList"));
  const AdminGradedReport = lazy(() => import("../pages/AdminGradedReport"));

  return (
    <>
      <Route path={routes.ADMIN} element={<Admin />} />
      <Route path={routes.CREATE_CASE} element={<Admin />} />

      <Route path={routes.SURVEYS} element={<GeneralFeedback />} />
      <Route path={routes.ADMIN_GRADED} element={<AdminGradedReport />} />
      <Route path={routes.STUDENT_RESULT} element={<StudentResultList />} />

      {/* Wrap the following components in Route or React.Fragment */}
      <Route path={routes.WORK_LIST} element={<WorkList />} />
      <Route path={routes.VIEWVER} element={<WorkList />} />
    </>
  );
};

export default AdminRoutes;
