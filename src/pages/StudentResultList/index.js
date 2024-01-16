import React from "react";
import DataTable from "../../components/modules/DataTable";

const StudentResultList = () => {
  return (
    <>
      <DataTable
        id="stdList"
        MainHeading="Student Result List"
        placeholder="Search Student Feedback Here"
        tableHeading={[
          {
            heading: "S.No",
          },
          {
            heading: "Case Title",
          },
          {
            heading: "Student Feedback",
          },
          {
            heading: "Date",
          },
          {
            heading: "Student",
          },
          {
            heading: "Grade",
          },
        ]}
      />
    </>
  );
};

export default StudentResultList;
