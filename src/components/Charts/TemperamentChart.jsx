import React, { useEffect , useRef } from "react";
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
    const chartRef = useRef(null);
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
        barThickness: isLargeDesktop ? 35 :isDesktop ? 20 : isLaptop ? 20 : isTablet ? 20 : 15,
      },
      {
        label: "2",
        data: [details.sanguine.h, details.choleric.h, details.melanCholic.c, details.phlegmatic.c],
        backgroundColor: "#FF6464",
        barThickness: isLargeDesktop ? 35 :isDesktop ? 20 : isLaptop ? 20 : isTablet ? 20 : 15,
      },
      {
        label: "3",
        data: [details.sanguine.m, details.choleric.d, details.melanCholic.d, details.phlegmatic.m],
        backgroundColor: "#F9B9B4",
        barThickness: isLargeDesktop ? 45 :isDesktop ? 20 : isLaptop ? 20 : isTablet ? 20 : 15,
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
         size: isLargeDesktop ? 20 : isDesktop ? 20 : isLaptop ? 11 : isTablet ? 10 : 9,
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
            size: isLargeDesktop ? 25 : isDesktop ? 20 : isLaptop ? 11 : isTablet ? 10 : 9,  // ✅ Dynamic Font Size for X-axis
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
        top: isLargeDesktop ? 65 : 60,  // Dynamic Padding
        left: 0,
        right: 0,
      },
    },
    title: {
      display: false,
      text: "Temperament with Dominant Qualities",
      font: {
        size: isLargeDesktop ? 60 : 60,  // ✅ Dynamic Title Font Size
        weight: "bold",
      },
    },
  };

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

  return <Bar ref={chartRef} data={data} options={options} plugins={[ChartDataLabels]} />;
};

export default TemperamentChart;
