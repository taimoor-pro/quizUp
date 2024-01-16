import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { FormLabel } from "react-bootstrap";
import Select from "../../elements/select";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Label from "../../elements/label";
import * as yup from "yup";

// Schemas 
const studentSchema = yup.object().shape({
  comment: yup.string().required("Please Enter Comment!"),
});


const adminSchema = yup.object().shape({
  comment: yup.string().required("Please Enter Comment!"),
});

function ProfileModal({
  show,
  handleClose,
  title,
  inputFeildsData,
  select,
  id,
  schema,
}) {
  const [validated, setValidated] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handle = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  console.log("idid", id);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const getColumnClass = () => {
    if (id === "user") {
      return "col-md-6";
    }
    return "col-md-12";
  };



  const getSchema = () => {
    switch (id) {
      case "admin":
        return adminSchema;
      case "user":
        return studentSchema;
      default:
        return null;
    }
  };



  const selectedSchema = getSchema();

  const { handleSubmit, formState: { errors }, control } = useForm({
    resolver: selectedSchema ? yupResolver(selectedSchema) : undefined,
  });


  const onSubmit = async (values, e) => {
    try {

      console.log("Submitted values:", values);



      handleClose();
    } catch (error) {

      console.error("Submission error:", error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Row className="mb-3">
              {inputFeildsData?.map((field) => {
                return (
                  <Form.Group
                    as={Col}
                    md="6"
                    className="mt-2"
                    controlId={`validationCustom${field.label}`}
                    key={field.label}
                  >
                    <Form.Label>{field.label}</Form.Label>
                    <InputGroup className="mb-3">
                   
                      <Form.Control
                        placeholder={field.placeholder}
                        aria-label={field.label}
                        aria-describedby="basic-addon1"
                        required
                        type={
                          field.type === "password"
                            ? passwordVisible
                              ? "text"
                              : "password"
                            : field.type
                        }
                        defaultValue={field.defaultValue}
                        disabled={field.type === "email" && true}
                      />
                      {field.type === "password" && (
                        <InputGroup.Text
                          style={{ cursor: "pointer" }}
                          id="basic-addon1"
                          onClick={togglePasswordVisibility}
                        >
                          {passwordVisible ? "👁️" : "👁️‍🗨️"}
                        </InputGroup.Text>
                      )}
                    </InputGroup>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                );
              })}

              {select?.map((item) => (
                <Controller
                  key={item.id} // Add a unique key for each mapped item
                  name={item.id}
                  control={control}
                  render={({ field }) => (
                    <div className={getColumnClass()}>
                      <Label
                        fontWeight="normal"
                        fontSize="16px"
                        color="black"
                        text={item.label}
                      />
                      <Select
                        selected={item.selectedOption}
                        margin={item.margin}
                        bgColor="white"
                      />
                    </div>
                  )}
                />
              ))}
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button type="submit" variant="#8b003a" onClick={handleClose}>
            Update
          </Button> */}

          <Button
            type="submit"
            variant="#8b003a"
            onClick={handleClose}
            style={{
              backgroundColor: "#8b003a",
              color: "white",
              fontWeight: 400,
            }}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfileModal;
