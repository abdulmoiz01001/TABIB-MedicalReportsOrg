import React, { useEffect, useState } from 'react';

const BodyTypeLayout = ({ details }) => {
    const [maxValue, setMaxValue] = useState(0);

    useEffect(() => {
        // Find the highest value dynamically from the details
        if (details) {
            const highestValue = Math.max(...Object.values(details)); 
            setMaxValue(highestValue);  // Set the highest value
            console.log("high value: ", highestValue);
        }
    }, [details]);
    

    return (
        <>
            <div id="cssportal-grid" className='desktop:px-2 large-desktop:px-4 border-red-900'>
                {Object.entries(details).map(([key, value], index) => {
                    // Determine the background color based on the value
                    const isMax = value == maxValue;
                    console.log("isMax: ", isMax);
                    const bgColor = isMax ? 'bg-[#CC0001]' : 'bg-[#f9d3c6]'; // Darker for max value, lighter otherwise
                    
                    return (
                        <div key={index} id={`div${index+1}`} className={`flex flex-col  cursor-default justify-center items-center ${bgColor}`}>
                            <h1 className='desktop:text-[12px]  large-desktop:text-[1.7rem] text-[#00000] font-bold'>
                                {key}
                            </h1>
                            <p className='text-[#000000] desktop:text-[10px] large-desktop:text-[1.5rem] font-bold'>
                                {value}
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default BodyTypeLayout;
