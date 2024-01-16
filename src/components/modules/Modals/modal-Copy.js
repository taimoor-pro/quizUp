import React, { useEffect, useState } from "react";
import {
  Modal,
  Input,
  ModalBody,
  ModalHeader,
  Button,
  FormGroup,
  InputGroup,
  InputGroupText,
  Label,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FloatingLabel, Form } from "react-bootstrap";
const ModalAuth = (props) => {

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(props.schema),
  });
  return (
    <Modal
      isOpen={true}
      toggle={() => {
        props.handleClose(!props.open);
        reset();
      }}
      className="modal-dialog-centered modal-lg"
    >
      <ModalHeader
        className="bg-transparent"
        toggle={() => {
          props.handleClose(!props.open);
          reset();
        }}
      ></ModalHeader>
      <ModalBody className="px-sm-5 mx-50 pb-5">
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide ">
            {props?.inputFeildsData?.map((item) => (
              <div key={item?.id}>
                <div>
                  <Controller
                    name={item?.name}
                    control={control}
                    render={({ field }) =>
                      item?.type === "text" ? (
                        <div className="grid grid-cols-4 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-2">
                          <div className="col-span-8 sm:col-span-4">
                            <Label label={item.label} />
                            <Input
                              {...field}
                              name={item.name}
                              type={item.type}
                              id={item.id}
                              placeholder={item.label}
                            />
                          </div>
                        </div>
                      ) : item?.as === "textarea" ? (
                        <>
                          <FloatingLabel
                            controlId="floatingTextarea"
                            label="Persona Description"
                            className="mb-3"
                          >
                            <Form.Control
                              {...field}
                              name={item.name}
                              as={item.as}
                              placeholder={item.label}
                            />
                          </FloatingLabel>
                        </>
                      ) : item?.type === "file" ? (
                        <div className="grid grid-cols-4 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-2">
                          <Label label={item.label} />
                          <div className="col-span-8 sm:col-span-4">
                            <div>

                              {/* {props.imageSrc && (
                                <img
                                  src={props.imgPreview}
                                  alt="Uploaded"
                                  style={{
                                    maxWidth: "100px",
                                    maxHeight: "100px",
                                  }}
                                />
                              )} */}
                              <Input
                                {...field}
                                type={item.type}
                                id={item.id}
                                name={item.name}
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={(e) => {
                                  props.imageOnChange(e);
                                  field.onChange(e);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ) : item.type === "number" ? (
                        <div className="grid grid-cols-4 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-2">
                          <div className="col-span-8 sm:col-span-4">
                            <Label label={item.label} />
                            <InputGroup>
                              <InputGroupText>$</InputGroupText>
                              <Input
                                {...field}
                                name={item.name}
                                type={item.type}
                                id={item.id}
                                placeholder={item.label}
                              />
                              <InputGroupText>.00</InputGroupText>
                            </InputGroup>
                          </div>
                        </div>
                      ) : null
                    }
                  />
                  {errors[item.name] && (
                    <p style={{ color: "#D83F31" }} className="m-0 p-0">
                      {errors[item.name]?.message}{" "}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* {props.button.map((item) => (
            <Button
              key={item.id}
              type={item.type}
              className={item.style}
              variant="contained"
              onClick={() => {
                if (item.type === "button") {
                  reset();
                }
              }}
            >
              {item.buttonText}
            </Button>
          ))} */}

          <Button
            type="submit"
            variant="#8b003a"
            // onClick={handleClose}
            style={{
              backgroundColor: "#8b003a",
              color: "white",
              fontWeight: 400,
            }}
          >
            Update
          </Button>
        </form>
      </ModalBody>
    </Modal>
  );
};
export default ModalAuth;
