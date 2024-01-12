import React from "react";
import { Container, Col, Row } from "reactstrap";
import Button from "../../../elements/button";
// import bgImg from "../../../../assets/authbg.png";
// import bgmain from "../../../../assets/bg.png";
import Heading from "../../../elements/heading";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import SocialButton from "../../../elements/socialButton";
import { Controller, useForm } from "react-hook-form";
import Input from "../../../elements/Input";
import "./index.css";
import { yupResolver } from "@hookform/resolvers/yup";
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
    schema,
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
      {/* <Row className="mt-5 mx-0 p-0">
          <Col md={12} className="sperate" style={{ padding: "0 20%" }}>
            <h2>
              <span className="text-black">BACK</span>
            </h2>
          </Col>
        </Row> */}
      <div
        className="mainwrapper"
        style={{
          // backgroundImage: `url(${bgmain})`,
          backgroundSize: "cover",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading
            title={LeftprimaryHeading}
            textColor="white"
            fontSize="40px"
            fontWeight="bolder"
            padding="20px 0"
          />
          <Row
            className={`align-items-center text-center ${getColumnClass()}`}
            style={{
              backgroundColor: "black",
              height: height ? height : "",
              width: width ? width : "",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "5px",
            }}
          >
            <Col md={12}>
              <Row>
                <Col md={2} />
                <Col md={12} className={getColumnClass()}>
                  <div className={id == "signup" && "row"}>
                    {feildsData?.map((item) => (
                      <Controller
                        name={item.id}
                        control={control}
                        render={({ field }) => (
                          <div className={getColumnClass()}>
                            <Label text={item.label} padding="10px 20px" />
                            <Input
                              type={item?.type}
                              placeholder={item?.placeholder}
                              field={field}
                              id={item.id}
                              defaultValue={item.id}
                              textColor="#878888"
                              fontSize={16}
                              fontWeight={100}
                              padding="10px 20px"
                              margin={item?.margin}
                            />
                            {errors[item.id] && (
                              <p
                                style={{
                                  color: "red",
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
                        key={item.id} // Add a unique key for each mapped item
                        name={item.id}
                        control={control}
                        render={({ field }) => (
                          <div className={getColumnClass()}>
                            <Label text={item.label} padding="10px 20px" />

                            <Select
                              selected={item.selectedOption}
                              margin={item.margin}
                            />
                          </div>
                        )}
                      />
                    ))}
                  </div>
                </Col>
                <Col md={2} />
              </Row>

              {remeberMe && (
                <>
                  <input id="check" type="checkbox" />
                  <label htmlFor="check" className="ms-2   text-white">
                    {remeberMe}
                  </label>
                </>
              )}
              <Row>
                <Col md={2} />

                <Col className="d-flex justify-content-center" md={12}>
                  <Button
                    // onClick={props.handleLogin}
                    // fontWeight="bold"
                    // padding="8px 40px"
                    backgroundColor="#64082e"
                    textColor="#878888"
                    // borderColor="#2FB397"
                    margin="20px 0 0 0"
                    type={type}
                    title={button.buttonText}
                  />
                </Col>

                <Col md={2} />
              </Row>

              {forgotPass && (
                <div className="mt-2">
                  <Link
                    className="text-white text-decoration-none"
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
              <div className="mt-2 fs-5 text-center">
                <span className="text-white me-2">{signUp}</span>
                <Link className="text-white text-decoration-none" to="/signup">
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
