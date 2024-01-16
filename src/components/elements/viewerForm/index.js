import React from "react";

const ViewerForm = ({ width, height, backgroundColor, color, marginTop }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        width: width ? width : "40vh",
        height: height ? height : "70vh",
        marginTop: marginTop ? marginTop : "10px",
        backgroundColor: backgroundColor ? backgroundColor : "black",
        margin: "auto", // Center the form
        textAlign: "center", // Center the text inside the form
      }}
    >
      <form style={{ marginTop: "30px", marginLeft: "60px" }}>
        <h2 style={{ color: color ? color : "white", marginLeft: "-150px" }}>
          Biology
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h2 style={{ color: color ? color : "white", fontSize: "18px" }}>
            FLUID
          </h2>

          <label
            htmlFor="fluidQuestion1"
            style={{ color: color ? color : "white" }}
          >
            Joint effusion:
          </label>
          <div style={{ marginTop: "15px" }}>
            <input
              type="radio"
              id="normal"
              name="fluidQuestion1"
              style={{ color: "white" }}
            />
            <label htmlFor="normal" style={{ color: color ? color : "white" }}>
              Normal
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="fracture"
              name="fluidQuestion1"
              style={{ color: "white" }}
            />
            <label
              htmlFor="fracture"
              style={{ color: color ? color : "white" }}
            >
              Fracture
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="boneMarrowEdema"
              name="fluidQuestion1"
              style={{ color: "white" }}
            />
            <label
              htmlFor="boneMarrowEdema"
              style={{ color: color ? color : "white" }}
            >
              Bone marrow edema
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="marrowReplacingLesion"
              name="fluidQuestion1"
              style={{ color: "white" }}
            />
            <label
              htmlFor="marrowReplacingLesion"
              style={{ color: color ? color : "white" }}
            >
              Marrow replacing lesion/malignancy
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="osteonecrosis"
              name="fluidQuestion1"
              style={{ color: "white" }}
            />
            <label
              htmlFor="osteonecrosis"
              style={{ color: color ? color : "white" }}
            >
              Osteonecrosis
            </label>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <label
            htmlFor="fluidQuestion2"
            style={{ color: color ? color : "white" }}
          >
            Question 2 Baker cyst:
          </label>
          <div style={{ marginTop: "10px" }}>
            <input
              type="radio"
              id="small"
              name="fluidQuestion2"
              style={{ color: "white" }}
            />
            <label htmlFor="small" style={{ color: color ? color : "white" }}>
              Small
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="moderate"
              name="fluidQuestion2"
              style={{ color: "white" }}
            />
            <label
              htmlFor="moderate"
              style={{ color: color ? color : "white" }}
            >
              Moderate
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="large"
              name="fluidQuestion2"
              style={{ color: "white" }}
            />
            <label htmlFor="large" style={{ color: color ? color : "white" }}>
              Large
            </label>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h2 style={{ color: color ? color : "white", fontSize: "18px" }}>
            FLUID
          </h2>

          <label
            htmlFor="fluidQuestion1"
            style={{ color: color ? color : "white" }}
          >
            Joint effusion:
          </label>
          <div style={{ marginTop: "15px" }}>
            <input
              type="radio"
              id="normal"
              name="fluidQuestion1"
              style={{ color: "white" }}
            />
            <label htmlFor="normal" style={{ color: color ? color : "white" }}>
              Normal
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="fracture"
              name="fluidQuestion1"
              style={{ color: "white" }}
            />
            <label
              htmlFor="fracture"
              style={{ color: color ? color : "white" }}
            >
              Fracture
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="boneMarrowEdema"
              name="fluidQuestion1"
              style={{ color: "white" }}
            />
            <label
              htmlFor="boneMarrowEdema"
              style={{ color: color ? color : "white" }}
            >
              Bone marrow edema
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="marrowReplacingLesion"
              name="fluidQuestion1"
              style={{ color: "white" }}
            />
            <label
              htmlFor="marrowReplacingLesion"
              style={{ color: color ? color : "white" }}
            >
              Marrow replacing lesion/malignancy
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="osteonecrosis"
              name="fluidQuestion1"
              style={{ color: "white" }}
            />
            <label
              htmlFor="osteonecrosis"
              style={{ color: color ? color : "white" }}
            >
              Osteonecrosis
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ViewerForm;
