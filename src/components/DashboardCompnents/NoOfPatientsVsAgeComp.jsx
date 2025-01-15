import React from 'react'
import BarChart from '../Charts/BarChart'

const NoOfPatientsVsAgeComp = () => {
  return (
    <div className='w-full h-[30%]   flex flex-col justify-center items-center bg-[#FAFAFA] shadow-[0_4px_4px_3px_#FA6E6E40] rounded-[15px] ' >
      <div className='w-[95%] h-[10%] px-2 flex justify-between items-center' >
        <div className='w-[30%] flex justify-center gap-1 items-center h-full ' >
          <div className='bg-[#CC0001] w-[21px] h-[10px]' >

          </div>
          <p className='text-[1rem] font-bold text-black' >Hypertension</p>
        </div>

        <h1 className='text-[1rem] font-bold  border-blue-900 text-black ' >Age-wise Distribution</h1>
        <div className='w-[30%] flex justify-center gap-1 items-center h-full ' >
          <div className='bg-[#F9B9B4] w-[21px] h-[10px]' >

          </div>
          <p className='text-[1rem] font-bold text-black' >Normotensive</p>
        </div>
      </div>
      <BarChart />
    </div>
  )
}

export default NoOfPatientsVsAgeComp