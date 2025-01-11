import React from "react";
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

const LineBarReact = () => {
    // Data for the chart
    const data = {
        labels: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        datasets: [
            {
                label: "Monthly Trend Of Hypertension",
                data: [70, 3070, 1170, 1071, 2072, 4073, 3075, 6077, 1080, 3083, 2087, 4090],
                borderColor: "red",
                backgroundColor: "red",
                pointBackgroundColor: "red",
                pointBorderColor: "red",
                pointStyle: "diamond",
                pointStyle: "rect",
                // pointRadius: 6,
                pointHoverRadius: 8,
                borderWidth: 2,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Monthly Trend of Hypertension",
                font: {
                    size: 10,
                },
            },
        },
        scales: {
            y: {
                 font:{
                    weight: 'bold',
                    size: 8,
                 },
                grid: {
                    // drawOnChartArea: false, // Remove grid lines on the chart area
                    drawTicks: true,        // Keep tick marks
                    drawBorder: true,       // Keep the axis line (divider)
                    borderColor: 'black',   // Color of the axis line
                    borderWidth: 3,         // Width of the axis line
                    color: 'rgba(0, 0, 0, 0.1)', // Color of the grid lines (faint)
                },
                beginAtZero: false,
                min: 100,
                max: 6400,
                ticks: {
                    stepSize: 10,
                    color: 'black',
                    width: 2,
                },
                border: {

                    width: 3,
                    color: 'black',

                }
            },
            x: {
                font: {
                    weight: 'bold',
                    size: 5,
                },
                grid: {
                    drawOnChartArea: false, // Remove grid lines on the chart area
                    drawTicks: true,        // Keep tick marks
                    drawBorder: true,       // Keep the axis line (divider)
                    // borderWidth: 30,         // Make the X-axis line bold
                    // borderColor: 'black',   // Set the X-axis line color
                },
                ticks: {
                    maxRotation: 90, // Rotate labels to a maximum of 90 degrees
                    minRotation: 45, // Minimum rotation angle for labels

                },
                border: {

                    width: 3,
                    color: 'black',

                }

            }
        },
    };

    return (
        <div className=" h-full w-full" >
            <Line data={data} options={options} />
        </div>
    );
};

export default LineBarReact;
