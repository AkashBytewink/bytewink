import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Loading from "./Loading";

const CustomButton = ({
  title,
  btnColor,
  otherStyle,
  handlePress,
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.customBtn,
        otherStyle,
        { backgroundColor: btnColor },
        isLoading ? { opacity: 0.4 } : { opacity: 1 },
      ]}
      onPress={handlePress}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loading size="small" />
      ) : (
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customBtn: {
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
