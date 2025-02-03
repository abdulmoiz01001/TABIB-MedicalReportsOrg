import React from "react";
import { clsx } from "clsx";
import SpeedoMeter from "../Charts/Speedometer";

const PulseRateAndBloodPresureComp = ({ data }) => {
  const containerClass = clsx(
    "w-full h-full border border-[#CC0001] bg-[#FAFAFA] rounded-[15px] flex flex-col items-center justify-center",
    "mobile:py-2 tablet:py-2",
    "large-desktop:w-[45%] large-desktop:py-[5px]",
    "desktop:w-[45%] desktop:py-[5px]"
  );

  const titleClass = clsx(
    "text-[#000000] text-center font-bold",
    "mobile:text-[0.7rem] tablet:text-[0.7rem]",
    "large-desktop:text-[1.5rem]",
    "desktop:text-[1rem]",
    "laptop:text-[0.7rem]"
  );

  const speedometerContainerClass = clsx(
    "flex w-full items-center",
    "mobile:justify-evenly",
    "tablet:justify-evenly",
    "desktop:justify-evenly",
    "large-desktop:justify-evenly large-desktop:h-[85%] large-desktop:mb-0",
    "laptop:justify-evenly"
  );

  return (
    <div className={containerClass}>
      <div className="h-[15%] w-full">
        <h1 className={titleClass}>Average Pulse Rate and Blood Pressure</h1>
      </div>

      <div className={speedometerContainerClass}>
        {/* Pulse Rate Speedometer */}
        <SpeedoMeter value={data?.pluse} maxValue={180} label="Pulse Rate" unit="BPM" />

        {/* Systolic Speedometer */}
        <SpeedoMeter value={data?.systolic} maxValue={180} label="Systolic" unit="mmHg" />

        {/* Diastolic Speedometer */}
        <SpeedoMeter value={data?.diastolic} maxValue={120} label="Diastolic" unit="mmHg" />
      </div>
    </div>
  );
};

export default PulseRateAndBloodPresureComp;
