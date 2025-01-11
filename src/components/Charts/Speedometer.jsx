import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const SpeedoMeter = ({
  value = 0,         // Current value on the speedometer
  maxValue = 280,    // Maximum value for the gauge
  minValue = 0,      // Minimum value for the gauge
  label = "Pulse Rate",   // Title under the speedometer
  unit = "BPM",           // Unit of measurement (e.g., BPM, mmHg)
  needleColor = "grey",   // Custom needle color
  segmentColors = ['#FFCCCC', '#FF6666', '#FF0000'],  // Segment colors
  needleHeightRatio = 0.3,  // Needle height
  needleBaseWidth = 6       // Needle thickness
}) => {
  return (
    <div className='flex flex-col justify-center  items-center  rounded-lg'>
      <ReactSpeedometer
        ringWidth={15}
        maxSegmentLabels={0}
        segments={3}
        width={110}
        height={55}
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

      <div className='w-full flex flex-col justify-center items-center'>
        <p className='text-[12px] text-center font-medium text-[#CC0001]'>{value} {unit}</p>
        <p className='text-[15px] text-center font-semibold text-[#000000]'>{label}</p>
      </div>
    </div>
  );
};

export default SpeedoMeter;
