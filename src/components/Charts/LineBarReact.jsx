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

const LineBarReact = ({details}) => {
    useEffect(() => {
     console.log(details)
    },[details])
    // 📱 Tailwind Custom Breakpoints
    const isLargeDesktop = useMediaQuery({ minWidth: 2560 });      // 2xl
    const isDesktop = useMediaQuery({ minWidth: 1480, maxWidth: 2559 }); // xl
    const isLaptop = useMediaQuery({ minWidth: 824, maxWidth: 1479 });   // lg
    // const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 823 });    // md
    // const isMobile = useMediaQuery({ maxWidth: 639 });             // sm and below

    // 🎨 Dynamic Styles Based on Screen Size
    const titleFontSize = isLargeDesktop
    ? 25
    : isDesktop
    ? 20
    : isLaptop
    ? 11
    : 14;

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
                pointStyle: "rect",
                pointHoverRadius: 8,
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            // title: {
            //     display: true,
            //     text: "Monthly Trend of Hypertension",
            //     color: "black",
            //     font: {
            //         size: 16, // Dynamic Font Size for Title
            //     },
            // },
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
                min: 100,
                max: 6400,
                ticks: {
                    stepSize: 10,
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

    return (
        // <div className="h-[85%] flex justify-center w-full">
            <Line data={data} options={options} />
        // </div>
    );
};

export default LineBarReact;
