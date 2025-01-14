import React from 'react'
import SpeedoMeter from '../Charts/Speedometer'

const PulseRateAndBloodPresureComp = () => {
    return (
        <>
            <div className='w-[39%]  shadow-[0_4px_4px_3px_#FA6E6E40] bg-[#FAFAFA] h-[115px] border-2 rounded-[15px] flex flex-col justify-center items-center ' >
                    <h1 className='text-[#000000] text-[15px] text-center font-bold'>Average Pulse Rate and Blood Pressure</h1>
                 <div className='flex w-full justify-center items-center  ' >

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