import React from "react";
import { Link } from "react-router-dom";

const HorizontalLine = (props) => {
  const {
    title,
    textColor,
    fontSize,
    fontWeight,
    padding,
    fontFamily,
    textAlign,
    marginLeft,
    borderTop,
    margin,
    marginTop,
    color,
    border,
    id,
    width,
  } = props;

  return (
    <>
      {id === "login" || id === "signup" ? (
        <div style={{ margin: '0 13.5rem' }}>

          <p
            style={{
              color: "white",
              marginTop: "30px",
            }}
          >

            <Link
              className="ms-2 mb-5 text-white text-decoration-none"
              to="/"
            >
              Home /
            </Link> {title}


          </p>
          <hr
            style={{
              borderTop: borderTop ? borderTop : "3px solid #555",
              margin: margin ? margin : "20px 0",
              width: width ? width : "auto",
              color: color ? color : "white",
              // marginLeft: marginLeft ? marginLeft : "4px",
            }}
          />
        </div>
      ) : (
        <hr
          style={{
            borderTop: borderTop ? borderTop : "3px solid #555",
            margin: margin ? margin : "20px 0",
            marginTop: marginTop ? marginTop : "20px",

            color: color ? color : "white",
            marginLeft: marginLeft ? marginLeft : "4px",
          }}
        />
      )}
    </>
  );
};

export default HorizontalLine;
