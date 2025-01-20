import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';

const TempProgressBarComp = ({details}) => {

  useEffect(() => {
   console.log(details)
  },[details])   

  const isLargeDesktop = useMediaQuery({ minWidth: 2560 });
  return (
    <>
      <div className='flex w-full h-[18%] border-red-900   justify-between items-center'>
        <div className='desktop:w-[82px] large-desktop:w-[17%]  large-desktop:h-[150px] desktop:h-[80px] bg-[#F9B9B4] flex justify-center items-center rounded-[15px] border border-[#CC0001]'>
          <img src="temperature.svg" alt="logo" className='desktop:w-[50px] large-desktop:w-[100px]  desktop:h-[50px] large-desktop:h-[100px] ' />
        </div>
        <div className="w-[82%] h-full  flex flex-col justify-evenly py-4 px-2">
          <h1 className="desktop:text-[1.2rem] large-desktop:text-[2.2rem] font-semibold text-gray-700">Temperature</h1>
          <div className='w-full flex justify-center items-center  border-blue-900' >
            <div className='w-[20%]  flex flex-col justify-start items-start' >
              <p className='desktop:text-[0.9rem] desktop:text-[#CC0001] large-desktop:text-[2rem]'>97.3 F</p>
              <p className='desktop:text-[0.8rem] desktop:text-[#000000] large-desktop:text-[2rem]'>96.8~98.6</p>

            </div>
            {
              !isLargeDesktop ? <div className='w-[80%] gap-2 h-full  flex flex-col justify-start items-center' >

                <div className="relative rounded-bl-[100px] rounded-tl-[100px]  w-full  desktop:h-[17px] large-desktop:h-[30px] bg-gray-200 rounded-none overflow-hidden">

                  <div
                    className="h-full bg-red-500 transition-all duration-300 ease-in-out"
                    style={{ width: details.temperature + "%" }}
                  ></div>
                </div>

              </div> : <div className='w-[80%] gap-2 h-full  flex flex-col justify-start items-center' >

                <div className="relative rounded-bl-[100px] rounded-tl-[100px]  w-full  desktop:h-[17px] large-desktop:h-[30px] bg-gray-200 rounded-none overflow-hidden">

                  <div
                    className="h-full bg-red-500 transition-all duration-300 ease-in-out"
                    style={{ width: 80 + "%" }}
                  ></div>
                </div>

              </div>
             
            }

         
          </div>

       
        </div>
      </div>
    </>
  )
}

export default TempProgressBarComp