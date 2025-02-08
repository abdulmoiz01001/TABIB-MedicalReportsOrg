import clsx from 'clsx';

const SearchTerm = ({ searchTerm, onInputChange }) => {
  // Class variables for better manageability
  const containerClass = 'relative select-none large-desktop:h-full flex justify-between items-center mobile:w-[98%] tablet:w-[98%] w-[40%]';
  const inputClass = 'bg-[#FAFAFA] border w-full mobile:h-[50px] mobile:placeholder:text-[10px] tablet:h-[50px] laptop:h-[50px] desktop:h-[62px] large-desktop:h-full large-desktop:placeholder:text-[2rem] large-desktop:text-[2rem] pl-4 pr-12 rounded-[15px] border-gray-300 focus:outline-none ';
  const iconClass = 'absolute top-1/2 right-4 transform -translate-y-1/2 large-desktop:w-[50px] large-desktop:h-[40px] w-[20px] h-[20px] pointer-events-none';

  return (
    <div className={containerClass}>
      <input
        type="text"
        placeholder="Search Reports (i.e Name, Mobile, CNIC)"
        className={inputClass}
        value={searchTerm}
        onChange={onInputChange}
      />
      <img
        src="search.svg"
        alt="searchIcon"
        className={iconClass}
      />
    </div>
  );
};

export default SearchTerm;
