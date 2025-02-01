import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-datepicker/dist/react-datepicker.css';
import clsx from 'clsx';

const FilterbyDateRange = ({ toggleDropdown, formatDateRange, showCalendar, selectionRange, handleClear, handleSelect }) => {

  // Define class variables
  const containerClass = 'relative large-desktop:h-full select-none mobile:w-[98%] tablet:w-[45%] w-[12%]';
  const buttonClass = 'w-full border-2 mobile:h-[50px] tablet:h-[50px] desktop:px-8 large-desktop:px-8 laptop:px-4 rounded-[15px] laptop:h-[50px] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer';
  const textClass = 'desktop:text-[15px] desktop:leading-5 mobile:text-[11px] tablet:text-[12px] laptop:leading-4 laptop:text-[0.7rem] select-none large-desktop:text-[1.2rem] text-black';
  const iconClass = 'desktop:w-[20px] laptop:w-[16px] mobile:w-[18px] tablet:w-[20px] laptop:h-[16px] large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none';
  const dropdownClass = 'absolute mt-5 shadow-[0_4px_4px_3px_#0000000a] rounded-[15px] bg-white p-2 z-10';
  const dateRangePickerClass = 'mobile:flex tablet:flex tablet:flex-col mobile:w-[280px] overflow-auto mobile:flex-col';
  const clearButtonClass = 'bg-[#CC0001] text-white px-4 py-2 rounded';
  
  return (
    <>
      <div className={containerClass}>
        <div
          className={buttonClass}
          onClick={() => toggleDropdown("calendar")}
        >
          <p className={textClass}>
            {selectionRange.token
              ? formatDateRange(selectionRange.startDate, selectionRange.endDate)
              : <span className="laptop:text-[0.8rem]">Filter By</span>}
          </p>
          <img
            src='calendar.svg'
            alt='calendarIcon'
            className={iconClass}
          />
        </div>

        {showCalendar && (
          <div className={dropdownClass}>
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              editableDateInputs={true}
              rangeColors={["#CC0001"]}
              className={dateRangePickerClass}
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={handleClear}
                className={clearButtonClass}
              >
                Clear Date
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterbyDateRange;
