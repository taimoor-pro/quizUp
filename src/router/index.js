import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./helper";

import Protected from "./Protected";
import RatingStar from "../components/elements/rating";
import { useSelector } from "react-redux";

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
const AdminGradedReport = lazy(() => import("../pages/AdminGradedReport"));
const ResultView = lazy(() => import("../pages/ResultView"));

const Router = (props) => {
  // const { isLoggedIn } = props;

  let role = localStorage.getItem("role");
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const { userDetails } = useSelector((state) => state.authentication);
  console.log("isLoggedIn", userDetails);
  return (
    <>
      {console.log("Royutes 1", routes)}
      <Routes>
        {/* Public Routes */}

        {isLoggedIn && userDetails?.data?.userType ? (
          <>
            {userDetails?.data?.userType == 1 && (
              <Route path="/" element={<Admin />} />
            )}
            {userDetails?.data?.userType === 0 && (
              <>
                <Route path="/" element={<User />} />
              </>
            )}
          </>
        ) : (
          <Route path={routes.HOME} element={<Login />} />
        )}

        <Route path={routes.FORGOT_PASSWORD} element={<ChangePassword />} />
        <Route path={routes.SIGNUP} element={<SignUp />} />

        {/* Protected Routes */}
        <Route element={<Protected isLoggedIn={isLoggedIn} />}>
          {/* Role Auth */}
          {userDetails?.data?.userType == 1 && (
            <>
              {console.log("Royutes 2", routes)}
              <Route path={routes.ADMIN} element={<Admin />} />
              <Route path={routes.CREATE_CASE} element={<Admin />} />

              <Route path={routes.SURVEYS} element={<GeneralFeedback />} />
              <Route
                path={routes.ADMIN_GRADED}
                element={<AdminGradedReport />}
              />
              <Route
                path={routes.STUDENT_RESULT}
                element={<StudentResultList />}
              />

              <Route path={routes.WORK_LIST} element={<WorkList />} />
              <Route path={routes.VIEWVER} element={<WorkList />} />
            </>
          )}
          {userDetails?.data?.userType == 0 && (
            <>
              <Route path={routes.USER} element={<User />} />
              <Route path={routes.WORK_LIST} element={<WorkList />} />
              <Route path={routes.STUDENT_PAPER} element={<StudentPaper />} />
              <Route path={routes.RESULT_VIEW} element={<ResultView />} />

              {/* Comment Routs */}
              <Route
                path={routes.COMMENT_FEEDBACK}
                element={
                  <CommentFeedback
                    id="comments"
                    type="submit"
                    container="container"
                    title1="Comment Feedback"
                    title2="(Optional)"
                    design={true}
                    desription1="Found an error? Have a suggestion?"
                    description2="Fill out the form below"
                    placeholder="Enter Your Feedback here"
                    heightt="30vh"
                    buttons={[
                      { button: "SKIP" },
                      { button: "SEND FEEDBACK", margin: "0 0 0 -60px" },
                    ]}
                  />
                }
              />

              {/* Servey */}
              <Route
                path={routes.SURVEY}
                element={
                  <CommentFeedback
                    id="survey"
                    container="container"
                    title1="Paper Survey !:)"
                    design={true}
                    heightt="20vh"
                    questions={[
                      {
                        id: "q1",
                        question:
                          "1) Have you experienced any technical issues?",
                        options: ["Yes", "No"],
                      },
                      {
                        id: "q2",
                        question:
                          "2) If you have experienced technical issues, please describe here?",
                        type: "textarea",
                        placeholder: "Write your answer",
                      },
                      {
                        id: "q3",
                        question:
                          "3) How would you rate this as a learning tool?",
                        rating: <RatingStar />,
                      },
                      {
                        id: "q4",
                        question:
                          "4) Would you recmmend this as a useful learning tool for other trainers?",
                        options: ["Yes", "No"],
                      },
                      {
                        id: "q5",
                        question:
                          "5) Please leave any comments or feedback here?",
                        type: "textarea",
                        placeholder: "Write your answer",
                      },
                    ]}
                    buttons={[{ button: "SUBMIT", margin: "0 0 0 -70px" }]}
                  />
                }
              />
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
