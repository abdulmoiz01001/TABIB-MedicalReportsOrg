import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useMediaQuery } from 'react-responsive';

ChartJS.register(...registerables);

const RadarChart = ({details}) => {
  useEffect(() => {
  console.log(details)
  },[details])
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });      // 2xl
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const temperamentData = {
      labels: ['M', 'H*', 'H', 'O*', 'D', 'C*', 'C', 'M*'],
      datasets: [
        {
          label: 'Temperament Levels',
          data: [75, 65, 90, 50, 60, 85, 70, 80], // Replace with your data
          backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red
          borderColor: 'rgba(255, 99, 132, 1)', // Dark red
          borderWidth: 2,
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
        },
      ],
    };

    setChartData(temperamentData);
  }, []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      r: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Light grid lines
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.2)', // Angle lines
        },
        pointLabels: {
          color: 'black',
          font: {
            size: isLargeDesktop ? 45 : 15,
          },
        },
        ticks: {
          display: false, // Hide ticks on axes
        },
      },
    },
  };

  return (
    <>
      <h1 className='desktop:text-[1rem] large-desktop:text-[2.5rem] text-center font-semibold text-black ' >
        Temperament Graph
      </h1>
      {chartData ? (
        <div className='w-full h-[90%] ' >

        <Radar data={chartData} options={chartOptions}  />
        </div>
      ) : (
        <p>Loading chart...</p>
      )}
    </>

  );
};

export default RadarChart;
