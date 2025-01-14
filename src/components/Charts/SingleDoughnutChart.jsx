import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DynamicDoughnutChart = ({ value, showCenterValue = true, showSegmentLines = true , lay , transalte = false }) => {
  const remaining = 100 - value;

  const data = {
    labels: ['Covered', 'Remaining'],
    datasets: [
      {
        data: [value, remaining],
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
      ctx.font = 'bold 24px Arial';
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${value}`, width / 2, height / 2);
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
        ctx.font = '15px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = angle > Math.PI ? 'right' : 'left';
        ctx.fillText(`${data.datasets[0].data[index]}%`, endX + (angle > Math.PI ? -5 : 5), endY - 2);
      });
    },
  };
  

  // const segmentLinePlugin = {
  //   id: 'segmentLine',
  //   afterDatasetDraw: (chart) => {
  //     if (!showSegmentLines) return;
  
  //     const { ctx } = chart;
  //     const meta = chart.getDatasetMeta(0);
  
  //     meta.data.forEach((arc, index) => {
  //       const angle = (arc.startAngle + arc.endAngle) / 2;
  //       const midRadius = (arc.outerRadius + arc.innerRadius) / 2;
  
  //       // Start Point (inside the doughnut)
  //       const startX = chart.width / 2 + Math.cos(angle) * midRadius;
  //       const startY = chart.height / 2 + Math.sin(angle) * midRadius;
  
  //       // First Zig Point (slightly outside the arc)
  //       const midX = chart.width / 2 + Math.cos(angle) * (arc.outerRadius + 10);
  //       const midY = chart.height / 2 + Math.sin(angle) * (arc.outerRadius + 10);
  
  //       // Second Zig Point (outward horizontal line)
  //       const horizontalLength = 20;  // Length of the horizontal zig-zag
  //       const endX = midX + (angle > Math.PI ? -horizontalLength : horizontalLength);
  //       const endY = midY;
  
  //       // Draw Zig-Zag Line
  //       ctx.beginPath();
  //       ctx.moveTo(startX, startY);  // Start inside the doughnut
  //       ctx.lineTo(midX, midY);      // First outward point
  //       ctx.lineTo(endX, endY);      // Horizontal zig-zag
  //       ctx.strokeStyle = '#000';
  //       ctx.lineWidth = 1.5;
  //       ctx.stroke();
  
  //       // Draw Percentage Text at the End
  //       ctx.font = '12px Arial';
  //       ctx.fillStyle = '#000';
  //       ctx.textAlign = angle > Math.PI ? 'right' : 'left';
  //       ctx.fillText(`${data.datasets[0].data[index]}%`, endX + (angle > Math.PI ? -5 : 5), endY);
  //     });
  //   },
  // };
  
  // const segmentLinePlugin = {
  //   id: 'segmentLine',
  //   afterDatasetDraw: (chart) => {
  //     if (!showSegmentLines) return;
  //     const { ctx, chartArea, scales } = chart;
  //     const meta = chart.getDatasetMeta(0);
  //     meta.data.forEach((arc, index) => {
  //       const angle = (arc.startAngle + arc.endAngle) / 2;
  //       const x = chart.width / 2 + Math.cos(angle) * (arc.outerRadius + 10);
  //       const y = chart.height / 2 + Math.sin(angle) * (arc.outerRadius + 10);
  //       ctx.beginPath();
  //       ctx.moveTo(arc.x, arc.y);
  //       ctx.lineTo(x, y);
  //       ctx.strokeStyle = '#000';
  //       ctx.stroke();
  //       ctx.font = '12px Arial';
  //       ctx.fillStyle = '#000';
  //       ctx.fillText(`${data.datasets[0].data[index]}%`, x + 5, y);
  //     });
  //   },
  // };

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
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
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
      data={data}
      options={options}
      plugins={[centerTextPlugin, segmentLinePlugin]}
      // width={100}
      className={` ${transalte ? "translate-y-1" : ""} `}
      // height={100}
      />
      </>
  );
};

export default DynamicDoughnutChart;

