

const FilterbyBP = ({toggleDropdown , selectedOption , handleBPOptionSelect , arrowRotate , isDropdownOpen , options  }) => {
  return(
    <div className=" flex w-[12%] large-desktop:h-full mobile:relative tablet:relative mobile:w-[98%] tablet:w-[45%]  flex-col items-center">

    <div
        className="w-full rounded-[15px] border-2 mobile:h-[50px] tablet:h-[50px] laptop:h-[50px] desktop:h-[62px] large-desktop:h-full flex justify-around laptop:gap-2 items-center bg-[#FAFAFA] cursor-pointer px-4"
        onClick={() => toggleDropdown('filter')}
    >
        <p className="desktop:text-[15px] laptop:text-[0.7rem] laptop:leading-4 large-desktop:text-[2rem]  text-black">{selectedOption}</p>
        <img
            src="bp.svg"
            alt="BP Icon"
            className={`desktop:w-[20px] ${arrowRotate ? "rotate-180" : "rotate-0"} laptop:w-[16px] laptop:h-[16px] duration-300 transition-all large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none`}
        />
    </div>

    {/* Dropdown Menu */}
    {isDropdownOpen && (
        <div className="mt-2 absolute z-50 top-28 mobile:top-10 tablet:top-10 w-[227px] bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] rounded-[15px]">
            {options.map((option, index) => (
                <div
                    key={index}
                    className={`p-3 text-black text-[16px] cursor-pointer hover:bg-red-100 ${option === selectedOption ? "bg-[#FFF3F3] font-bold" : ""
                        }`}
                    onClick={() => handleBPOptionSelect(option)}
                >
                    {option}
                </div>
            ))}
        </div>
    )}
</div>
  )
}

export default FilterbyBP