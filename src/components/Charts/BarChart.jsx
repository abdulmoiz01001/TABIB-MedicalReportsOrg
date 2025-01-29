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

const BarComp = ({ details , totalCount }) => {
  // Extract labels (age) and data for hypertensive and normotensive from the 'details' prop
  const labels = Object.keys(details);  // Get the age groups (30, 40, 50, ...)
  const hypertensiveData = labels.map((label) => details[label].hypertensive);  // Data for hypertensive
  const normotensiveData = labels.map((label) => details[label].normotensive);  // Data for normotensive

  console.log("hyper data",hypertensiveData)
  console.log("normo data", normotensiveData)

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
        data: hypertensiveData,
        backgroundColor: "rgba(255, 0, 0, 0.8)",  // Red color for hypertensive
        barThickness: isLargeDesktop ?  45 :isDesktop ? 20 : isLaptop ? 20 : isTablet ? 20 : 15,  // Controlled bar width based on screen size
      },
      {
        label: "Normotensive",
        // data: [20,10],  // Data for normotensive
        data: normotensiveData,
        backgroundColor: "rgba(255, 182, 193, 0.8)",  // Light pink color for normotensive
        barThickness: isLargeDesktop ?  45 :isDesktop ? 20 : isLaptop ? 20 : isTablet ? 20 : 15,  // Controlled bar width based on screen size
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
        : 9;

  // Chart options with customized scales and labels
  // const options = {
  //   responsive: true,
  //   layout: {
  //     padding: {
  //       right: 0,
  //       left: 0,
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       display: true,
  //       position: "top",
  //       labels: {
  //         color: "#000",
  //       },
  //     },
  //   },
  //   scales: {
  //     x: {
  //       title: {
  //         display: true,
  //         text: "Age",
  //         color: "#000",
  //         font: {
  //           size: titleFontSize,  // Dynamically change font size
  //         },
  //       },
  //       ticks: {
  //         color: "#000",
  //         font: {
  //           size: titleFontSize,  // Dynamically change font size
  //         },
  //       },
  //     },
  //     y: {
  //       title: {
  //         display: true,
  //         text: "Number of patients",
  //         color: "#000",
  //         font: {
  //           size: titleFontSize,  // Dynamically change font size
  //           weight: "bold",
  //         },
  //       },
  //       ticks: {
  //         color: "#000",
  //         font: {
  //           size: titleFontSize,  // Dynamically change font size
  //         },
  //         beginAtZero: true,  // Start the y-axis from 0
  //         min: 0,  // Set the minimum value for the y-axis
  //         max: 100,  // Set the maximum value for the y-axis
  //         stepSize: 10,  // Set the step size to 10setSize:10,
  //         beginAtZero: true,
  //       },
  //     },
  //   },
  //   animation: false,  // Keep bars static
  // };

  

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
        // ticks: {
        //   color: "#000",
        //   font: {
        //     size: titleFontSize,  // Dynamically change font size
        //     weight:"bold"
        //   },
        //   // beginAtZero: true,  // Start the y-axis from 0
        // },
        grid: {
          display: true,  // Show grid lines for the y-axis
        },
        // This option will make the labels vertical
        suggestedMax: totalCount,
        // suggestedMin: 0,
        // stepSize: 0,  // Set the step size to 10
        ticks: {
          callback: function(value) {
            return value.toString(); // Ensure the label is a string (optional)
          },
          font: {
            size: titleFontSize,  // Dynamically change font size
            weight:"bold"
          },
          autoSkip: false,  // Prevent auto-skip for ticks
          maxRotation: 0,  // Rotate labels to 90 degrees for vertical alignment
          minRotation:0,  // Set the minimum rotation to 90 degrees
        },
      },
    },
    animation: false,  // Keep bars static
  };

  
    // Shine animation effect
    useEffect(() => {
      const chart = chartRef.current;
      if (!chart) return;
  
      const ctx = chart.ctx;
      let shineY = chart.chartArea.bottom;
  
      const animateShine = () => {
        ctx.save();
  
        // Clear previous shine
        ctx.clearRect(
          chart.chartArea.left,
          chart.chartArea.top,
          chart.chartArea.right - chart.chartArea.left,
          chart.chartArea.bottom - chart.chartArea.top
        );
  
        // Draw static bars
        chart.draw();
  
        // Create the shine gradient
        const gradient = ctx.createLinearGradient(0, shineY, 0, shineY + 20);
        gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.4)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  
        // Overlay the shine effect
        ctx.fillStyle = gradient;
        ctx.fillRect(
          chart.chartArea.left,
          shineY,
          chart.chartArea.right - chart.chartArea.left,
          20
        );
  
        ctx.restore();
  
        // Move the shine effect upward
        shineY -= 1;
        if (shineY < chart.chartArea.top) {
          shineY = chart.chartArea.bottom;
        }
  
        requestAnimationFrame(animateShine);
      };
  
      animateShine();
    }, []);

    

    

  return (
    <div className="flex h-[95%] justify-center mobile:pr-1 mobile:px-0 px-2 w-full items-center rounded-lg shadow-md">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BarComp;
