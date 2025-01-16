import React from 'react'
import SpeedoMeter from '../Charts/Speedometer'

const PulseRateAndBloodPresureComp = () => {
    return (
        <>
            <div className='w-[39%] h-[90%] border border-[#CC0001] bg-[#FAFAFA]  rounded-[15px] flex flex-col justify-around items-center ' >
                    <h1 className='text-[#000000] large-desktop:text-[2.5rem]  desktop:text-[1.2rem] text-center font-bold'>Average Pulse Rate and Blood Pressure</h1>
                 <div className='flex w-full desktop:justify-center large-desktop:justify-evenly items-center  large-desktop:mb-3' >

                {/* Pulse Rate Speedometer */}
                <SpeedoMeter
                    value={72}
                    maxValue={180}
                    label="Pulse Rate"
                    unit="BPM"
                    // needleColor="blue"
                    // segmentColors={['#DFF2FF', '#70C1FF', '#005B96']}
                    />

                {/* Systolic Speedometer */}
                <SpeedoMeter
                    value={120}
                    maxValue={180}
                    label="Systolic"
                    unit="mmHg"
                    // needleColor="green"
                    // segmentColors={['#E0FFE0', '#80FF80', '#008000']}
                    />

                {/* Diastolic Speedometer */}
                <SpeedoMeter
                    value={80}
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