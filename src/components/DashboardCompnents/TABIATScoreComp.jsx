import React, { useEffect } from 'react';
import DynamicDoughnutChart from '../Charts/SingleDoughnutChart';
import clsx from 'clsx';

const TABIATScoreComp = ({ data }) => {

  // Class variables
  const containerClasses = clsx(
    'w-full flex justify-between items-center h-[20%] bg-[#FAFAFA] border border-[#CC0001] rounded-[15px]'
  );

  const leftSectionClasses = clsx(
    'w-[50%] large-desktop:pl-8 laptop:pl-4  mobile:pr-6 h-full flex-col flex justify-center mobile:items-end desktop:gap-4 desktop:items-end large-desktop:items-start border-blue-900'
  );

  const headingClasses = clsx(
    'mobile:text-[0.75rem] tablet:text-[0.7rem] desktop:text-[1rem] laptop:text-[0.7rem] large-desktop:text-[1.5rem] text-start font-bold text-black'
  );

  const imageContainerClasses = clsx(
    'desktop:w-[80%] mobile:w-[60%] mobile:gap-[4px] desktop:justify-end tablet:justify-end large-desktop:w-full mobile:py-4 flex mobile:justify-end justify-start laptop:gap-4 desktop:gap-5 items-center'
  );

  const logoImageClasses = clsx(
    'desktop:w-[40px] laptop:w-[30px] laptop:h-[30px] large-desktop:w-[90px] desktop:h-[40px] large-desktop:h-[120px]'
  );

  const liveImageClasses = clsx(
    'desktop:w-[40px] mobile:w-[30px] mobile:h-[30px] large-desktop:w-[70px] laptop:w-[30px] laptop:h-[30px] desktop:h-[40px] large-desktop:h-[70px]'
  );

  const liveTextClasses = clsx(
    'desktop:text-[1rem] laptop:text-[0.8rem] large-desktop:text-[2rem]'
  );

  const universityHeadingClasses = clsx(
    'desktop:text-[1rem] mobile:text-[0.7rem] tablet:text-[0.7rem] laptop:text-[0.7rem] large-desktop:text-[1.5rem] text-start font-bold text-[#CC0001]'
  );

  const rightSectionClasses = clsx(
    'w-[40%] mobile:w-[50%] mobile:items-start h-full large-desktop:h-[80%] flex-col flex justify-center items-center border-blue-900'
  );

  return (
    <>
      <div className={containerClasses}>
        <div className={leftSectionClasses}>
          <h1 className={headingClasses}>Avg. TABIAT Score</h1>
          <div className={imageContainerClasses}>
            <img
              src="jamiya.svg"
              alt="logo"
              className={logoImageClasses}
            />
            <img
              src="live.gif"
              alt="live"
              className={liveImageClasses}
            />
            <span className={liveTextClasses}>Live</span>
          </div>
          <h1 className={universityHeadingClasses}>Hamdard University</h1>
        </div>
        <div className={rightSectionClasses}>
          <DynamicDoughnutChart
            value={data}
            showCenterValue={true}
            showSegmentLines={false}
            lay={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TABIATScoreComp;
