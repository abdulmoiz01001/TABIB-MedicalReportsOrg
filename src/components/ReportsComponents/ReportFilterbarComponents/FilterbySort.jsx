

const FilterbySort = ({ toggleDropdown , selectedSortOption , sortOption , isSortDropdownOpen , sortOptions , handleSortOptionSelect }) => {
    const capitalize = (text) => {
        if (!text) return "";
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };
  return (
    <div className=" flex w-[12%] large-desktop:h-full flex-col items-center">
                 
    <div
        className="w-full rounded-[15px] shadow-[0_4px_4px_3px_#00000040] laptop:h-[50px] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer px-4"
        onClick={() => toggleDropdown('sort')}
    >
        <p className="desktop:text-[15px]  laptop:text-[0.7rem] large-desktop:text-[2rem]  text-black">{selectedSortOption ?  capitalize(selectedSortOption)+" "+capitalize(sortOption) : <span className="laptop:text-[0.9rem]" >Sort by</span>}</p>
        <img
            src="short.svg"
            alt="Sort Icon"
            className="desktop:w-[20px] laptop:w-[16px] laptop:h-[16px] large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none"
        />
    </div>

    {isSortDropdownOpen && (
        <div className="mt-2 absolute z-50 top-28 right-2 w-[227px] bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] rounded-[15px]">
            {sortOptions.map((option, index) => (
                <div
                    key={index}
                    className={`p-3 text-black text-[16px] cursor-pointer hover:bg-red-100 ${option === selectedSortOption ? "bg-[#FFF3F3] font-bold" : ""
                        }`}
                    onClick={() => handleSortOptionSelect(option)}
                >
                    {option}
                </div>
            ))}
        </div>
    )}
</div>
  )
}

export default FilterbySort