import React, { useEffect } from 'react'
import ReportsHeadingComp from './ReportsComponents/ReportsHeadingComp'
import ReportFiltersBarComp from './ReportsComponents/ReportFiltersBarComp'
import ReportListPaginationComp from './ReportsComponents/ReportListPaginationComp'
import { useSelector } from "react-redux"
const DashboardReportComp = () => {
  const { items, loading, error } = useSelector((state) => state.patientsReports); // when ever i want data it will be in items
    useEffect(() => {
    localStorage.getItem("token") == null ? navigate("/login") : console.log("token is present")
    },[])

  return (
    <>
      <div className='w-full gap-4 flex flex-col  h-screen' >
        <ReportsHeadingComp />
        {
          items.success && <>
            <ReportFiltersBarComp reports={items?.data?.Items} />
            <ReportListPaginationComp reports={items?.data?.Items} />
          </>
        }




      </div>
    </>
  )
}

export default DashboardReportComp