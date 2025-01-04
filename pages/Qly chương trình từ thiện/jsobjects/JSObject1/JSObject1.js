export default {
  onPageLoad() {
    // Check if the user is logged in
    if (!appsmith.store.isLoggedIn) {
      showAlert("You must log in to access this page.", "error");
      navigateTo("Đăng nhập"); // Redirect to the login page
    }
  }
};
