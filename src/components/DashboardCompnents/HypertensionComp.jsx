import React from 'react'
import DoughnutChart from '../Charts/DoughnutChart'

const  HypertensionComp = ({data}) => {
  return (
    <>
    <div className=' flex flex-col h-[40%] w-full justify-center items-center border border-[#CC0001] rounded-[15px] bg-[#FAFAFA] ' >
      {/* <h1 className='text-[#000000] text-[10px] text-center font-bold'>Hypertension By BMI Classification</h1> */}
        <DoughnutChart details={data} />
    </div>
    </>
  )
}

export default HypertensionComp