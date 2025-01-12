import React from 'react'
import ReportsHeadingComp from './ReportsComponents/ReportsHeadingComp'
import ReportFiltersBarComp from './ReportsComponents/ReportFiltersBarComp'
import ReportListPaginationComp from './ReportsComponents/ReportListPaginationComp'

const DashboardReportComp = () => {
  return (
    <>
    <div className='w-full h-screen' >
      <ReportsHeadingComp />
      <ReportFiltersBarComp />
      <ReportListPaginationComp />

    </div>
    </>
  )
}

export default DashboardReportComp