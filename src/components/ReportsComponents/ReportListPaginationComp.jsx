import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import useStore from "../../zustandStore/useStore";

const ReportListPaginationComp = ({ reports }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  let data = reports;
  let lengthReports = reports.length;

  const { filteredReports } = useSelector((state) => state.PatientReportFilters);
  const { noReportsFound } = useSelector((state) => state.PatientReportFilters);

  const customFunction = useStore((state) => state.customFunction);

  useEffect(() => {
    if (filteredReports.length > 0) {
      data = filteredReports;
      lengthReports = filteredReports.length;
    }
    if (filteredReports.count > 0) {
      data = filteredReports.Items;
      lengthReports = filteredReports.count;
    }
  }, [filteredReports]);

  // Calculate pagination
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(lengthReports / recordsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div
        onClick={() => customFunction()}
        className="w-[99%] overflow-auto mx-auto mt-2 flex large-desktop:py-6 large-desktop:gap-8 flex-col justify-start items-center h-[78%] bg-[#FAFAFA] shadow-[0_4px_4px_3px_#0000000a] rounded-[15px]"
      >
        <div className="desktop:w-full laptop:w-full w-full flex mobile:h-[70px] mobile:relative large-desktop:w-[98%] justify-between items-center">
          <p className="desktop:text-[16px] tablet:sticky tablet:left-2 mobile:fixed mobile:left-2 tablet:text-[14px] mobile:text-[14px] large-desktop:text-[2rem] text-[#827F7F] p-4">
            Total Reports : {noReportsFound ? 0 : lengthReports}
          </p>
        </div>
        <div className="desktop:w-[98%] flex flex-col justify-between items-center min-w-[800px] overflow-auto w-[98%] laptop:w-[98%] large-desktop:w-[98%] mx-auto border-green-900 h-[90%]">
          <table className="w-full p-3 text-left">
            <thead className="w-full min-w-full bg-[#F9B9B4] h-[72px] rounded-[8px] sticky top-0">
              <tr className="large-desktop:h-[120px]">
                <th className="desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize pl-4">
                  Patient Names
                </th>
                <th className="desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize">
                  Age
                </th>
                <th className="desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize">
                  Phone
                </th>
                <th className="desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize">
                  CNIC
                </th>
                <th className="desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize">
                  Nationality
                </th>
                <th className="desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize">
                  Created Date
                </th>
                <th className="desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize">
                  Actions
                </th>
              </tr>
            </thead>
            {noReportsFound ? (
              <tbody className="h-full relative">
                <tr className="bg-[#FFEFEF] flex flex-col justify-center items-start absolute w-full top-1 large-desktop:h-[100px] cursor-pointer h-[62px]">
                  <td className="desktop:text-[20px] large-desktop:text-[3rem] pl-4">No Reports Found</td>
                </tr>
              </tbody>
            ) : (
              <tbody className="h-full">
                {currentRecords.map((report, index) => (
                  <tr
                    key={index}
                    className="bg-[#FFEFEF] large-desktop:h-[100px] cursor-pointer h-[62px] rounded-[8px] border-b-2 border-white"
                  >
                    <td className="desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] pl-4">
                      {report.Name}
                    </td>
                    <td className="desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem]">
                      {report.Member.Age}
                    </td>
                    <td className="desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem]">
                      {`${report.Mobile}`}
                    </td>
                    <td className="desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem]">
                      {`${report?.IdCode || "-"}`}
                    </td>
                    <td className="desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem]">
                      {report.Member?.Nation || "-"}
                    </td>
                    <td className="desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem]">
                      {report?.measureDate} - {report?.measureTime}
                    </td>
                    <td className="desktop:w-[70px] mobile:mt-4 tablet:mt-4 tablet:w-[30px] tablet:h-[30px] mobile:h-[30px] mobile:w-[30px] laptop:w-[70px] laptop:h-[50px] desktop:h-[55px] large-desktop:h-[100px] flex tablet:gap-4 mobile:gap-4 justify-between items-center">
                      <FaEye size={20} color={"#CC0001"} />
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {/* Pagination Controls */}
        
        </div>
        <div className="flex desktop:mb-4 justify-center items-center gap-2 mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex justify-center items-center rounded-md border ${
                currentPage === 1 ? "bg-gray-300" : "bg-white hover:bg-gray-200"
              }`}
            >
              &lt;
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`w-10 h-10 flex justify-center items-center rounded-md border ${
                  currentPage === index + 1
                    ? "bg-red-500 text-white"
                    : "bg-white hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex justify-center items-center rounded-md border ${
                currentPage === totalPages
                  ? "bg-gray-300"
                  : "bg-white hover:bg-gray-200"
              }`}
            >
              &gt;
            </button>
          </div>
      </div>
    </>
  );
};

export default ReportListPaginationComp;
