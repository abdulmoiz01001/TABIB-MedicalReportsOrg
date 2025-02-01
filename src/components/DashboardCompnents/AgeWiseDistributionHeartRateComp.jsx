import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import LineChartComp from '../Charts/LineChartComp';

const AgeWiseDistributionHeartRateComp = ({ data }) => {
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

    // Tailwind class variables
    const containerClass = 'w-full h-[32.5%] bg-[#FAFAFA] laptop:pt-2 flex flex-col justify-center items-center border border-[#CC0001] rounded-[15px]';
    const headerClass = 'desktop:text-[1rem] mobile:py-2 tablet:py-2 laptop:text-[0.7rem] tablet:text-[0.7rem] mobile:text-[0.7rem] font-bold large-desktop:text-[1.5rem] border-blue-900 text-black';
    const chartContainerClass = 'w-full h-[85%]';

    return (
        <div className={clsx(containerClass)}>
            <h1 className={clsx(headerClass)}>
                Age-wise Distribution of Heart Rate
            </h1>
            <div className={clsx(chartContainerClass)}>
                <LineChartComp ageData={ageData} heartRateData={heartRateData} />
            </div>
        </div>
    );
};

export default AgeWiseDistributionHeartRateComp;
