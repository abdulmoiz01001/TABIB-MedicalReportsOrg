import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import useStore from "../../zustandStore/useStore";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const ReportListPaginationComp = ({ reports }) => {
  const navigate = useNavigate();
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const { filteredReports, noReportsFound } = useSelector(
    (state) => state.PatientReportFilters
  );
  const customFunction = useStore((state) => state.customFunction);

  // const data = useMemo(() => {
  //   if (filteredReports?.length > 0) {
  //     setCurrentPage(1);
  //     return filteredReports;
  //   }
  //   if (filteredReports?.Items?.length > 0) {
  //     setCurrentPage(1);
  //     return filteredReports.Items;
  //   }
  //   return reports;
  // }, [reports, filteredReports]);

  const data = useMemo(() => {
    if (filteredReports?.length > 0) {
      return filteredReports;
    }
    if (filteredReports?.Items?.length > 0) {
      return filteredReports.Items;
    }
    return reports;
  }, [reports, filteredReports]);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredReports]);
  

  const lengthReports = useMemo(() => data.length, [data]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = useMemo(
    () => data.slice(indexOfFirstRecord, indexOfLastRecord),
    [data, indexOfFirstRecord, indexOfLastRecord]
  );
  const totalPages = useMemo(
    () => Math.ceil(lengthReports / recordsPerPage),
    [lengthReports, recordsPerPage]
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Tailwind CSS class variables using clsx
  const containerClasses = clsx(
    "w-[99%]",
    "overflow-auto",
    "mx-auto",
    "mt-2",
    "mobile:relative",
    "flex",
    "large-desktop:py-6",
    "large-desktop:gap-8",
    "flex-col",
    "justify-start",
    "items-center",
    "h-[78%]",
    "bg-[#FAFAFA]",
    "shadow-[0_4px_4px_3px_#0000000a]",
    "rounded-[15px]"
  );

  const headerClasses = clsx(
    "desktop:w-full",
    "laptop:w-full",
    "w-full",
    "flex",
    "mobile:h-[70px]",
    "mobile:relative",
    "large-desktop:w-[98%]",
    "justify-between",
    "items-center"
  );

  const textClasses = clsx(
    "desktop:text-[16px]",
    "tablet:sticky",
    "tablet:left-2",
    "mobile:fixed",
    "mobile:left-2",
    "tablet:text-[14px]",
    "mobile:text-[14px]",
    "large-desktop:text-[2rem]",
    "text-[#827F7F]",
    "p-4"
  );

  const tableClasses = clsx(
    "desktop:w-[98%]",
    "mobile:mb-16",
    "flex",
    "flex-col",
    "justify-between",
    "items-center",
    "min-w-[800px]",
    "overflow-auto",
    "w-[98%]",
    "laptop:w-[98%]",
    "large-desktop:w-[98%]",
    "mx-auto",
    "border-green-900",
    "h-[90%]"
  );

  const tableHeaderClasses = clsx(
    "w-full",
    "min-w-full",
    "bg-[#F9B9B4]",
    "mobile:h-[40px]",
    "tablet:h-[40px]",
    "h-[72px]",
    "rounded-[8px]",
    "sticky",
    "top-0"
  );

  const rowClasses = clsx(
    "bg-[#FFEFEF]",
    "large-desktop:h-[100px]",
    "cursor-pointer",
    "mobile:h-[40px]",
    "tablet:h-[40px]",
    "h-[62px]",
    "rounded-[8px]",
    "border-b-2",
    "border-white"
  );

  const actionButtonClasses = clsx(
    "desktop:w-[70px]",
    "mobile:mt-4",
    "tablet:mt-4",
    "tablet:w-[30px]",
    "tablet:h-[30px]",
    "mobile:h-[30px]",
    "mobile:w-[30px]",
    "laptop:w-[70px]",
    "laptop:h-[50px]",
    "desktop:h-[55px]",
    "large-desktop:h-[100px]",
    "flex",
    "tablet:gap-4",
    "mobile:gap-4",
    "justify-between",
    "items-center"
  );

  const paginationContainerClasses = clsx(
    "flex",
    "tablet:sticky",
    "bg-[#FAFAFA]",
    "tablet:bottom-2",
    "mobile:fixed",
    "tablet:left-1/2 tablet:translate-x-[-50%]",
    "mobile:left-1/2 mobile:translate-x-[-50%]",
    "mobile:bottom-2",
    "desktop:mb-4",
    "justify-center",
    "items-center",
    "gap-2",
    "mt-4"
  );
  
  const paginationButtonClasses = (disabled) => clsx(
    "w-10",
    "h-10",
    "flex",
    "justify-center",
    "items-center",
    "rounded-md",
    "border",
    disabled ? "bg-gray-300" : "bg-white hover:bg-gray-200"
  );

  const pageButtonClasses = (isCurrent) => clsx(
    "w-10",
    "h-10",
    "flex",
    "justify-center",
    "items-center",
    "rounded-md",
    "border",
    isCurrent ? "bg-[#CC0001] text-white" : "bg-white hover:bg-gray-200"
  );

  const tableClass = clsx("w-full p-3 text-left")
  const staticTableRowClasses = clsx("large-desktop:h-[120px] mobile:h-[40px] tablet:h-[40px]")
  const tbodyClasses = "h-full relative";
  const noReportsRowClasses = clsx(
    "bg-[#FFEFEF] flex flex-col justify-center items-start absolute w-full top-1",
    "large-desktop:h-[100px] cursor-pointer h-[62px]"
  );
  const noReportsTextClasses = clsx(
    "desktop:text-[20px] large-desktop:text-[3rem] pl-4"
  );
 const  dynamicTableDataClasses = clsx("desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem]")
 const dynamicTableDataNameClasses = clsx("desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] pl-4")
 const staticTableNameDataClasses  = clsx("desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize pl-4")
 const staticTableDataClasses = clsx("desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize")
 return (
    <div onClick={() => customFunction()} className={containerClasses}>
      <div className={headerClasses}>
        <p className={textClasses}>
          Total Reports : {noReportsFound ? 0 : lengthReports}
        </p>
      </div>
      <div className={tableClasses}>
        <table className={tableClass}>
          <thead className={tableHeaderClasses}>
            <tr className={staticTableRowClasses}>
              <th className={staticTableNameDataClasses}>
                Patient Names
              </th>
              <th className={staticTableDataClasses}>
                Age
              </th>
              <th className={staticTableDataClasses}>
                Phone
              </th>
              <th className={staticTableDataClasses}>
                CNIC
              </th>
              <th className={staticTableDataClasses}>
                Nationality
              </th>
              <th className={staticTableDataClasses}>
                Created Date
              </th>
              <th className={staticTableDataClasses}>
                Actions
              </th>
            </tr>
          </thead>
          {noReportsFound ? (
            <tbody className={tbodyClasses}>
            <tr className={noReportsRowClasses}>
              <td className={noReportsTextClasses}>No Reports Found</td>
            </tr>
          </tbody>
          ) : (
            <tbody>
              {currentRecords.map((report, index) => (
                <tr key={index} className={rowClasses}>
                  <td className={dynamicTableDataNameClasses}>
                    {report.Name}
                  </td>
                  <td className={dynamicTableDataClasses}>
                    {report.Member.Age}
                  </td>
                  <td className={dynamicTableDataClasses}>
                    {report.Mobile}
                  </td>
                  <td className={dynamicTableDataClasses}>
                    {report?.IdCode || "-"}
                  </td>
                  <td className={dynamicTableDataClasses}>
                    {report.Member?.Nation || "-"}
                  </td>
                  <td className={dynamicTableDataClasses}>
                    {report?.measureDate} - {report?.measureTime}
                  </td>
                  <td onClick={() => navigate(`/patient-report/${report.sk}`) } className={actionButtonClasses}>
                    <FaEye size={isLargeDesktop ? 30 :20} color={"#CC0001"} />
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {/* Pagination Controls */}
      </div>
      {lengthReports > 10 && !noReportsFound && (
        <div className={paginationContainerClasses}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={paginationButtonClasses(currentPage === 1)}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={pageButtonClasses(currentPage === index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={paginationButtonClasses(currentPage === totalPages)}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default ReportListPaginationComp;
