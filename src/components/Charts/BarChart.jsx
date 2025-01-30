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
import { useMediaQuery } from "react-responsive";

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip);

const BarComp = ({ details, totalCount }) => {
  const labels = Object.keys(details);
  const hypertensiveData = labels.map((label) => details[label].hypertensive);
  const normotensiveData = labels.map((label) => details[label].normotensive);

  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });
  const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 });
  const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 823 });
  const isMobile = useMediaQuery({ maxWidth: 639 });

  const chartRef = useRef(null);

  const titleFontSize = isLargeDesktop
    ? 20
    : isDesktop
    ? 16
    : isLaptop
    ? 11
    : isTablet
    ? 10
    : 9;

  const data = {
    labels,
    datasets: [
      {
        label: "Hypertensive",
        data: hypertensiveData,
        backgroundColor: "rgba(255, 0, 0, 0.8)",
        barThickness: isLargeDesktop
          ? 35
          : isDesktop
          ? 20
          : isLaptop
          ? 20
          : isTablet
          ? 20
          : 15,
      },
      {
        label: "Normotensive",
        data: normotensiveData,
        backgroundColor: "rgba(255, 182, 193, 0.8)",
        barThickness: isLargeDesktop
          ? 35
          : isDesktop
          ? 20
          : isLaptop
          ? 20
          : isTablet
          ? 20
          : 15,
      },
    ],
  };

  const options = {
    responsive: true,
    layout: { padding: { right: 0, left: 0 } },
    plugins: {
      legend: { display: true, position: "top", labels: { color: "#000" } },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Age",
          color: "#000",
          font: { size: titleFontSize },
        },
        ticks: { color: "#000", font: { size: titleFontSize } },
      },
      y: {
        title: {
          display: true,
          text: "Number of patients",
          color: "#000",
          font: { size: titleFontSize },
        },
        suggestedMax: totalCount,
        grid: { display: true },
        ticks: {
          callback: (value) => value.toString(),
          font: { size: titleFontSize, weight: "bold" },
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
      },
    },
    animation: false, 
  };

  // useEffect(() => {
  //   const chart = chartRef.current;
  //   if (!chart) return;

  //   const ctx = chart.ctx;
  //   let shineY = chart.chartArea.bottom;

  //   const animateShine = () => {
  //     ctx.clearRect(0, 0, chart.width, chart.height);
  //     chart.draw();

  //     chart.data.datasets.forEach((dataset, datasetIndex) => {
  //       const meta = chart.getDatasetMeta(datasetIndex);
  //       meta.data.forEach((bar) => {
  //         const barX = bar.x - bar.width / 2;
  //         const barY = bar.y;
  //         const barWidth = bar.width;
  //         const barHeight = chart.chartArea.bottom - barY;

  //         const gradient = ctx.createLinearGradient(0, shineY, 0, shineY + 10);
  //         gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
  //         gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.6)");
  //         gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  //         ctx.fillStyle = gradient;
  //         ctx.fillRect(barX, barY, barWidth, barHeight);
  //       });
  //     });

  //     shineY -= 1;
  //     if (shineY < chart.chartArea.top) {
  //       shineY = chart.chartArea.bottom;
  //     }

  //     requestAnimationFrame(animateShine);
  //   };

  //   animateShine();
  // }, []);

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

  return (
    <div className="flex h-[95%] large-desktop:h-[90%] justify-center mobile:pr-1 mobile:px-0 px-2 w-full items-center rounded-lg shadow-md">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BarComp;
