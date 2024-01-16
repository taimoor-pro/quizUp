import { useState, useRef } from "react";
import uploadIcon from "../../../assets/images/upload.png";
import "./index.css";

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileChange = (event) => {
    // Your file change logic here
    console.log(event.target.files);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll());
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  };

  if (files)
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={() => setFiles(null)}>Cancel</button>
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    );

  return (
    <>
      <div className="mt-5">
        <div
          className="dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <label htmlFor="fileInput">
              <img
                src={uploadIcon}
                alt="Upload Icon"
                style={{ width: "100px", height: "100px", margin: "0" }}
              />
            </label>
            <h2 style={{ color: "white", margin: "0" }}>Dicom Files</h2>
            <p style={{ color: "white", margin: "0" }}>Click here to upload</p>
            <input
              type="file"
              id="fileInput"
              multiple
              onChange={handleFileChange}
              hidden
              accept="image/png, image/jpeg"
              ref={inputRef}
            />
          </div>

          {/* <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "50px",
              marginTop: "40px",
            }}
          >
            <div
              className="dropzoneFiles"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => inputRef.current.click()}
            >
              <h1 style={{ color: "white", fontSize: "20px" }}>
                Drag Folder Here
              </h1>
            </div>
            <div
              className="dropzoneFolders"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => inputRef.current.click()}
            >
              <h1 style={{ color: "white", fontSize: "20px" }}>
                Drag Files Here
              </h1>
            </div>
          </div>

          {/* <button onClick={() => inputRef.current.click()}>Select Files</button> */}
        </div>
      </div>
    </>
  );
};

export default DragDropFiles;
