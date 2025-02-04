import React, { useEffect } from 'react'
import ReportsHeadingComp from './ReportsComponents/ReportsHeadingComp'
import ReportFiltersBarComp from './ReportsComponents/ReportFiltersBarComp'
import ReportListPaginationComp from './ReportsComponents/ReportListPaginationComp'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import clsx from "clsx"
const DashboardReportComp = () => {
  const navigate = useNavigate()
  const { items, loading, error } = useSelector((state) => state.patientsReports); // when ever i want data it will be in items
    useEffect(() => {
    localStorage.getItem("token") == null && navigate("/login") 
    },[])

    const containerClasses = clsx("w-full gap-4 laptop:gap-2 flex flex-col  h-screen")

  return (
    <>
      <div className={containerClasses} >
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