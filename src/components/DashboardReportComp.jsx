import React, { useEffect } from 'react'
import ReportsHeadingComp from './ReportsComponents/ReportsHeadingComp'
import ReportFiltersBarComp from './ReportsComponents/ReportFiltersBarComp'
import ReportListPaginationComp from './ReportsComponents/ReportListPaginationComp'
import { useSelector } from "react-redux"
const DashboardReportComp = () => {
  const { items, loading, error } = useSelector((state) => state.patientsReports); // when ever i want data it will be in items
  useEffect(() => {
    console.log('App component mounted');
    console.log(items)
  }, [items])

  const reports = [
    { name: 'John Doe', age: 30, phone: '123-456-7890', cnic: '12345-6789012-3', nationality: 'American', created: '2023-01-01', report: 'download.svg' },
    { name: 'Jane Smith', age: 25, phone: '987-654-3210', cnic: '98765-4321098-7', nationality: 'British', created: '2023-02-01', report: 'download.svg' },
    { name: 'Alice Johnson', age: 28, phone: '555-555-5555', cnic: '55555-5555555-5', nationality: 'Canadian', created: '2023-03-01', report: 'download.svg' },
    { name: 'Bob Brown', age: 35, phone: '444-444-4444', cnic: '44444-4444444-4', nationality: 'Australian', created: '2023-04-01', report: 'download.svg' },
    { name: 'Charlie White', age: 32, phone: '333-333-3333', cnic: '33333-3333333-3', nationality: 'German', created: '2023-05-01', report: 'download.svg' },
    { name: 'David Green', age: 29, phone: '222-222-2222', cnic: '22222-2222222-2', nationality: 'French', created: '2023-06-01', report: 'download.svg' },
    { name: 'Ella Blue', age: 27, phone: '111-111-1111', cnic: '11111-1111111-1', nationality: 'Italian', created: '2023-07-01', report: 'download.svg' },
    { name: 'Alice Johnson', age: 28, phone: '555-555-5555', cnic: '55555-5555555-5', nationality: 'Canadian', created: '2023-03-01', report: 'download.svg' },
    { name: 'Bob Brown', age: 35, phone: '444-444-4444', cnic: '44444-4444444-4', nationality: 'Australian', created: '2023-04-01', report: 'download.svg' },
    { name: 'Charlie White', age: 32, phone: '333-333-3333', cnic: '33333-3333333-3', nationality: 'German', created: '2023-05-01', report: 'download.svg' },
    { name: 'David Green', age: 29, phone: '222-222-2222', cnic: '22222-2222222-2', nationality: 'French', created: '2023-06-01', report: 'download.svg' },
    { name: 'Ella Blue', age: 27, phone: '111-111-1111', cnic: '11111-1111111-1', nationality: 'Italian', created: '2023-07-01', report: 'download.svg' },
    { name: 'Alice Johnson', age: 28, phone: '555-555-5555', cnic: '55555-5555555-5', nationality: 'Canadian', created: '2023-03-01', report: 'download.svg' },
    { name: 'Bob Brown', age: 35, phone: '444-444-4444', cnic: '44444-4444444-4', nationality: 'Australian', created: '2023-04-01', report: 'download.svg' },
    { name: 'Charlie White', age: 32, phone: '333-333-3333', cnic: '33333-3333333-3', nationality: 'German', created: '2023-05-01', report: 'download.svg' },
    { name: 'David Green', age: 29, phone: '222-222-2222', cnic: '22222-2222222-2', nationality: 'French', created: '2023-06-01', report: 'download.svg' },
    { name: 'Ella Blue', age: 27, phone: '111-111-1111', cnic: '11111-1111111-1', nationality: 'Italian', created: '2023-07-01', report: 'download.svg' },
  ];
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