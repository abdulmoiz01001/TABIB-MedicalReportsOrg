import React, { useState } from 'react';

const ReportListPaginationComp = () => {
  const reports = [
    { name: 'John Doe', age: 30, phone: '123-456-7890', cnic: '12345-6789012-3', nationality: 'American', created: '2023-01-01', report: 'download.svg' },
    { name: 'Jane Smith', age: 25, phone: '987-654-3210', cnic: '98765-4321098-7', nationality: 'British', created: '2023-02-01', report: 'download.svg' },
    { name: 'Alice Johnson', age: 28, phone: '555-555-5555', cnic: '55555-5555555-5', nationality: 'Canadian', created: '2023-03-01', report: 'download.svg' },
    { name: 'Bob Brown', age: 35, phone: '444-444-4444', cnic: '44444-4444444-4', nationality: 'Australian', created: '2023-04-01', report: 'download.svg' },
    { name: 'Charlie White', age: 32, phone: '333-333-3333', cnic: '33333-3333333-3', nationality: 'German', created: '2023-05-01', report: 'download.svg' },
    { name: 'David Green', age: 29, phone: '222-222-2222', cnic: '22222-2222222-2', nationality: 'French', created: '2023-06-01', report: 'download.svg' },
    { name: 'Ella Blue', age: 27, phone: '111-111-1111', cnic: '11111-1111111-1', nationality: 'Italian', created: '2023-07-01', report: 'download.svg' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 5;
  const totalPages = Math.ceil(reports.length / reportsPerPage);

  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className='w-[97%] mx-auto mt-2 h-[78%] bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] rounded-[15px]'>
      <div className='w-full flex justify-between items-center px-2'>
        <p className='text-[16px] text-[#827F7F] p-4'>Total Reports : {reports.length}</p>
        <div className='w-[96px] bg-[#FFFFFF] shadow-[0_1px_2px_2px_#00000040] rounded-[8px] flex justify-evenly items-center h-[32px]'>
          <span className='cursor-pointer active:scale-95'><img src='menu.svg' alt='menu' /></span>
          |
          <span className='cursor-pointer active:scale-95'><img src='boxmenu.svg' alt='menu' /></span>
        </div>
      </div>
      <div className='w-[98%] mx-auto h-[80%] flex justify-center items-start'>
        <table className='w-full text-left'>
          <thead className='w-full bg-[#F9B9B4] h-[72px] rounded-[8px]'>
            <tr>
              <th className='text-[20px] font-medium capitalize pl-4'>Patients Name</th>
              <th className='text-[20px] font-medium capitalize'>Age</th>
              <th className='text-[20px] font-medium capitalize'>Phone</th>
              <th className='text-[20px] font-medium capitalize'>CNIC</th>
              <th className='text-[20px] font-medium capitalize'>Nationality</th>
              <th className='text-[20px] font-medium capitalize'>Created</th>
              <th className='text-[20px] font-medium capitalize'>Report</th>
            </tr>
          </thead>
          <tbody>
            {currentReports.map((report, index) => (
              <tr key={index} className='bg-[#FFEFEF] cursor-pointer h-[62px] rounded-[8px] shadow-[0_4px_4px_3px_#CC000140]'>
                <td className='pl-4'>{report.name}</td>
                <td>{report.age}</td>
                <td>{`${report.phone.slice(0, 7)}..`}</td>
                <td>{`${report.cnic.slice(0, 9)}..`}</td>
                <td>{report.nationality}</td>
                <td>{report.created}</td>
                <td><img src={report.report} alt='download' className='pl-6' /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center '>
        <button onClick={handlePrevPage} disabled={currentPage === 1} className='px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50'>&lt;</button>
        {[...Array(totalPages)].map((_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-white border'}`}>{index + 1}</button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className='px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50'>&gt;</button>
      </div>
    </div>
  );
};

export default ReportListPaginationComp;