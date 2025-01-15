import { useMemo } from 'react';

const useSortData = (data, sortOption) => {
  const sortedData = useMemo(() => {
    if (!data) return [];

    const sorted = [...data];

    switch (sortOption) {
      case "Name (Ascending)":
        return sorted.sort((a, b) => a.Name.localeCompare(b.Name));
      case "Name (Descending)":
        return sorted.sort((a, b) => b.Name.localeCompare(a.Name));
      case "Age (Ascending)":
        return sorted.sort((a, b) => a.Member.Age - b.Member.Age);
      case "Age (Descending)":
        return sorted.sort((a, b) => b.Member.Age - a.Member.Age);
      default:
        return sorted; // Return unsorted data if no valid option
    }
  }, [data, sortOption]);

  return sortedData;
};

export default useSortData;
