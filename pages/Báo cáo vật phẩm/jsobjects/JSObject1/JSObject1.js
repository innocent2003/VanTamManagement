export default {
  formatSeriesData() {
    // Fetch data from the query
    const data = GetContributions.data;

    // Check if data is available
    if (!data) {
      return [];
    }

    // Map the data to the required format for the bar chart
    return data.map(row => ({
      x: row.ProgramName,  // Set the x value (ProgramName)
      y: row.TotalContributions  // Set the y value (TotalContributions)
    }));
  }
};
