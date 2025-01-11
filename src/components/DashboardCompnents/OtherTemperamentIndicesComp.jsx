import React from 'react'
import ProgressBarComp from './ProgressBarComp'

const OtherTemperamentIndicesComp = () => {
  return (
    <>
    <div className='w-full flex flex-col gap-1 justify-start items-center h-[54%] rounded-[15px] bg-[#FAFAFA] px-2 shadow-[0_4px_4px_3px_#FA6E6E40]' >
      <h1 className='text-[#000000] text-[10px] text-center  font-bold'>Other Temperament Indices</h1>
     <ProgressBarComp title="SpO2" percentage={97} min={95} max={100} />
     <ProgressBarComp title="Sleep" percentage={85} firstState={"Insomnia"} secondState={"Normal"} thiredState={"Hypersomnia"} min={95} max={100} />
     <ProgressBarComp title="Urine" percentage={27} firstState={"Light"} secondState={"Normal"} thiredState={"Dark"}  min={95} max={100} />
     <ProgressBarComp title="Stool" percentage={57} firstState={"Diarrhea"} secondState={"Normal"} thiredState={"Constipation"} min={95} max={100} />
    </div>
    </>
  ) 
}

export default OtherTemperamentIndicesComp