export default {
  formatItemData() {
    // Fetch the data from the query result
    const data = Query1.data;

    // Check if data is available
    if (!data) {
      return [];
    }

    // Map the data to the required format for the Pie Chart
    return data.map(row => ({
      x: row.ItemName,  // Item name
      y: row.Quantity   // Item quantity
    }));
  }
};
