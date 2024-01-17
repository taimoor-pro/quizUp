import React from "react";
import { Container, Col, Row } from "reactstrap";
import Button from "../../../elements/button";
import Heading from "../../../elements/heading";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../elements/Input";
import "./index.css";
import Label from "../../../elements/label";
import { Link } from "react-router-dom";
import Select from "../../../elements/select";

const AuthCard = (props) => {
  const {
    handle,
    type,
    LeftprimaryHeading,
    remeberMe,
    signUp,
    forgotPass,
    feildsData,
    height,
    width,
    id,
    select,
    onSubmit,
    button,
    margin,
    fontSize,
    schema,
    padding,
    boxShadow,
  } = props;
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getColumnClass = () => {
    if (id === "signup") {
      return "col-md-6";
    }
    return "col-md-12";
  };

  return (
    <>
      <div
        className="mainwrapper"
        style={{
          // backgroundImage: `url(${bgmain})`,
          backgroundSize: "cover",
          margin: margin ? margin : "",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading
            title={LeftprimaryHeading}
            textColor="white"
            fontSize={fontSize ? fontSize : "40px"}
            fontWeight="bolder"
            padding="20px 0"
          />
          <Row
            className={`align-items-center text-center ${getColumnClass()}`}
            style={{
              backgroundColor: "black",
              height: height ? height : "",
              width: width ? width : "",
              padding: padding ? padding : "",
              boxShadow: boxShadow ? boxShadow : "",
              borderRadius: "5px",
              margin: margin ? margin : "",
            }}
          >
            <Col md={12}>
              <Row className={`${id == "login" ? "pt-5 px-5" : "p-5"}`}>
                <Col md={2} />
                <Col md={12} className={getColumnClass()}>
                  <div className={id == "signup" && "row"}>
                    {feildsData?.map((item) => (
                      <Controller
                        name={item.id}
                        control={control}
                        render={({ field }) => (
                          <div className={getColumnClass()}>
                            <Label
                              text={item.label}
                              padding="10px 20px"
                              margin="20px 0 0 0"
                            />
                            <Input
                              type={item?.type}
                              placeholder={item?.placeholder}
                              field={field}
                              id={item.id}
                              defaultValue={item.id}
                              textColor="#878888"
                              fontSize={16}
                              fontWeight={100}
                              padding="0 0 0 10px"
                              margin="10px 0 0 0"
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
                          </div>
                        )}
                      />
                    ))}

                    {select?.map((item) => (
                      <Controller
                        key={item.id}
                        name={item.id}
                        control={control}
                        render={({ field }) => (
                          <div className={getColumnClass()}>
                            <Label
                              text={item.label}
                              padding="10px 20px"
                              margin="20px 0 0 0"
                            />

                            <Select
                              field={field}
                              id={item.id}
                              defaultValue={item.id}
                              selected={item.selectedOption}
                              margin={item.margin}
                              options={item.options}
                              padding="10px 20px"
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
                          </div>
                        )}
                      />
                    ))}
                  </div>
                </Col>
                <Col md={2} />
              </Row>

              {remeberMe && (
                <div className="mt-2" style={{ width: "55%" }}>
                  <input id="check" type="checkbox" />
                  <label htmlFor="check" className="ms-2 mb-5 text-white">
                    {remeberMe}
                  </label>
                </div>
              )}
              <Row>
                <Col md={2} />

                <Col className="d-flex justify-content-center" md={12}>
                  <Button
                    fontWeight="bold"
                    width={button.width ? button.width : ""}
                    padding={button.padding ? button.padding : ""}
                    backgroundColor="#64082e"
                    textColor="white"
                    margin={button.margin ? button.margin : ""}
                    type={type}
                    title={button.buttonText}
                  />
                </Col>

                <Col md={2} />
              </Row>

              {forgotPass && (
                <div className="mt-2" style={{ width: "145%" }}>
                  <Link
                    className="ms-2 mb-5 text-white text-decoration-none"
                    to="/forgot-password"
                  >
                    {forgotPass}
                  </Link>
                </div>
              )}
            </Col>
          </Row>

          {signUp && (
            <>
              <div
                className="mt-2 text-center my-4"
                style={{ fontSize: "20px", fontWeight: "500" }}
              >
                <span className="text-white me-2 fs-5">{signUp}</span>
                <Link
                  className="text-white text-decoration-none fs-5"
                  to="/signup"
                >
                  Create An Account
                </Link>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default AuthCard;
