import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export function ViewerCard(props) {
  const { width, height, borderRadius, boxShadow, backgroundColor,marginLeft } = props;

  return (
    <Card
      style={{
        width: width ? width : "80%",
        height: height ? height : "100%",
        borderRadius: borderRadius ? borderRadius : "0",
        boxShadow: boxShadow ? boxShadow : "none",
        backgroundColor: backgroundColor ? backgroundColor : "white",
        marginLeft: marginLeft ? marginLeft : "20px",
      }}
    >
    </Card>
  );
}

