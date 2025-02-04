import React from 'react'
import clsx from 'clsx'

const HeadingComp = () => {
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
    // 'laptop:h-[50px]', 
    // 'desktop:h-[50px]', 
    'large-desktop:w-[200px]', 
    // 'large-desktop:h-[120px]'
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

  return (
    <div className={containerClasses}>
      <img src="logo.png" alt="logo" className={logoClasses} />
      <h1 className={headingClasses}>
        TABIAT: Temperament and Blood-Pressure Indication and Tracking (powered by TABIB)
      </h1>
      <img src="logo.png" alt="logo" className={logoClasses} />
    </div>
  )
}

export default HeadingComp
