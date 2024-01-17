// UserRoutes.js
import React, { lazy } from "react";
import { Route } from "react-router-dom";
import RatingStar from "../components/elements/rating";
import { routes } from "./helper";

const UserRoutes = () => {
  const User = lazy(() => import("../pages/User"));
  const WorkList = lazy(() => import("../pages/WorkList"));
  const StudentPaper = lazy(() => import("../pages/StudentPaper"));
  const CommentFeedback = lazy(() => import("../pages/CommentFeedback"));
  const ResultView = lazy(() => import("../pages/ResultView"));
  const commentFeedbackProps = {
    id: "comments",
    type: "submit",
    container: "container",
    title1: "Comment Feedback",
    title2: "(Optional)",
    design: true,
    desription1: "Found an error? Have a suggestion?",
    description2: "Fill out the form below",
    placeholder: "Enter Your Feedback here",
    heightt: "30vh",
    buttons: [
      { button: "SKIP" },
      { button: "SEND FEEDBACK", margin: "0 0 0 -60px" },
    ],
  };

  const surveyProps = {
    id: "survey",
    container: "container",
    title1: "Paper Survey !:)",
    design: true,
    heightt: "20vh",
    questions: [
      {
        id: "q1",
        question: "1) Have you experienced any technical issues?",
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
        question: "3) How would you rate this as a learning tool?",
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
        question: "5) Please leave any comments or feedback here?",
        type: "textarea",
        placeholder: "Write your answer",
      },
    ],
    buttons: [{ button: "SUBMIT", margin: "0 0 0 -70px" }],
  };
  
  return (
    <>
      <Route path={routes.USER} element={<User />} />
      <Route path={routes.WORK_LIST} element={<WorkList />} />
      <Route path={routes.STUDENT_PAPER} element={<StudentPaper />} />
      <Route path={routes.RESULT_VIEW} element={<ResultView />} />

      {/* Comment Routes */}
      <Route
        path={routes.COMMENT_FEEDBACK}
        element={<CommentFeedback {...commentFeedbackProps} />}
      />

      {/* Survey Route */}
      <Route
        path={routes.SURVEY}
        element={<CommentFeedback {...surveyProps} />}
      />
    </>
  );
};

export default UserRoutes;
