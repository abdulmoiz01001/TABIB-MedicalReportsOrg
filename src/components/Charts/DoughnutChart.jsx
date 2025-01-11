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
        height : '150px',
        margin: '0 auto',
        // background: 'linear-gradient(145deg, #f7d9d9, #ffffff)', // Gradient background
        // borderRadius: '20px',
        padding: '20px',
        // boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
        textAlign: 'center',
      }}
      className=' flex flex-col justify-center items-center'
    >
      <h3
        style={{
          fontSize: '12px',
          color: '#333',
          fontWeight: 'bold',
          // marginBottom: '20px',
        }}
      >
        Hypertension By BMI Classification
      </h3>
      <Doughnut data={data} options={options} className=' flex justify-center items-center' />
      
        {/* Custom Legend */}
        <div className='w-full flex  justify-start items-center flex-wrap' >
        <div style={{ display:'flex', alignItems:"center", justifyContent:"start",  gap:"10px" , width:'50%',  textAlign: 'center' }}>
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
        <div className='border-2' style={{ display:'flex', alignItems:"center", justifyContent:"start",  gap:"10px" ,   width:'50%', textAlign: 'center' }}>
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
  
     
        <div style={{ display:'flex', alignItems:"center", justifyContent:"start",  gap:"10px" ,  width:'50%', textAlign: 'center' }}>
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
        <div style={{ display:'flex', alignItems:"center", justifyContent:"start", gap:"10px" , width:'50%', textAlign: 'center' }}>
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
