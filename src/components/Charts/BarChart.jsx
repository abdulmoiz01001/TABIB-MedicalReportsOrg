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

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const BarComp = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["20", "30", "40", "50", "60", "70", "80", "90"],
    datasets: [
      {
        label: "Hypertension",
        data: [40, 50, 50, 10, 30, 20, 40, 20],
        backgroundColor: "rgba(255, 0, 0, 0.8)",
      },
      {
        label: "Normotensive",
        data: [30, 60, 50, 5, 20, 40, 50, 80],
        backgroundColor: "rgba(255, 182, 193, 0.8)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
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
        },
        ticks: {
          color: "#000",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of patients",
          color: "#000",
        },
        ticks: {
          color: "#000",
        },
        beginAtZero: true,
        max: 90,
        min: 0,
        stepSize: 10,
      },
    },
    animation: false, // Keep bars static
  };

  // ✨ Shine Effect Overlay
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
    <div className="flex justify-center w-full h-full items-center p-4 rounded-lg shadow-md">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BarComp;
