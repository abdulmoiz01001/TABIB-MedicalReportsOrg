import React, { useCallback, useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredReports, clearFilteredReports } from '../../store/features/FiltersSlice';
import { format } from 'date-fns';
import useStore from '../../zustandStore/useStore';
import SearchTerm from './ReportFilterbarComponents/searchTerm';
import FilterbyDateRange from './ReportFilterbarComponents/FilterbyDateRange';
import FilterbyTimeRange from './ReportFilterbarComponents/FilterbyTimeRange';
import FilterbyBP from './ReportFilterbarComponents/FilterbyBP';
import FilterbySort from './ReportFilterbarComponents/FilterbySort';
// import { setOffAllFunction } from '../../store/features/filtersUISlice';



const ReportFiltersBarComp = ({ reports }) => {


    const dispatch = useDispatch();
    const [sortOption, setSortOption] = useState("");
    const [bPOption, setBPOption] = useState("")
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

    const offAll = () => {
        setShowCalendar(false)
        setTimePickerVisible(false)
        setDropdownOpen(false)
        setSortDropdownOpen(false)
    }


    const setCustomFunction = useStore((state) => state.setCustomFunction);
    setCustomFunction(offAll)


    useEffect(() => {
        if (sortOption) {
            // console.log(sortOption)
            let sortBy = ""
            let sortOrder = ""
            if (sortOption == "Name (Ascending)") {
                sortBy = "name"
                sortOrder = "asc"
            } else if (sortOption == "Name (Descending)") {
                sortBy = "name"
                sortOrder = "desc"
            } else if (sortOption == "Age (Ascending)") {
                sortBy = "age"
                sortOrder = "asc"
            } else if (sortOption == "Age (Descending)") {
                sortBy = "age"
                sortOrder = "desc"
            }
            fetchSortReports(sortBy, sortOrder)
        }
    }, [sortOption])



    // Inside the component:
    const formatDateRange = (start, end) => {
        return (
            <>
                {format(start, "MMM d, yyyy")} - <br />
                {format(end, "MMM d, yyyy")}
            </>
        );
    };

    const handleSelect = async (ranges) => {

        console.log(ranges.selection.startDate)

        if (ranges.selection.startDate !== ranges.selection.endDate) {
            const formattedStartDate = format(ranges.selection.startDate, 'yyyy-MM-dd');
            const formattedEndDate = format(ranges.selection.endDate, 'yyyy-MM-dd');

            console.log(formattedStartDate);
            console.log(formattedEndDate);
            await fetchDateRangeReports(formattedStartDate, formattedEndDate);
        }

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

        if (option == "High Blood Pressure") {
            setSelectedOption(option); // Update selected option
            option = "high"
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
        console.log(option)

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






    // useSortData(sortOption)

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

    };

    const clearTimeRange = async () => {
        // Reset times to 00:00:00
        setStartTime("12:00 AM");
        setEndTime("12:00 AM");

        // Trigger API call
        await fetchTimeRangeReports("", "");
    };

    const [arrowRotate, setArrowRotate] = useState(false)

    const toggleDropdown = (type) => {

        if (type === 'calendar') {
            setShowCalendar(!showCalendar)
            setArrowRotate(false)
            setTimePickerVisible(false)  // Close time picker when calendar is open
            setDropdownOpen(false) // Close option dropdown when calendar is opened
            setSortDropdownOpen(false) // Close sort dropdown when calendar is opened
        } else if (type === 'time' && selectionRange.token == true) {

            setTimePickerVisible(!isTimePickerVisible)
            setArrowRotate(false)
            setShowCalendar(false)  // Close calendar when time picker is open
            setDropdownOpen(false) // Close option dropdown when time picker is opened
            setSortDropdownOpen(false) // Close sort dropdown when time picker is opened
        } else if (type === 'filter') {
            setDropdownOpen(!isDropdownOpen)
            setArrowRotate(!arrowRotate)
            setShowCalendar(false) // Close calendar when filter dropdown is open
            setTimePickerVisible(false) // Close time picker when filter dropdown is open
            setSortDropdownOpen(false) // Close sort dropdown when filter dropdown is opened
        } else if (type === 'sort') {
            setSortDropdownOpen(!isSortDropdownOpen)
            setArrowRotate(false)
            setShowCalendar(false) // Close calendar when sort dropdown is open
            setTimePickerVisible(false) // Close time picker when sort dropdown is open
            setDropdownOpen(false) // Close filter dropdown when sort dropdown is opened
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
        fetchDateRangeReports("", "");
        // dispatch(setShowCalendar(false));
    };



    const fetchSearchTermReports = async (searchTerm) => {
        try {
            console.log(searchTerm)
            const response = await fetch(`https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/reports?keyword=${searchTerm}`, {
                method: 'GET',
                headers: {
                    'x-api-key': '0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL',
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log("search term data", data)
            if (data.success) {


                dispatch(clearFilteredReports())
                dispatch(setFilteredReports(data.data));
                console.log(data.data)
                console.log("donee")
            } else {
                dispatch(clearFilteredReports())
            }
            // dispatch(setSearchTerm(data.data));
        } catch (e) {
            console.error("Error fetching search term reports", e);
        }
    };

    const fetchDateRangeReports = async (startDate, endDate) => {
        try {
            const response = await fetch(`https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/reports?startDate=${startDate}&endDate=${endDate}`, {
                method: 'GET',
                headers: {
                    'x-api-key': '0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL',
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log("date range data", data)

            if (data.success) {
                const { Items } = data.data

                const { count } = data.data
                if (count > 0) {
                    dispatch(clearFilteredReports())
                    dispatch(setFilteredReports(Items));
                    console.log(Items)
                    console.log("donee")
                } else {
                    dispatch(clearFilteredReports())
                }


            } else {
                dispatch(clearFilteredReports())
            }
            // dispatch(setFilteredData(data.data));
        } catch (e) {
            console.error("Error fetching date range reports", e);
        }
    }

    const fetchTimeRangeReports = async (startTime, endTime) => {
        try {
            const response = await fetch(`https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/reports?startTime=${startTime}&endTime=${endTime}`, {
                method: 'GET',
                headers: {
                    'x-api-key': '0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL',
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (data.success) {


                dispatch(clearFilteredReports())
                dispatch(setFilteredReports(data.data));
                console.log(data.data)

            } else {
                dispatch(clearFilteredReports())
            }
            // dispatch(setFilteredReports(data.data));
        } catch (e) {
            console.error("Error fetching time range reports", e);
        }
    }

    const fetchBPReports = async (bPOption) => {
        try {
            const response = await fetch(`https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/reports?bp=${bPOption}`, {
                method: 'GET',
                headers: {
                    'x-api-key': '0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL',
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();

            console.log(" blood presure data ", data.data)
            if (data.success) {


                dispatch(clearFilteredReports())
                dispatch(setFilteredReports(data.data));
                console.log(data.data)
                console.log("donee")
            } else {
                dispatch(clearFilteredReports())
            }
            // dispatch(setBpData(data.data));
        } catch (e) {
            console.error("Error fetching BP reports", e);
        }
    }

    const fetchSortReports = async (sortBy, sortOrder) => {
        try {
            const response = await fetch(`https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/reports?sortBy=${sortBy}&sortOrder=${sortOrder}`, {
                method: 'GET',
                headers: {
                    "x-api-key": "0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL",
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            console.log("sort data", data)
            if (data.success) {
                dispatch(clearFilteredReports())
                dispatch(setFilteredReports(data.data));
                console.log(data.data)
                console.log("donee")
            } else {
                dispatch(clearFilteredReports())
            }

        } catch (e) {
            console.error("Error fetching sort reports", e);
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
            } else {
                fetchSearchTermReports(""); // Hit API with an empty term
            }
        }, 500),
        []
    );

    const onInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        handleSearch(value);
    };




    // dispatch(setOffAllFunction(offAll))



    return (
        <>
            <div className='w-[99%] large-desktop:h-[5%] mx-auto flex justify-between large-desktop:justify-between  items-center gap-4 ' >
                <SearchTerm searchTerm={searchTerm} onInputChange={onInputChange} />
                <FilterbyDateRange toggleDropdown={toggleDropdown} formatDateRange={formatDateRange} showCalendar={showCalendar} selectionRange={selectionRange} handleClear={handleClear} handleSelect={handleSelect} />
                <FilterbyTimeRange selectionRange={selectionRange} formatTime={formatTime} setStartTime={setStartTime} setEndTime={setEndTime} startTime={startTime} endTime={endTime} toggleDropdown={toggleDropdown} isTimePickerVisible={isTimePickerVisible} handleTimeChange={handleTimeChange} clearTimeRange={clearTimeRange} />
                <FilterbyBP toggleDropdown={toggleDropdown} selectedOption={selectedOption} handleBPOptionSelect={handleBPOptionSelect} arrowRotate={arrowRotate} isDropdownOpen={isDropdownOpen} options={options} />
                <FilterbySort toggleDropdown={toggleDropdown} selectedSortOption={selectedSortOption} isSortDropdownOpen={isSortDropdownOpen} sortOptions={sortOptions} handleSortOptionSelect={handleSortOptionSelect} />
            </div>
        </>
    );
};

export default ReportFiltersBarComp;
