import React, { useEffect } from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import { useMediaQuery } from 'react-responsive';

const SpeedoMeter = ({
  value = 0,
  maxValue = 280,
  minValue = 0,
  label = "Pulse Rate",
  unit = "BPM",
  needleColor = "grey",
  segmentColors = ['#FFCCCC', '#FF6666', '#FF0000'],
  needleHeightRatio = 0.3,
  needleBaseWidth = 6
}) => {
  // Define media queries based on Tailwind custom breakpoints
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });
  const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 });
  const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 823 });    // md
    const isMobile = useMediaQuery({ maxWidth: 639 });             // sm and below

  // Dynamically set width and height
  const speedometerWidth = isLargeDesktop
    ? 235  // Large Desktop (4K and ultra-wide screens)
    : isDesktop
      ? 130  // Desktop
      : isLaptop
        ? 120  // Laptop
         : isTablet ? 105 
        : 10;  // Default (Mobile/Tablet)

  const speedometerHeight = isLargeDesktop
    ? 150  // Large Desktop
    : isDesktop
      ? 65  // Desktop
      : isLaptop
        ? 65  // Laptop
        : isTablet ? 55
        : 10;  // Default (Mobile/Tablet)

  const ringWidth = isLargeDesktop ?
    45 : isDesktop ?
      15 : isLaptop ?
        10 : 15;

        useEffect(() => {
          console.log( speedometerHeight , speedometerWidth )

        },[speedometerWidth ,speedometerHeight])

  return (
    <>
     <div className='
       flex flex-col justify-center   items-center rounded-lg
     
     '>
      <ReactSpeedometer
        ringWidth={ringWidth}
        maxSegmentLabels={0}
        segments={3}
        width={speedometerWidth}   // Dynamically set width
        height={speedometerHeight} // Dynamically set height
        needleColor={needleColor}
        segmentColors={segmentColors}
        value={value}
        minValue={minValue}
        maxValue={maxValue}
        needleHeightRatio={needleHeightRatio}
        needleBaseWidth={needleBaseWidth}
        needleTransition='easeElastic'
        valueText=""
        currentValueText=""
      />

      <div className='w-full flex flex-col  justify-center items-center'>
        <p className='desktop:text-[1rem] tablet:text-[0.6rem] laptop:text-[0.8rem] large-desktop:text-[2.5rem] text-center large-desktop: font-medium text-[#CC0001]'>{value} {unit}</p>
        <p className='desktop:text-[1.2rem] laptop:text-[0.8rem] tablet:text-[0.7rem] large-desktop:text-[3rem] text-center font-semibold text-[#000000]'>{label}</p>
      </div>
     </div>
        </>
  );
};

export default SpeedoMeter;
