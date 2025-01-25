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
  console.log("temperatent patakha",details)
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
    ? 11
    : isTablet
    ? 10
    : 12;

  const dataLabelFontSize = isLargeDesktop
    ? 30
    : isDesktop
    ? 16
    : isLaptop
    ? 11
    : isTablet
    ? 10
    : 10;

  const titleFontSize = isLargeDesktop
    ? 30
    : isDesktop
    ? 18
    : isLaptop
    ? 11
    : isTablet
    ? 10
    : 16;

  const xAxisFontSize = isLargeDesktop
    ? 18
    : isDesktop
    ? 16
    : isLaptop
    ? 11
    : isTablet
    ? 10
    : 10;

  const data = {
    labels: ["Sanguine", "Choleric", "Melancholic", "Phlegmatic"],
    datasets: [
      {
        label: "1",
        data: [details.sanguine.one,details.choleric.two,details.melanCholic.three,details.phlegmatic.four],
        backgroundColor: "#CC0001",
        barThickness: isLargeDesktop ? 45 : isLaptop ? 20 : isTablet ? 20 : 25,
      },
      {
        label: "2",
        data: [details.sanguine.h, details.choleric.h, details.melanCholic.c, details.phlegmatic.c],
        backgroundColor: "#FF6464",
        barThickness: isLargeDesktop ? 45 : isLaptop ? 20 : isTablet ? 20 : 25,
      },
      {
        label: "3",
        data: [details.sanguine.m, details.choleric.d, details.melanCholic.d, details.phlegmatic.m],
        backgroundColor: "#F9B9B4",
        barThickness: isLargeDesktop ? 45 : isLaptop ? 20 : isTablet ? 20 : 25,
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
         size: isLargeDesktop ? 28 : isLaptop ? 11 : isTablet ? 10 : 18,
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
            size: isLargeDesktop ? 40 : isLaptop ? 11 : isTablet ? 10 : 20,  // ✅ Dynamic Font Size for X-axis
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
