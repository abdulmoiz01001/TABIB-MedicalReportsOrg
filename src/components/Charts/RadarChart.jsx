import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useMediaQuery } from 'react-responsive';

ChartJS.register(...registerables);

const RadarChart = ({ details }) => {
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 }); // 2xl
  const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (details) {
      // Extract labels and data from the `details` prop
      const labels = Object.keys(details);
      const data = Object.values(details);

      // Prepare the chart data
      const temperamentData = {
        labels: labels,
        datasets: [
          {
            label: 'Temperament Levels',
            data: data,
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red
            borderColor: '#CC0001', // Dark red
            borderWidth: 1,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
          },
        ],
      };

      setChartData(temperamentData);
    }
  }, [details]);

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
            size: isLargeDesktop ? 35 : isLaptop ? 11 : 15,
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
      <h1 className="desktop:text-[1rem] laptop:text-[0.7rem] large-desktop:text-[1.5rem] text-center font-semibold text-black">
        Temperament Graph
      </h1>
      {chartData ? (
        <div className="w-[80%] flex  h-[80%] justify-center items-center large-desktop:p-4 large-desktop:h-[500px]">
          <Radar data={chartData} options={chartOptions} />
        </div>
      ) : (
        <p>Loading chart...</p>
      )}
    </>
  );
};

export default RadarChart;
