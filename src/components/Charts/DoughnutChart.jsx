import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Overweight', 'Obese', 'Normal', 'Underweight'],
    datasets: [
      {
        data: [431, 956, 181, 70], // Values
        backgroundColor: ['#FF4D4D', '#FF6666', '#FF9999', '#FFCCCC'], // Colors
        hoverBackgroundColor: ['#FF3333', '#FF5050', '#FF8080', '#FFB3B3'], // Hover colors
        // borderWidth: 3, // Bold border for polished look
        borderColor: '#FFFFFF', // Clean white border between segments
        hoverOffset: 10, // Smooth hover transition
      },
    ],
  };

  const options = {
    responsive: true,
    borderColor: '#333', // Clean white border around the chart
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const value = context.raw;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${value} (${percentage}%)`;
          },
        },
      },
    },
    cutout: '60%', // Doughnut cutout size
  };

  return (
    <div
      style={{
        width: '100%',
        height: '150px',


      }}
      className=' flex flex-col justify-center  p-2 items-center'
    >
      <h3

        className="text-[0.625rem] mb-2 font-bold text-[#000000]"
      >
        Hypertension By BMI Classification
      </h3>
      <Doughnut data={data} options={options} className=' flex justify-center items-center' />

      {/* Custom Legend */}
      <div className='w-full flex  justify-center border-2 items-center gap-2 flex-wrap' >
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "start", gap: "10px", width: '40%',  textAlign: 'center' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#FF4D4D',
              borderRadius: '50%',
              // margin: '0 auto 5px',
            }}
          ></div>
          <span style={{ fontSize: '10px', color: '#333' }}>Overweight</span>
        </div>
        <div  style={{ display: 'flex', alignItems: "center", justifyContent: "start", gap: "10px", width: '40%',  textAlign: 'center' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#FF6666',
              borderRadius: '50%',
              // margin: '0 auto 5px',
            }}
          ></div>
          <span style={{ fontSize: '10px', color: '#333' }}>Obese</span>
        </div>


        <div style={{ display: 'flex', alignItems: "center", justifyContent: "start", gap: "10px", width: '40%',  textAlign: 'center' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#FFCCCC',
              borderRadius: '50%',
              // margin: '0 auto 5px',
            }}
          ></div>
          <span style={{ fontSize: '10px', color: '#333' }}>Underweight</span>
        </div>
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "start", gap: "10px", width: '40%',  textAlign: 'center' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#FF9999',
              borderRadius: '50%',
              // margin: '0 auto 5px',
            }}
          ></div>
          <span style={{ fontSize: '10px', color: '#333' }}>Normal</span>
        </div>
      </div>

    </div>
  );
};

export default DoughnutChart;
