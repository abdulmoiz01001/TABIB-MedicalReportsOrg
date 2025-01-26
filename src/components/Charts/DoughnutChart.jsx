import React, { useEffect , useRef} from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useMediaQuery } from 'react-responsive';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ details }) => {
  const chartRef = useRef()
  useEffect(() => {
    console.log(details)
  }, [details])
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });
  const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 });
  const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 823 });    // md
  const isMobile = useMediaQuery({ maxWidth: 639 });

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
        bottom: 40
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
        let shineY = chart.chartArea.bottom;
    
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
    
          // Create the shine gradient
          const gradient = ctx.createLinearGradient(0, shineY, 0, shineY + 20);
          gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
          gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.4)");
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    
          // Overlay the shine effect
          ctx.fillStyle = gradient;
          ctx.fillRect(
            chart.chartArea.left,
            shineY,
            chart.chartArea.right - chart.chartArea.left,
            20
          );
    
          ctx.restore();
    
          // Move the shine effect upward
          shineY -= 1;
          if (shineY < chart.chartArea.top) {
            shineY = chart.chartArea.bottom;
          }
    
          requestAnimationFrame(animateShine);
        };
    
        animateShine();
      }, []);

  // Dynamic size based on screen size
  const chartSize = isLargeDesktop
    ? { width: '60px', height: '60px' }  // Large Desktop
    : isDesktop
      ? { width: '25px', height: '25px' }  // Desktop
      : { width: '20px', height: '20px' }; // Laptop/Tablet

  return (
    <div className='flex flex-col h-[100%] laptop:py-1 py-2 justify-center  items-center'>
      <h3 className="desktop:text-[1rem] tablet:text-[0.7rem] laptop:text-[0.7rem] large-desktop:text-[2rem] font-bold text-[#000000]">
        Hypertension By BMI Classification
      </h3>

      <div
        className='desktop:w-full mobile:w-full mobile:h-[220px] desktop:h-full laptop:w-[90%] laptop:h-[90%] large-desktop:w-[80%] large-desktop:h-[80%]'
        style={{
          // width: "100%",
          // height: "100%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Doughnut ref={chartRef} data={data} options={options} plugins={[zigzagLinePlugin]} />
      </div>

      {/* Custom Legend */}
      <div className='w-full flex h-[20%] justify-center items-center laptop:gap-1 gap-2 flex-wrap'>
        {[
          { color: '#FF4D4D', label: 'Overweight' },
          { color: '#FF6666', label: 'Obese' },
          { color: '#FFCCCC', label: 'Underweight' },
          { color: '#FF9999', label: 'Normal' },
        ].map((item, idx) => (
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
            <span className='large-desktop:text-[2rem] large-desktop:font-bold laptop:text-[11px] tablet:text-[10px] desktop:text-[15px]' style={{ color: '#333' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
