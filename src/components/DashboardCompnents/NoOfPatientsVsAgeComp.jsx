import React from 'react';
import clsx from 'clsx';
import BarChart from '../Charts/BarChart';

const NoOfPatientsVsAgeComp = ({ data, totalCount }) => {
  // Define class variables for different components
  const containerClass = 'w-full h-[32.5%] flex flex-col justify-end items-center bg-[#FAFAFA] border border-[#CC0001] rounded-[15px]';
  const headerClass = 'desktop:text-[1rem] mobile:py-2 tablet:py-2 laptop:text-[0.7rem] tablet:text-[0.7rem] mobile:text-[0.7rem] font-bold large-desktop:text-[1.5rem] text-black';
  const contentWrapperClass = 'w-[95%] h-[15%] px-2 flex justify-center items-center';

  return (
    <div className={clsx(containerClass)}>
      <div className={clsx(contentWrapperClass)}>
        <h1 className={clsx(headerClass)}>
          Age-wise Distribution of Hypertension
        </h1>
      </div>
      <BarChart totalCount={totalCount} details={data} />
    </div>
  );
};

export default NoOfPatientsVsAgeComp;
