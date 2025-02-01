import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

const ProgressBarComp = ({
  reportsCounts,
  details,
  title,
  percentage,
  min = 0,
  max = 100,
  firstValue,
  secondValue,
  thirdValue,
  firstState,
  secondState,
  thirdState,
  imgSrc
}) => {
  // Calculate the width of the progress bar dynamically
  const progressWidth = `${(percentage / max) * 100}%`;

  const [rangeValue, setRangeValue] = useState();

  useEffect(() => {
    if (firstValue && secondValue && thirdValue && reportsCounts) {
      const sum = firstValue + secondValue + thirdValue;
      const average = (sum / reportsCounts) * 100;
      setRangeValue(average);
    }
  }, [firstValue, secondValue, thirdValue, reportsCounts]);

  useEffect(() => {
    console.log('Progress Bar Component: ', details);
  }, [details]);

  const containerStyles = clsx(
    'flex w-full h-[20%] justify-between items-center'
  );

  const iconStyles = clsx(
    'bg-[#F9B9B4] tablet:w-[50px] mobile:h-[40px] mobile:w-[40px] tablet:h-[50px] laptop:w-[50px] laptop:h-[50px] desktop:w-[62px] large-desktop:w-[90px] large-desktop:h-[90px] desktop:h-[80px] flex justify-center items-center rounded-[15px] border border-[#CC0001]'
  );

  const imgStyles = clsx(
    'desktop:w-[50px] large-desktop:w-[50px] desktop:h-[50px] large-desktop:h-[500px]'
  );

  const titleStyles = clsx(
    'desktop:text-[1.2rem] mobile:text-[0.9rem] laptop:text-[0.9rem] tablet:text-[0.9rem] large-desktop:text-[1.5rem] font-semibold text-gray-700'
  );

  const percentageStyles = clsx(
    'desktop:text-[1rem] mobile:text-[0.9rem] tablet:text-[0.9rem] laptop:text-[0.7rem] large-desktop:text-[1.2rem] font-semibold'
  );

  const progressBarStyles = clsx(
    'relative w-full laptop:h-[10px] tablet:h-[8px] mobile:h-[9px] desktop:h-[17px] large-desktop:h-[18px] bg-gray-200 rounded-none overflow-hidden'
  );

  const progressFillStyles = clsx(
    'h-full bg-red-500 transition-all duration-300 ease-in-out relative'
  );

  const rangeStyles = clsx(
    'flex justify-between large-desktop:justify-between w-full desktop:text-sm text-gray-600 mt-1'
  );

  return (
    <>
      <div className={containerStyles}>
        <div className={iconStyles}>
          <img src={imgSrc} alt="logo" className={imgStyles} />
        </div>
        <div className="w-[82%] large-desktop:h-[80%] flex flex-col justify-around items-start px-2">
          {/* Title Section */}
          <div className="flex justify-between w-full items-center">
            <span className={titleStyles}>{title}</span>
            {title === 'SpO2' && (
              <span className={`${percentageStyles} text-red-500`}>
                {percentage}%
              </span>
            )}
            {title === 'Temperature' && (
              <span className={`${percentageStyles} text-red-500`}>
                {percentage} <sup className="text-[#333333]">F</sup>
              </span>
            )}
          </div>

          {/* Progress Bar Container */}
          <div className={progressBarStyles}>
            {/* Progress Bar Fill */}
            {rangeValue ? (
              <div className={progressFillStyles} style={{ width: rangeValue }}>
                {/* Shine Effect */}
                <div className="absolute top-0 left-0 w-full h-full shine-effect"></div>
              </div>
            ) : (
              <div className={progressFillStyles} style={{ width: `${percentage}%` }}>
                {/* Shine Effect */}
                <div className="absolute top-0 left-0 w-full h-full shine-effect"></div>
              </div>
            )}
          </div>

          {/* Range Section */}
          {title === 'SpO2' || title === 'Temperature' ? (
            <div className="flex justify-start text-sm text-gray-600 mt-1">
              <div className="flex justify-start desktop:text-[0.9rem] large-desktop:text-[1.2rem] w-full">
                <span className="large-desktop:text-[1rem] tablet:text-[0.6rem] mobile:text-[0.6rem] laptop:text-[0.5rem]">{min}</span>~
                <span className="large-desktop:text-[1rem] tablet:text-[0.6rem] mobile:text-[0.6rem] laptop:text-[0.5rem]">{max}</span>
              </div>
            </div>
          ) : (
            <div className={rangeStyles}>
              <span className="desktop:text-[0.9rem] laptop:text-[0.6rem] tablet:text-[0.8rem] mobile:text-[0.8rem] large-desktop:text-[1.3rem] text-black">{firstState}</span>
              <span className="desktop:text-[0.9rem] laptop:text-[0.6rem] tablet:text-[0.8rem] mobile:text-[0.8rem] large-desktop:text-[1.3rem] text-black">{secondState}</span>
              <span className="desktop:text-[0.9rem] laptop:text-[0.6rem] tablet:text-[0.8rem] mobile:text-[0.8rem] large-desktop:text-[1.3rem] text-black">{thirdState}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProgressBarComp;
