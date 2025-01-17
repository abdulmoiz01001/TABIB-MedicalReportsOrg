// src/hooks/useFilterByDateRange.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredReports } from '../store/features/PatientReportByDateRangeSlice';

const useFilterByDateRange = (reports, selectionRange) => {
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (selectionRange.token) {
      const filtered = reports.filter((report) => {
        const reportDate = new Date(report.measureDate);
        return (
          reportDate >= new Date(selectionRange.startDate) &&
          reportDate <= new Date(selectionRange.endDate)
        );
      });
      setFilteredData(filtered);
      dispatch(setFilteredReports(filtered));
    }
  }, [reports, selectionRange, dispatch]);

  return filteredData;
};

export default useFilterByDateRange;