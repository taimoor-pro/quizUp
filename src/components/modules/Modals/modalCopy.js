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
import { render } from "@testing-library/react";
import { Input } from "reactstrap";

function ProfileModal({
  show,
  handleClose,
  title,
  inputFeildsData,
  select,
  id,
  schema,
  onSubmit,
}) {
  const [validated, setValidated] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handle = (event) => {
    console.log("Tsandiasbcsiouo");
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const getColumnClass = () => {
    if (id === "user") {
      return "col-md-6";
    }
    return "col-md-12";
  };
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("Onsubiuascsa", onSubmit);

  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            noValidate
            //validated={validated}
            // onSubmit={handleSubmit(onSubmit)}
            onSubmit={(e) => {
              e.preventDefault(); // Prevent the default form submission
              handleSubmit(onSubmit); // Call the onSubmit function
            }}
            //onHide={handleClose}
          >
            <Row className="mb-3">
              {inputFeildsData?.map((fields) => {
                return (
                  <>
                    {/* // <Form.Group
                  //   as={Col}
                  //   md="6"
                  //   className="mt-2"
                  //   controlId={`validationCustom${fields.label}`}
                  //   key={fields.label}
                  // >
                    // <Form.Label>{fields.label}</Form.Label>
                    // <InputGroup className="mb-3">
                      // <InputGroup className="mb-3"> */}
                    <Controller
                      key={fields?.id}
                      name={fields?.id}
                      control={control}
                      render={({ field }) => (
                        <>
                          <input
                            type={
                              fields.type === "password"
                                ? passwordVisible
                                  ? "text"
                                  : "password"
                                : fields.type
                            }
                            placeholder={fields.placeholder}
                            value={fields.value}
                            {...field}
                            //value={fields?.value}
                            // aria-label={fields.label}
                            // aria-describedby="basic-addon1"
                            //disabled={fields.type === "email" && true}
                          />

                          {errors[field?.id] && (
                            <p
                              className="m-0 pt-1 fw-bold"
                              style={{
                                color: "#D24545",
                                width: "100%",
                              }}
                            >
                              {errors[field?.id].message}
                            </p>
                          )}
                        </>
                      )}
                    />
                    {/* {fields.type === "password" && (
                      <InputGroup.Text
                        style={{ cursor: "pointer" }}
                        id="basic-addon1"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? "👁️" : "👁️‍🗨️"}
                      </InputGroup.Text>
                    )} */}
                    {/* </InputGroup> */}
                    {/* </InputGroup> */}
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    {/* // {errors[fields.id] && (
                    //   <p
                    //     className="m-0 pt-1 fw-bold"
                    //     style={{
                    //       color: "#D24545",
                    //       width: "100%",
                    //     }}
                    //   >
                    //     {errors[fields.id].message}
                    //   </p>
                    // )}
                  //  </Form.Group> */}
                  </>
                );
              })}

              {select?.map((item) => {
                return (
                  <div className={getColumnClass()}>
                    <Label
                      fontWeight="normal"
                      fontSize="16px"
                      color="black"
                      text={item.label}
                    />
                    <Controller
                      key={item.id}
                      name={item.id}
                      control={control}
                      render={({ field }) => (
                        <>
                          <Select
                            field={field}
                            selected={item.selectedOption}
                            margin={item.margin}
                            bgColor="white"
                          />
                          {errors[item.id] && (
                            <p
                              className="m-0 pt-1 fw-bold"
                              style={{
                                color: "#D24545",
                                width: "100%",
                              }}
                            >
                              {errors[item.id].message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  </div>
                );
              })}
            </Row>

            <Button
              type="submit"
              variant="#8b003a"
              //onClick={handleSubmit(onSubmit)}
              style={{
                backgroundColor: "#8b003a",
                color: "white",
                fontWeight: 400,
              }}
            >
              Update
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button type="submit" variant="#8b003a" onClick={handleClose}>
            Update
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfileModal;
