// useSearchFilter.js
import { useState, useEffect } from 'react';
import { setBpFilteredData } from '../store/features/bloodPressureSlice';
import { useDispatch } from 'react-redux';

const useSearchFilter = (data, searchTerm) => {
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(data); // If no search term, return the original data
    } else {
      const lowercasedTerm = searchTerm.toLowerCase();
      const filtered = data.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(lowercasedTerm)
        )
      );
      setFilteredData(filtered);
       dispatch(setBpFilteredData(filtered));
    }
  }, [data, searchTerm]); // Dependency on data and searchTerm to update when either changes

  return filteredData;
};

export default useSearchFilter;
