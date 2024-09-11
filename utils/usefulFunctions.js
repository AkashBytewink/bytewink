const { Alert } = require("react-native");

function checkFormData(formData) {
  if (
    formData.email === "" ||
    formData.email.indexOf(".") === -1 ||
    formData.email.indexOf("@") === -1 ||
    formData.email.lastIndexOf(".") - formData.email.lastIndexOf("@") <= 1 ||
    formData.email !== formData.email.toLowerCase()
  ) {
    Alert.alert("Invalid", "Please enter a valid email!");
    return true;
  }

  if (formData.password === "" || formData.password.length < 6) {
    Alert.alert("Invalid", "Password should be atleast 6 characters long!");
    return true;
  }
  return false;
}

module.exports = { checkFormData };
