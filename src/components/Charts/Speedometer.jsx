import React, { useEffect } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { useMediaQuery } from "react-responsive";
import { clsx } from "clsx";

const SpeedoMeter = ({
  value = 0,
  maxValue = 280,
  minValue = 0,
  label = "Pulse Rate",
  unit = "BPM",
  needleColor = "grey",
  segmentColors = ["#FFCCCC", "#FF6666", "#FF0000"],
  needleHeightRatio = 0.3,
  needleBaseWidth = 6,
}) => {
  // Define media queries based on Tailwind custom breakpoints
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });
  const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 });
  const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 823 });

  // Dynamically set width and height
  const speedometerWidth = isLargeDesktop
    ? 165
    : isDesktop
    ? 130
    : isLaptop
    ? 120
    : isTablet
    ? 105
    : 100;

  const speedometerHeight = isLargeDesktop
    ? 90
    : isDesktop
    ? 65
    : isLaptop
    ? 65
    : isTablet
    ? 55
    : 60;

  const ringWidth = isLargeDesktop
    ? 20
    : isDesktop
    ? 15
    : isLaptop
    ? 10
    : 9;

  const valueTextSize = clsx(
    "text-center font-medium text-[#CC0001]",
    isLargeDesktop && "text-[1.5rem]",
    isDesktop && "text-[0.9rem]",
    isLaptop && "text-[0.8rem]",
    isTablet && "text-[0.6rem]"
  );

  const labelTextSize = clsx(
    "text-center font-semibold text-[#000000]",
    isLargeDesktop && "text-[2rem]",
    isDesktop && "text-[0.9rem]",
    isLaptop && "text-[0.8rem]",
    isTablet && "text-[0.7rem]"
  );

  useEffect(() => {
    console.log(speedometerHeight, speedometerWidth);
  }, [speedometerWidth, speedometerHeight]);

  return (
    <div className="flex flex-col justify-center items-center rounded-lg">
      <ReactSpeedometer
        ringWidth={ringWidth}
        maxSegmentLabels={0}
        segments={3}
        width={speedometerWidth}
        height={speedometerHeight}
        needleColor={needleColor}
        segmentColors={segmentColors}
        value={value}
        minValue={minValue}
        maxValue={maxValue}
        needleHeightRatio={needleHeightRatio}
        needleBaseWidth={needleBaseWidth}
        needleTransition="easeElastic"
        valueText=""
        currentValueText=""
      />

      <div className="w-full flex flex-col justify-center items-center">
        <p className={valueTextSize}>
          {parseInt(value)} {unit}
        </p>
        <p className={labelTextSize}>{label}</p>
      </div>
    </div>
  );
};

export default SpeedoMeter;
