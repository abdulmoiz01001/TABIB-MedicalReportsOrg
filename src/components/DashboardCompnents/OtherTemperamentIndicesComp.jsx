import React from 'react'
import ProgressBarComp from './ProgressBarComp'
import TempProgressBarComp from "../DashboardCompnents/TempProgressBarComp"

const OtherTemperamentIndicesComp = () => {
  return (
    <>
    <div className='w-full flex flex-col gap-1 justify-start items-center h-[60%] rounded-[15px] bg-[#FAFAFA] px-2 shadow-[0_4px_4px_3px_#FA6E6E40]' >
      <h1 className='text-[#000000]  text-[1.2rem] text-center  font-bold'>Other Temperament Indices</h1>
      <TempProgressBarComp />
     <ProgressBarComp title="SpO2" percentage={97} min={95} max={100} />
     <ProgressBarComp title="Sleep" percentage={85} firstState={"Insomnia"} secondState={"Normal"} thiredState={"Hypersomnia"} min={95} max={100} />
     <ProgressBarComp title="Urine" percentage={27} firstState={"Light"} secondState={"Normal"} thiredState={"Dark"}  min={95} max={100} />
     <ProgressBarComp title="Stool" percentage={57} firstState={"Diarrhea"} secondState={"Normal"} thiredState={"Constipation"} min={95} max={100} />
    </div>
    </>
  ) 
}

export default OtherTemperamentIndicesComp