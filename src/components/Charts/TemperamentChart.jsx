import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import data labels plugin
import { useMediaQuery } from "react-responsive";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const TemperamentChart = ({ details }) => {
  useEffect(() => {
  console.log(details)
  },[details])
  // 📱 Tailwind Custom Breakpoints
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });      // 2xl
  const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 }); // xl
  const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });   // lg
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 823 });    // md
  const isMobile = useMediaQuery({ maxWidth: 639 });             // sm and below

  // 🎨 Dynamic Styles Based on Screen Size
  const labelFontSize = isLargeDesktop
    ? 25
    : isDesktop
    ? 18
    : isLaptop
    ? 16
    : isTablet
    ? 14
    : 12;

  const dataLabelFontSize = isLargeDesktop
    ? 30
    : isDesktop
    ? 16
    : isLaptop
    ? 14
    : isTablet
    ? 12
    : 10;

  const titleFontSize = isLargeDesktop
    ? 30
    : isDesktop
    ? 18
    : isLaptop
    ? 20
    : isTablet
    ? 18
    : 16;

  const xAxisFontSize = isLargeDesktop
    ? 18
    : isDesktop
    ? 16
    : isLaptop
    ? 14
    : isTablet
    ? 12
    : 10;

  const data = {
    labels: ["Sanguine", "Choleric", "Melancholic", "Phlegmatic"],
    datasets: [
      {
        label: "1",
        data: [0,0,0,0],
        backgroundColor: "#CC0001",
        barThickness: isLargeDesktop ? 45 : 25,
      },
      {
        label: "2",
        data: [4.895, 5.702, 7.895, 4.263],
        backgroundColor: "#FF6464",
        barThickness: isLargeDesktop ? 45 : 25,
      },
      {
        label: "3",
        data: [2.895, 3.702, 5.895, 7.263],
        backgroundColor: "#F9B9B4",
        barThickness: isLargeDesktop ? 45 : 25,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        font: {
          size: 30,
        },
        position: "top",
      },
      datalabels: {
        display: true,
        color: "black",
        font:{
         size: isLargeDesktop ? 28 : 18,
        },
        // size: isLargeDesktop ? 80 : 60,  // ✅ Dynamic Font Size
        align: "end",
        anchor: "end",
        formatter: (value) => `${value}%`, // Format values with percentage
        rotation: -90,
        offset: 10, // Adds spacing to prevent cut-off
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: isLargeDesktop ? 40 : 20,  // ✅ Dynamic Font Size for X-axis
          },
          color: "#000",   // Black color for better visibility
          maxRotation: 0, // Prevent rotation
          minRotation: 0, // Prevent rotation
          autoSkip: false, // Prevent skipping of labels
        },
      },
      y: {
        display: false,
        ticks: {
          display: false, // Hide Y-axis ticks
        },
        grid: {
          display: false, // Hide grid lines
        },
      },
    },
    layout: {
      padding: {
        top: isLargeDesktop ? 80 : 60,  // Dynamic Padding
        left: 0,
        right: 0,
      },
    },
    title: {
      display: false,
      text: "Temperament with Dominant Qualities",
      font: {
        size: isLargeDesktop ? 80 : 60,  // ✅ Dynamic Title Font Size
        weight: "bold",
      },
    },
  };

  return <Bar data={data} options={options} plugins={[ChartDataLabels]} />;
};

export default TemperamentChart;
