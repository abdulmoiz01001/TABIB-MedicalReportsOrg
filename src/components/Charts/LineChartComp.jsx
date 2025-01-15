// ChartComponent.jsx
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  
);

const LineChartComp = ({ ageData, heartRateData }) => {
  const data = {
    labels: ageData, // Dynamic X-axis values
    datasets: [
      {
        label: "Max Heart Rate",
        data: heartRateData, // Dynamic Y-axis values
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0, // No curve, sharp edges
        borderWidth: 2,
        pointRadius: 0, // No visible points on the line
        pointHoverRadius: 0, // No hover effect on points
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      title: {
        display: true,
        text: "Age-wise Distribution of Heart Rate",
        color: "#000",
        font: {
          size: 16,
          weight: "bold",
        },
      },
      datalabels: {
        display: true, // Enable labels
        color: "black", // Label color
        align: "top", // Align labels on top of points
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        ticks:{
          font: {
            size: 13,      // Larger font size
            // weight: "bold", // Bold text
          },
          color: "#000",   // Black color for better visibility
        },
        title: {
          display: true,
          text: "Age",
          color: "#000",
          font: {
            size: 14,
            weight: "bold",
            color:"#000"
          },
        },
      },
      y: {
        ticks:{
          font: {
            size: 15,      // Larger font size
            // weight: "bold", // Bold text
          },
          color: "#000",   // Black color for better visibility
        },
        title: {
          display: true,
          text: "Max Heart Rate",
          color: "#000",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        font:{
          size: 10,
          weight: "bold",
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
