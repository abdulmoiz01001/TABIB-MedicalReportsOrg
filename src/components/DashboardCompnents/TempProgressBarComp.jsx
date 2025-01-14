import React from 'react'

const TempProgressBarComp = () => {
  return (
    <>
      <div className='flex w-full  border-red-900 h-[46px] my-1 justify-start items-center'>
        <div className='w-[41.5px] bg-[#F9B9B4] h-[46px] flex justify-center items-center rounded-[15px] border border-[#CC0001]'>
          <img src="temperature.svg" alt="logo" className='w-[61px] h-[30px]' />
        </div>
        <div className="w-[90%] h-full  border-green-900 px-2">
          <h1 className="text-[12px] font-semibold text-gray-700">Temperature</h1>
          <div className='w-full flex justify-center items-center  border-blue-900' >
            <div className='w-[20%] flex flex-col justify-start items-start' >
              <p className='text-[10px] text-[#CC0001]'>97.3 F</p>
              <p className='text-[7px] text-[#000000]'>96.8~98.6</p>

            </div>
            <div className="relative w-[90%] h-[9px] bg-gray-200 rounded-none overflow-hidden">
              {/* Progress Bar Fill */}
              <div
                className="h-full bg-red-500 transition-all duration-300 ease-in-out"
                style={{ width: 80 + "%" }}
              ></div>
            </div>
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