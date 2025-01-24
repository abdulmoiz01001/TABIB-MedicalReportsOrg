import React from 'react'

const HeadingComp = () => {
  return (
    <>
    <div className='desktop:w-[97%] laptop:w-[98%] large-desktop:w-[99%] laptop:h-[5%] h-[6%] mx-auto flex justify-between items-center   ' >
     <img src="logo.svg" alt="logo" className='desktop:w-[81px] laptop:w-[50px] laptop:h-[50px] desktop:h-[50px] large-desktop:w-[250px] large-desktop:h-[200px] ' />
     <h1 className='desktop:text-[1.438rem] laptop:text-[1rem] large-desktop:text-[4rem] text-[#CC0001] font-bold'>TABIAT: Temperament and Blood-Pressure Indication and Tracking (powered by TABIB)</h1>
     <img src="logo.svg" alt="logo" className='desktop:w-[81px] laptop:w-[50px] laptop:h-[50px] desktop:h-[50px] large-desktop:w-[250px] large-desktop:h-[200px]desktop: ' />
    </div>
    </>
  )
}

export default HeadingComp