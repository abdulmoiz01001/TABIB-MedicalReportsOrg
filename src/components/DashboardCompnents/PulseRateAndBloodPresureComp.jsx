import React, { useEffect } from 'react'
import SpeedoMeter from '../Charts/Speedometer'

const PulseRateAndBloodPresureComp = ({data}) => {
 
    return (
        <>
            <div className='w-full h-[100%] large-desktop:w-[45%] large-desktop:py-[14px] desktop:py-2 border  border-[#CC0001] bg-[#FAFAFA]  rounded-[15px] flex flex-col justify-center items-center ' >
                <div className='h-[15%]  w-full ' >

                    <h1 className='text-[#000000]  tablet:text-[0.7rem]  large-desktop:text-[1.5rem]  desktop:text-[1rem] laptop:text-[0.8rem] text-center font-bold'>Average Pulse Rate and Blood Pressure</h1>
                </div>
                 <div className='flex w-full mobile:justify-evenly large-desktop:h-[85%] tablet:justify-evenly  desktop:justify-evenly large-desktop:justify-evenly laptop:justify-evenly items-center  large-desktop:mb-0' >

                {/* Pulse Rate Speedometer */}
                <SpeedoMeter
                    
                    value={data?.pluse}
                    maxValue={180}
                    label="Pulse Rate"
                    unit="BPM"
                    // needleColor="blue"
                    // segmentColors={['#DFF2FF', '#70C1FF', '#005B96']}
                    />

                {/* Systolic Speedometer */}
                <SpeedoMeter
                    value={data?.systolic}
                    maxValue={180}
                    label="Systolic"
                    unit="mmHg"
                    // needleColor="green"
                    // segmentColors={['#E0FFE0', '#80FF80', '#008000']}
                    />

                {/* Diastolic Speedometer */}
                <SpeedoMeter
                    value={data?.diastolic}
                    maxValue={120}
                    label="Diastolic"
                    unit="mmHg"
                // needleColor="red"
                // segmentColors={['#FFE0E0', '#FF8080', '#800000']}
                />
                </div>
            </div>
        </>
    )
}

export default PulseRateAndBloodPresureComp