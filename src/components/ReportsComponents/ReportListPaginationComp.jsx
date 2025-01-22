import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
// import { executeOffAll  } from "../../store/features/filtersUISlice"
import { FaEye } from "react-icons/fa";
import useStore from '../../zustandStore/useStore'

const ReportListPaginationComp = ({ reports }) => {
  let data = reports
  useEffect(() => {
    console.log(reports)
  }, [reports])
  const dispatch = useDispatch();
  const { filteredReports } = useSelector((state) => state.PatientReportFilters);
  const { noReportsFound } = useSelector((state) => state.PatientReportFilters);

  useEffect(() => {
   console.log(noReportsFound)
  }, [noReportsFound])

  const customFunction = useStore((state) => state.customFunction);

 
  // console.log(executeOffAll())
  

  // useEffect(() => {
  //   ("filteredReports" , filteredReports)
  //   if(filteredReports.count > 0){
  //     // ("donee")
  //     ("filteredReports" , filteredReports)
  //     reports = filteredReports.Items
  //     ("reports" , reports)
  //   }
  // },[filteredReports])
  useEffect(() => {

    console.log(filteredReports)
  },[filteredReports])
  
  if(filteredReports.length > 0){
    // ("donee")
    data = filteredReports
  }
  if( filteredReports.count > 0){
    data = filteredReports.Items
  }

  
  return (
    <>
      <div onClick={() => customFunction()} className='w-[99%] mx-auto mt-2 flex large-desktop:py-6 large-desktop:gap-8 flex-col justify-start items-center h-[78%]   bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] rounded-[15px]'>
        <div className='desktop:w-full flex large-desktop:w-[98%]  justify-between items-center '>
          <p className='desktop:text-[16px] large-desktop:text-[2rem] text-[#827F7F] p-4'>Total Reports : {reports.length}</p>
        </div>
        <div className='desktop:w-[98%] large-desktop:w-[98%] mx-auto  border-green-900 h-[90%] flex justify-center items-start'>
          <table className='w-full  p-3 text-left'>
            <thead className='w-full bg-[#F9B9B4] h-[72px] rounded-[8px]'>
              <tr className='large-desktop:h-[120px]' >
                <th className='desktop:text-[20px] large-desktop:text-[3rem] font-medium capitalize pl-4'>Patients Name</th>
                <th className='desktop:text-[20px] large-desktop:text-[3rem] font-medium capitalize'>Age</th>
                <th className='desktop:text-[20px] large-desktop:text-[3rem] font-medium capitalize'>Phone</th>
                <th className='desktop:text-[20px] large-desktop:text-[3rem] font-medium capitalize'>CNIC</th>
                <th className='desktop:text-[20px] large-desktop:text-[3rem] font-medium capitalize'>Nationality</th>
                <th className='desktop:text-[20px] large-desktop:text-[3rem] font-medium capitalize'>Created</th>
                <th className='desktop:text-[20px] large-desktop:text-[3rem] font-medium capitalize'>Action</th>
              </tr>
            </thead>
            { noReportsFound ? <> <tr  className='bg-[#FFEFEF] large-desktop:h-[100px] cursor-pointer h-[62px] rounded-[8px] '>
            <td className='desktop:text-[20px] large-desktop:text-[3rem] pl-4'>Not Found</td></tr></> : <tbody className='h-full' >
              {data.map((report, index) => (
                <tr key={index} className='bg-[#FFEFEF] large-desktop:h-[100px] cursor-pointer h-[62px] rounded-[8px] '>
                  <td className='desktop:text-[20px] large-desktop:text-[3rem] pl-4'>{report.Name}</td>
                  <td className='desktop:text-[20px] large-desktop:text-[3rem]' >{report.Member.Age}</td>
                  <td className='desktop:text-[20px] large-desktop:text-[3rem]' >{`${report.Mobile}`}</td>
                  <td className='desktop:text-[20px] large-desktop:text-[3rem]' >{`${report?.cnic || "-"}`}</td>
                  <td className='desktop:text-[20px] large-desktop:text-[3rem]' >{report?.Nation || "-" }</td>
                  <td className='desktop:text-[20px] large-desktop:text-[3rem]' >{report?.measureDate}</td>
                  <td className=' desktop:w-[70px]   desktop:h-[55px] large-desktop:h-[100px]   flex justify-between items-center ' ><img src="download.svg" alt='download' className='large-desktop:w-16 large-desktop:h-16' />
                    <Link className='w-[50%] desktop:mt-2 h-[50%]' to={`/patient-report/${report.sk}`} >
                      {/* <img src='info.png' alt='menu' className='desktop:w-6 large-desktop:w-26 large-desktop:h-16 cursor-pointer desktop:h-4  ' /> */}
                      <FaEye size={20} color={"#CC0001"} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>}
          </table>
        </div>

      </div>
    </>
  );
};

export default ReportListPaginationComp;