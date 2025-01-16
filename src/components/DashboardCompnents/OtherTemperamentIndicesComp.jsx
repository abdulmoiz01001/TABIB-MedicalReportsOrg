import React from 'react'
import ProgressBarComp from './ProgressBarComp'
import TempProgressBarComp from "../DashboardCompnents/TempProgressBarComp"

const OtherTemperamentIndicesComp = () => {
  return (
    <>
    <div className='w-full flex flex-col desktop:gap-1 large-desktop:gap-2 justify-start items-center h-[60%] rounded-[15px] bg-[#FAFAFA] px-2 border border-[#CC0001]' >
      <h1 className='text-[#000000]  desktop:text-[1.2rem] large-desktop:text-[2.5rem] text-center  font-bold'>Other Temperament Indices</h1>
      <TempProgressBarComp />
     <ProgressBarComp imgSrc="temperature.svg" title="SpO2" percentage={97} min={95} max={100} />
     <ProgressBarComp imgSrc="spo2.svg" title="Sleep" percentage={85} firstState={"Insomnia"} secondState={"Normal"} thiredState={"Hypersomnia"} min={95} max={100} />
     <ProgressBarComp imgSrc="sleep.svg" title="Urine" percentage={27} firstState={"Light"} secondState={"Normal"} thiredState={"Dark"}  min={95} max={100} />
     <ProgressBarComp imgSrc="tool.svg" title="Stool" percentage={57} firstState={"Diarrhea"} secondState={"Normal"} thiredState={"Constipation"} min={95} max={100} />
    </div>
    </>
  ) 
}

export default OtherTemperamentIndicesComp