// TemperamentChart.js
import React from "react";
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

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
//   ChartDataLabels // Register the plugin
);

const TemperamentChart = ({label}) => {
  const data = {
    labels: ["Sanguine", "Choleric", "Melancholic", "Phlegmatic"],
    datasets: [
      {
        label: "1",
        data: [4.895, 5.702, 7.895, 4.263],
        backgroundColor: "#D32F2F",
      },
      {
        label: "H",
        data: [7.213, 5.263, 5.702, 6.263],
        backgroundColor: "#FFCDD2",
      },
      {
        label: "M",
        data: [2.213, 5.263, 1.702, 6.263],
        backgroundColor: "#FFCDD2",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        font:{
            size: 10,
        },
        position: "top",
      },
      title: {
        display: true,
        text: "Temperament with Dominant Qualities",
        font:{
            size: 10,
        }
      },
      datalabels: {
        display: true,
        color: "black",
        align: "end",
        anchor: "end",
        formatter: (value) => `${value}%`, // Format values with percentage
        rotation: -90, // Rotate the labels by -45 degrees
      },
    },
    scales: {
      x: {
        
      },
      y: {
        ticks: {
          display: false, // Hide Y-axis ticks
        },
        grid: {
        //   drawBorder: false,
          display: false, // Hide grid lines
        },
      },
    },
  };

  return <Bar data={data} options={options}  plugins={[ChartDataLabels]} />;
};

export default TemperamentChart;
