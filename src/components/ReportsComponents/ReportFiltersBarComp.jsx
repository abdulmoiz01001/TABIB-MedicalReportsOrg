import React from 'react'

const ReportFiltersBarComp = () => {
    return (
        <>
            <div className='w-full flex justify-evenly px-2 items-center gap-4 border-2 border-red-900' >
                <div className="relative  w-[40%]">
                    <input
                        type="text"
                        placeholder="Search Reports ( i.e  Name, Mobile, CNIC )"
                        className="bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] w-full h-[62px] pl-4 pr-12 rounded-[15px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <img
                        src="search.svg"
                        alt="searchIcon"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[20px] h-[20px] pointer-events-none"
                    />
                </div>
                <div className='w-[152px] shadow-[0_4px_4px_3px_#00000040] rounded-[15px] shadow-[0_4px_4px_3px_#00000040 ] h-[62px] flex justify-evenly items-center bg-[#FAFAFA]' >
                    <p className='text-[18px]  font-bold text-black' >Filter By</p>
                    <img
                        src="calendar.svg"
                        alt="searchIcon"
                        className="  w-[20px] h-[20px] pointer-events-none"
                    />

                </div>
                <div className='w-[152px] rounded-[15px] shadow-[0_4px_4px_3px_#00000040] h-[62px] flex justify-evenly items-center bg-[#FAFAFA]' >
                    <p className='text-[18px]  font-bold text-black' >Filter By</p>
                    <img
                        src="clock.svg"
                        alt="searchIcon"
                        className="  w-[20px] h-[20px] pointer-events-none"
                    />

                </div>
                <div className='w-[227px] rounded-[15px] shadow-[0_4px_4px_3px_#00000040] h-[62px] flex justify-evenly items-center bg-[#FAFAFA]' >
                    <p className='text-[18px]  font-bold text-black' >Filter by High BP</p>
                    <img
                        src="bp.svg"
                        alt="searchIcon"
                        className="  w-[20px] h-[20px] pointer-events-none"
                    />

                </div>
                <div className='w-[152px] rounded-[15px] shadow-[0_4px_4px_3px_#00000040] h-[62px] flex justify-evenly items-center bg-[#FAFAFA]' >
                    <p className='text-[18px]  font-bold text-black' >Filter By</p>
                    <img
                        src="short.svg"
                        alt="searchIcon"
                        className="  w-[20px] h-[20px] pointer-events-none"
                    />

                </div>


            </div>
        </>
    )
}

export default ReportFiltersBarComp