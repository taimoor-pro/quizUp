// DataTable.js

import React, { useState } from "react";
import Heading from "../../elements/heading";
import Search from "../../elements/search";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import excel from "../../../assets/images/answer1.png";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../../elements/pagination";
import { FaFileAlt } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import "./index.css";
import SwalAlert from "../../elements/swal";

const DataTable = (props) => {
  const { MainHeading, tableHeading, id, placeholder, DataList } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleClick = (e, id) => {
    console.log("Handle Click", e.target, id);
    if (id == "122") {
      navigate(`/student-paper/${id}`);
    } else if (id == "1234") {
      navigate(`/edit-case-file/${id}`);
    } else if (id == "1111") {
      navigate(`/admin-graded-report/${id}`);
    } else if (id == "delete") {
      SwalAlert();
    } else if (id == "543") {
      navigate(`/result-view/${id}`);
    }
  };

  const dataItems =
    id === "gernalFeedback"
      ? [
          { id: 1, data: ["1", "Yes", "Yes", "No", "No", "5", "Jul 26, 2023"] },
          { id: 2, data: ["2", "Yes", "Yes", "No", "No", "1", "Jul 26, 2023"] },
        ]
      : id === "workList"
      ? [
          { id: 1, data: ["1", "Upload Large", "taimoor", "Jul 26, 2022"] },
          { id: 2, data: ["2", "Upload", "ok", "Jul 26, 2023"] },
        ]
      : id === "stdList"
      ? [
          {
            id: 1,
            data: ["1", "Upload Large", "", "Jul 26, 2023", "Taimoor", "B"],
          },
          { id: 2, data: ["2", "Upload", "Text", "Jul 26, 2023", "Ali", "A+"] },
        ]
      : [];

  const totalPages = Math.ceil(DataList?.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="mx-5 mt-5 d-flex justify-content-between align-items-center">
        <Heading
          textAlign="left"
          title={MainHeading}
          textColor="white"
          fontSize="30px"
          fontWeight="bolder"
          padding="20px 0"
        />
        <Search placeholder={placeholder} />
      </div>
      <div className="mt-2 mx-5">
        <div className="custom-table">
          <div className="mb-3 textColor text-center row align-items-center">
            {tableHeading?.map((theading, index) => (
              <div key={index} className="col fw-bolder">
                {theading.heading}
              </div>
            ))}
          </div>

          <div className={`mt-3 text-center row mb-3 p-3`}>
            {DataList?.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            )?.map((item) => (
              <div
                key={item.id}
                className={`mt-3 text-center row mb-3 p-3 row-spacing`}
              >
                <div className="col">{item.caseId}</div>
                <div className="col">{item.caseName}</div>
                <div className="col">{item.caseName}</div>
                <div className="col">{item.comments}</div>
                <div className="col">{item.creationDate}</div>
                <div className="col">{item.creationDate}</div>
                <div className="col">{item.paperName}</div>
                <div className="col">{item.isActive}</div>
                <div className="col">{item.creationDate}</div>
              </div>
            ))}

            {id === "workList" && (
              <>
                {!location.pathname.includes("student") ? (
                  <>
                    <div className="col">
                      <div
                        onClick={(e) => handleClick(e, "1234")}
                        className="btn btn-tranparent p-0 m-0"
                      >
                        <img
                          className="me-1"
                          src={excel}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <BiEdit
                        onClick={(e) => handleClick(e, "1111")}
                        className="me-1 fs-3"
                        style={{ cursor: "pointer", color: "#8b003a" }}
                      />
                      <RiDeleteBin6Fill
                        onClick={(e) => handleClick(e, "delete")}
                        className="fs-3"
                        style={{ cursor: "pointer", color: "#8b003a" }}
                      />
                    </div>
                    <div className="col" onClick={(e) => handleClick(e, "321")}>
                      <FaUser
                        className="me-1 fs-4"
                        style={{ cursor: "pointer" }}
                      />
                    </div>

                    <div className="col">
                      <div
                        onClick={(e) => handleClick(e)}
                        className="circle btn btn-transparent"
                        style={{
                          border: "2px solid #8b003a",
                          backgroundColor: "rgb(0, 139, 9)",
                        }}
                      ></div>
                    </div>

                    <div className="col">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col">
                      <FaFileAlt
                        onClick={(e) => handleClick(e, "122")}
                        className="me-1 fs-5 text-white"
                        style={{ cursor: "pointer", color: "#8b003a" }}
                      />

                      <GrPowerReset
                        onClick={(e) => handleClick(e, "122")}
                        className="me-1 fs-5 text-white"
                        style={{ cursor: "pointer", color: "#8b003a" }}
                      />

                      <IoSearchSharp
                        onClick={(e) => handleClick(e, "543")}
                        className="me-1 fs-5 text-white"
                        style={{ cursor: "pointer", color: "#8b003a" }}
                      />
                    </div>
                    <div className="col">
                      <div
                        className="circle"
                        style={{
                          border: "2px solid #8b003a",
                          backgroundColor: "rgb(0, 139, 9)",
                        }}
                      ></div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default DataTable;
