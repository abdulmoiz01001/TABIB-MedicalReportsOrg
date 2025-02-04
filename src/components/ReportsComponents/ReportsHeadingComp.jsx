import React from 'react';
import clsx from 'clsx';

const ReportsHeadingComp = () => {
  // Tailwind CSS class variables
  const containerClasses = 'w-[98%] large-desktop:w-[99%] tablet:pl-3 mobile:pl-3 mx-auto h-[6%]  flex justify-start items-center';
  const logoClasses = 'desktop:w-[81px] w-[100px]  laptop:w-[80px]  large-desktop:w-[180px]';
  const headingClasses = 'font-semibold ml-4 desktop:text-[1.438rem] laptop:text-[1rem] large-desktop:text-[4rem]';

  return (
    <div className={clsx(containerClasses)}>
      <img src="logo.png" alt="headingIcon" className={clsx(logoClasses)} />
      <h1 className={clsx(headingClasses)}>REPORTS</h1>
    </div>
  );
};

export default ReportsHeadingComp;
