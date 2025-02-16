import React, { useCallback, useEffect, useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredReports, clearFilteredReports } from '../../store/features/FiltersSlice';
import { format } from 'date-fns';
import SearchTerm from './ReportFilterbarComponents/SearchTerm';
import FilterbyDateRange from './ReportFilterbarComponents/FilterbyDateRange';
import FilterbyTimeRange from './ReportFilterbarComponents/FilterbyTimeRange';
import FilterbyBP from './ReportFilterbarComponents/FilterbyBP';
import FilterbySort from './ReportFilterbarComponents/FilterbySort';
import { useMediaQuery } from 'react-responsive';

import clsx from 'clsx';
import { IoFunnelSharp } from "react-icons/io5";

const ReportFiltersBarComp = ({ reports }) => {
    const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 823 });    // md
    const isMobile = useMediaQuery({ maxWidth: 639 });
    const dispatch = useDispatch();
    const {reportShow} = useSelector((state) => state.PatientReportFilters);
    const [sortOption, setSortOption] = useState("");
    const [bPOption, setBPOption] = useState("")
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Filter by BP");
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState("");
    const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [arrowRotate, setArrowRotate] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const [searchApiTerm, setSearchApiTerm] = useState("")
    const [timeSelectionRange, setTimeSelectionRange] = useState({
        startTime: "",
        endTime: "",
        key: "selection",
        token: false
    })
    const [selectionRange, setSelectionRange] = useState({
        startDate: "",
        endDate: "",
        key: 'selection',
        token: false
    });

    useEffect(() => {
        const queryParameters = {
            ...(selectionRange?.startDate && { startDate: selectionRange.startDate }),
            ...(selectionRange?.endDate && { endDate: selectionRange.endDate }),
            ...(searchApiTerm && { keyword: searchApiTerm }),
            ...(bPOption && { bp: bPOption }),
            ...(timeSelectionRange?.startTime && { startTime: timeSelectionRange?.startTime }),
            ...(timeSelectionRange?.endTime && { endTime: timeSelectionRange?.endTime }),
            ...(selectedSortOption && { sortBy: selectedSortOption }),
            ...(sortOption && { sortOrder: sortOption }),
        };

        fetchPatientsReports(queryParameters)
    }, [selectionRange, searchApiTerm, bPOption, timeSelectionRange, selectedSortOption, sortOption])


    const fetchPatientsReports = async (params = {}) => {
        try {

            const queryString = new URLSearchParams(params).toString();

            const response = await fetch(`https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/reports?${queryString}`, {
                method: 'GET',
                headers: {
                    'x-api-key': '0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL',
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
    
            if (data.success) {
                dispatch(clearFilteredReports());
                dispatch(setFilteredReports(data.data || data.data.Items || []));
          
             
            } else {
                dispatch(clearFilteredReports());
            }
        } catch (e) {
            console.error("Error fetching reports:", e);
        }
    };

    const offAll = () => {
        setShowCalendar(false)
        setTimePickerVisible(false)
        setDropdownOpen(false)
        setSortDropdownOpen(false)
    }

    // setCustomFunction(offAll)

    useEffect(() => {
        offAll();
        // console.log("Report Show", reportShow)
    }, [reportShow]); // Empty dependency array ensures it runs only on mount
    

    const formatDateRange = (start, end) => {
        return (
            <>
                {format(start, "MMM d, yyyy")}  <br />
                {format(end, "MMM d, yyyy")}
            </>
        );
    };

    const handleSelect = async (ranges) => {


        if (ranges.selection.startDate !== ranges.selection.endDate) {
            const formattedStartDate = format(ranges.selection.startDate, 'yyyy-MM-dd');
            const formattedEndDate = format(ranges.selection.endDate, 'yyyy-MM-dd');


            setSelectionRange({
                startDate: formattedStartDate,
                endDate: formattedEndDate,
                key: 'selection',
                token: true
            });
        }
    };

    const sortOptions = [
        "Name (Ascending)",
        "Name (Descending)",
        "Age (Ascending)",
        "Age (Descending)",
    ];

    const handleBPOptionSelect = (option) => {
        if (option == "High Blood Pressure") {
            setSelectedOption(option); // Update selected option
            option = "high"
        } else if (option == "Clear") {
            setSelectedOption(option)
            option = ""
        } else if (option == "Low Blood Pressure") {
            setSelectedOption(option); // Update selected option
            option = "low"
        } else if (option == "Normal Blood Pressure") {
            setSelectedOption(option); // Update selected option
            option = "normal"
        } else if (option == "Male") {
            setSelectedOption(option); // Update selected option
            option = "male"
        } else if (option == "Female") {
            setSelectedOption(option); // Update selected option
            option = "female"
        }
        setBPOption(option)
 
        setDropdownOpen(false);
    }

    const handleSortOptionSelect = (option) => {
        let sortBy = ""
        let sortOrder = ""
        if (option) {
            if (option == "Name (Ascending)") {
                sortBy = "name"
                sortOrder = "asc"
            } else if (option == "Name (Descending)") {
                sortBy = "name"
                sortOrder = "desc"
            } else if (option == "Age (Ascending)") {
                sortBy = "age"
                sortOrder = "asc"
            } else if (option == "Age (Descending)") {
                sortBy = "age"
                sortOrder = "desc"
            }
        }

        setSortOption(sortOrder)
        setSelectedSortOption(sortBy);
        setSortDropdownOpen(false);
    };

    const options = [
        "Clear",
        "High Blood Pressure",
        "Low Blood Pressure",
        "Normal Blood Pressure",
        "Male",
        "Female",
    ];

    const handleTimeChange = (e, setTime, type) => {
        const time = e.target.value;
        const formattedTime = `${time}:00`;
        setTime(formattedTime);

        if (type == "start") {
            setStartTime(formattedTime)
        } else {
            setEndTime(formattedTime)
        }

        if (type === "start" && endTime != "") {
            setTimeSelectionRange({
                startTime: startTime,
                endTime: endTime,
                key: "selection",
                token: true
            })
        } else if (type === "end" && startTime != "") {
            setTimeSelectionRange({
                startTime: startTime,
                endTime: endTime,
                key: "selection",
                token: true
            })
        }
    };

    const clearTimeRange = async () => {
        setStartTime("");
        setEndTime("");
        setTimeSelectionRange({
            startTime: "",
            endTime: "",
            key: "selection",
            token: false
        })
    };

    const toggleDropdown = (type) => {
        if (type === 'calendar') {
            setShowCalendar(!showCalendar)
            setArrowRotate(false)
            setTimePickerVisible(false)
            setDropdownOpen(false)
            setSortDropdownOpen(false)
        } else if (type === 'time' && selectionRange.token == true) {
            setTimePickerVisible(!isTimePickerVisible)
            setArrowRotate(false)
            setShowCalendar(false)
            setDropdownOpen(false)
            setSortDropdownOpen(false)
        } else if (type === 'filter') {
            setDropdownOpen(!isDropdownOpen)
            setArrowRotate(!arrowRotate)
            setShowCalendar(false)
            setTimePickerVisible(false)
            setSortDropdownOpen(false)
        } else if (type === 'sort') {
            setSortDropdownOpen(!isSortDropdownOpen)
            setArrowRotate(false)
            setShowCalendar(false)
            setTimePickerVisible(false)
            setDropdownOpen(false)
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
        setSelectionRange({ startDate: null, endDate: null, key: "selection", token: false });
    };


    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    const debouncedSetSearchTerm = useCallback(
        debounce((value) => {
            setSearchApiTerm(value);
        }, 1000),
        []
    );

    const onInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value)
        debouncedSetSearchTerm(value);
    };

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Toggle the filter bar visibility
    const toggleFilterBar = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    // Tailwind CSS class variables
  const filterContainerClasses = 'w-[99%] flex flex-col gap-4';
  const filterButtonClasses = 'w-[150px] ml-4 h-[50px] flex justify-evenly items-center rounded-[15px] bg-[#CC0001] text-[#FFFFFF] text-[1rem]';
  const filterBarClasses = (isFilterOpen) => clsx(
    isFilterOpen ? "min-h-[40%] max-h-[100%]" : "h-[10%]",
    'transition-all duration-300 flex flex-col gap-4'
  );
  const filterContentClasses = (isFilterOpen) => clsx(
    'w-[99%] flex flex-col',
    isFilterOpen ? "h-[85%]" : "h-[0%] hidden",
    'duration-300 transition-all overflow-auto py-2 mx-auto flex justify-center large-desktop:justify-between items-center mobile:gap-2 tablet:gap-2'
  );
  const filterRowClasses = 'w-full flex justify-evenly items-center gap-2';
  const filterWrapperClasses = 'w-[99%] large-desktop:h-[5%] laptop:h-[10%] mx-auto flex justify-between large-desktop:justify-between items-center gap-4';


    return (
        <>
      {
        isTablet || isMobile ?
          <div className={filterBarClasses(isFilterOpen)}>
            <button onClick={() => toggleFilterBar()} className={filterButtonClasses}>
              Filters
              <IoFunnelSharp color={"#FFFFFF"} size={20} />
            </button>

            <div className={filterContentClasses(isFilterOpen)}>
              <SearchTerm searchTerm={searchTerm} onInputChange={onInputChange} />

              <div className={filterRowClasses}>
                <FilterbyDateRange toggleDropdown={toggleDropdown} formatDateRange={formatDateRange} showCalendar={showCalendar} selectionRange={selectionRange} handleClear={handleClear} handleSelect={handleSelect} />
                <FilterbyTimeRange selectionRange={selectionRange} formatTime={formatTime} setStartTime={setStartTime} setEndTime={setEndTime} startTime={startTime} endTime={endTime} toggleDropdown={toggleDropdown} isTimePickerVisible={isTimePickerVisible} handleTimeChange={handleTimeChange} clearTimeRange={clearTimeRange} />
              </div>

              <div className={filterRowClasses}>
                <FilterbyBP toggleDropdown={toggleDropdown} selectedOption={selectedOption} handleBPOptionSelect={handleBPOptionSelect} arrowRotate={arrowRotate} isDropdownOpen={isDropdownOpen} options={options} />
                <FilterbySort toggleDropdown={toggleDropdown} sortOption={sortOption} selectedSortOption={selectedSortOption} isSortDropdownOpen={isSortDropdownOpen} sortOptions={sortOptions} handleSortOptionSelect={handleSortOptionSelect} />
              </div>
            </div>
          </div>
          :
          <div className={filterWrapperClasses}>
            <SearchTerm searchTerm={searchTerm} onInputChange={onInputChange} />
            <FilterbyDateRange toggleDropdown={toggleDropdown} formatDateRange={formatDateRange} showCalendar={showCalendar} selectionRange={selectionRange} handleClear={handleClear} handleSelect={handleSelect} />
            <FilterbyTimeRange selectionRange={selectionRange} formatTime={formatTime} setStartTime={setStartTime} setEndTime={setEndTime} startTime={startTime} endTime={endTime} toggleDropdown={toggleDropdown} isTimePickerVisible={isTimePickerVisible} handleTimeChange={handleTimeChange} clearTimeRange={clearTimeRange} />
            <FilterbyBP toggleDropdown={toggleDropdown} selectedOption={selectedOption} handleBPOptionSelect={handleBPOptionSelect} arrowRotate={arrowRotate} isDropdownOpen={isDropdownOpen} options={options} />
            <FilterbySort toggleDropdown={toggleDropdown} sortOption={sortOption} selectedSortOption={selectedSortOption} isSortDropdownOpen={isSortDropdownOpen} sortOptions={sortOptions} handleSortOptionSelect={handleSortOptionSelect} />
          </div>
      }
    </>
    );
};

export default ReportFiltersBarComp;
