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

ChartJS.register(ArcElement, Tooltip, Legend, Title);  // Register the plugin

const PieCharts = ({ firstValue = 60.3, firstColor = "#FF0000", secondColor = "#FFCCCC", title }) => {
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
    <div className="desktop:w-[115px] laptop:w-[80px] tablet:h-[40%] tablet:w-[60px] mobile:w-[50px] laptop:h-[42%] desktop:h-[45%] large-desktop:w-[170px] large-desktop:h-[50%] flex flex-col justify-center items-center">
      <h1 className="desktop:text-[1rem] tablet:text-[0.6rem] mobile:text-[0.6rem] laptop:text-[0.7rem] large-desktop:text-[2rem] text-[#CC0001]">
        {title}
      </h1>
      <div className="w-full h-full">
        <Doughnut ref={chartRef} data={data} plugins={[ChartDataLabels]} options={options} />
      </div>
    </div>
  );
};

export default PieCharts;
