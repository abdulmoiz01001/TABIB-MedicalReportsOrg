import React from 'react'
import BarChart from '../Charts/BarChart'

const NoOfPatientsVsAgeComp = () => {
  return (
    <div className='w-full h-[40%] pt-2 flex flex-col justify-center items-center bg-[#FAFAFA] shadow-[0_4px_4px_3px_#FA6E6E40] rounded-[15px] ' >
       <h1 className='text-[0.625rem] font-bold text-black ' >No of Patients vs Age</h1>
      <BarChart />
    </div>
  )
}

export default NoOfPatientsVsAgeComp