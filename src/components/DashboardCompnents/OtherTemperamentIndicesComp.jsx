import React , { useEffect } from 'react'
import ProgressBarComp from './ProgressBarComp'
import TempProgressBarComp from "../DashboardCompnents/TempProgressBarComp"

const   OtherTemperamentIndicesComp = ({reportsCounts , data}) => {

  useEffect(() => {
   console.log("data", data)
  },[data])
  return (
    <>
    <div className='w-full flex flex-col desktop:gap-0 py-2  large-desktop:gap-2 justify-start items-center h-[60%] rounded-[15px] bg-[#FAFAFA] px-2 border border-[#CC0001]' >
      <h1 className='text-[#000000] laptop:text-[0.7rem] tablet:text-[0.7rem] desktop:text-[1rem] large-desktop:text-[2rem] text-center  font-bold'>Other Temperament Indices</h1>
      {/* <TempProgressBarComp details={data} /> */}
     <ProgressBarComp reportsCounts={reportsCounts} details={data} imgSrc="temperature.svg" title="Temperature" percentage={97} min={96.8} max={98.6} />
     <ProgressBarComp reportsCounts={reportsCounts} details={data.sp02} imgSrc="spo2.svg" title="SpO2" percentage={97} min={95} max={100} />
     <ProgressBarComp reportsCounts={reportsCounts} imgSrc="sleep.svg" title="Sleep" percentage={85}  firstValue={data.sleep.insomnia} secondValue={data.sleep.normal} thirdValue={data.sleep.hypersomnia}   firstState={"Insomnia"} secondState={"Normal"} thiredState={"Hypersomnia"} min={95} max={100} />
     <ProgressBarComp reportsCounts={reportsCounts} imgSrc="urine.svg" title="Urine" percentage={27}  firstValue={data.urine.light} secondValue={data.urine.normal} thirdValue={data.urine.dark}             firstState={"Light"} secondState={"Normal"} thiredState={"Dark"}  min={95} max={100} />
     <ProgressBarComp reportsCounts={reportsCounts} imgSrc="tool.svg" title="Stool" percentage={57}   firstValue={data.stool.diarrhea} secondValue={data.stool.normal} thirdValue={data.stool.constipation}  firstState={"Diarrhea"} secondState={"Normal"} thiredState={"Constipation"} min={95} max={100} />
    </div>
    </>
  ) 
}

export default OtherTemperamentIndicesComp