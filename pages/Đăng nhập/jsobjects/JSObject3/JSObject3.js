export default {
	onPageLoad() {
    // Check if the user is logged in
    if (appsmith.store.isLoggedIn) {
      showAlert("You already login", "error");
    	navigateTo("Qly Thông tin người dùng")
    }
  }
}