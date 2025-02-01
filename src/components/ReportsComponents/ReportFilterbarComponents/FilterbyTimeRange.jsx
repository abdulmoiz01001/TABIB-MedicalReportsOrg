import clsx from 'clsx';

const FilterbyTimeRange = ({ 
  selectionRange, 
  formatTime, 
  setStartTime, 
  setEndTime, 
  startTime, 
  endTime, 
  toggleDropdown, 
  isTimePickerVisible, 
  handleTimeChange, 
  clearTimeRange 
}) => {
  // Class variables for better manageability
  const containerClass = clsx(
    'flex w-[12%] mobile:relative tablet:relative large-desktop:h-full mobile:w-[98%] tablet:w-[45%] flex-col items-center',
    { 'opacity-50 cursor-not-allowed': !selectionRange.token }
  );
  
  const buttonClass = 'w-full rounded-[15px] desktop:px-8 large-desktop:px-8 laptop:px-4 border-2 mobile:h-[50px] tablet:h-[50px] laptop:h-[50px] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer';
  
  const textClass = 'desktop:text-[15px] desktop:leading-5 mobile:text-[11px] tablet:text-[12px] laptop:leading-4 laptop:text-[0.8rem] large-desktop:text-[2rem] text-black';
  
  const iconClass = 'desktop:w-[20px] laptop:w-[16px] laptop:h-[16px] mobile:w-[18px] tablet:w-[20px] large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none';
  
  const modalClass = 'absolute top-28 mobile:top-10 mobile:right-4 mobile:w-[178%] shadow-[0_4px_4px_3px_#0000000a] tablet:top-10 z-50 bg-white p-4 mobile:p-2 shadow-lg rounded-lg mobile:mt-3 mt-4';
  
  const labelClass = 'mr-2 mobile:text-[13px] text-[#313131] text-[15px] font-normal';
  const inputClass = 'text-center mobile:w-[110px] text-[#FFFFFF] text-[15px] appearance-none custom-time-input font-normal bg-[#CC0001] rounded-md p-2 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-default';
  
  const buttonClearClass = 'px-4 py-2 bg-[#CC0001] text-white text-[15px] rounded-md shadow-md hover:bg-red-700';

  return (
    <div className={containerClass}>
      {/* Button to open time picker */}
      <div
        className={buttonClass}
        onClick={() => toggleDropdown('time')}
      >
        <p className={textClass}>
          {startTime !== "" && endTime !== "" ? `${formatTime(startTime)} - ${formatTime(endTime)}` : <span className="laptop:text-[0.9rem]">Filter By</span>}
        </p>
        <img
          src="clock.svg"
          alt="Clock Icon"
          className={iconClass}
        />
      </div>

      {/* Time Picker Modal */}
      {isTimePickerVisible && (
        <div className={modalClass}>
          <div className="flex flex-row justify-center gap-4 items-center">
            <div className="flex flex-col relative justify-center items-start">
              <label className={labelClass}>Start Time:</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => handleTimeChange(e, setStartTime, "start")}
                className={inputClass}
              />
              <img
                src="white-clock.svg"
                alt="Clock Icon"
                className="absolute top-[68%] right-3 transform -translate-y-1/2 w-5 h-5"
              />
            </div>
            <div className="flex relative flex-col justify-center items-start">
              <label className={labelClass}>End Time:</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => handleTimeChange(e, setEndTime, "end")}
                className={inputClass}
              />
              <img
                src="white-clock.svg"
                alt="Clock Icon"
                className="absolute top-[68%] right-3 transform -translate-y-1/2 w-5 h-5"
              />
            </div>
          </div>
          <div className="flex justify-end mobile:mr-4 mt-4">
            <button
              onClick={() => clearTimeRange()}
              className={buttonClearClass}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterbyTimeRange;
