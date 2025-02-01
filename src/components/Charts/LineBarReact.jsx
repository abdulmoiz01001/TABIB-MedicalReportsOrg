import React, { useEffect } from "react";
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
import { useMediaQuery } from "react-responsive";  // Import the hook
import clsx from "clsx";

// Register required Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineBarReact = ({totalCount , details}) => {
    // 📱 Tailwind Custom Breakpoints
    const isLargeDesktop = useMediaQuery({ minWidth: 2560 });      // 2xl
    const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 }); // xl
    const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });   // lg
    const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 823 });    // md
    const isMobile = useMediaQuery({ maxWidth: 639 });             // sm and below

    // 🎨 Dynamic Styles Based on Screen Size
    const titleFontSize = isLargeDesktop
    ? 20
    : isDesktop
    ? 20
    : isLaptop
    ? 11 : isTablet ? 10 : isMobile ? 9
    : 14;

    
  const borderWidth = isLargeDesktop
  ? 5
  : isDesktop
  ? 3
  : isLaptop
  ? 2
  : isTablet
  ? 1.5
  : 1;

const pointRadius = isLargeDesktop
  ? 5
  : isDesktop
  ? 4
  : isLaptop
  ? 3
  : isTablet
  ? 2
  : 1;

    const data = {
        labels: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        datasets: [
            {
                label: "Monthly Trend Of Hypertension",
                data: [
                    details.Jan || 0, details.Feb || 0, details.Mar || 0,
                    details.Apr || 0, details.May || 0, details.Jun || 0,
                    details.Jul || 0, details.Aug || 0, details.Sep || 0,
                    details.Oct || 0, details.Nov || 0, details.Dec || 0
                ],
                borderColor: "red",
                backgroundColor: "red",
                pointBackgroundColor: "red",
                pointBorderColor: "red",
                pointStyle: "circle",
                pointHoverRadius: 8,
                borderWidth: borderWidth,    // ✅ Dynamic Border Width
                pointRadius: pointRadius,    // ✅ Dynamic Point Radius
               
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                font: {
                    size: titleFontSize,  // Dynamic Font Size for Y-axis
                    weight: 'bold',
                },
                grid: {
                    drawTicks: true,
                    drawBorder: true,
                    borderColor: 'black',
                    borderWidth: 3,
                    color: 'rgba(0, 0, 0, 0.1)', // Color of the grid lines (faint)
                },
                beginAtZero: false,
                min: 0,
                max: totalCount ,
                ticks: {
                    stepSize: 1,
                    color: 'black',
                    font: {
                        size: titleFontSize,  // Dynamic Font Size for Y-axis ticks
                    },
                },
            },
            x: {
                font: {
                    size: titleFontSize,  // Dynamic Font Size for X-axis
                    weight: 'bold',
                    color: "black",
                },
                grid: {
                    drawOnChartArea: false,
                    drawTicks: true,
                    drawBorder: true,
                },
                ticks: {
                    maxRotation: 90,
                    minRotation: 45,
                    font: {
                        size: titleFontSize,  // Dynamic Font Size for X-axis ticks
                    },
                    color: "#000",
                },
            },
        },
    };

    const containerClasses = clsx("h-[85%] flex justify-center w-full")

    return (
        <div className={containerClasses}>
            <Line data={data} options={options} />
         </div>
    );
};

export default LineBarReact;
