import React, { useRef, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';  // Import the plugin
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";  // Import clsx

ChartJS.register(ArcElement, Tooltip, Legend, Title);  // Register the plugin

const PieCharts = ({ firstValue = 60.3, firstColor = "#FF0000", secondColor = "#FFCCCC", title }) => {
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });      // 2xl
  const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 }); // xl
  const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 823 });    // md
  const isMobile = useMediaQuery({ maxWidth: 639 });       
  const secondValue = 100 - firstValue;

  const chartRef = useRef();

  const data = {
    labels: [`${firstValue}%`, `${secondValue}%`],
    datasets: [
      {
        data: [firstValue, secondValue],
        backgroundColor: [firstColor, secondColor],
        borderWidth: 0,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "0%", // Adjust for inner radius to create a donut-style chart
    plugins: {
      legend: {
        display: false, // Hides legend for simplicity
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}`,
        },
      },
      title: {
        display: false,
        text: title,
        color: "#CC0001",
        font: {
          size: 16,
        },
      },
      datalabels: {
        display: (context) => {
          // Only show the label for the first segment (index 0)
          return context.dataIndex === 0;
        },
        color: "#fff",  // Color of the text
        font: {
          weight: "bold",
          size: isTablet ? 8 : isMobile ? 8 : isLaptop ? 9 : isDesktop ? 14 : 16,
        },
        formatter: (value) => `${value}%`,  // Format the value as percentage
        anchor: "center",  // Position the label in the center of the segment
        align: "center",  // Align the label to the center
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutCubic",
    },
  };

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;
  
    const ctx = chart.ctx;
    const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
    const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
    let angle = 0;
    const radius = Math.min(chart.chartArea.right - chart.chartArea.left, chart.chartArea.bottom - chart.chartArea.top) / 2;
  
    let animationFrameId; // Store requestAnimationFrame ID for cleanup
  
    const animateShine = () => {
      ctx.clearRect(
        chart.chartArea.left,
        chart.chartArea.top,
        chart.chartArea.right - chart.chartArea.left,
        chart.chartArea.bottom - chart.chartArea.top
      );
  
      chart.draw(); // Redraw the chart
  
      // Calculate shine position using circular motion
      const shineX = centerX + radius * Math.cos(angle);
      const shineY = centerY + radius * Math.sin(angle);
  
      // Create radial gradient for circular shine effect
      const gradient = ctx.createRadialGradient(shineX, shineY, 5, shineX, shineY, 60);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.6)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.3)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  
      // Apply shine effect
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(shineX, shineY, 100, 0, Math.PI * 2); // Adjust radius for a smoother look
      ctx.fill();
  
      // Update angle smoothly
      angle += 0.01; // Slower speed for smooth motion
      if (angle > Math.PI * 2) {
        angle = 0; // Reset after a full cycle
      }
  
      animationFrameId = requestAnimationFrame(animateShine);
    };
  
    animateShine(); // Start animation
  
    return () => {
      cancelAnimationFrame(animationFrameId); // Cleanup on unmount
    };
  }, []);
  

  // Tailwind classes as variables
  const containerClasses = clsx(
    'flex flex-col justify-center items-center',
    'desktop:w-[80px] text-center laptop:w-[60px] tablet:h-[40%] tablet:w-[60px] mobile:w-[70px] mobile:h-[90px] laptop:h-[40%] desktop:h-[45%] large-desktop:w-[140px] large-desktop:h-[40%]'
  );

  const titleClasses = clsx(
    'text-[#CC0001]',
    'desktop:text-[1rem] tablet:text-[0.6rem] mobile:text-[0.6rem] laptop:text-[0.7rem] large-desktop:text-[1.5rem]'
  );

  return (
    <div className={containerClasses}>
      <h1 className={titleClasses}>
        {title}
      </h1>
      <div className="w-full">
        <Doughnut ref={chartRef} data={data} plugins={[ChartDataLabels]} options={options} />
      </div>
    </div>
  );
};

export default PieCharts;
