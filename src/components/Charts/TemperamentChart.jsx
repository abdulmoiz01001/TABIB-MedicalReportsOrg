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
    labels: ["Sanguine" , "Choleric" , "Melancholic" , "Phlegmatic"],
    
    datasets: [
      {
        label: "1",
        data: [4.895, 5.702, 7.895, 4.263],
        backgroundColor: "#CC0001",
      },
      {
        label: "1",
        data: [4.895, 5.702, 7.895, 4.263],
        backgroundColor: "#FF6464",
      },
      {
        label: "1",
        data: [4.895, 5.702, 7.895, 4.263],
        backgroundColor: "#F9B9B4",
      },
      
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Prevents cutting off the top values
    style:{

    },
    plugins: {
      legend: {
        display: false,
        font:{
            size: 20,
        },
        position: "top",
      },
      // title: {
      //   display: true,
      //   text: "Temperament with Dominant Qualities",
      //   font:{
      //       size: 10,
      //   }
      // },
      datalabels: {
        display: true,
        color: "black",
        align: "end",
        anchor: "end",
        formatter: (value) => `${value}%`, // Format values with percentage
        rotation: -90, // Rotate the labels by -45 degrees
        offset: 10, // Adds spacing to prevent cut-off
      },
    },
    scales: {
      x: {
       
      },
      y: {
        display: false,
        ticks: {
          display: false, // Hide Y-axis ticks
        },
        grid: {
        //   drawBorder: false,
          display: false, // Hide grid lines
        },
      },
    },
    layout: {
      padding: {
        top: 60, // Adds padding to prevent top overflow
      },
    },
  };

  return <Bar data={data}  options={options} plugins={[ChartDataLabels]} />;
 
};

export default TemperamentChart;
