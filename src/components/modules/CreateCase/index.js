import React from "react";

import FieldBar from "../../elements/FieldBar";
import DragDropFiles from "../../elements/dragDrop";
import TextArea from "../../elements/textArea";

const CreateCase = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">

      <FieldBar />
      <DragDropFiles />
      <TextArea />

    </div>
  );
};

export default CreateCase;
