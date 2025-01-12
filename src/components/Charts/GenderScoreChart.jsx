import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const GenderScoreChart = ({ maleScore, femaleScore }) => {
  // Chart Data
  const data = {
    labels: ["Males", "Females"],
    datasets: [
      {
        label: "Average TABIAT Score",
        data: [maleScore, femaleScore],
        backgroundColor: ["rgba(255, 99, 132, 0.7)", "rgba(54, 162, 235, 0.7)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
        borderRadius: 10, // Rounded bar edges
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: "#e0e0e0",
        },
      },
    },
  };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GenderScoreChart;
