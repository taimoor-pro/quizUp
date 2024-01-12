import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    type,
    field,
    id,
    placeholder,
    textColor,
    fontSize,
    fontWeight,
    padding,
    fontFamily,
    margin,
  } = props;

  return (
    <>
      <div
        className="d-flex justify-content-between"
        style={{
          backgroundColor: "#232020",
          padding: padding && padding,
          margin: margin && margin,
        }}
      >
        <input
          {...field}
          placeholder={placeholder}
          type={showPassword ? "text" : type}
          id={id}
          //  className={`m-0 fs-xs ${nopadding ? "px-0" : "px-4"} ${padding && padding} `}
          style={{
            width: "100%",
            color: textColor ? textColor : "black",
            fontWeight: fontWeight ? fontWeight : "normal",
            fontSize: fontSize ? fontSize : 40,
            border: "none",
            backgroundColor: "transparent",
            lineHeight: "20px",
            fontFamily: fontFamily ? fontFamily : "sans-serif",
          }}
        />
        {type === "password" && (
          <div onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
            {showPassword ? (
              <AiFillEyeInvisible size={20} color={textColor} />
            ) : (
              <AiFillEye size={20} color={textColor} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
