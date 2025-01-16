import React from 'react';

const ProgressBarComp = ({ title, percentage, min = 0, max = 100 , firstState ,secondState, thiredState , imgSrc  }) => {
    // Calculate the width of the progress bar dynamically
    const progressWidth = `${(percentage / max) * 100}%`;

    return (
        <>
            <div className='flex w-full h-[20%]  my-1 justify-between items-center ' >
                <div className='w-[17%] bg-[#F9B9B4] h-full flex justify-center items-center rounded-[15px] border border-[#CC0001]' >

                    <img src={imgSrc} alt="logo" className='desktop:w-[61px] large-desktop:w-[100px]  desktop:h-[30px] large-desktop:h-[100px] ' />
                </div>
                <div className="w-[82%] large-desktop:h-full flex flex-col justify-around items-start  px-2">
                    {/* Title Section */}
                    <div className="flex justify-between w-full items-center ">
                        <span className="desktop:text-[1rem] large-desktop:text-[2rem] font-semibold text-gray-700">{title}</span>
                      {
                      title === 'SpO2' &&
                       <span className="desktop:text-[1rem] large-desktop:text-[2rem] font-semibold text-red-500">{percentage}%</span>
                      } 
                    </div>
                    {/* Progress Bar Container */}
                    <div className="relative w-full desktop:h-[9px] large-desktop:h-[30px] bg-gray-200 rounded-none overflow-hidden">
                        {/* Progress Bar Fill */}
                        <div
                            className="h-full bg-red-500 transition-all duration-300 ease-in-out"
                            style={{ width: progressWidth }}
                        ></div>
                    </div>
                    {/* Range Section (Optional Display) */}
                    {
                      title === 'SpO2' ?<> <div className="flex justify-start text-sm text-gray-600 mt-1">
                        <div className="flex justify-start desktop:text-[0.9rem] large-desktop:text-[1.5rem] w-full">

                            <span className='large-desktop:text-[1.5rem]' >{min}</span>~
                            <span className='large-desktop:text-[1.5rem]' >{max}</span>
                        </div>
                    </div></> : <>
                    <div className="flex justify-between large-desktop:justify-between border-2 w-full desktop:text-sm text-gray-600 mt-1">
                        {/* <div className="flex justify-start text-[7px] w-full"> */}

                            <span className='desktop:text-[0.9rem] large-desktop:text-[1.8rem] text-black' >{firstState}</span>
                            <span className='desktop:text-[0.9rem] large-desktop:text-[1.8rem] text-black' >{secondState}</span>
                            <span className='desktop:text-[0.9rem] large-desktop:text-[1.8rem] text-black' >{thiredState}</span>
                        {/* </div> */}
                    </div>
                    
                    </>}
                </div>
            </div>
        </>
    );
};

export default ProgressBarComp;