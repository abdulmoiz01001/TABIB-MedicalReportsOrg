import React from 'react'
import BarChart from '../Charts/BarChart'

const NoOfPatientsVsAgeComp = () => {
  return (
    <div className='w-full h-[32.5%]   flex flex-col justify-end items-center bg-[#FAFAFA] border border-[#CC0001] rounded-[15px] ' >
      <div className='w-[95%] h-[15%] px-2 flex justify-between items-center' >
        <div className='w-[30%] flex justify-center gap-1 items-center h-full ' >
          <div className='bg-[#CC0001] large-desktop:w-[41px] large-desktop:h-[20px] desktop:w-[21px] desktop:h-[10px]' >

          </div>
          <p className='desktop:text-[1rem] large-desktop:text-[2rem] font-bold text-black' >Hypertension</p>
        </div>

        <h1 className='desktop:text-[1rem] font-bold large-desktop:text-[2.2rem] border-blue-900 text-black ' >Age-wise Distribution</h1>
        <div className='w-[30%] flex justify-center gap-1 items-center h-full ' >
          <div className='bg-[#F9B9B4]  large-desktop:w-[41px] large-desktop:h-[20px] desktop:w-[21px] desktop:h-[10px]' >

          </div>
          <p className='desktop:text-[1rem] large-desktop:text-[2rem] font-bold text-black' >Normotensive</p>
        </div>
      </div>
      <BarChart />
    </div>
  )
}

export default NoOfPatientsVsAgeComp