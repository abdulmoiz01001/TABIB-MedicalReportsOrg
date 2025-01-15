import React from 'react';

const ProgressBarComp = ({ title, percentage, min = 0, max = 100 , firstState ,secondState, thiredState  }) => {
    // Calculate the width of the progress bar dynamically
    const progressWidth = `${(percentage / max) * 100}%`;

    return (
        <>
            <div className='flex w-full h-[20%]  my-1 justify-between items-center ' >
                <div className='w-[17%] bg-[#F9B9B4] h-full flex justify-center items-center rounded-[15px] border border-[#CC0001]' >

                    <img src="temperature.svg" alt="logo" className='w-[61px] h-[30px] ' />
                </div>
                <div className="w-[82%]  px-2">
                    {/* Title Section */}
                    <div className="flex justify-between items-center ">
                        <span className="text-[1rem] font-semibold text-gray-700">{title}</span>
                      {
                      title === 'SpO2' &&
                       <span className="text-[1rem] font-semibold text-red-500">{percentage}%</span>
                      } 
                    </div>
                    {/* Progress Bar Container */}
                    <div className="relative w-full h-[9px] bg-gray-200 rounded-none overflow-hidden">
                        {/* Progress Bar Fill */}
                        <div
                            className="h-full bg-red-500 transition-all duration-300 ease-in-out"
                            style={{ width: progressWidth }}
                        ></div>
                    </div>
                    {/* Range Section (Optional Display) */}
                    {
                      title === 'SpO2' ?<> <div className="flex justify-start text-sm text-gray-600 mt-1">
                        <div className="flex justify-start text-[0.9rem] w-full">

                            <span>{min}</span>~
                            <span>{max}</span>
                        </div>
                    </div></> : <>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                        {/* <div className="flex justify-start text-[7px] w-full"> */}

                            <span className='text-[0.9rem] text-black' >{firstState}</span>
                            <span className='text-[0.9rem] text-black' >{secondState}</span>
                            <span className='text-[0.9rem] text-black' >{thiredState}</span>
                        {/* </div> */}
                    </div>
                    
                    </>}
                </div>
            </div>
        </>
    );
};

export default ProgressBarComp;