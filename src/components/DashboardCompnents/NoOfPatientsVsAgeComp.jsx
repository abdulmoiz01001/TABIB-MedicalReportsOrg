import React from 'react'
import BarChart from '../Charts/BarChart'

const NoOfPatientsVsAgeComp = () => {
  return (
    <div className='w-full h-[193px] pt-2 pr-2 flex flex-col justify-center items-center bg-[#FAFAFA] shadow-[0_4px_4px_3px_#FA6E6E40] rounded-[15px] ' >
      <div className='w-[95%] px-2 flex justify-between items-center' >
        <div className='w-[30%] flex justify-center gap-1 items-center h-full ' >
          <div className='bg-[#CC0001] w-[21px] h-[7px]' >

          </div>
          <p className='text-[0.625rem] font-bold text-black' >Hypertension</p>
        </div>

        <h1 className='text-[0.625rem] font-bold  border-blue-900 text-black ' >Age-wise Distribution</h1>
        <div className='w-[30%] flex justify-center gap-1 items-center h-full ' >
          <div className='bg-[#F9B9B4] w-[21px] h-[7px]' >

          </div>
          <p className='text-[0.625rem] font-bold text-black' >Normotensive</p>
        </div>
      </div>
      <BarChart />
    </div>
  )
}

export default NoOfPatientsVsAgeComp