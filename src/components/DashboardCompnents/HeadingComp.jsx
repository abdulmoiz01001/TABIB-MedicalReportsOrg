import React from 'react'
import clsx from 'clsx'
import { useMediaQuery } from 'react-responsive';

const HeadingComp = () => {
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 823 });
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const containerClasses = clsx(
    'mx-auto', 
    'flex', 
    'justify-between', 
    'items-center', 
    'desktop:w-[97%]', 
    'tablet:w-[96%]', 
    'mobile:w-[98%]', 
    'mobile:py-4', 
    'laptop:w-[96%]', 
    'large-desktop:w-[99%]', 
    'laptop:h-[5%]', 
    'h-[6%]'
  )

  const logoClasses = clsx(
    'desktop:w-[81px]', 
    'mobile:w-[60px]', 
    'tablet:w-[60px]', 
    'laptop:w-[50px]', 
    'large-desktop:w-[200px]', 
  )

  const headingClasses = clsx(
    'mobile:hidden',
    'desktop:text-[1.438rem]',
    'laptop:text-[1rem]',
    'tablet:text-[0.8rem]',
    'text-center',
    'large-desktop:text-[3.2rem]',
    'text-[#CC0001]',
    'font-bold'
  )

  const mobileHeadingClasses = clsx(
    'mobile:text-[0.75rem]',
    'tablet:text-[0.7rem]',
    'desktop:text-[1rem]',
    'laptop:text-[0.7rem]',
    'large-desktop:text-[1.5rem]',
    'text-center',
    'font-bold',
    'text-[#CC0001]'
  )

  return (
    <div className={containerClasses}>
      <img src="logo.png" alt="logo" className={logoClasses} />
      {
        isTablet  || isMobile ?
        <h1 className={mobileHeadingClasses}>
        TABIAT.LIVE Data Dashboard (powered by TABIB)
      </h1> :  <h1 className={headingClasses}>
        TABIAT: Temperament and Blood-Pressure Indication and Tracking (powered by TABIB)
      </h1> 
      } 
      <img src="logo.svg" alt="logo" className={logoClasses} />
    </div>
  )
}

export default HeadingComp
