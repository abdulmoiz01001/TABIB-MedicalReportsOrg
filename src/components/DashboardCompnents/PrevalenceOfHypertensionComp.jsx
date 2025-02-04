import React from 'react';
import DynamicDoughnutChart from '../Charts/SingleDoughnutChart';
import PieCharts from '../Charts/PieCharts';
import clsx from "clsx"
import { useMediaQuery } from 'react-responsive';

const PrevalenceOfHypertensionComp = ({ data }) => {
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });
    const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });  
  const isMobile = useMediaQuery({ maxWidth: 639 });

  // Tailwind class variables
  const containerClass = 'w-full h-[32.5%] bg-[#FAFAFA] flex tablet:flex tablet:flex-row tablet:justify-center tablet:items-center mobile:justify-center large-desktop:justify-center large-desktop:items-center mobile:items-center border border-[#CC0001] rounded-[15px]';
  const leftSectionClass = 'w-[65%] flex-col flex justify-center items-center h-full';
  const titleClass = 'desktop:text-[1rem] mobile:py-2 tablet:py-2 tablet:text-[0.7rem] mobile:text-[0.7rem] text-center desktop:mt-2 desktop:leading-4 laptop:text-[0.7rem] large-desktop:text-[1.5rem] font-bold';
  const chartContainerClass = 'w-full flex justify-center items-center h-[85%]';
  const rightSectionClass = 'w-[45%] desktop:w-[20%] flex flex-col justify-center mobile:justify-center tablet:justify-center laptop:justify-around items-center h-full laptop:gap-0 large-desktop:gap-4 gap-2';

  const lay = {
    top: isLaptop ? 48 : 60,
    bottom: isLaptop ? 48 : 60,
    left: isLargeDesktop ? 90 : isMobile ? 50 : 30,
    right: isLargeDesktop ? 90 : isMobile ? 50 : 30,
  };

  return (
    <div className={clsx(containerClass)}>
      <div className={clsx(leftSectionClass)}>
        <h1 className={clsx(titleClass)}>Prevalence of Hypertension</h1>
        <div className={clsx(chartContainerClass)}>
          <DynamicDoughnutChart
            value={data.total}
            Hypertensive={'Hypertensive'}
            Normotensive={'Normotensive'}
            showCenterValue={false}
            showSegmentLines={true}
            lay={lay}
          />
        </div>
      </div>
      <div className={clsx(rightSectionClass)}>
        <PieCharts firstValue={data.male} firstColor="#CC0001" secondColor="#FFB1B1" title="Males" />
        <PieCharts firstValue={data.female} firstColor="#CC0001" secondColor="#FFB1B1" title="Females" />
      </div>
    </div>
  );
};

export default PrevalenceOfHypertensionComp;
