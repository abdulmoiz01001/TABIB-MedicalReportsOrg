import React, { useState, useEffect } from 'react';
import TemperamentChart from '../Charts/TemperamentChart';
import { clsx } from 'clsx'

const TemperamentChartComp = ({ data }) => {
  const [isMaleSelected, setIsMaleSelected] = useState(true); // Track male selection
  const [isFemaleSelected, setIsFemaleSelected] = useState(true); // Track female selection
  const test = clsx("w-full flex h-[32.5%] flex-col justify-end items-center bg-[#FAFAFA] border border-[#CC0001] rounded-[15px]")

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleMaleClick = () => {
    setIsMaleSelected((prev) => !prev); // Toggle male selection
  };

  const handleFemaleClick = () => {
    setIsFemaleSelected((prev) => !prev); // Toggle female selection
  };

  const getBackgroundColor = (isSelected) => {
    return isSelected ? '' : 'line-through'; // Highlight selected
  };

  return (
    <>
      <div className={test}>
        <div className="desktop:w-[90%] large-desktop:w-[95%]  h-[15%]  laptop:px-0 laptop:gap-2 px-2 flex justify-between items-center">
          <div
            className={`flex justify-end gap-1 items-center cursor-pointer ${getBackgroundColor(
              isMaleSelected
            )}`}
            onClick={handleMaleClick}
          >
            <img
              src="square.svg"
              className="desktop:w-4 large-desktop:w-4 mobile:w-3 tablet:w-3 desktop:h-4 large-desktop:h-8"
              alt="Male"
            />
            <p className="desktop:text-[1rem] large-desktop:text-[19.9px] laptop:text-[0.6rem] tablet:text-[0.8rem] mobile:text-[0.8rem] large-desktop:text-[2rem] text-black">
              M
            </p>
          </div>
          <h1 className="desktop:text-[1rem] laptop:text-[0.7rem] tablet:px-2 mobile:px-2 tablet:text-[0.7rem] mobile:text-[0.7rem] large-desktop:text-[1.5rem] text-center font-bold text-black">
            Temperament with Dominant Qualities
          </h1>
          <div
            className={`flex justify-start gap-1 items-center cursor-pointer ${getBackgroundColor(
              isFemaleSelected
            )}`}
            onClick={handleFemaleClick}
          >
            <img
              src="square.svg"
              className="desktop:w-4 large-desktop:w-4 desktop:h-4 mobile:w-3 tablet:w-3 large-desktop:h-8"
              alt="Female"
            />
            <p className="desktop:text-[1rem] large-desktop:text-[19.9px] laptop:text-[0.6rem] tablet:text-[0.8rem] mobile:text-[0.8rem] large-desktop:text-[2rem] text-black">
              F
            </p>
          </div>
        </div>
        <div className="h-[85%] w-[90%] flex flex-col justify-end items-center">
          {/* Conditional rendering based on selected checkboxes */}
          {isMaleSelected && isFemaleSelected && <TemperamentChart details={data.both} />}
          {isMaleSelected && !isFemaleSelected && <TemperamentChart details={data.male} />}
          {!isMaleSelected && isFemaleSelected && <TemperamentChart details={data.female} />}
          {!isMaleSelected && !isFemaleSelected && (
           <TemperamentChart details={data.both} />
          )}
        </div>
      </div>
    </>
  );
};

export default TemperamentChartComp;
