// useSearchFilter.js
import { useState, useEffect } from 'react';

const useSearchFilter = (data, searchTerm) => {
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
    }
  }, [data, searchTerm]); // Dependency on data and searchTerm to update when either changes

  return filteredData;
};

export default useSearchFilter;
