import React from "react";
import DataTable from "../../components/modules/DataTable";

const WorkList = () => {
  return (
    <>
      <DataTable
        id="workList"
        MainHeading="WorkList"
        placeholder="Search Case Here"
        tableHeading={[
          {
            heading: "S.No",
          },
          {
            heading: "Case Title",
          },
          {
            heading: "Comments",
          },
          {
            heading: "Date",
          },
          {
            heading: "Answer sheet",
          },
          {
            heading: "User",
          },
          {
            heading: "Actions",
          },
          {
            heading: "Active Status",
          },
        ]}
      />
    </>
  );
};

export default WorkList;
