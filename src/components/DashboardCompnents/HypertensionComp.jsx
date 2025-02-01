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
      {/* <h1 className="text-[#000000] text-[10px] text-center font-bold">Hypertension By BMI Classification</h1> */}
      <DoughnutChart details={data} />
    </div>
  );
};

export default HypertensionComp;
