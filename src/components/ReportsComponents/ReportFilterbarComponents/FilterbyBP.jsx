import clsx from 'clsx';

const FilterbyBP = ({ toggleDropdown, selectedOption, handleBPOptionSelect, arrowRotate, isDropdownOpen, options }) => {
  
  // Define variables for the Tailwind classes
  const containerClass = 'flex w-[12%] large-desktop:h-full mobile:relative tablet:relative mobile:w-[98%] tablet:w-[45%] flex-col items-center';
  const buttonClass = 'w-full rounded-[15px] border-2 mobile:h-[50px] tablet:h-[50px] laptop:h-[50px] desktop:h-[62px] large-desktop:h-full flex justify-around laptop:gap-2 items-center bg-[#FAFAFA] cursor-pointer px-4';
  const textClass = 'desktop:text-[15px] mobile:text-[11px] tablet:text-[12px] laptop:text-[0.9rem] laptop:leading-4 large-desktop:text-[2rem] text-black';
  const iconClass = clsx('desktop:w-[20px]', {
    'rotate-180': arrowRotate,
    'rotate-0': !arrowRotate,
    'mobile:w-[18px]': true,
    'tablet:w-[20px]': true,
    'laptop:w-[16px] laptop:h-[16px]': true,
    'duration-300 transition-all': true,
    'large-desktop:w-[40px]': true,
    'desktop:h-[20px]': true,
    'large-desktop:h-[40px]': true,
    'pointer-events-none': true,
  });
  const dropdownMenuClass = 'mt-2 absolute z-50 top-28 mobile:top-10 mobile:left-2 tablet:top-10 w-[227px] bg-[#FAFAFA] shadow-[0_4px_4px_3px_#0000000a] rounded-[15px]';
  const optionClass = 'p-3 text-black text-[16px] cursor-pointer hover:bg-red-100';
  const selectedOptionClass = 'bg-[#FFF3F3] font-bold';

  return (
    <div className={containerClass}>
      <div className={buttonClass} onClick={() => toggleDropdown('filter')}>
        <p className={textClass}>
          {selectedOption === "Clear" ? "Filter By BP" : selectedOption}
        </p>
        <img
          src="bp.svg"
          alt="BP Icon"
          className={iconClass}
        />
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className={dropdownMenuClass}>
          {options.map((option, index) => (
            <div
              key={index}
              className={clsx(optionClass, {
                [selectedOptionClass]: option === selectedOption,
              })}
              onClick={() => handleBPOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterbyBP;
