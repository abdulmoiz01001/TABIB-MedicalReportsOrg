import React from 'react';
import clsx from 'clsx';
import DoughnutChart from '../Charts/DoughnutChart';

const HypertensionComp = ({ data }) => {
  const containerClass = clsx(
    'flex flex-col h-[50%] w-full justify-center items-center',
    'border border-[#CC0001] rounded-[15px] bg-[#FAFAFA]'
  );

  return (
    <div className={containerClass}>
      <DoughnutChart details={data} />
    </div>
  );
};

export default HypertensionComp;
