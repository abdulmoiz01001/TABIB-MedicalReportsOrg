import React, { useState , useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import { setItems } from '../../store/features/sortedReportsSlice';
// import { IoInformationCircle } from "react-icons/io5";
const ReportListPaginationComp = ({reports}) => {
  
  const dispatch = useDispatch()
   
  const { items } = useSelector((state) => state.sortedReports);
  const { filteredData } = useSelector((state) => state.sortedSearchReports);
  const { bpFilteredData } = useSelector((state) => state.sortedReportsBP);

  useEffect(()=>{
    console.log(items)
  },[items])
  useEffect(()=>{
    console.log(filteredData)
  },[filteredData])
  useEffect(()=>{
    console.log(bpFilteredData)
  },[bpFilteredData])

  if(items.length > 0){
    if( items.length > 0 &&  filteredData.length > 0){
      reports = [...items, ...filteredData]
      console.log('items and filteredData')
      console.log(reports) 
    }
    else{
      
      reports = items
    }
    // dispatch(setItems([]))
  }

  

  return (
  <>
  
  
   <div className='w-[99%] mx-auto mt-2 flex large-desktop:py-6 large-desktop:gap-8 flex-col justify-start items-center h-[78%]   bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] rounded-[15px]'>
     <div className='desktop:w-full flex large-desktop:w-[98%]  justify-between items-center '>
       <p className='desktop:text-[16px] large-desktop:text-[2rem] text-[#827F7F] p-4'>Total Reports : {reports.length}</p>
       <div className='desktop:w-[96px] large-desktop:w-[200px] mr-2 bg-[#FFFFFF] shadow-[0_1px_2px_2px_#00000040] rounded-[8px] flex justify-evenly items-center large-desktop:h-[64px] desktop:h-[32px]'>
         <span className='cursor-pointer active:scale-95'><img src='menu.svg' alt='menu' /></span>
         |
         <span className='cursor-pointer active:scale-95'><img src='boxmenu.svg' alt='menu' /></span>
       </div>
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
         <tbody className='h-full' >
           {reports.map((report, index) => (
             <tr key={index} className='bg-[#FFEFEF] large-desktop:h-[100px] cursor-pointer h-[62px] rounded-[8px] '>
               <td className='desktop:text-[20px] large-desktop:text-[3rem] pl-4'>{report.Name}</td>
               <td className='desktop:text-[20px] large-desktop:text-[3rem]' >{report.Member.Age}</td>
               <td className='desktop:text-[20px] large-desktop:text-[3rem]' >{`${report.Mobile.slice(0, 7)}..`}</td>
               <td className='desktop:text-[20px] large-desktop:text-[3rem]' >{`${report?.cnic?.slice(0, 9)}..`}</td>
               <td className='desktop:text-[20px] large-desktop:text-[3rem]' >{report.Nation}</td>
               <td className='desktop:text-[20px] large-desktop:text-[3rem]' >{report?.created}</td>
               <td className=' desktop:w-[70px]   desktop:h-[55px] large-desktop:h-[100px]   flex justify-between items-center ' ><img src="download.svg" alt='download' className='large-desktop:w-16 large-desktop:h-16' />
                <Link className='w-[50%] desktop:mt-4 h-[50%]' to={`/patient-report/${report.sk}`} >
               <img src='info.png' alt='menu' className='desktop:w-6 large-desktop:w-26 large-desktop:h-16 cursor-pointer desktop:h-4  ' />
                </Link>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
     {/* <div className='flex pb-4 w-full  justify-center '>
       <button onClick={handlePrevPage} disabled={currentPage === 1} className='px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50'>&lt;</button>
       {[...Array(totalPages)].map((_, index) => (
         <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-white border'}`}>{index + 1}</button>
       ))}
       <button onClick={handleNextPage} disabled={currentPage === totalPages} className='px-3 py-1 mx-1 bg-gray-300 rounded disabled:opacity-50'>&gt;</button>
     </div> */}
   </div>
  </>
  );
};

export default ReportListPaginationComp;