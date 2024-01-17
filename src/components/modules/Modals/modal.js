import React, { useEffect, useState } from "react";
import * as yup from "yup";
import {
  Modal,
  Input,
  ModalBody,
  ModalHeader,
  Button,
  FormGroup,
  InputGroup,
  InputGroupText,
} from "reactstrap";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Label from "../../elements/label";
import { render } from "@testing-library/react";

const ProfileModal = (props) => {
  const { open, handleClose, id, inputFeildsData, select } = props;

  // Schemas
  const adminSchema = yup.object().shape({
    username: yup.string().required("Please Enter Username!"),
    password: yup.string().min(5).max(10).required("Please Enter Password!"),
  });

  const userSchema = yup.object().shape({
    username: yup.string().required("Please Enter username!"),
    password: yup.string().min(5).max(10).required("Please Enter Password!"),
    email: yup.string().email().required("Please Enter Email!"),
    age: yup.string().required("Please Enter age!"),
    location: yup.string().required("Please Select Location!"),
    gender: yup.string().required("Please Select Gender!"),
    curentStatus: yup.string().required("Please Select Current Status!"),
    currentYear: yup.string().required("Please Select Current Year!"),
    selectField: yup.string().required("Please Select Current Field!"),
  });

  const getSchema = () => {
    switch (id) {
      case "admin":
        return adminSchema;
      case "user":
        return userSchema;
      default:
        return null;
    }
  };
  const selectedSchema = getSchema();

  const {
    handleSubmit,
    watch,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: selectedSchema ? yupResolver(selectedSchema) : undefined,
  });

  const onSubmit = (values) => {
    console.log("My Value", values);
    handleClose(!open);
  };
  return (
    <Modal
      isOpen={open}
      toggle={() => {
        handleClose(!open);
        reset();
      }}
      className={`modal-dialog ${id === "user" ? "modal-lg" : "modal-md"}`}
    >
      <ModalHeader
        className="bg-transparent"
        toggle={() => {
          handleClose(!open);
          reset();
        }}
      >
        Update Profile
      </ModalHeader>
      <ModalBody className="px-sm-5 mx-50 pb-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide ">
            {inputFeildsData?.map((item) => (
              <div key={item?.id}>
                <div>
                  <Controller
                    name={item?.id}
                    control={control}
                    render={({ field }) => (
                      <div
                        className={`grid gap-3 ${
                          id === "user" ? "grid-cols-6" : "grid-cols-4"
                        } mb-2`}
                      >
                        <div
                          className={`${
                            id === "user" ? "col-span-6" : "col-span-8"
                          } sm:col-span-4`}
                        >
                          <Label text={item.label} color="black" />
                          <Input
                            {...field}
                            name={item.id}
                            type={item.type}
                            id={item.id}
                            placeholder={item.placeholder}
                          />
                        </div>
                      </div>
                    )}
                  />
                  {errors[item.id] && (
                    <p style={{ color: "#D83F31" }} className="m-0 p-0">
                      {errors[item.id]?.message}{" "}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 flex-grow scrollbar-hide ">
            {select &&
              select?.map((item) => (
                <Controller
                  key={item.id}
                  name={item.id}
                  control={control}
                  render={({ field }) => (
                    <div
                      className={`grid gap-3 ${
                        id === "user" ? "grid-cols-6" : "grid-cols-4"
                      } mb-2`}
                    >
                      <Label
                        text={item.label}
                        color="black"
                        padding="10px 20px"
                        margin="20px 0 0 0"
                      />

                      <select
                        {...field}
                        id={item.id}
                        className="form-select form-select-lg mb-3"
                        aria-label="Large select example"
                      >
                        <option selected disabled value={item.selectedOption}>
                          {item.selectedOption}
                        </option>

                        {item?.options?.map((op, index) => (
                          <option key={index} value={op}>
                            {op}
                          </option>
                        ))}
                      </select>
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
                    </div>
                  )}
                />
              ))}
          </div>

          <Button type="submit" className="" variant="contained">
            Update
          </Button>
        </form>
      </ModalBody>
    </Modal>
  );
};
export default ProfileModal;
