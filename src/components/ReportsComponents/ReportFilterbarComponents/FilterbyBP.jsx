

const FilterbyBP = ({toggleDropdown , selectedOption , handleBPOptionSelect , arrowRotate , isDropdownOpen , options  }) => {
  return(
    <div className=" flex w-[12%] large-desktop:h-full flex-col items-center">

    <div
        className="w-full rounded-[15px] shadow-[0_4px_4px_3px_#00000040] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer px-4"
        onClick={() => toggleDropdown('filter')}
    >
        <p className="desktop:text-[15px] large-desktop:text-[2rem]  text-black">{selectedOption}</p>
        <img
            src="bp.svg"
            alt="BP Icon"
            className={`desktop:w-[20px] ${arrowRotate ? "rotate-180" : "rotate-0"} duration-300 transition-all large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none`}
        />
    </div>

    {/* Dropdown Menu */}
    {isDropdownOpen && (
        <div className="mt-2 absolute top-32 w-[227px] bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] rounded-[15px]">
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