import React from 'react';
import clsx from 'clsx';

const ReportsHeadingComp = () => {
  // Tailwind CSS class variables
  const containerClasses = 'w-[98%] large-desktop:w-[99%] tablet:pl-3 mobile:pl-3 mx-auto h-[6%]  flex justify-start items-center';
  const logoClasses = 'desktop:w-[81px] w-[50px] h-[50px] laptop:w-[50px]  laptop:h-[50px] desktop:h-[50px] large-desktop:w-[120px]';
  const headingClasses = 'font-semibold ml-4 desktop:text-[1.438rem] laptop:text-[1rem] large-desktop:text-[4rem]';

  return (
    <div className={clsx(containerClasses)}>
      <img src="logo.svg" alt="headingIcon" className={clsx(logoClasses)} />
      <h1 className={clsx(headingClasses)}>REPORTS</h1>
    </div>
  );
};

export default ReportsHeadingComp;
