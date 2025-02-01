import React, { useEffect } from 'react';
import ProgressBarComp from './ProgressBarComp';
import clsx from "clsx"
// import TempProgressBarComp from "../DashboardCompnents/TempProgressBarComp";

const OtherTemperamentIndicesComp = ({ reportsCounts, data }) => {

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  const containerStyles = clsx(
    'w-full h-[50%] flex flex-col desktop:gap-0 py-2 large-desktop:gap-0 justify-start items-center rounded-[15px] bg-[#FAFAFA] px-2 border border-[#CC0001]'
  );

  const headingStyles = clsx(
    'text-[#000000] laptop:text-[0.7rem] mobile:text-[0.7rem] tablet:text-[0.7rem] desktop:text-[1rem] large-desktop:text-[1.5rem] text-center font-bold'
  );

  return (
    <div className={containerStyles}>
      <h1 className={headingStyles}>Other Temperament Indices</h1>
      
      <ProgressBarComp 
        reportsCounts={reportsCounts} 
        details={data} 
        imgSrc="temperature.svg" 
        title="Temperature" 
        percentage={data.temperature} 
        min={96.8} 
        max={98.6} 
      />
      
      <ProgressBarComp 
        reportsCounts={reportsCounts}  
        imgSrc="spo2.svg" 
        title="SpO2" 
        percentage={data.spO2.toString().slice(0, 2)} 
        min={95} 
        max={100} 
      />
      
      <ProgressBarComp 
        reportsCounts={reportsCounts} 
        imgSrc="sleep.svg" 
        title="Sleep" 
        percentage={85} 
        firstValue={data.sleep.insomnia} 
        secondValue={data.sleep.normal} 
        thirdValue={data.sleep.hypersomnia} 
        firstState={"Insomnia"} 
        secondState={"Normal"} 
        thirdState={"Hypersomnia"} 
        min={95} 
        max={100} 
      />
      
      <ProgressBarComp 
        reportsCounts={reportsCounts} 
        imgSrc="urine.svg" 
        title="Urine" 
        percentage={27} 
        firstValue={data.urine.light} 
        secondValue={data.urine.normal} 
        thirdValue={data.urine.dark} 
        firstState={"Light"} 
        secondState={"Normal"} 
        thirdState={"Dark"} 
        min={95} 
        max={100} 
      />
      
      <ProgressBarComp 
        reportsCounts={reportsCounts} 
        imgSrc="tool.svg" 
        title="Stool" 
        percentage={57}   
        firstValue={data.stool.diarrhea} 
        secondValue={data.stool.normal} 
        thirdValue={data.stool.constipation} 
        firstState={"Diarrhea"} 
        secondState={"Normal"} 
        thirdState={"Constipation"} 
        min={95} 
        max={100} 
      />
    </div>
  ); 
};

export default OtherTemperamentIndicesComp;
