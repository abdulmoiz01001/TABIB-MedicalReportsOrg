import React from 'react'
import LineChartComp from '../Charts/LineChartComp';

const AgeWiseDistributionHeartRateComp = () => {
    const ageData = [10, 20, 30, 40, 50, 60, 70, 80, 90]; // X-axis (Age)
    const heartRateData = [2, 70, 3, 21, 9, 98, 50, 30, 60]; // Y-axis (Heart Rate)
  
    return (
        <>
            <div className='w-full h-[152px]  bg-[#FAFAFA] flex  shadow-[0_4px_4px_3px_#FA6E6E40] rounded-[15px] ' >
            <LineChartComp ageData={ageData} heartRateData={heartRateData} />
            </div>
        </>
    )
}

export default AgeWiseDistributionHeartRateComp