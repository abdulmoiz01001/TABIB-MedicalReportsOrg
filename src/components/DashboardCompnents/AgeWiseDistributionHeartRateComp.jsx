import React, { useEffect, useState } from 'react';
import LineChartComp from '../Charts/LineChartComp';

const AgeWiseDistributionHeartRateComp = ({ data  }) => {
    const [ageData, setAgeData] = useState([]);
    const [heartRateData, setHeartRateData] = useState([]);

    useEffect(() => {
        if (data) {
            // Extract keys (ages) and values (heart rates) dynamically from the data object
            const ages = Object.keys(data); // Extract keys (ages)
            const heartRates = Object.values(data); // Extract values (heart rates)

            // Update the state with mapped data
            setAgeData(ages);
            setHeartRateData(heartRates);
        }
    }, [data]);

    return (
        <>
            <div className='w-full h-[32.5%] bg-[#FAFAFA] laptop:pt-2 flex flex-col justify-around items-center border border-[#CC0001] rounded-[15px]'>
                <h1 className='desktop:text-[1rem] laptop:text-[0.7rem] tablet:text-[0.7rem] mobile:text-[0.7rem] font-bold large-desktop:text-[2.2rem] border-blue-900 text-black'>
                    Age-wise Distribution of Heart Rate
                </h1>
                <LineChartComp ageData={ageData} heartRateData={heartRateData} />
            </div>
        </>
    );
};

export default AgeWiseDistributionHeartRateComp;
