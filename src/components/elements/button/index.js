import React from "react";
import "./index.css";

const Button = (props) => {
  const {
    borderRadius,
    padding,
    margin,
    title,
    key,
    backgroundColor,
    textColor,
    width,
    borderColor,
    onClick,
    marginLeft,
    fontWeight,
    marginTop,
    fontSize,
  } = props;

  return (
    <button
      onClick={onClick ? onClick : () => { }}
      className="button-33"
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "rgb(139, 0, 58)",
        color: textColor ? textColor : "black",
        fontSize: fontSize ? fontSize : "14px",
        padding: padding ? padding : "auto",
        width: width ? width : "265px",
        borderRadius: borderRadius ? borderRadius : "5px",
        fontWeight: fontWeight ? fontWeight : "normal",
        display: "flex",
        fontFamily: "Poppins",
        justifyContent: "center",
        alignItems: "center",
        whiteSpace: "nowrap",
        fontSize: "14px",
        lineHeight: "20px",
        padding: padding ? padding : "2px",
        margin: margin ? margin : "0",
      }}
    >
      {title}
    </button>
  );
};

export default Button;
