import React from 'react'
import DoughnutChart from '../Charts/DoughnutChart'

const  HypertensionComp = () => {
  return (
    <>
    <div className=' flex flex-col h-[40%] w-full justify-center items-center  shadow-[0_4px_4px_3px_#FA6E6E40] rounded-[15px] bg-[#FAFAFA] ' >
      {/* <h1 className='text-[#000000] text-[10px] text-center font-bold'>Hypertension By BMI Classification</h1> */}
        <DoughnutChart />
    </div>
    </>
  )
}

export default HypertensionComp