
const FilterbyTimeRange = ({selectionRange , formatTime , setStartTime , setEndTime , startTime , endTime , toggleDropdown ,isTimePickerVisible ,handleTimeChange, clearTimeRange} ) => {
 return(
    <div className={`${selectionRange.token ? "" : "opacity-50 cursor-not-allowed"} flex w-[12%] large-desktop:h-full flex-col items-center`}>
    {/* Button to open time picker */}
    <div
        className="w-full rounded-[15px] px-8 shadow-[0_4px_4px_3px_#00000040] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer"
        onClick={() => toggleDropdown('time')}
    >
        <p className="desktop:text-[15px] desktop:leading-5 large-desktop:text-[2rem] text-black">
            {startTime != "12:00 AM" && endTime != "12:00 AM" ? `${formatTime(startTime)} - ${formatTime(endTime)}` : "Filter By"}
        </p>
        <img
            src="clock.svg"
            alt="Clock Icon"
            className="desktop:w-[20px] large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none"
        />
    </div>

    {/* Time Picker Modal */}
    {isTimePickerVisible && (
        <div className="absolute top-28 bg-white p-4 shadow-lg rounded-lg mt-4">
            <div className="flex flex-row justify-center gap-4 items-center">
                <div className="flex flex-col justify-center items-start">
                    <label className="mr-2 text-[#313131] text-[15px] font-normal">Start Time:</label>
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => handleTimeChange(e, setStartTime, "start")}
                        className="text-center text-[#FFFFFF] text-[15px] appearance-none custom-time-input font-normal bg-[#CC0001] rounded-md p-2"
                    />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <label className="mr-2 text-[#313131] text-[15px] font-normal">End Time:</label>
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => handleTimeChange(e, setEndTime, "end")}
                        className="text-center text-[#FFFFFF] text-[15px] appearance-none custom-time-input font-normal bg-[#CC0001] rounded-md p-2"
                    />
                </div>

            </div>
            <div className="flex justify-end mt-4">
                <button
                    onClick={() => clearTimeRange()}
                    className="px-4 py-2 bg-[#CC0001] text-white text-[15px] rounded-md shadow-md hover:bg-red-700"
                >
                    Clear
                </button>
            </div>
        </div>
    )}
</div>
 )
}

export default FilterbyTimeRange