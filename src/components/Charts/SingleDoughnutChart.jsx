import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SingleDoughnutChart = () => {
  const value = 60;  // Filled value
  const remaining = 100 - value;  // Unfilled value

  const data = {
    labels: ['Covered', 'Remaining'],
    datasets: [
      {
        data: [value, remaining],
        backgroundColor: ['#CC0001', '#E0E0E0'], // Red for covered, Grey for uncovered
        hoverBackgroundColor: ['#FF3333', '#B0B0B0'],
        borderColor: '#FFFFFF',
        hoverOffset: 10,
      },
    ],
  };

  const centerTextPlugin = {
    id: 'centerText',
    afterDraw: (chart) => {
      const { ctx, width, height } = chart;
      ctx.save();
      ctx.font = 'bold 24px Arial';
      ctx.fillStyle = '#000000';  // Changed to black
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const percentage = `${value}`;
      ctx.fillText(percentage, width / 2, height / 2);
      ctx.restore();
    },
  };

  const options = {
    responsive: true,
    cutout: '60%',
    plugins: {
      legend: {
        display: false,
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
  };

  return (
    <>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </>
  );
};

export default SingleDoughnutChart;
