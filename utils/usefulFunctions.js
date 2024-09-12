const { Alert } = require("react-native");

export function checkFormData(formData) {
  if (
    formData.email === "" ||
    formData.email.indexOf(".") === -1 ||
    formData.email.includes(" ") ||
    formData.email.indexOf("@") === -1 ||
    formData.email.lastIndexOf(".") - formData.email.lastIndexOf("@") <= 1 ||
    formData.email !== formData.email.toLowerCase()
  ) {
    Alert.alert("Invalid", "Please enter a valid email!");
    return true;
  }

  if (formData?.username && formData?.username.trim() === "") {
    Alert.alert("Invalid", "Please enter a valid username!");
    return true;
  }

  if (formData.password === "" || formData.password.length < 6) {
    Alert.alert("Invalid", "Password should be atleast 6 characters long!");
    return true;
  }
  return false;
}

export const getRoomId = (userId1, userId2) => {
  const sortedIds = [userId1, userId2].sort();
  const roomId = sortedIds.join("-");
  return roomId;
};

export const formatDate = (date) => {
  const day = date.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];

  const formatedDate = day + " " + month;
  return formatedDate;
};
