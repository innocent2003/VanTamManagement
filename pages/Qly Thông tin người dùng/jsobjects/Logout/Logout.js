export default {
  logout() {
    try {
      // Clear session data
      storeValue('isLoggedIn', false);

      // Optionally, call a logout API (if your app has one)
      // await logoutApi.run();

      // Navigate to the login page
      navigateTo('Đăng nhập');

      // Show a success message
      showAlert('You have been logged out successfully.', 'success');
    } catch (error) {
      // Handle errors
      showAlert('Logout failed. Please try again.', 'error');
      console.error('Logout Error:', error);
    }
  }
};
