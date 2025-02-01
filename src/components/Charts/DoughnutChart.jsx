import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ details }) => {
  const chartRef = useRef();
  

  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });
  const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 });

  const data = {
    labels: ['Overweight', 'Obese', 'Normal', 'Underweight'],
    datasets: [
      {
        data: [details.overweight, details.obese, details.normal, details.underweight],
        backgroundColor: ['#FF4D4D', '#FF6666', '#FF9999', '#FFCCCC'],
        hoverBackgroundColor: ['#FF3333', '#FF5050', '#FF8080', '#FFB3B3'],
        borderColor: '#FFFFFF',
        hoverOffset: 10,
      },
    ],
  };

  const zigzagLinePlugin = {
    id: 'zigzagLine',
    afterDatasetsDraw: (chart) => {
      const { ctx, width, height } = chart;
      const meta = chart.getDatasetMeta(0);

      meta.data.forEach((arc, index) => {
        const angle = (arc.startAngle + arc.endAngle) / 2;
        const outerRadius = arc.outerRadius;
        const centerX = width / 2;
        const centerY = height / 2;

        const startX = centerX + Math.cos(angle) * outerRadius;
        const startY = centerY + Math.sin(angle) * outerRadius;

        const midX = centerX + Math.cos(angle) * (outerRadius + 10);
        const midY = centerY + Math.sin(angle) * (outerRadius + 10);

        const zigzagLength = 20;
        const endX = midX + (angle > Math.PI ? -zigzagLength : zigzagLength);
        const endY = midY;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(midX, midY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.font = !isLargeDesktop ? '18px Arial' : '40px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = angle > Math.PI ? 'right' : 'left';
        ctx.fillText(`${data.datasets[0].data[index]}`, endX + (angle > Math.PI ? -5 : 5), endY - 2);
      });
    },
  };

  const options = {
    responsive: true,
    layout: {
      padding: {
        right: 20,
        left: 20,
        top: 40,
        bottom: 40,
      }
    },
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const value = context.raw;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
    const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
    let angle = 0;
    const radius = Math.min(chart.chartArea.right - chart.chartArea.left, chart.chartArea.bottom - chart.chartArea.top) / 2;

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

      // Calculate shine position using circular motion
      const shineX = centerX + radius * Math.cos(angle);
      const shineY = centerY + radius * Math.sin(angle);

      // Create radial gradient for circular shine effect
      const gradient = ctx.createRadialGradient(shineX, shineY, 5, shineX, shineY, 50);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.6)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.3)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      // Apply shine effect
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(shineX, shineY, 50, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Update angle for circular motion
      angle += 0.02; // Adjust speed of rotation
      if (angle > Math.PI * 2) {
        angle = 0; // Reset after full circle
      }

      requestAnimationFrame(animateShine);
    };

    animateShine();
  }, []);

  // Dynamic size based on screen size
  const chartSize = isLargeDesktop
    ? { width: '40px', height: '40px' }  // Large Desktop
    : isDesktop
      ? { width: '25px', height: '25px' }  // Desktop
      : { width: '20px', height: '20px' }; // Laptop/Tablet

  // Define reusable class names with clsx variables
  const chartClasses = clsx(
    "desktop:w-full",
    "mobile:w-full",
    "mobile:h-[220px]",
    "desktop:h-full",
    "laptop:w-[90%]",
    "laptop:h-[90%]",
    "large-desktop:w-[100%]",
    "large-desktop:py-4",
    "large-desktop:h-[380px]",
    "flex",
    "justify-center",
    "items-center"
  );

  const legendClasses = clsx(
    "w-full",
    "flex",
    "h-[20%]",
    "justify-center",
    "items-center",
    "laptop:gap-1",
    "gap-2",
    "flex-wrap"
  );

  const textClasses = clsx(
    "desktop:text-[1rem]",
    "text-center",
    "mobile:text-[0.7rem]",
    "tablet:text-[0.7rem]",
    "laptop:text-[0.7rem]",
    "large-desktop:text-[1.5rem]",
    "font-bold",
    "text-[#000000]"
  );

  const labelsClasses = clsx("large-desktop:text-[1.2rem]", "large-desktop:font-bold", "laptop:text-[11px]", "tablet:text-[10px]", "desktop:text-[15px]")
  const containerClasses = clsx('flex flex-col h-[100%] laptop:py-1 py-2 justify-around items-center')
  return (
    <div className={containerClasses}>
      <h3 className={textClasses}>
        Hypertension By BMI Classification
      </h3>

      <div className={chartClasses}>
        <Doughnut ref={chartRef} data={data} options={options} plugins={[zigzagLinePlugin]} />
      </div>

      {/* Custom Legend */}
      <div className={legendClasses}>
        {[{ color: '#FF4D4D', label: 'Overweight' },
          { color: '#FF6666', label: 'Obese' },
          { color: '#FFCCCC', label: 'Underweight' },
          { color: '#FF9999', label: 'Normal' }].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              gap: '10px',
              width: '40%',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: chartSize.width,
                height: chartSize.height,
                backgroundColor: item.color,
                borderRadius: '50%',
              }}
            ></div>
            <span className={labelsClasses} style={{ color: '#333' }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
