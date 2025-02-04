import React, { useEffect } from 'react';
import BodyTypeLayout from '../Charts/BodyTypeLayout';
import clsx from 'clsx';

const DominantBodyCommunityComp = ({ data }) => {

  // Class variables
  const containerClasses = clsx(
    'w-full pb-4 bg-[#FAFAFA] px-2 border border-[#CC0001] rounded-[15px]',
    'mobile:h-[50%] h-[39%]' // Conditional height for different screen sizes
  );

  const headingClasses = clsx(
    'font-bold text-black text-center py-2',
    'desktop:text-[0.9rem]',
    'mobile:text-[0.7rem] tablet:text-[0.7rem] laptop:text-[0.7rem]',
    'large-desktop:text-[1.5rem]' // Responsive font size
  );

  return (
    <>
      <div className={containerClasses}>
        <h1 className={headingClasses}>
          Dominant Body Type in the Community
        </h1>
        <BodyTypeLayout details={data} />
      </div>
    </>
  );
};

export default DominantBodyCommunityComp;
