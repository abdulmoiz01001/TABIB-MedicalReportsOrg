import React from 'react';
import clsx from 'clsx';

const AverageTABIATScoreMalesvsFemalesComp = ({ data }) => {
  const maleScore = data.male || 10; // Dynamic male score
  const femaleScore = data.female || 10; // Dynamic female score
  // Function to calculate percentage and round to nearest 5
  const calculatePercentage = (score) => Math.round((score / 10) * 10 / 5) * 5;

  // Determine the male image based on the percentage
  const getMaleImage = (percentage) => {
    switch (percentage) {
      case 0: return 'male0.svg';
      case 5: return 'male1.svg';
      case 10: return 'male2.svg';
      case 15: return 'male2.svg';
      case 20: return 'male3.svg';
      case 25: return 'male3.svg';
      case 30: return 'male4.svg';
      case 40: return 'male4.svg';
      case 45: return 'male5.svg';
      case 50: return 'male5.svg';
      case 55: return 'male6.svg';
      case 60: return 'male6.svg';
      case 65: return 'male7.svg';
      case 70: return 'male7.svg';
      case 75: return 'male8.svg';
      case 85: return 'male8.svg';
      case 90: return 'male9.svg';
      case 95: return 'male9.svg';
      case 100: return 'male9.svg';
      // default: return 'male9.svg'; // For percentages >= 95
    }
  };

  // Determine the female image based on the percentage
  const getFemaleImage = (percentage) => {
    switch (percentage) {
      case 0: return 'female0.svg';
      case 5: return 'female1.svg';
      case 10: return 'female1.svg';
      case 15: return 'female2.svg';
      case 20: return 'female2.svg';
      case 25: return 'female3.svg';
      case 30: return 'female3.svg';
      case 40: return 'female4.svg';
      case 45: return 'female4.svg';
      case 50: return 'female5.svg';
      case 55: return 'female5.svg';
      case 60: return 'female6.svg';
      case 65: return 'female6.svg';
      case 70: return 'female7.svg';
      case 75: return 'female8.svg';
      case 85: return 'female8.svg';
      case 90: return 'female9.svg';
      case 100: return 'female9.svg';
      // default: return 'female9.svg'; // For percentages >= 95
    }
  };

  const malePercentage = calculatePercentage(maleScore);
  const femalePercentage = calculatePercentage(femaleScore);

  const maleImage = getMaleImage(malePercentage);
  const femaleImage = getFemaleImage(femalePercentage);

  // Tailwind classes as variables
  const containerClasses = clsx(
    'w-full h-[32.5%] flex-col justify-between items-center laptop:p-2 p-4 bg-[#FAFAFA] flex',
    'border border-[#CC0001] rounded-[15px]'
  );

  const titleClasses = clsx(
    'desktop:text-[1rem] mobile:pb-2 tablet:text-[0.7rem] mobile:text-[0.7rem]',
    'laptop:text-[0.7rem] large-desktop:text-[1.5rem] font-bold text-black'
  );

  const axisClasses = clsx(
    'h-full w-[5%] flex flex-col-reverse justify-start items-center'
  );

  const axisTextClasses = clsx(
    'desktop:text-[0.8rem] mobile:text-[0.62rem] tablet:text-[0.5rem] laptop:text-[0.5rem]',
    'large-desktop:text-[1.2rem]'
  );

  const imageContainerClasses = clsx(
    'flex overflow-hidden relative flex-col h-full justify-center items-center'
  );

  const shineEffectClasses = clsx(
    'absolute top-0 left-0 w-full z-20 h-full shine-effect-male-female'
  );

  const dividerClasses = clsx(
    'large-desktop:h-[300px] desktop:h-[200px] mobile:h-[150px]'
  );

  const maleImageClasses = clsx(
    'large-desktop:w-[133px] z-10 mobile:w-[80px] mobile:h-[152px]',
    'tablet:w-[40px] laptop:w-[60px] desktop:h-[199px] desktop:w-[100px]'
  );

  const femaleImageClasses = clsx(
    'large-desktop:w-[144px] z-10 mobile:w-[87.5px] mobile:h-[152px]',
    'laptop:w-[65px] desktop:h-[300px] desktop:w-[95px]'
  );

  const graphLinesClasses = clsx("w-[95%] h-full mb-1 flex mobile:gap-[14px] desktop:gap-[18px] large-desktop:gap-[28px] desktop:h-[90%] large-desktop:h-[90%] desktop:gap-[18.2px] flex-col justify-center items-center")
  const graphEachLineClasses = clsx("w-full h-[1px] z-0 bg-gray-300")
  const subContainerClasses = clsx("flex relative h-[70%] large-desktop:h-full w-[90%] grid-background justify-center mobile:justify-start mobile:items-end items-end")
  const maleAndFemaleContainerClasses = clsx("flex absolute h-[100%] w-[90%] desktop:h-[95%] ml-6 large-desktop:ml-[70px] large-desktop:h-[90%] large-desktop:mb-2 grid-background justify-between mobile:justify-start mobile:gap-8 mobile:items-end items-end")
  return (
    <div className={containerClasses}>
      <h1 className={titleClasses}>Average TABIAT Score of Males vs Females</h1>
      <div className={subContainerClasses}>
        {/* Left Y-axis for scale */}
        <div className={axisClasses}>
          <span className={axisTextClasses}>0</span>
          <span className={axisTextClasses}>10</span>
          <span className={axisTextClasses}>20</span>
          <span className={axisTextClasses}>30</span>
          <span className={axisTextClasses}>40</span>
          <span className={axisTextClasses}>50</span>
          <span className={axisTextClasses}>60</span>
          <span className={axisTextClasses}>70</span>
          <span className={axisTextClasses}>80</span>
          <span className={axisTextClasses}>90</span>
          <span className={axisTextClasses}>100</span>
        </div>
        <div className={graphLinesClasses}>
          <div className={graphEachLineClasses}></div>
          <div className={graphEachLineClasses}></div>
          <div className={graphEachLineClasses}></div>
          <div className={graphEachLineClasses}></div>
          <div className={graphEachLineClasses}></div>
          <div className={graphEachLineClasses}></div>
          <div className={graphEachLineClasses}></div>
          <div className={graphEachLineClasses}></div>
          <div className={graphEachLineClasses}></div>
          <div className={graphEachLineClasses}></div>
          <div className={graphEachLineClasses}></div>
        </div>
        <div className={maleAndFemaleContainerClasses}>
          <div className={imageContainerClasses}>
            <img
              src={maleImage}
              alt="Male Score"
              className={maleImageClasses}
            />
            <div className={shineEffectClasses}></div>
          </div>

          <img src="line.svg" alt="Divider" className={dividerClasses} />

          <div className={imageContainerClasses}>
            <img
              src={femaleImage}
              alt="Female Score"
              className={femaleImageClasses}
            />
            <div className={shineEffectClasses}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageTABIATScoreMalesvsFemalesComp;
