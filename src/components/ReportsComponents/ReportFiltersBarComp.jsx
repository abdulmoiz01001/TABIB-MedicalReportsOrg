import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReportFiltersBarComp = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [startTime, setStartTime] = useState("12:00 AM");
    const [endTime, setEndTime] = useState("12:00 AM");
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Filter by BP");
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState("Name"); // Current selected option
    const [isSortDropdownOpen, setSortDropdownOpen] = useState(false); // Tracks if dropdown is open

    const sortOptions = [
        "Name (Ascending)",
        "Name (Descending)",
        "Age (Ascending)",
        "Age (Descending)",
    ];

    const handleSortOptionSelect = (option) => {
        setSelectedSortOption(option); // Update selected sort option
        setSortDropdownOpen(false); // Close the dropdown
    };

    const options = [
        "High Blood Pressure",
        "Low Blood Pressure",
        "Normal Blood Pressure",
        "Male",
        "Female",
    ];

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false); // Close dropdown after selection
    };

    const handleTimeChange = (e, setTime) => {
        setTime(e.target.value);
        console.log(e.target.value);
        const time = e.target.value;
const today = new Date();
const isoDateString = `${today.toISOString().split('T')[0]}T${time}:00Z`;

console.log(isoDateString); 

    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date);
        setShowCalendar(false);
    };

    const toggleDropdown = (type) => {
        if (type === 'calendar') {
            setShowCalendar(!showCalendar);
            setTimePickerVisible(false);  // Close time picker when calendar is open
            setDropdownOpen(false); // Close option dropdown when calendar is opened
            setSortDropdownOpen(false); // Close sort dropdown when calendar is opened
        } else if (type === 'time') {
            setTimePickerVisible(!isTimePickerVisible);
            setShowCalendar(false);  // Close calendar when time picker is open
            setDropdownOpen(false); // Close option dropdown when time picker is opened
            setSortDropdownOpen(false); // Close sort dropdown when time picker is opened
        } else if (type === 'filter') {
            setDropdownOpen(!isDropdownOpen);
            setShowCalendar(false); // Close calendar when filter dropdown is open
            setTimePickerVisible(false); // Close time picker when filter dropdown is open
            setSortDropdownOpen(false); // Close sort dropdown when filter dropdown is opened
        } else if (type === 'sort') {
            setSortDropdownOpen(!isSortDropdownOpen);
            setShowCalendar(false); // Close calendar when sort dropdown is open
            setTimePickerVisible(false); // Close time picker when sort dropdown is open
            setDropdownOpen(false); // Close filter dropdown when sort dropdown is opened
        }
    };

    return (
        <>
            <div className='w-full flex justify-evenly px-2 items-center gap-4 ' >
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

                <div className='relative w-[12%]'>
                    <div
                        className='w-full shadow-[0_4px_4px_3px_#00000040] rounded-[15px] h-[62px] flex justify-evenly items-center bg-[#FAFAFA] cursor-pointer'
                        onClick={() => toggleDropdown('calendar')}
                    >
                        <p className='text-[18px] font-bold text-black'>Filter By</p>
                        <img
                            src='calendar.svg'
                            alt='calendarIcon'
                            className='w-[20px] h-[20px] pointer-events-none'
                        />
                    </div>

                    {showCalendar && (
                        <div className='absolute mt-2 shadow-[0_4px_4px_3px_#00000040] rounded-[15px] bg-white p-2 z-10'>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                inline
                                dateFormat='MMMM d, yyyy'
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode='select'
                            />
                        </div>
                    )}
                </div>

                <div className=" flex w-[12%] border-2 border-red-900 flex-col items-center">
                    {/* Button to open time picker */}
                    <div
                        className="w-full rounded-[15px] shadow-[0_4px_4px_3px_#00000040] h-[62px] flex justify-evenly items-center bg-[#FAFAFA] cursor-pointer"
                        onClick={() => toggleDropdown('time')}
                    >
                        <p className="text-[18px] font-bold text-black">Filter By</p>
                        <img
                            src="clock.svg"
                            alt="Clock Icon"
                            className="w-[20px] h-[20px] pointer-events-none"
                        />
                    </div>

                    {/* Time Picker Modal */}
                    {isTimePickerVisible && (
                        <div className="absolute top-28 bg-white p-4 shadow-lg rounded-lg mt-4">
                            <div className="flex flex-row justify-center gap-4 items-center">
                                <div className="flex flex-col justify-center items-start ">
                                    <label className="mr-2 text-[#313131] text-[15px]  font-normal">Start Time:</label>
                                    <input
                                        type="time"
                                        value={startTime}
                                        onChange={(e) => handleTimeChange(e, setStartTime)}
                                        className="text-center text-[#FFFFFF] text-[15px] appearance-none custom-time-input  font-normal bg-[#CC0001] rounded-md p-2"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-start">
                                    <label className="mr-2 text-[#313131] text-[15px]  font-normal">End Time:</label>
                                    <input
                                        type="time"
                                        value={endTime}
                                        onChange={(e) => handleTimeChange(e, setEndTime)}
                                        className="text-center text-[#FFFFFF] text-[15px] appearance-none custom-time-input font-normal bg-[#CC0001] rounded-md p-2"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className=" flex w-[12%] flex-col items-center">
                    {/* Filter Button */}
                    <div
                        className="w-full rounded-[15px] shadow-[0_4px_4px_3px_#00000040] h-[62px] flex justify-between items-center bg-[#FAFAFA] cursor-pointer px-4"
                        onClick={() => toggleDropdown('filter')}
                    >
                        <p className="text-[18px] font-bold text-black">{selectedOption}</p>
                        <img
                            src="bp.svg"
                            alt="BP Icon"
                            className="w-[20px] h-[20px] pointer-events-none"
                        />
                    </div>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="mt-2 absolute top-28 w-[227px] bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] rounded-[15px]">
                            {options.map((option, index) => (
                                <div
                                    key={index}
                                    className={`p-3 text-black text-[16px] cursor-pointer hover:bg-red-100 ${option === selectedOption ? "bg-[#FFF3F3] font-bold" : ""
                                        }`}
                                    onClick={() => handleSelectOption(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className=" flex w-[12%] flex-col items-center">
                    {/* Sort Button */}
                    <div
                        className="w-full rounded-[15px] shadow-[0_4px_4px_3px_#00000040] h-[62px] flex justify-between items-center bg-[#FAFAFA] cursor-pointer px-4"
                        onClick={() => toggleDropdown('sort')}
                    >
                        <p className="text-[18px] font-bold text-black">{selectedSortOption}</p>
                        <img
                            src="short.svg"
                            alt="Sort Icon"
                            className="w-[20px] h-[20px] pointer-events-none"
                        />
                    </div>

                    {/* Dropdown Menu */}
                    {isSortDropdownOpen && (
                        <div className="mt-2 absolute top-28 w-[152px] bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] rounded-[15px]">
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
            </div>
        </>
    );
};

export default ReportFiltersBarComp;
