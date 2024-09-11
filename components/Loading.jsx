import { ActivityIndicator, StyleSheet } from "react-native";
import React from "react";

const Loading = ({ size, color = "black" }) => {
  return (
    <>
      <ActivityIndicator size={size} color={color} />
    </>
  );
};

export default Loading;

const styles = StyleSheet.create({});
