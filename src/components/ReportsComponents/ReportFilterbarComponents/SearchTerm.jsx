import React from 'react'

const SearchTerm = ({searchTerm , onInputChange}) => {
    return (
        <>
            <div className="relative select-none large-desktop:h-full flex justify-between items-center w-[40%]">
                <input
                    type="text"
                    placeholder="Search Reports ( i.e Name, Mobile, CNIC )"
                    className="bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] w-full laptop:h-[50px] desktop:h-[62px] large-desktop:h-full large-desktop:placeholder:text-[2rem] large-desktop:text-[2rem] pl-4 pr-12 rounded-[15px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CC0001]"
                    value={searchTerm}
                    onChange={onInputChange}
                />
                <img
                    src="search.svg"
                    alt="searchIcon"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 large-desktop:w-[50px] large-desktop:h-[40px] w-[20px] h-[20px] pointer-events-none"
                />
            </div>
        </>
    )
}

export default SearchTerm