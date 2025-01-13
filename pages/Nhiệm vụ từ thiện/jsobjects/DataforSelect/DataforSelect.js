export default {
  formatItemData() {
    // Fetch the data from the query result
    const data = Query1.data;

    // Check if data is available
    if (!data || data.length === 0) {
      return [];
    }

    // Map the data to the required template format
    return data.map(row => ({
      name: row.tenChuongTrinh, // Map the program name to "name"
      code: row.id   // Generate a code or use a field like row.code
    }));
  }
};
