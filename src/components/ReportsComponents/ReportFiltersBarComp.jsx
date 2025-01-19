import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { HOST } from '../../utils/constants';
import useSortData from '../../hooks/useSortData';
import { setFilteredReports } from '../../store/features/PatientReportByTimeRange';
import { setBpData } from '../../store/features/bloodPressureSlice';


const ReportFiltersBarComp = ({ reports }) => {

    // const { showCalendar, isTimePickerVisible, isSortDropdownOpen, isDropdownOpen } = useSelector((state) => state.filtersUI);




    const dispatch = useDispatch();
    const [sortOption, setSortOption] = useState("");
    // const [searchTerm, setSearchTerm] = useState('');
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
        if (sortOption) {
            fetchSortedReports(sortOption)
        }
    }, [sortOption])

    const fetchSortedReports = () =>{
        useSortData(reports, sortOption)
    }


    // Inside the component:
    const formatDateRange = (start, end) => {
        return (
            <>
                {format(start, "MMM d, yyyy")} - <br />
                {format(end, "MMM d, yyyy")}
            </>
        );
    };

    const handleSelect = (ranges) => {
        setSelectionRange({
            startDate: ranges.selection.startDate,
            endDate: ranges.selection.endDate,
            key: 'selection',
            token: true
        });
        console.log(ranges.selection.startDate, ranges.selection.endDate)
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

    useEffect(() => {
        if (bPOption) {
            fetchBPReports(bPOption)
        }
    }, [bPOption])

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



    const handleTimeChange = (e, setTime, type) => {
        const time = e.target.value;  // The time input from the user (e.g., "16:30")

        // Ensure time has seconds (e.g., "16:30" becomes "16:30:00")
        const formattedTime = `${time}:00`;

        // Set the formatted time to the state
        setTime(formattedTime);

        if (type == "start") {
            setStartTime(formattedTime)
        } else {
            setEndTime(formattedTime)
        }

         // If both times are set, fetch the reports
    if (type === "start" && endTime != "12:00 AM") {
        fetchTimeRangeReports(startTime, endTime);
      } else if (type === "end" && startTime != "12:00 AM") {
        fetchTimeRangeReports(startTime, endTime);
      }


        const today = new Date();
        // Construct an ISO string with the current date and the selected time
        const isoDateString = `${today.toISOString().split('T')[0]}T${formattedTime}Z`;

    };



    const toggleDropdown = (type) => {

        if (type === 'calendar') {
            dispatch(setShowCalendar(!showCalendar))
            dispatch(setTimePickerVisible(false))  // Close time picker when calendar is open
            dispatch(setDropdownOpen(false)) // Close option dropdown when calendar is opened
            dispatch(setSortDropdownOpen(false)) // Close sort dropdown when calendar is opened
        } else if (type === 'time' && selectionRange.token == true) {

            dispatch(setTimePickerVisible(!isTimePickerVisible))
            dispatch(setShowCalendar(false))  // Close calendar when time picker is open
            dispatch(setDropdownOpen(false)) // Close option dropdown when time picker is opened
            dispatch(setSortDropdownOpen(false)) // Close sort dropdown when time picker is opened
        } else if (type === 'filter') {
            dispatch(setDropdownOpen(!isDropdownOpen))
            dispatch(setShowCalendar(false)) // Close calendar when filter dropdown is open
            dispatch(setTimePickerVisible(false)) // Close time picker when filter dropdown is open
            dispatch(setSortDropdownOpen(false)) // Close sort dropdown when filter dropdown is opened
        } else if (type === 'sort') {
            dispatch(setSortDropdownOpen(!isSortDropdownOpen))
            dispatch(setShowCalendar(false)) // Close calendar when sort dropdown is open
            dispatch(setTimePickerVisible(false)) // Close time picker when sort dropdown is open
            dispatch(setDropdownOpen(false)) // Close filter dropdown when sort dropdown is opened
        }
    };

    const formatTime = (time) => {
        if (!time) return "";
        const [hour, minute] = time.split(":");
        const period = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${minute} ${period}`;
    };

    const handleClear = () => {
        setSelectionRange({ startDate: null, endDate: null, key: "selection" });
    };

    // const fetchSearchTermReports = async (searchTerm) =>{
    //   try{
    //     const response = await axios.get(`${HOST}/dev/reports`, {
    //         "api-key": " tabbib-dev-api-key: 0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL",
    //         params: {
    //           keyword: searchTerm,
    //         },
    //         });

    //         console.log(response.data)
    //   }catch(e){

    //   }
    // }


    const fetchSearchTermReports = async (searchTerm) => {
        try {
            //   const response = await axios.get(`${HOST}/dev/reports/${searchTerm}`, {
            //     headers: {
            //       " tabbib-dev-api-key": "0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL",
            //     },
            //     params: {
            //       keyword: searchTerm,
            //     },
            //   });
            console.log(searchTerm);
            const response = await fetch(`https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/reports?keyword=${searchTerm}`, {
                method: 'GET',
                headers: {
                    'x-api-key': '0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL',
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log(data.data);
            dispatch(setSearchTerm(data.data));
        } catch (e) {
            console.error("Error fetching search term reports", e);
        }
    };

    const fetchDateRangeReports = async (startDate, endDate) => {
        try{
            console.log(startDate, endDate);
          const response = await fetch(`https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/reports?startDate=${startDate}&endDate=${endDate}`, {
            method: 'GET',
            headers: {
              'x-api-key': '0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL',
                'Content-Type': 'application/json',
            },
            });
            const data = await response.json();
            console.log(data.data);
            // dispatch(setFilteredData(data.data));
        }catch(e){
            console.error("Error fetching date range reports", e);
        }
    }

    const fetchTimeRangeReports = async (startTime, endTime) => {
        try{
            console.log(startTime, endTime);
          const response = await fetch(`https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/reports?startTime=${startTime}&endTime=${endTime}`, {
            method: 'GET',
            headers: {
              'x-api-key': '0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL',
                'Content-Type': 'application/json',
            },
            });
            const data = await response.json();
            console.log(data.data);
            dispatch(setFilteredReports(data.data));
        }catch(e){
            console.error("Error fetching time range reports", e);
        }
    }

    const fetchBPReports = async (bPOption) => {
        try{
            const response = await fetch(`https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/reports?bp=${bPOption}`, {
            method: 'GET',
            headers: {
                'x-api-key': '0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL',
                'Content-Type': 'application/json',
            },
            });
            const data = await response.json();
            console.log(data.data);
            dispatch(setBpData(data.data));
        }catch(e){
            console.error("Error fetching BP reports", e);
        }
    }


    const [searchTerm, setSearchTerm] = useState("");

    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    const handleSearch = useCallback(
        debounce((term) => {
            if (term.trim() !== "") {
                fetchSearchTermReports(term);
            }
        }, 500),
        []
    );

    const onInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        handleSearch(value);
    };



    return (
        <>
            <div className='w-[99%] large-desktop:h-[5%] mx-auto flex justify-between large-desktop:justify-between  items-center gap-4 ' >
                {/* <div className="relative select-none large-desktop:h-full flex justify-between items-center  w-[40%]">
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
                </div> */}
                <div className="relative select-none large-desktop:h-full flex justify-between items-center w-[40%]">
                    <input
                        type="text"
                        placeholder="Search Reports ( i.e Name, Mobile, CNIC )"
                        className="bg-[#FAFAFA] shadow-[0_4px_4px_3px_#00000040] w-full desktop:h-[62px] large-desktop:h-full large-desktop:placeholder:text-[2rem] large-desktop:text-[2rem] pl-4 pr-12 rounded-[15px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={onInputChange}
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
                        <p className='desktop:text-[15px] desktop:leading-5 select-none large-desktop:text-[2rem] text-black'>
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



                    {showCalendar && (
                        <div className='absolute mt-2 shadow-[0_4px_4px_3px_#00000040] rounded-[15px] bg-white p-2 z-10'>
                            <DateRangePicker
                                ranges={[selectionRange]}
                                onChange={handleSelect}
                                moveRangeOnFirstSelection={false}
                                editableDateInputs={true}
                                rangeColors={["#CC0001"]}

                            />
                            <div className="flex justify-end mt-2">
                                <button
                                    onClick={handleClear}
                                    className="bg-[#CC0001] text-white px-4 py-2 rounded"
                                >
                                    Clear Date
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`${selectionRange.token ? "" : "opacity-50 cursor-not-allowed"} flex w-[12%] large-desktop:h-full flex-col items-center`}>
                    {/* Button to open time picker */}
                    <div
                        className="w-full rounded-[15px] px-8 shadow-[0_4px_4px_3px_#00000040] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer"
                        onClick={() => toggleDropdown('time')}
                    >
                        <p className="desktop:text-[15px] desktop:leading-5 large-desktop:text-[2rem] text-black">
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
                        </div>
                    )}
                </div>



                <div className=" flex w-[12%] large-desktop:h-full flex-col items-center">

                    <div
                        className="w-full rounded-[15px] shadow-[0_4px_4px_3px_#00000040] desktop:h-[62px] large-desktop:h-full flex justify-around items-center bg-[#FAFAFA] cursor-pointer px-4"
                        onClick={() => toggleDropdown('filter')}
                    >
                        <p className="desktop:text-[15px] large-desktop:text-[2rem]  text-black">{selectedOption}</p>
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
                        <p className="desktop:text-[15px] large-desktop:text-[2rem]  text-black">{selectedSortOption}</p>
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
