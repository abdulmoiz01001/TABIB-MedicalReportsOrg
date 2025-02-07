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
    const chartRef = useRef();
  
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
          data: [
            details.sanguine?.one ?? 0,
            details.choleric?.two ?? 0,
            details.melanCholic?.three ?? 0,
            details.phlegmatic?.four ?? 0
          ],
          backgroundColor: "#CC0001",
          barThickness: isLargeDesktop ? 35 : isDesktop ? 20 : isLaptop ? 20 : isTablet ? 20 : 15,
        },
        {
          label: "2",
          data: [
            details.sanguine?.h ?? 0,
            details.choleric?.h ?? 0,
            details.melanCholic?.c ?? 0,
            details.phlegmatic?.c ?? 0
          ],
          backgroundColor: "#FF6464",
          barThickness: isLargeDesktop ? 35 : isDesktop ? 20 : isLaptop ? 20 : isTablet ? 20 : 15,
        },
        {
          label: "3",
          data: [
            details.sanguine?.m ?? 0,
            details.choleric?.d ?? 0,
            details.melanCholic?.d ?? 0,
            details.phlegmatic?.m ?? 0
          ],
          backgroundColor: "#F9B9B4",
          barThickness: isLargeDesktop ? 45 : isDesktop ? 20 : isLaptop ? 20 : isTablet ? 20 : 15,
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

  const customLabels = [
    "1","2","3",
    "4","H","H",
    "C","C","M",
    "D","D","M"
  ]

  const insideLabelPlugin = {
    id: "insideLabel",
    afterDatasetsDraw(chart) {
      const ctx = chart.ctx;
      let labelIndex = 0; // Track label position in the array
  
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        meta.data.forEach((bar) => {
          if (labelIndex >= customLabels.length) return; // Ensure no overflow
  
          const value = dataset.data[meta.data.indexOf(bar)];
          if (value > 0) {
            const barX = bar.x;
            const barY = bar.y + (bar.height - 8); // Place in the middle of the bar
  
            ctx.save();
            ctx.fillStyle = "white"; // Default text color
            ctx.font = "bold 12px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(customLabels[labelIndex], barX, barY);
            ctx.restore();
          }
          labelIndex++; // Move to next label
        });
      });
    },
  };
  

  // const insideLabelPlugin = {
  //   id: "insideLabel",
  //   afterDatasetsDraw(chart) {
  //     const ctx = chart.ctx;
  //     chart.data.datasets.forEach((dataset, datasetIndex) => {
  //       const meta = chart.getDatasetMeta(datasetIndex);
  //       meta.data.forEach((bar, index) => {
  //         const value = dataset.data[index];
  //         if (value > 0) {
  //           const barX = bar.x;
  //           const barY = bar.y + (bar.height / 2); // Place in the middle of the bar
  //           ctx.save();
  //           ctx.fillStyle = "white"; // Default text color
  //           ctx.font = "bold 12px Arial";
  //           ctx.textAlign = "center";
  //           ctx.fillText(customLabels[index], barX, barY);
  //           ctx.restore();
  //         }
  //       });
  //     });
  //   },
  // };

   useEffect(() => {
      const chart = chartRef.current;
      if (!chart) return;
  
      const ctx = chart.ctx;
      let shineY = chart.chartArea.bottom;
      let lastTime = performance.now();
      const speed = 1000; // Adjust speed (in milliseconds) for one complete cycle
  
      const animateShine = (timestamp) => {
        const deltaTime = timestamp - lastTime;
        lastTime = timestamp;
  
        ctx.clearRect(0, 0, chart.width, chart.height);
        chart.draw();
  
        chart.data.datasets.forEach((dataset, datasetIndex) => {
          const meta = chart.getDatasetMeta(datasetIndex);
          meta.data.forEach((bar) => {
            const barX = bar.x - bar.width / 2;
            const barY = bar.y;
            const barWidth = bar.width;
            const barHeight = chart.chartArea.bottom - barY;
  
            const gradient = ctx.createLinearGradient(0, shineY, 0, shineY + 50);
            gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
            gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.3)");
            gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  
            ctx.fillStyle = gradient;
            ctx.fillRect(barX, barY, barWidth, barHeight);
          });
        });
  
        // Control speed: Movement is proportional to time elapsed
        shineY -= (chart.chartArea.bottom - chart.chartArea.top) * (deltaTime / speed);
  
        if (shineY < chart.chartArea.top) {
          shineY = chart.chartArea.bottom;
        }
  
        requestAnimationFrame(animateShine);
      };
  
      requestAnimationFrame(animateShine);
    }, []);
    
  return(
<>
    <Bar ref={chartRef} data={data} options={options} plugins={[ChartDataLabels,insideLabelPlugin]} />
</>
  ) 
};

export default TemperamentChart;
