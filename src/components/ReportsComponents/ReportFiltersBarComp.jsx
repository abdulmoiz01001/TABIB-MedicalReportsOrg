import React, { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-datepicker/dist/react-datepicker.css';
import useSortData from '../../hooks/useSortData';
import useBloodPressureFilter from '../../hooks/useBloodPressureFilter';
import { useDispatch } from 'react-redux';
import { setItems } from '../../store/features/sortedReportsSlice';
import { setBpFilteredData } from '../../store/features/bloodPressureSlice';
import { setFilteredData } from  '../../store/features/searchFilter';
import useSearchFilter from '../../hooks/useSearchFilter';


const ReportFiltersBarComp = ({ reports }) => {

    useEffect(()=>{
    console.log(reports)
    },[reports])

    const dispatch = useDispatch();
    const [sortOption, setSortOption] = useState("");
    const [searchTerm, setSearchTerm] = useState('');
    const [bPOption, setBPOption] = useState("")
    const [sortedData, setSortedData] = useState()
    const [startTime, setStartTime] = useState("12:00 AM");
    const [endTime, setEndTime] = useState("12:00 AM");
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Filter by BP");
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState("Name"); // Current selected option
    const [isSortDropdownOpen, setSortDropdownOpen] = useState(false); // Tracks if dropdown is open
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
        token: false
    });



    useEffect(() => {
        console.log(sortedData)
    }, [sortedData])

    // Use the sorting hook
    const sortedReports = useSortData(reports, sortOption);
    const sortedBP = useBloodPressureFilter(reports, bPOption);
    console.log(sortedBP)

    // Use the custom hook for searching the reports
    const filteredReports = useSearchFilter(reports, searchTerm);

    
    //   setSortedData(sortedReports)
    if( sortedReports.length > 0){
        console.log(sortedReports)

        dispatch(setItems(sortedReports));
    }
    if(sortedBP.length > 0){
        console.log(sortedBP.length)
    dispatch(setBpFilteredData(sortedBP));
    }
    if(filteredReports.length > 0){
        console.log(filteredReports.length)
    dispatch(setFilteredData(filteredReports));
    }

    const handleSelect = (ranges) => {
        setSelectionRange({
            startDate: ranges.selection.startDate,
            endDate: ranges.selection.endDate,
            key: 'selection',
            token: true
        });
        console.log(ranges);
    };



    const sortOptions = [
        "Name (Ascending)",
        "Name (Descending)",
        "Age (Ascending)",
        "Age (Descending)",
    ];

    const handleBPOptionSelect = (option) => {
        setBPOption(option)
        setSelectedOption(option); // Update selected option
        setDropdownOpen(false); // Close the dropdown
    }

    const handleSortOptionSelect = (option) => {
        setSortOption(option)






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



    const handleTimeChange = (e, setTime) => {
        setTime(e.target.value);
        console.log(e.target.value);
        const time = e.target.value;
        const today = new Date();
        const isoDateString = `${today.toISOString().split('T')[0]}T${time}:00Z`;

        console.log(isoDateString);

    };



    const toggleDropdown = (type) => {
        if (type === 'calendar') {
            setShowCalendar(!showCalendar);
            setTimePickerVisible(false);  // Close time picker when calendar is open
            setDropdownOpen(false); // Close option dropdown when calendar is opened
            setSortDropdownOpen(false); // Close sort dropdown when calendar is opened
        } else if (type === 'time' && selectionRange.token == true) {

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
            <div className='w-[99%] large-desktop:h-[5%] mx-auto flex justify-between large-desktop:justify-between  items-center gap-4 ' >
                <div className="relative select-none large-desktop:h-full flex justify-between items-center  w-[40%]">
                    <input
                        type="text"
                        placeholder="Search Reports ( i.e  Name, Mobile, CNIC )"
                        className="bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] w-full desktop:h-[62px] large-desktop:h-full large-desktop:placeholder:text-[2rem] large-desktop:text-[2rem] pl-4 pr-12 rounded-[15px]  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <img
                        src="search.svg"
                        alt="searchIcon"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 large-desktop:w-[50px] large-desktop:h-[40px] w-[20px] h-[20px] pointer-events-none"
                    />
                </div>

                {/* <div className='relative large-desktop:h-full select-none w-[12%]'>
                    <div
                        className='w-full shadow-[0_4px_4px_3px_#00000040] rounded-[15px] desktop:h-[62px] large-desktop:h-full flex justify-evenly items-center bg-[#FAFAFA] cursor-pointer'
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
                </div> */}

                <div className='relative large-desktop:h-full select-none  w-[12%]'>
                    <div
                        className='w-full shadow-[0_4px_4px_3px_#00000040] rounded-[15px] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer'
                        onClick={() => toggleDropdown("calendar")}
                    >
                        <p className='desktop:text-[18px] large-desktop:text-[2rem] font-bold text-black'>Filter By</p>
                        <img
                            src='calendar.svg'
                            alt='calendarIcon'
                            className='desktop:w-[20px] large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none'
                        />
                    </div>

                    {showCalendar && (
                        <div className='absolute mt-2 shadow-[0_4px_4px_3px_#00000040] rounded-[15px] bg-white p-2 z-10'>
                            <DateRangePicker
                                ranges={[selectionRange]}
                                onChange={handleSelect}
                                moveRangeOnFirstSelection={false}
                                editableDateInputs={true}
                                rangeColors={["#CC0001"]}

                            />
                        </div>
                    )}
                </div>


                <div className={` ${selectionRange.token ? "" : "opacity-50  cursor-not-allowed"} flex w-[12%] large-desktop:h-full flex-col items-center`}>
                    {/* Button to open time picker */}
                    <div
                        className="w-full rounded-[15px] shadow-[0_4px_4px_3px_#00000040] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer"

                        onClick={() => toggleDropdown('time')}

                    >
                        <p className="desktop:text-[18px] large-desktop:text-[2rem] font-bold text-black">Filter By</p>
                        <img
                            src="clock.svg"
                            alt="Clock Icon"
                            className="desktop:w-[20px] large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none"
                        />
                    </div>

                    {/* Time Picker Modal */}
                    {isTimePickerVisible && (
                        <div className="absolute  top-28 bg-white p-4 shadow-lg rounded-lg mt-4">
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

                <div className=" flex w-[12%] large-desktop:h-full flex-col items-center">
                    {/* Filter Button */}
                    <div
                        className="w-full rounded-[15px] shadow-[0_4px_4px_3px_#00000040] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer px-4"
                        onClick={() => toggleDropdown('filter')}
                    >
                        <p className="desktop:text-[18px] large-desktop:text-[2rem] font-bold text-black">{selectedOption}</p>
                        <img
                            src="bp.svg"
                            alt="BP Icon"
                            className="desktop:w-[20px] large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none"
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
                                    onClick={() => handleBPOptionSelect(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className=" flex w-[12%] large-desktop:h-full flex-col items-center">
                    {/* Sort Button */}
                    <div
                        className="w-full rounded-[15px] shadow-[0_4px_4px_3px_#00000040] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer px-4"
                        onClick={() => toggleDropdown('sort')}
                    >
                        <p className="desktop:text-[18px] large-desktop:text-[2rem] font-bold text-black">{selectedSortOption}</p>
                        <img
                            src="short.svg"
                            alt="Sort Icon"
                            className="desktop:w-[20px] large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none"
                        />
                    </div>

                    {/* Dropdown Menu */}
                    {isSortDropdownOpen && (
                        <div className="mt-2 absolute top-28 w-[227px] bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] rounded-[15px]">
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
