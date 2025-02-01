import clsx from 'clsx';

const FilterbySort = ({ toggleDropdown, selectedSortOption, sortOption, isSortDropdownOpen, sortOptions, handleSortOptionSelect }) => {
  const capitalize = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  // Define class variables
  const containerClass = 'flex w-[12%] large-desktop:h-full mobile:relative tablet:relative mobile:w-[98%] tablet:w-[45%] flex-col items-center';
  const buttonClass = 'w-full rounded-[15px] border-2 mobile:h-[50px] tablet:h-[50px] laptop:h-[50px] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer px-4';
  const textClass = 'desktop:text-[15px] mobile:text-[11px] tablet:text-[12px] laptop:text-[0.7rem] large-desktop:text-[2rem] text-black';
  const iconClass = 'desktop:w-[20px] laptop:w-[16px] mobile:w-[18px] tablet:w-[20px] laptop:h-[16px] large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none';
  const dropdownClass = 'mt-2 absolute z-50 top-28 mobile:top-10 tablet:top-10 right-2 w-[227px] bg-[#FAFAFA] shadow-[0_4px_4px_3px_#0000000a] rounded-[15px]';
  const optionClass = 'p-3 text-black text-[16px] cursor-pointer hover:bg-red-100';

  return (
    <div className={containerClass}>
      <div
        className={buttonClass}
        onClick={() => toggleDropdown('sort')}
      >
        <p className={textClass}>
          {selectedSortOption ? capitalize(selectedSortOption) + " " + capitalize(sortOption) : <span className="laptop:text-[0.9rem]">Sort by</span>}
        </p>
        <img
          src="short.svg"
          alt="Sort Icon"
          className={iconClass}
        />
      </div>

      {isSortDropdownOpen && (
        <div className={dropdownClass}>
          {sortOptions.map((option, index) => (
            <div
              key={index}
              className={clsx(optionClass, { "bg-[#FFF3F3] font-bold": option === selectedSortOption })}
              onClick={() => handleSortOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterbySort;
