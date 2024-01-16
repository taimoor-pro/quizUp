  import React from "react";
  import * as yup from "yup";
  import DragDropFiles from "../../elements/dragDrop";
  import CommentFeedback from "../../../pages/CommentFeedback";

  const CreateCase = () => {
    const titleAndCommentScema = yup.object().shape({
      title: yup.string().required("Please Enter Title!"),
      note: yup.string().required("Please Enter Comment!"),
    });


    const onSubmit = (values) => {
      console.log("CreateCase Form Values:", values);
    };

    return (

      <>
        <CommentFeedback onSubmitVal={onSubmit} id="updload" nameOf="title" otherFormSchema={titleAndCommentScema} widtth="50%" height="20vh" desription1="Title" title1="Upload Case" placeholder="Enter the case Title" design={false} />

        <div className="d-flex justify-content-center align-items-center flex-column">
          <DragDropFiles />
        </div>

        <CommentFeedback onSubmitVal={onSubmit} nameOf="note" otherFormSchema={titleAndCommentScema} id="updload" widtth="50%" height="20vh" desription1="Note" placeholder="Comments" design={false} buttons={[
          { button: "Upload", bgColor: "#8b003a", margin: "0 0 0 -195px" }
        ]} />
      </>
    );
  };

  export default CreateCase;
