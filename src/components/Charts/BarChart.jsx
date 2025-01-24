// import React, { useEffect, useRef } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Legend,
//   Tooltip,
// } from "chart.js";
// import { useMediaQuery } from "react-responsive";

// ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

// const BarComp = ({details}) => {

//   useEffect(() => {
//    console.log(details)
//   },[details])
//   // Define media queries for responsive font size
//   const isLargeDesktop = useMediaQuery({ minWidth: 2560 });
//   const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 });
//   const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });

//   const chartRef = useRef(null);

//   // const data = {
//   //   labels: ["20", "30", "40", "50", "60", "70", "80", "90"],
   
//   //   datasets: [
//   //     {
//   //       label: "Hypertension",
//   //       data: [40, 50, 50, 10, 30, 20, 40, 20],
//   //       backgroundColor: "rgba(255, 0, 0, 0.8)",
//   //     },
//   //     {
//   //       label: "Normotensive",
//   //       data: [30, 60, 50, 5, 20, 40, 50, 80],
//   //       backgroundColor: "rgba(255, 182, 193, 0.8)",
//   //     },
//   //   ],
//   // };

//   const data = {
//     labels: ["20", "30", "40", "50", "60", "70", "80", "90"],
//     datasets: [
//       {
//         label: "Hypertension",
//         data: [40, 50, 50, 10, 30, 20, 40, 20],
//         backgroundColor: "rgba(255, 0, 0, 0.8)",
//         barThickness: isLargeDesktop ? 45 : 25,      // ✅ Controlled Bar Width
//         // maxBarThickness: 50,   // ✅ Prevent Overly Thick Bars
//       },
//       {
//         label: "Normotensive",
//         data: [30, 60, 50, 5, 20, 40, 50, 80],
//         backgroundColor: "rgba(255, 182, 193, 0.8)",
//         barThickness: isLargeDesktop ? 45 : 25,
//         // maxBarThickness: 50,
//       },
//     ],
//   };
//   // Dynamically set font size based on screen size
//   const titleFontSize = isLargeDesktop
//   ? 30
//   : isDesktop
//   ? 20
//   : isLaptop
//   ? 18
//   : 14;

//   const options = {
//     responsive: true,
//     layout: {
//       padding: {
//         right: 0,
//         left: 0,
//       },
//     },
//     plugins: {
//       legend: {
//         display: false,
//         position: "top",
//         labels: {
//           color: "#000",
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Age",
//           color: "#000",
//           font: {
//             size: titleFontSize, // Dynamically change font size
//             weight: "bold",
//           },
//         },
//         ticks: {
//           color: "#000",
//           font:{
//             size: titleFontSize, // Dynamically change font size
//           }
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Number of patients",
//           color: "#000",
//           font: {
//             size: titleFontSize, // Dynamically change font size
//             weight: "bold",
//           },
//         },
//         ticks: {
//           color: "#000",
//           font:{
//             size: titleFontSize, // Dynamically change font size
//           }
//         },
//         beginAtZero: true,
//         max: 90,
//         min: 0,
//         stepSize: 10,
//       },
//     },
//     animation: false, // Keep bars static
//   };

//   // ✨ Shine Effect Overlay
//   useEffect(() => {
//     const chart = chartRef.current;
//     if (!chart) return;

//     const ctx = chart.ctx;
//     let shineY = chart.chartArea.bottom;

//     const animateShine = () => {
//       ctx.save();

//       // Clear previous shine
//       ctx.clearRect(
//         chart.chartArea.left,
//         chart.chartArea.top,
//         chart.chartArea.right - chart.chartArea.left,
//         chart.chartArea.bottom - chart.chartArea.top
//       );

//       // Draw static bars
//       chart.draw();

//       // Create the shine gradient
//       const gradient = ctx.createLinearGradient(0, shineY, 0, shineY + 20);
//       gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
//       gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.4)");
//       gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

//       // Overlay the shine effect
//       ctx.fillStyle = gradient;
//       ctx.fillRect(
//         chart.chartArea.left,
//         shineY,
//         chart.chartArea.right - chart.chartArea.left,
//         20
//       );

//       ctx.restore();

//       // Move the shine effect upward
//       shineY -= 1;
//       if (shineY < chart.chartArea.top) {
//         shineY = chart.chartArea.bottom;
//       }

//       requestAnimationFrame(animateShine);
//     };

//     animateShine();
//   }, []);

//   return (
//     <div className="flex h-[90%] justify-center px-2 w-full items-center rounded-lg shadow-md">
//       <Bar className="w-full" ref={chartRef} data={data} options={options} />
//     </div>
//   );
// };

// export default BarComp;

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
  // Process the dataset dynamically based on the details prop
  const labels = Object.keys(details);
  const hypertensiveData = labels.map((label) => details[label].hypertensive);
  const normotensiveData = labels.map((label) => details[label].normotensive);

  useEffect(() => {
    console.log(details);
  }, [details]);

  // Define media queries for responsive font size
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });
  const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 });
  const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });

  const chartRef = useRef(null);

  const data = {
    labels,
    datasets: [
      {
        label: "Hypertension",
        data: hypertensiveData,
        backgroundColor: "rgba(255, 0, 0, 0.8)",
        barThickness: isLargeDesktop ? 45 : 25, // Controlled Bar Width
      },
      {
        label: "Normotensive",
        data: normotensiveData,
        backgroundColor: "rgba(255, 182, 193, 0.8)",
        barThickness: isLargeDesktop ? 45 : 25,
      },
    ],
  };

  // Dynamically set font size based on screen size
  const titleFontSize = isLargeDesktop
    ? 30
    : isDesktop
    ? 16
    : isLaptop
    ? 18
    : 14;

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
            size: titleFontSize, // Dynamically change font size
            // weight: "bold",
          },
        },
        ticks: {
          color: "#000",
          font: {
            size: titleFontSize, // Dynamically change font size
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of patients",
          color: "#000",
          font: {
            size: titleFontSize, // Dynamically change font size
            weight: "bold",
          },
        },
        ticks: {
          color: "#000",
          font: {
            size: titleFontSize, // Dynamically change font size
          },
        },
        beginAtZero: true,
      },
    },
    animation: false, // Keep bars static
  };

  return (
    <div className="flex h-[95%] justify-center px-2 w-full items-center rounded-lg shadow-md">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BarComp;

