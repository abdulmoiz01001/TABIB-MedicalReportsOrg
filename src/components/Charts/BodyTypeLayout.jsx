import React, { useEffect, useState } from 'react';

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

    useEffect(() => {
        if (details) {
            // Find the highest value dynamically from the details
            const highestValue = Math.max(...Object.values(details));
            setMaxValue(highestValue); 

            // Transform object keys into an array of names
            const names = transformObjectKeysToArray(details);
            setBodyTypeNames(names);

            console.log("Details of body chart", details);
            console.log("High value:", highestValue);
            console.log("Body type names:", names);
        }
    }, [details]);

    return (
        <div id="cssportal-grid" className='desktop:px-2 large-desktop:px-4 laptop:px-2 laptop:pb-2 border-red-900'>
            {Object.entries(details).map(([key, value], index) => {
                const isMax = value === maxValue;
                const bgColor = isMax ? 'bg-[#CC0001]' : 'bg-[#f9d3c6]'; // Darker for max value, lighter otherwise
                
                return (
                    <div key={index} id={`div${index + 1}`} className={`flex flex-col  cursor-default justify-center items-center ${bgColor}`}>
                        {/* Use the transformed name */}
                        <h1 className='desktop:text-[12px] laptop:text-[0.5rem] text-center large-desktop:text-[1.7rem] text-[#00000] font-bold'>
                            {bodyTypeNames[index]}
                        </h1>
                        <p className='text-[#000000] laptop:text-[0.5rem] desktop:text-[10px] large-desktop:text-[1.5rem] font-bold'>
                            {value}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default BodyTypeLayout;
