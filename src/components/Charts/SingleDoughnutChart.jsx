import React , { useEffect , useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useMediaQuery } from 'react-responsive';

ChartJS.register(ArcElement, Tooltip, Legend);

const DynamicDoughnutChart = ({ value, Hypertensive="" , Normotensive="" , showCenterValue = true, showSegmentLines = true , lay , transalte = false }) => {
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });      // 2xl
  const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 }); // xl
  const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });   // lg
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 823 });    // md
  const remaining = (100 - value).toFixed(1);

  const chartRef = useRef()

  const data = {
    labels: [Hypertensive, Normotensive],
    datasets: [
      {
        data: [value.toFixed(1), remaining],
        backgroundColor: ['#CC0001', '#E0E0E0'],
        hoverBackgroundColor: ['#FF3333', '#B0B0B0'],
        borderColor: '#FFFFFF',
        hoverOffset: 10,
      },
    ],
  };

  const centerTextPlugin = {
    id: 'centerText',
    afterDraw: (chart) => {
      if (!showCenterValue) return;
      const { ctx, width, height } = chart;
      ctx.save();
      ctx.font = isLargeDesktop ? 'bold 24px Arial' : isDesktop ? 'bold 24px Arial' :  isLaptop ? 'bold 20px Arial' :'bold 12px Arial';
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${value.toFixed(2)}`, width / 2, height / 2);
      ctx.restore();
    },
  };

  const segmentLinePlugin = {
    id: 'segmentLine',
    afterDatasetsDraw: (chart) => {
      if (!showSegmentLines) return;
  
      const { ctx, width, height } = chart;
      const meta = chart.getDatasetMeta(0);
  
      meta.data.forEach((arc, index) => {
        const angle = (arc.startAngle + arc.endAngle) / 2;
        const outerRadius = arc.outerRadius ;
        const centerX = (width ) / 2;
        const centerY = (height) / 2;
  
        // Starting point at the edge of the segment
        const startX = centerX + Math.cos(angle) * outerRadius;
        const startY = centerY + Math.sin(angle) * outerRadius;
  
        // Extend slightly outside the arc for the zig-zag effect
        const midX = centerX + Math.cos(angle) * (outerRadius + 10);
        const midY = centerY + Math.sin(angle) * (outerRadius + 10);
  
        // Create a horizontal zig-zag
        const horizontalLength = 10;
        const endX = midX + (angle > Math.PI ? -horizontalLength : horizontalLength);
        const endY = midY;
  
        // Draw the zig-zag line
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(midX, midY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1.5;
        ctx.stroke();
  
        // Draw the value at the end of the line
        ctx.font = isLargeDesktop ? '30px Arial' : isLaptop ? '10px Arial' : '15px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = angle > Math.PI ? 'right' : 'left';
        ctx.fillText(`${data.datasets[0].data[index]}%`, endX + (angle > Math.PI ? -5 : 5), endY - 2);
      });
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
  
    let animationFrameId; // Store requestAnimationFrame ID for cleanup
  
    const animateShine = () => {
      ctx.clearRect(
        chart.chartArea.left,
        chart.chartArea.top,
        chart.chartArea.right - chart.chartArea.left,
        chart.chartArea.bottom - chart.chartArea.top
      );
  
      chart.draw(); // Redraw the chart
  
      // Calculate shine position using circular motion
      const shineX = centerX + radius * Math.cos(angle);
      const shineY = centerY + radius * Math.sin(angle);
  
      // Create radial gradient for circular shine effect
      const gradient = ctx.createRadialGradient(shineX, shineY, 5, shineX, shineY, 60);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.6)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.3)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  
      // Apply shine effect
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(shineX, shineY, 100, 0, Math.PI * 2); // Adjust radius for a smoother look
      ctx.fill();
  
      // Update angle smoothly
      angle += 0.01; // Slower speed for smooth motion
      if (angle > Math.PI * 2) {
        angle = 0; // Reset after a full cycle
      }
  
      animationFrameId = requestAnimationFrame(animateShine);
    };
  
    animateShine(); // Start animation
  
    return () => {
      cancelAnimationFrame(animationFrameId); // Cleanup on unmount
    };
  }, []);
  
 


  const options = {
    responsive: true,
    maintainAspectRatio: true, // Disable aspect ratio lock
    layout: {
      padding: lay,
    },
  
    cutout: '60%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const total = 100
            const value = context.raw;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${value} (${percentage}%)`;
          },
        },
      },
    },
    datasets: {
      doughnut: {
        clip: false, // Prevents cutting off custom drawings
      },
    },
  };

  return (
    <>
    <Doughnut
      ref={chartRef}
      data={data}
      options={options}
      plugins={[centerTextPlugin, segmentLinePlugin]}
      className={` ${transalte ? "translate-y-1" : ""} `}
      />
      </>
  );
};

export default DynamicDoughnutChart;

