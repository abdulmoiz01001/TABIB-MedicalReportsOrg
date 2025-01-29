import React, { useEffect } from 'react'
import RadarChart from '../Charts/RadarChart'

const TemperamentCommunityComp = ({data}) => {
  useEffect(() => {
  console.log("temperament",data)
  },[data])
  return (
    <>
    <div className='w-full h-[39%]  flex flex-col justify-center gap-2 items-center  bg-[#FAFAFA] border border-[#CC0001] rounded-[15px] ' >
     <RadarChart details={data} />
    </div>
    {/* <div className='w-full h-[39%]  bg-[#FAFAFA] border border-[#CC0001] rounded-[15px] ' >
     <RadarChart details={data} />
    </div> */}
    </>
  )
}

export default TemperamentCommunityComp