import React from 'react'
import { useMediaQuery } from 'react-responsive';

const TempProgressBarComp = () => {
  
  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });  
  return (
    <>
      <div className='flex w-full h-[20%] border-red-900   justify-between items-center'>
        <div className='desktop:w-[17%] large-desktop:w-[17%]  large-desktop:h-[150px] desktop:h-[80px] bg-[#F9B9B4] flex justify-center items-center rounded-[15px] border border-[#CC0001]'>
          <img src="temperature.svg" alt="logo" className='desktop:w-[61px] large-desktop:w-[100px]  desktop:h-[30px] large-desktop:h-[100px] ' />
        </div>
        <div className="w-[82%] h-full  flex flex-col justify-evenly py-4 px-2">
          <h1 className="desktop:text-[1.2rem] large-desktop:text-[2.2rem] font-semibold text-gray-700">Temperature</h1>
          <div className='w-full flex justify-center items-center  border-blue-900' >
            <div className='w-[20%]  flex flex-col justify-start items-start' >
              <p className='desktop:text-[0.9rem] desktop:text-[#CC0001] large-desktop:text-[2rem]'>97.3 F</p>
              <p className='desktop:text-[0.8rem] desktop:text-[#000000] large-desktop:text-[2rem]'>96.8~98.6</p>

            </div>
        {
          !isLargeDesktop ?   <div className='w-[80%] gap-2 h-full  flex flex-col justify-start items-center' > 
           
          <div className="relative rounded-bl-[100px] rounded-tl-[100px]  w-full  desktop:h-[17px] large-desktop:h-[30px] bg-gray-200 rounded-none overflow-hidden">

            <div
              className="h-full bg-red-500 transition-all duration-300 ease-in-out"
              style={{ width: 80 + "%" }}
              ></div>
              </div>
            
          </div> :  <div className='w-[80%] gap-2 h-full  flex flex-col justify-start items-center' > 
           
           <div className="relative rounded-bl-[100px] rounded-tl-[100px]  w-full  desktop:h-[17px] large-desktop:h-[30px] bg-gray-200 rounded-none overflow-hidden">
 
             <div
               className="h-full bg-red-500 transition-all duration-300 ease-in-out"
               style={{ width: 80 + "%" }}
               ></div>
               </div>
             
           </div> 
        //    :  <div className='w-[80%] gap-2 h-full  flex flex-col justify-center items-center'> 
        //    {/* Top Scale Bar (0 to 110) */}
        //    {/* <div className='w-full h-2 bg-black relative'>
        //      {Array.from({ length: 12 }).map((_, index) => (
        //        <div
        //          key={index}
        //          className="absolute top-0 h-4 bg-white"
        //          style={{
        //            width: index % 2 === 0 ? '4px' : '2px',  // Larger ticks at even positions
        //            left: `${index * (100 / 11)}%`,
        //          }}
        //        >
              
        //          {index % 2 === 0 && (
        //            <span
        //              className="absolute text-white text-[10px] -top-5 -translate-x-1/2"
        //            >
        //              {index * 10}
        //            </span>
        //          )}
        //        </div>
        //      ))}
        //    </div> */}
         
        //    {/* Thermometer Bar */}
        //    {/* <div className="relative rounded-bl-[100px] rounded-tl-[100px] w-full desktop:h-[17px] large-desktop:h-[30px] bg-gray-200 overflow-hidden">
        //      <div
        //        className="h-full bg-red-500 transition-all duration-300 ease-in-out"
        //        style={{ width: '80%' }}
        //      ></div>
        //    </div> */}
         
        //    {/* Bottom Scale Bar (14 to 210) */}
        //    {/* <div className='w-full h-2 bg-black relative'>
        //      {Array.from({ length: 11 }).map((_, index) => (
        //        <div
        //          key={index}
        //          className="absolute top-0 h-4 bg-white"
        //          style={{
        //            width: index % 2 === 0 ? '4px' : '2px',  // Larger ticks at even positions
        //            left: `${index * (100 / 10)}%`,
        //          }}
        //        >
                
        //          {index % 2 === 0 && (
        //            <span
        //              className="absolute text-white text-[10px] -bottom-5 -translate-x-1/2"
        //            >
        //              {14 + index * 20}
        //            </span>
        //          )}
        //        </div>
        //      ))}
        //    </div> */}
        //  </div>
        }  

            {/* <ThermometerComp value={80}/> */}
          </div>

          {/* Title Section */}
          {/* <div className="flex justify-between items-center"> */}

          {/* <span className="text-[9px] font-semibold text-red-500">36.5°C</span>
        </div> */}
          {/* Progress Bar Container */}
          {/* <ThermometerComp value={80}/> */}
          {/* <div className="relative w-full h-[9px] bg-gray-200 rounded-none overflow-hidden">

          <div
            className="h-full bg-red-500 transition-all duration-300 ease-in-out"
            style={{ width: "65%" }}
          ></div>
        </div> */}
          {/* Range Section */}
          {/* <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span className='text-[7px] text-black'>Normal</span>
          <span className='text-[7px] text-black'>Elevated</span>
          <span className='text-[7px] text-black'>High</span>
        </div> */}
        </div>
      </div>
      {/* <ThermometerComp /> */}
    </>
  )
}

export default TempProgressBarComp