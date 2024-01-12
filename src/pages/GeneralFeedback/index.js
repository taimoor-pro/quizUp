import React from "react";
import DataTable from "../../components/modules/DataTable";
import NavBar from "../../components/modules/Navbar";

const GeneralFeedback = () => {
  return (
    <>
      <DataTable
        id="gernalFeedback"
        MainHeading="General Feedback"
        placeholder="Search Feedback Here"
        tableHeading={[
          {
            heading: "S.No",
          },
          {
            heading: "Technical Issue Description",
          },
          {
            heading: "Is Techincal Issue",
          },
          {
            heading: "Comments against Tool",
          },
          {
            heading: "Is Full Learning Tool",
          },
          {
            heading: "Rate",
          },
          {
            heading: "Creation Date",
          },
        ]}
      />
    </>
  );
};

export default GeneralFeedback;
