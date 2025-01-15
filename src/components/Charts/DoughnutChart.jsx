import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Overweight', 'Obese', 'Normal', 'Underweight'],
    datasets: [
      {
        data: [31, 56, 11, 70],
        backgroundColor: ['#FF4D4D', '#FF6666', '#FF9999', '#FFCCCC'],
        hoverBackgroundColor: ['#FF3333', '#FF5050', '#FF8080', '#FFB3B3'],
        borderColor: '#FFFFFF',
        hoverOffset: 10,
      },
    ],
  };

  const zigzagLinePlugin = {
    id: 'zigzagLine',
    afterDatasetsDraw: (chart) => {
      const { ctx, width, height } = chart;
      const meta = chart.getDatasetMeta(0);

      meta.data.forEach((arc, index) => {
        const angle = (arc.startAngle + arc.endAngle) / 2;
        const outerRadius = arc.outerRadius;
        const centerX = width / 2;
        const centerY = height / 2;

        // Start point at arc edge
        const startX = centerX + Math.cos(angle) * outerRadius;
        const startY = centerY + Math.sin(angle) * outerRadius;

        // Midpoint for the zigzag
        const midX = centerX + Math.cos(angle) * (outerRadius + 10);
        const midY = centerY + Math.sin(angle) * (outerRadius + 10);

        // Zigzag horizontal line
        const zigzagLength = 10;
        const endX = midX + (angle > Math.PI ? -zigzagLength : zigzagLength);
        const endY = midY;

        // Draw zigzag line
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(midX, midY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw data value
        ctx.font = '18px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = angle > Math.PI ? 'right' : 'left';
        ctx.fillText(`${data.datasets[0].data[index]}`, endX + (angle > Math.PI ? -5 : 5), endY - 2);
      });
    },
  };

  const options = {
    responsive: true,
    layout: {
      padding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
    },
    maintainAspectRatio: true,
    cutout: '60%',
    plugins: {
      legend: { display: false },
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
  };

  return (
    <div style={{ width: '100%', height: '100%' }} className='flex flex-col  justify-center items-center'>
      <h3 className="text-[1.2rem] font-bold text-[#000000]">Hypertension By BMI Classification</h3>
      <div className='w-full h-[70%] flex justify-center items-center ' >

      <Doughnut data={data} options={options} plugins={[zigzagLinePlugin]} />
      </div>
        {/* Custom Legend */}
        <div className='w-full flex h-[20%]  justify-center  items-center gap-2 flex-wrap' >
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "start", gap: "10px", width: '40%',  textAlign: 'center' }}>
          <div
            style={{
              width: '25px',
              height: '25px',
              backgroundColor: '#FF4D4D',
              borderRadius: '50%',
              // margin: '0 auto 5px',
            }}
          ></div>
          <span style={{ fontSize: '15px', color: '#333' }}>Overweight</span>
        </div>
        <div  style={{ display: 'flex', alignItems: "center", justifyContent: "start", gap: "10px", width: '40%',  textAlign: 'center' }}>
          <div
            style={{
              width: '25px',
              height: '25px',
              backgroundColor: '#FF6666',
              borderRadius: '50%',
              // margin: '0 auto 5px',
            }}
          ></div>
          <span style={{ fontSize: '15px', color: '#333' }}>Obese</span>
        </div>


        <div style={{ display: 'flex', alignItems: "center", justifyContent: "start", gap: "10px", width: '40%',  textAlign: 'center' }}>
          <div
            style={{
              width: '25px',
              height: '25px',
              backgroundColor: '#FFCCCC',
              borderRadius: '50%',
              // margin: '0 auto 5px',
            }}
          ></div>
          <span style={{ fontSize: '15px', color: '#333' }}>Underweight</span>
        </div>
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "start", gap: "10px", width: '40%',  textAlign: 'center' }}>
          <div
            style={{
              width: '25px',
              height: '25px',
              backgroundColor: '#FF9999',
              borderRadius: '50%',
              // margin: '0 auto 5px',
            }}
          ></div>
          <span style={{ fontSize: '15px', color: '#333' }}>Normal</span>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
