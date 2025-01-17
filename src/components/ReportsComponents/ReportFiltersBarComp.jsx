import React, { useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-datepicker/dist/react-datepicker.css';
import useSortData from '../../hooks/useSortData';
import useBloodPressureFilter from '../../hooks/useBloodPressureFilter';
import { useDispatch , useSelector } from 'react-redux';
import { setItems } from '../../store/features/sortedReportsSlice';
import { setBpFilteredData } from '../../store/features/bloodPressureSlice';
import { setFilteredData } from '../../store/features/searchFilter';
import useSearchFilter from '../../hooks/useSearchFilter';import {
    setShowCalendar,
    setTimePickerVisible,
    setDropdownOpen,
    setSortDropdownOpen,
    offAll
  } from '../../store/features/filtersUISlice';
  

import { format } from 'date-fns';
import useFilterByDateRange from '../../hooks/useFilterByDateRange';
import useFilteredPatientsByTime from '../../hooks/useFilteredPatientsByTime';


const ReportFiltersBarComp = ({ reports }) => {

    const { showCalendar ,isTimePickerVisible , isSortDropdownOpen , isDropdownOpen  } = useSelector((state) => state.filtersUI);

  


    const dispatch = useDispatch();
    const [sortOption, setSortOption] = useState("");
    const [searchTerm, setSearchTerm] = useState('');
    const [bPOption, setBPOption] = useState("")
    const [sortedData, setSortedData] = useState()
    const [startTime, setStartTime] = useState("12:00 AM");
    const [endTime, setEndTime] = useState("12:00 AM");
 
    // const [isTimePickerVisible, setTimePickerVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Filter by BP");
    // const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState("Name"); // Current selected option
    // const [isSortDropdownOpen, setSortDropdownOpen] = useState(false); // Tracks if dropdown is open
    // const [showCalendar, setShowCalendar] = useState(false);
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
        token: false
    });


    // Inside the component:
    const formatDateRange = (start, end) => {
        return `${format(start, 'MMM d, yyyy')} - ${format(end, 'MMM d, yyyy')}`;
    };




 

    // Use the sorting hook
    const sortedReports = useSortData(reports, sortOption);
    const sortedBP = useBloodPressureFilter(reports, bPOption);


    // Use the custom hook for searching the reports
    const filteredReports = useSearchFilter(reports, searchTerm);
     // Call the hook in the component, not inside handleSelect
    const filteredReportsByRange = useFilterByDateRange(reports, selectionRange);

    const filteredReportsByTime = useFilteredPatientsByTime(reports, startTime, endTime);



    //   setSortedData(sortedReports)
    if (sortedReports.length > 0) {

        dispatch(setItems(sortedReports));
    }
    if (sortedBP.length > 0) {
        dispatch(setBpFilteredData(sortedBP));
    }
    if (filteredReports.length > 0) {
        dispatch(setFilteredData(filteredReports));
    }

    const handleSelect = (ranges) => {

        
        
        setSelectionRange({
            startDate: ranges.selection.startDate,
            endDate: ranges.selection.endDate,
            key: 'selection',
            token: true
        });
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



    const handleTimeChange = (e, setTime , type) => {
        const time = e.target.value;  // The time input from the user (e.g., "16:30")
        
        // Ensure time has seconds (e.g., "16:30" becomes "16:30:00")
        const formattedTime = `${time}:00`;
      
        // Set the formatted time to the state
        setTime(formattedTime);

        if(type == "start"){
            setStartTime(formattedTime)
        }else{
            setEndTime(formattedTime)
        }
      
      
        const today = new Date();
        // Construct an ISO string with the current date and the selected time
        const isoDateString = `${today.toISOString().split('T')[0]}T${formattedTime}Z`;
      
      };
      


    const toggleDropdown = (type) => {

        if (type === 'calendar') {
           dispatch( setShowCalendar(!showCalendar))
           dispatch( setTimePickerVisible(false))  // Close time picker when calendar is open
           dispatch( setDropdownOpen(false)) // Close option dropdown when calendar is opened
           dispatch( setSortDropdownOpen(false)) // Close sort dropdown when calendar is opened
        } else if (type === 'time' && selectionRange.token == true) {

            dispatch(setTimePickerVisible(!isTimePickerVisible))
            dispatch(setShowCalendar(false))  // Close calendar when time picker is open
            dispatch(setDropdownOpen(false)) // Close option dropdown when time picker is opened
            dispatch(setSortDropdownOpen(false)) // Close sort dropdown when time picker is opened
        } else if (type === 'filter') {
           dispatch( setDropdownOpen(!isDropdownOpen))
           dispatch( setShowCalendar(false)) // Close calendar when filter dropdown is open
           dispatch( setTimePickerVisible(false)) // Close time picker when filter dropdown is open
           dispatch( setSortDropdownOpen(false)) // Close sort dropdown when filter dropdown is opened
        } else if (type === 'sort') {
           dispatch( setSortDropdownOpen(!isSortDropdownOpen))
           dispatch( setShowCalendar(false)) // Close calendar when sort dropdown is open
           dispatch( setTimePickerVisible(false)) // Close time picker when sort dropdown is open
           dispatch( setDropdownOpen(false)) // Close filter dropdown when sort dropdown is opened
        }
    };

    const formatTime = (time) => {
        if (!time) return "";
        const [hour, minute] = time.split(":");
        const period = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${minute} ${period}`;
    };



    
    

    return (
        <>
            <div  className='w-[99%] large-desktop:h-[5%] mx-auto flex justify-between large-desktop:justify-between  items-center gap-4 ' >
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


                <div className='relative large-desktop:h-full select-none  w-[12%]'>
                    <div
                        className='w-full shadow-[0_4px_4px_3px_#00000040] px-8 rounded-[15px] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer'
                        onClick={() => toggleDropdown("calendar")}
                    >
                        <p className='desktop:text-[18px] select-none large-desktop:text-[2rem] font-bold text-black'>
                            {selectionRange.token
                                ? formatDateRange(selectionRange.startDate, selectionRange.endDate)
                                : 'Filter By'}
                        </p>
                        <img
                            src='calendar.svg'
                            alt='calendarIcon'
                            className='desktop:w-[20px] large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none'
                        />
                    </div>

                    {/* <div
                        className='w-full shadow-[0_4px_4px_3px_#00000040] rounded-[15px] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer'
                        onClick={() => toggleDropdown("calendar")}
                    >
                        <p className='desktop:text-[18px] large-desktop:text-[2rem] font-bold text-black'>Filter By</p>
                        <img
                            src='calendar.svg'
                            alt='calendarIcon'
                            className='desktop:w-[20px] large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none'
                        />
                    </div> */}

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

                <div className={`${selectionRange.token ? "" : "opacity-50 cursor-not-allowed"} flex w-[12%] large-desktop:h-full flex-col items-center`}>
                    {/* Button to open time picker */}
                    <div
                        className="w-full rounded-[15px] px-8 shadow-[0_4px_4px_3px_#00000040] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer"
                        onClick={() => toggleDropdown('time')}
                    >
                        <p className="desktop:text-[18px] large-desktop:text-[2rem] font-bold text-black">
                            {startTime && endTime ? `${formatTime(startTime)} - ${formatTime(endTime)}` : "Filter By"}
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
                                        onChange={(e) => handleTimeChange(e, setStartTime , "start")}
                                        className="text-center text-[#FFFFFF] text-[15px] appearance-none custom-time-input font-normal bg-[#CC0001] rounded-md p-2"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-start">
                                    <label className="mr-2 text-[#313131] text-[15px] font-normal">End Time:</label>
                                    <input
                                        type="time"
                                        value={endTime}
                                        onChange={(e) => handleTimeChange(e, setEndTime , "end")}
                                        className="text-center text-[#FFFFFF] text-[15px] appearance-none custom-time-input font-normal bg-[#CC0001] rounded-md p-2"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* <div className={` ${selectionRange.token ? "" : "opacity-50  cursor-not-allowed"} flex w-[12%] large-desktop:h-full flex-col items-center`}>
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
                </div> */}

                <div className=" flex w-[12%] large-desktop:h-full flex-col items-center">

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
                        <div className="mt-2 absolute top-32 w-[227px] bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] rounded-[15px]">
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
