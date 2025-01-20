import React from 'react'
import LineBarReact from '../Charts/LineBarReact'

const TrendOfHypertensionComp = ({data}) => {
  return (
    <>
    <div className='w-full h-[32.5%] bg-[#FAFAFA] px-2  flex flex-col justify-around items-center border border-[#CC0001] rounded-[15px] ' >
    <h1 className='desktop:text-[1rem] font-bold large-desktop:text-[2rem] border-blue-900 text-black ' >Monthly Trend of Hypertension</h1>
    
       <LineBarReact details={data} />

    </div>
    </>
  )
}

export default TrendOfHypertensionComp