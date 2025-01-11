import React from "react";
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
  // Data for the chart
  const data = {
    labels: ["20", "30", "40", "50", "60", "70", "80", "90"],
    datasets: [
      {
        label: "Hypertension",
        data: [40, 50, 50, 10, 30, 20, 40, 20],
        backgroundColor: "rgba(255, 0, 0, 0.8)", // Red
      },
      {
        label: "Normotensive",
        data: [30, 60, 50, 5, 20, 40, 50, 80],
        backgroundColor: "rgba(255, 182, 193, 0.8)", // Light pink
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#000", // Black for better contrast
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
  };

  return (
    <div className="flex justify-center w-full h-full items-center p-4  rounded-lg shadow-md">
      {/* <div className="w-full "> */}
        {/* <h2 className="text-center text-xl font-bold mb-4">
          Age-wise Distribution
        </h2> */}
        <Bar data={data} options={options} />
      {/* </div> */}
    </div>
  );
};

export default BarComp;
