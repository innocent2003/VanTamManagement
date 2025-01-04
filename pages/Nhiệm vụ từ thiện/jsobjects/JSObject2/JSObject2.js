export default {
  async logout() {
    try {
      // Optional: Call a logout API (if applicable)
      // Uncomment and configure if your backend has a logout endpoint
      /*
      await logoutApi.run();
      */

      // Clear all stored session data
      store.clear();

      // Redirect to the login page
      navigateTo('LoginPage');

      // Show a success message
      showAlert('You have been logged out successfully.', 'success');
    } catch (error) {
      // Handle errors if the logout API fails
      showAlert('Logout failed. Please try again.', 'error');
      console.error("Logout Error:", error);
    }
  }
};
