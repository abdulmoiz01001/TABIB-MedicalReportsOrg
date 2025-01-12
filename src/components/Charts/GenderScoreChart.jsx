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

const GenderScoreChart = ({ maleScore, femaleScore, maleImage, femaleImage }) => {
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

  // Custom plugin to replace bars with images
  const imagePlugin = {
    id: 'imagePlugin',
    afterDatasetsDraw(chart) {
      const ctx = chart.ctx;
      const dataset = chart.data.datasets[0]; // Assuming there's only one dataset
      const maleBarImage = maleImage; // Image for Male bar
      const femaleBarImage = femaleImage; // Image for Female bar
      const images = [maleBarImage, femaleBarImage];

      chart.getDatasetMeta(0).data.forEach((bar, index) => {
        const image = new Image();
        image.src = images[index];

        // Wait until the image is loaded before drawing it on the chart
        image.onload = () => {
          const { x, y, width, height } = bar.getProps(["x", "y", "width", "height"]);

          ctx.drawImage(image, x - width / 2, y - height, width, height);
        };
      });
    },
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
    <div style={{ width: "100%", height: "100%", margin: "0 auto" }}>
      <Bar data={data} options={options} plugins={[imagePlugin]} />
    </div>
  );
};

export default GenderScoreChart;
