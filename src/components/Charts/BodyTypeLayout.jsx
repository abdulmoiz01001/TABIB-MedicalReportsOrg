import React, { useEffect, useState } from 'react';
import clsx from "clsx"
const BodyTypeLayout = ({ details }) => {
    const [maxValue, setMaxValue] = useState(0);
    const [bodyTypeNames, setBodyTypeNames] = useState([]);

    // Utility function to transform keys into capitalized names
    const transformObjectKeysToArray = (obj) => {
        return Object.keys(obj).map((key) =>
            key
                .replace(/([A-Z])/g, ' $1') // Add space before uppercase letters
                .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
        );
    };

    // Utility to interpolate between two hex colors
    const interpolateColor = (startHex, endHex, factor) => {
        const normalizeFactor = Math.max(0, Math.min(factor, 1)); // Clamp factor between 0 and 1
        const start = {
            r: parseInt(startHex.slice(1, 3), 16),
            g: parseInt(startHex.slice(3, 5), 16),
            b: parseInt(startHex.slice(5, 7), 16),
        };
        const end = {
            r: parseInt(endHex.slice(1, 3), 16),
            g: parseInt(endHex.slice(3, 5), 16),
            b: parseInt(endHex.slice(5, 7), 16),
        };
        const r = Math.round(start.r + (end.r - start.r) * normalizeFactor);
        const g = Math.round(start.g + (end.g - start.g) * normalizeFactor);
        const b = Math.round(start.b + (end.b - start.b) * normalizeFactor);
        return `rgb(${r}, ${g}, ${b})`;
    };

    // Utility to calculate dynamic background color
    const calculateBgColor = (value, max) => {
        const factor = value / max; // Normalize intensity
        return interpolateColor('#FFB1B1', '#CC0001', factor); // Interpolate between light pink and dark red
    };

    useEffect(() => {
        if (details) {
            const highestValue = Math.max(...Object.values(details));
            setMaxValue(highestValue);

            const names = transformObjectKeysToArray(details);
            setBodyTypeNames(names);
        }
    }, [details]);

     const containerClasses = clsx("desktop:px-2 large-desktop:px-4 laptop:px-2 laptop:pb-2 border-red-900")
     const subContainerClasses = clsx(`flex flex-col px-1 cursor-default justify-center items-center`)
     const textContainerClasses = clsx(`mobile:text-[0.6rem] tablet:text-[0.6rem] desktop:text-[12px] laptop:text-[0.5rem]  text-center large-desktop:leading-6 large-desktop:text-[1.4rem] font-bold`)
     const textPageContainerClasses = clsx(`mobile:text-[0.6rem] tablet:text-[0.6rem] laptop:text-[0.5rem] desktop:text-[10px] large-desktop:text-[1.5rem] font-bold`)
     return (
        <div id="cssportal-grid" className={containerClasses}>
            {Object.entries(details).map(([key, value], index) => {
                const bgColor = calculateBgColor(value, maxValue); // Get dynamic background color
                const textColor = value / maxValue > 0.5 ? 'text-white' : 'text-black'; // Adjust text color
                return (
                    <div
                        key={index}
                        id={`div${index + 1}`}
                        className={subContainerClasses}
                        style={{ backgroundColor: bgColor }}
                    >
                        <h1
                            className={textContainerClasses + " "+textColor}
                        >
                            {bodyTypeNames[index]}
                        </h1>
                        <p
                            className={textPageContainerClasses + " "+ textColor}
                        >
                            {value}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default BodyTypeLayout;
