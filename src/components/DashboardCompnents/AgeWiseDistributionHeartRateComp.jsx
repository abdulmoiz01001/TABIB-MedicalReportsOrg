import React from 'react'
import LineChartComp from '../Charts/LineChartComp';

const AgeWiseDistributionHeartRateComp = () => {
    const ageData = [10, 20, 30, 40, 50, 60, 70, 80, 90]; // X-axis (Age)
    const heartRateData = [2, 70, 3, 21, 9, 98, 50, 30, 60 ,2, 70, 3, 21, 9, 98, 50, 30, 60]; // Y-axis (Heart Rate)
  
    return (
        <>
            <div className='w-full h-[30%]   bg-[#FAFAFA] flex justify-center items-center border border-[#CC0001] rounded-[15px] ' >
            <LineChartComp ageData={ageData} heartRateData={heartRateData} />
            </div>
        </>
    )
}

export default AgeWiseDistributionHeartRateComp