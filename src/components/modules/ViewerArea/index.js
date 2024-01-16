import React, { useState } from "react";
import ViewerComponent from "../../elements/viewerCard";
import Button from "../../elements/button";
import HorizontalLine from "../../elements/horizontalLine";
import ViewerForm from "../../elements/viewerForm";
import { ViewerCard } from "../../elements/viewerCard";
import ButtonSwitch from "../../elements/buttonSwitch";

function ViewerArea() {
  const [activeKey, setActiveKey] = useState("keyImages");

  const handleButtonClick = (eventKey) => {
    console.log(eventKey, "eventKeyyyyyyyyyyyyyy");
    setActiveKey(eventKey);
  };

  const handleViewerComponent = () => {
    if (activeKey === "keyImages") {
      return (
        <ViewerCard
          width="920px"
          height="600px"
          borderRadius="10px"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          backgroundColor="black"
          marginLeft="167px"
        />
      );
    } else if (activeKey === "viewDicom") {
      return (
        <ViewerCard
          width="920px"
          height="600px"
          borderRadius="10px"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          backgroundColor="#ffffff"
          marginLeft="167px"
        />
      );
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ButtonSwitch
          button={[
            {
              id: "keyImages",
              eventKey: "keyImages",
              title: "Key Images",
              backgroundColor: "rgb(139, 0, 58)",
              textColor: "white",
              width: "110px",
              //marginLeft: "172px",
              marginLeft: "168px",
              marginTop: "15px",
              fontSize: "1rem",
              padding: "7px",
              borderRadius: "5px",
              fontWeight: 50,
              onClick: handleButtonClick,
            },
            {
              id: "viewDicom",
              eventKey: "viewDicom",
              title: "View DICOM",
              backgroundColor: "rgb(139, 0, 58)",
              textColor: "white",
              width: "110px",
              //marginLeft: "168px",
              marginTop: "15px",
              fontSize: "1rem",
              padding: "7px",
              borderRadius: "5px",
              fontWeight: 50,
              onClick: handleButtonClick,
            },
          ]}
        />
      </div>
      <HorizontalLine
        marginTop="5px"
        marginLeft="168px"
        borderTop="2px solid white"
        width="1265px"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0px",
        }}
      >
        {handleViewerComponent()}

        {/* {viewerComponenet ? (
          <ViewerCard
            width="920px"
            height="600px"
            borderRadius="10px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            backgroundColor="#ffffff"
            marginLeft="167px"
          />
        ) : (
          <ViewerCard
            width="920px"
            height="600px"
            borderRadius="10px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            backgroundColor="#red"
            marginLeft="167px"
          />
        )} */}
        <ViewerForm
          color="white"
          width="50vh"
          height="70vh"
          backgroundColor="black"
          alignItems="center"
          marginTop="-234px"
        />
      </div>
    </>
  );
}

export default ViewerArea;
