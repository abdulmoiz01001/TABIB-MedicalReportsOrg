import React, { useEffect } from 'react';
import clsx from 'clsx'; // Import clsx for dynamic class management
import RadarChart from '../Charts/RadarChart';

const TemperamentCommunityComp = ({ data }) => {


  // Tailwind CSS classes as variables
  const containerClasses = clsx(
    'w-full',
    'h-[39%]',
    'flex',
    'flex-col',
    'justify-center',
    'gap-2',
    'items-center',
    'bg-[#FAFAFA]',
    'border',
    'border-[#CC0001]',
    'rounded-[15px]'
  );

  return (
    <div className={containerClasses}>
      <RadarChart details={data} />
    </div>
  );
}

export default TemperamentCommunityComp;
