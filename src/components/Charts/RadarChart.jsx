import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

ChartJS.register(...registerables);

const RadarChart = ({ details }) => {
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 }); // 2xl
  const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });

  const [chartData, setChartData] = useState(null);
  const [opacity, setOpacity] = useState(0.2);

  useEffect(() => {
    let increasing = true;

    const animateShine = setInterval(() => {
      setOpacity((prevOpacity) => {
        if (prevOpacity >= 0.7) increasing = false;
        if (prevOpacity <= 0.2) increasing = true;
        return increasing ? prevOpacity + 0.05 : prevOpacity - 0.05;
      });
    }, 100); // Adjust speed

    return () => clearInterval(animateShine);
  }, []);

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
            backgroundColor: `rgba(255, 99, 132, ${opacity})`, // Dynamic opacity
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
  }, [details, opacity]);

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
  
  // Class variables
  const headingClasses = clsx(
    'text-center font-semibold text-black',
    isLargeDesktop && 'large-desktop:text-[1.5rem]',
    isLaptop && 'laptop:text-[0.7rem]',
    'desktop:text-[1rem] mobile:text-[0.7rem]'
  );

  const chartContainerClasses = clsx(
    'flex justify-center items-center',
    'w-[80%] h-[80%]',
    'large-desktop:p-4 large-desktop:h-[500px]'
  );

  return (
    <>
      <h1 className={headingClasses}>Temperament Graph</h1>
      {chartData ? (
        <div className={chartContainerClasses}>
          <Radar data={chartData} options={chartOptions} />
        </div>
      ) : (
        <p>Loading chart...</p>
      )}
    </>
  );
};

export default RadarChart;
