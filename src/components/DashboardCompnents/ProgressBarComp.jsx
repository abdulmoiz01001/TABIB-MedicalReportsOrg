import React, { useEffect } from 'react';

const ProgressBarComp = ({ details, title, percentage, min = 0, max = 100 , firstState ,secondState, thiredState , imgSrc  }) => {
    // Calculate the width of the progress bar dynamically
    const progressWidth = `${(percentage / max) * 100}%`;

    useEffect(() => {
        console.log("Progress Bar Component: ", details);
    }, [details]);

    return (
        <>
            <div className='flex w-full h-[18%]  my-1 justify-between items-center ' >
                <div className=' bg-[#F9B9B4] tablet:w-[50px] tablet:h-[50px] laptop:w-[50px] laptop:h-[50px] desktop:w-[82px] large-desktop:w-[17%]  large-desktop:h-[150px] desktop:h-[80px] flex justify-center items-center rounded-[15px] border border-[#CC0001]' >

                    <img src={imgSrc} alt="logo" className='desktop:w-[50px] large-desktop:w-[100px]  desktop:h-[50px] large-desktop:h-[100px] ' />
                </div>
                <div className="w-[82%] large-desktop:h-[80%] flex flex-col justify-around items-start  px-2">
                    {/* Title Section */}
                    <div className="flex justify-between w-full items-center ">
                        <span className="desktop:text-[1.2rem] laptop:text-[0.7rem] large-desktop:text-[2.2rem] font-semibold text-gray-700">{title}</span>
                      {
                      title === 'SpO2' &&
                       <span className="desktop:text-[1rem] laptop:text-[0.7rem] large-desktop:text-[2.2rem] font-semibold text-red-500">{percentage}%</span>
                      } 
                    </div>
                    {/* Progress Bar Container */}
                    <div className="relative w-full laptop:h-[10px] desktop:h-[17px] large-desktop:h-[30px] bg-gray-200 rounded-none overflow-hidden">
                        {/* Progress Bar Fill */}
                        <div
                            className="h-full bg-red-500 transition-all duration-300 ease-in-out"
                            style={{ width: details }}
                        ></div>
                    </div>
                    {/* Range Section (Optional Display) */}
                    {
                      title === 'SpO2' ?<> <div className="flex justify-start text-sm text-gray-600 mt-1">
                        <div className="flex justify-start desktop:text-[0.9rem] large-desktop:text-[1.5rem] w-full">

                            <span className='large-desktop:text-[2rem] laptop:text-[0.5rem] ' >{min}</span>~
                            <span className='large-desktop:text-[2rem] laptop:text-[0.5rem] ' >{max}</span>
                        </div>
                    </div></> : <>
                    <div className="flex justify-between large-desktop:justify-between  w-full desktop:text-sm text-gray-600 mt-1">
                        {/* <div className="flex justify-start text-[7px] w-full"> */}

                            <span className='desktop:text-[0.9rem] laptop:text-[0.6rem] large-desktop:text-[2rem] text-black' >{firstState}</span>
                            <span className='desktop:text-[0.9rem] laptop:text-[0.6rem] large-desktop:text-[2rem] text-black' >{secondState}</span>
                            <span className='desktop:text-[0.9rem] laptop:text-[0.6rem] large-desktop:text-[2rem] text-black' >{thiredState}</span>
                        {/* </div> */}
                    </div>
                    
                    </>}
                </div>
            </div>
        </>
    );
};

export default ProgressBarComp;