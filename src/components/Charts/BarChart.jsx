import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";
import { useMediaQuery } from "react-responsive";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const BarComp = ({ details }) => {
  // Extract labels (age) and data for hypertensive and normotensive from the 'details' prop
  const labels = Object.keys(details);  // Get the age groups (30, 40, 50, ...)
  const hypertensiveData = labels.map((label) => details[label].hypertensive);  // Data for hypertensive
  const normotensiveData = labels.map((label) => details[label].normotensive);  // Data for normotensive

  useEffect(() => {
    console.log("normation", details);
  }, [details]);

  // Define media queries for responsive font size
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });
  const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 });
  const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 823 });    // md
  const isMobile = useMediaQuery({ maxWidth: 639 });             // sm and below

  const chartRef = useRef(null);

  // Prepare the data object for the chart
  const data = {
    labels,  // Age groups as the X-axis labels
    datasets: [
      {
        label: "Hypertension",
        // data: [100,80],  // Data for hypertensive
        data: [hypertensiveData],
        backgroundColor: "rgba(255, 0, 0, 0.8)",  // Red color for hypertensive
        barThickness: isLargeDesktop ? 45 : 25,  // Controlled bar width based on screen size
      },
      {
        label: "Normotensive",
        // data: [20,10],  // Data for normotensive
        data: [normotensiveData],
        backgroundColor: "rgba(255, 182, 193, 0.8)",  // Light pink color for normotensive
        barThickness: isLargeDesktop ? 45 : 25,  // Controlled bar width based on screen size
      },
    ],
  };

  // Dynamically set font size based on screen size
  const titleFontSize = isLargeDesktop
    ? 30
    : isDesktop
      ? 16
      : isLaptop
        ? 11 :isTablet ? 10
        : 14;

  // Chart options with customized scales and labels
  const options = {
    responsive: true,
    layout: {
      padding: {
        right: 0,
        left: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#000",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Age",
          color: "#000",
          font: {
            size: titleFontSize,  // Dynamically change font size
          },
        },
        ticks: {
          color: "#000",
          font: {
            size: titleFontSize,  // Dynamically change font size
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of patients",
          color: "#000",
          font: {
            size: titleFontSize,  // Dynamically change font size
            weight: "bold",
          },
        },
        ticks: {
          color: "#000",
          font: {
            size: titleFontSize,  // Dynamically change font size
          },
          beginAtZero: true,  // Start the y-axis from 0
          min: 0,  // Set the minimum value for the y-axis
          max: 100,  // Set the maximum value for the y-axis
          stepSize: 10,  // Set the step size to 10setSize:10,
          beginAtZero: true,
        },
      },
    },
    animation: false,  // Keep bars static
  };

  return (
    <div className="flex h-[95%] justify-center px-2 w-full items-center rounded-lg shadow-md">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BarComp;
