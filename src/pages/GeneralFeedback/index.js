import React from "react";
import DataTable from "../../components/modules/DataTable";
import { getFackData } from "../../axios/api";
import { useQuery } from "react-query";

const GeneralFeedback = () => {
  const { data, isLoading, isError } = useQuery("fakeData", getFackData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  console.log(isLoading, "MY DATA");

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
        DataList={data.products}
      />
    </>
  );
};

export default GeneralFeedback;
