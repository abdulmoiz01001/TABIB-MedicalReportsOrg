
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-datepicker/dist/react-datepicker.css';

const FilterbyDateRange = ({toggleDropdown , formatDateRange , showCalendar ,selectionRange , handleClear , handleSelect} ) => {
 return (
    <>
     <div className='relative large-desktop:h-full select-none mobile:w-[98%] tablet:w-[98%] w-[12%]'>
                        <div
                            className='w-full shadow-[0_4px_4px_3px_#00000040] mobile:h-[50px] tablet:h-[50px]  desktop:px-8 large-desktop:px-8 laptop:px-4 rounded-[15px] laptop:h-[50px] desktop:h-[62px] large-desktop:h-full flex justify-around  items-center bg-[#FAFAFA] cursor-pointer'
                            onClick={() => toggleDropdown("calendar")}
                        >
                            <p className='desktop:text-[15px] desktop:leading-5 laptop:leading-4 laptop:text-[0.7rem] select-none large-desktop:text-[2rem] text-black'>
                                {selectionRange.token
                                    ? formatDateRange(selectionRange.startDate, selectionRange.endDate)
                                    : <span className="laptop:text-[0.8rem]" >Filter By</span>}
                            </p>
                            <img
                                src='calendar.svg'
                                alt='calendarIcon'
                                className='desktop:w-[20px] laptop:w-[16px] laptop:h-[16px] large-desktop:w-[40px] desktop:h-[20px] large-desktop:h-[40px] pointer-events-none'
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
    </>
 )
}

export default FilterbyDateRange