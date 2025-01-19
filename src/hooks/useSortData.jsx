import { useMemo } from 'react';
// import { setItems } from '../store/features/sortedReportsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredReports } from '../store/features/FiltersSlice';

const useSortData = (sortOption) => {
  const dispatch = useDispatch();
  
  const { filteredReports } = useSelector((state) => state.PatientReportFilters);
  const sortedData = useMemo(() => {
    if (!filteredReports) return [];

    const sorted = [...filteredReports.Items];

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
  }, [ sortOption]);
  console.log("sortedData", sortedData)
    dispatch(setFilteredReports(sortedData));

  return sortedData;
};

export default useSortData;
