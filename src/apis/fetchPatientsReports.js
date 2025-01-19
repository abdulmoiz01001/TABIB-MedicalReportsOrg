export const fetchPatientsReports = async (startDate, endDate) => {
    try {
      const response = await axios.get('/api/reports', {
        params: {
          startDate,
          endDate,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error filtering reports by date:', error);
      throw error;
    }
  };
  