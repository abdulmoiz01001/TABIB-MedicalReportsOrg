import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useMediaQuery } from "react-responsive";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartComp = ({ ageData, heartRateData }) => {
  // 📱 Tailwind Custom Breakpoints
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });      // 2xl
  const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 }); // xl
  const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });   // lg
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 823 });    // md
  const isMobile = useMediaQuery({ maxWidth: 639 });             // sm and below

  // 🎨 Dynamic Styles Based on Screen Size
  const mainTitleSize = isLargeDesktop
    ? 30
    : isDesktop
    ? 20  
    : isLaptop
    ? 20
    : isTablet
    ? 11
    : 16;

  const axisTitleSize = isLargeDesktop
    ? 30
    : isDesktop
    ? 16
    : isLaptop
    ? 11
    : isTablet
    ? 16
    : 14;

  const dataLabelFontSize = isLargeDesktop
    ? 30
    : isDesktop
    ? 14
    : isLaptop
    ? 11
    : isTablet
    ? 10
    : 8;

  const borderWidth = isLargeDesktop
    ? 6
    : isDesktop
    ? 3
    : isLaptop
    ? 2
    : isTablet
    ? 1.5
    : 1;

  const pointRadius = isLargeDesktop
    ? 5
    : isDesktop
    ? 4
    : isLaptop
    ? 3
    : isTablet
    ? 2
    : 1;

  const data = {
    labels: ageData,
    datasets: [
      {
        label: "Max Heart Rate",
        data: heartRateData,
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0,
        borderWidth: borderWidth,    // ✅ Dynamic Border Width
        pointRadius: pointRadius,    // ✅ Dynamic Point Radius
        pointHoverRadius: pointRadius + 1,  // Slight increase on hover
      },
    ],
  };

  const options = {
    responsive: true,
    layout: {
      padding: {
        right: 20,
        left: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },

      datalabels: {
        display: true,
        color: "black",
        align: "top",
        font: {
          size: dataLabelFontSize,  // ✅ Dynamic Data Label Font Size
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: axisTitleSize,
          },
          color: "#000",
        },
        title: {
          display: true,
          text: "Age",
          color: "#000",
          font: {
            size: axisTitleSize,
            // weight: "bold",
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: axisTitleSize,
          },
          color: "#000",
        },
        title: {
          display: true,
          text: "Max Heart Rate",
          color: "#000",
          font: {
            size: axisTitleSize,
            weight: "bold",
          },
        },
        beginAtZero: true,
        suggestedMax: 120,
        suggestedMin: 0,
        stepSize: 20,
      },
    },
  };

  return <Line data={data} options={options} plugins={[ChartDataLabels]} />;
};

export default LineChartComp;
