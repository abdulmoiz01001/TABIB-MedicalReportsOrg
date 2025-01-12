import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const PieCharts = ({ firstValue = 60.3, firstColor = '#FF0000', secondColor = '#FFCCCC' , title}) => {
  // Calculate the second segment dynamically
  const secondValue = 100 - firstValue;

  const data = [
    { title: 'One', value: firstValue, color: firstColor },
    { title: 'Two', value: secondValue, color: secondColor },
  ];

  return (
    <>
      <div className=" w-[70px] flex flex-col justify-center items-center ">
        <h1 className='text-[12px] text-[#CC0001]' >{title}</h1> 
        <PieChart
          data={data}
          startAngle={0}
          lengthAngle={360}
          rounded={false}
          label={({ dataEntry }) =>
            dataEntry.title === 'Two' ? '' : `${dataEntry.value}%`
          }
          animate={true}
          animationEasing="ease-in"
          animationDuration={1000}
          segmentsShift={1}
          labelStyle={{ fontSize: '14px', fill: '#fff' }}
        />
      </div>
    </>
  );
};

export default PieCharts;
