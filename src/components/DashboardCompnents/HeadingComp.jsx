import React from 'react'

const HeadingComp = () => {
  return (
    <>
    <div className=' desktop:w-[97%] tablet:w-[96%] mobile:w-[98%] mobile:py-4 laptop:w-[96%] large-desktop:w-[99%] laptop:h-[5%] h-[6%] mx-auto flex justify-between items-center   ' >
     <img src="logo.svg" alt="logo" className='desktop:w-[81px] mobile:w-[60px] tablet:w-[60px] laptop:w-[50px] laptop:h-[50px] desktop:h-[50px] large-desktop:w-[250px] large-desktop:h-[200px] ' />
     <h1 className=' mobile:hidden desktop:text-[1.438rem] laptop:text-[1rem] tablet:text-[0.8rem] text-center large-desktop:text-[4rem] text-[#CC0001] font-bold'>TABIAT: Temperament and Blood-Pressure Indication and Tracking (powered by TABIB)</h1>
     <img src="logo.svg" alt="logo" className='desktop:w-[81px] mobile:w-[60px] tablet:w-[60px] laptop:w-[50px] laptop:h-[50px] desktop:h-[50px] large-desktop:w-[250px] large-desktop:h-[200px]desktop: ' />
    </div>
    </>
  )
}

export default HeadingComp