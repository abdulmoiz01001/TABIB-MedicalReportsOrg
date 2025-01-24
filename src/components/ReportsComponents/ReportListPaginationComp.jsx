import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
// import { executeOffAll  } from "../../store/features/filtersUISlice"
import { FaEye } from "react-icons/fa";
import useStore from '../../zustandStore/useStore'

const ReportListPaginationComp = ({ reports }) => {
  let data = reports
  let lengthReports = reports.length
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

 
  useEffect(() => {

    console.log(filteredReports)
  },[filteredReports])
  
  if(filteredReports.length > 0){
    // ("donee")
    data = filteredReports
    lengthReports = filteredReports.length
  }
  if( filteredReports.count > 0){
    data = filteredReports.Items
    lengthReports = filteredReports.count
  }

  
  return (
    <>
      <div onClick={() => customFunction()} className='w-[99%] overflow-auto  mx-auto mt-2 flex large-desktop:py-6 large-desktop:gap-8 flex-col justify-start items-center h-[78%]   bg-[#FAFAFA] shadow-[0_4px_4px_3px_#0000000a] rounded-[15px]'>
        <div className='desktop:w-full laptop:w-full w-full flex mobile:h-[70px] mobile:relative large-desktop:w-[98%] justify-between items-center '>
          <p className='desktop:text-[16px] tablet:sticky tablet:left-2 mobile:fixed mobile:left-2 tablet:text-[14px] mobile:text-[14px] large-desktop:text-[2rem] text-[#827F7F] p-4'>Total Reports :  { noReportsFound ? 0 : lengthReports}  </p>
        </div>
        <div className='desktop:w-[98%] flex flex-col justify-between items-center min-w-[800px] overflow-auto w-[98%] laptop:w-[98%] large-desktop:w-[98%] mx-auto  border-green-900 h-[90%] flex justify-center items-start'>
          <table className='w-full  p-3  text-left'>
            <thead className='w-full min-w-full bg-[#F9B9B4] h-[72px] rounded-[8px]'>
              <tr className='large-desktop:h-[120px]' >
                <th className='desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize pl-4'>Patient Names</th>
                <th className='desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize'>Age</th>
                <th className='desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize'>Phone</th>
                <th className='desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize'>CNIC</th>
                <th className='desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize'>Nationality</th>
                <th className='desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize'>Created Date</th>
                <th className='desktop:text-[20px] tablet:text-[0.8rem] mobile:text-[0.8rem] laptop:text-[0.9rem] large-desktop:text-[3rem] font-medium capitalize'>Action</th>
              </tr>
            </thead>
            { noReportsFound ? <> 
              <tbody className='h-full relative' >
                 <tr  className='bg-[#FFEFEF] flex flex-col justify-center items-start absolute w-full top-1 large-desktop:h-[100px] cursor-pointer h-[62px] '>
                <td className='desktop:text-[20px]  large-desktop:text-[3rem] pl-4'>No Reports Found</td>
                </tr> 
              </tbody>
            </> : <tbody className='h-full' >
              {data.map((report, index) => (
                <tr key={index} className='bg-[#FFEFEF] large-desktop:h-[100px] cursor-pointer h-[62px] rounded-[8px] '>
                  <td className='desktop:text-[20px]  tablet:text-[0.8rem] mobile:text-[0.8rem]  laptop:text-[0.9rem] large-desktop:text-[3rem] pl-4'>{report.Name}</td>
                  <td className='desktop:text-[20px]  tablet:text-[0.8rem] mobile:text-[0.8rem]  laptop:text-[0.9rem] large-desktop:text-[3rem]' >{report.Member.Age}</td>
                  <td className='desktop:text-[20px]  tablet:text-[0.8rem] mobile:text-[0.8rem]  laptop:text-[0.9rem] large-desktop:text-[3rem]' >{`${report.Mobile}`}</td>
                  <td className='desktop:text-[20px]  tablet:text-[0.8rem] mobile:text-[0.8rem]  laptop:text-[0.9rem] large-desktop:text-[3rem]' >{`${report?.cnic || "-"}`}</td>
                  <td className='desktop:text-[20px]  tablet:text-[0.8rem] mobile:text-[0.8rem]  laptop:text-[0.9rem] large-desktop:text-[3rem]' >{report?.Nation || "-" }</td>
                  <td className='desktop:text-[20px]  tablet:text-[0.8rem] mobile:text-[0.8rem]  laptop:text-[0.9rem] large-desktop:text-[3rem]' >{report?.measureDate} - {report?.measureTime}</td>
                  <td className=' desktop:w-[70px] mobile:mt-4 tablet:mt-4 tablet:w-[30px] tablet:h-[30px] mobile:h-[30px] mobile:w-[30px] laptop:w-[70px] laptop:h-[50px] desktop:h-[55px] large-desktop:h-[100px] flex tablet:gap-4 mobile:gap-4 justify-between items-center ' >
                    <img src="download.svg" alt='download' className='large-desktop:w-16 large-desktop:h-16' />
                    {/* <Link className='w-[50%] desktop:mt-2 tablet:mt-0 mobile:mt-0 laptop:mt-3 h-[50%]' to={`/patient-report/${report.sk}`} > */}
                      {/* <img src='info.png' alt='menu' className='desktop:w-6 large-desktop:w-26 large-desktop:h-16 cursor-pointer desktop:h-4  ' /> */}
                      <FaEye size={ 20} color={"#CC0001"} />
                    {/* </Link> */}
                  </td>
                </tr>
              ))}
            </tbody>}
          </table>
          {/* <div className='w-[30%] flex justify-evenly items-center border-2 border-blue-900 h-[50px]' >
              <div className='w-[50px] flex justify-center items-center h-[50px] border bg-[#CC0001] rounded-[5px] ' >
          
              </div>
              <div className='w-[50px] flex justify-center items-center h-[50px] border bg-[#CC0001] rounded-[5px] ' >
                1
              </div>
              <div className='w-[50px] flex justify-center items-center h-[50px] border bg-[#CC0001] rounded-[5px] ' >
                ...
              </div>
              <div className='w-[50px] flex justify-center items-center h-[50px] border bg-[#CC0001] rounded-[5px] ' >
                10
              </div>
              <div className='w-[50px] flex justify-center items-center h-[50px] border bg-[#CC0001] rounded-[5px] ' >
           
              </div>
          </div> */}
        </div>

      </div>
    </>
  );
};

export default ReportListPaginationComp;