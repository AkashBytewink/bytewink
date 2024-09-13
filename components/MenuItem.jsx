import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

const MenuItem = ({ title, icon, action }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 8,
      }}
      onPress={action}
    >
      <Text style={{ fontSize: 18 }}>{title}</Text>
      <Icon name={icon} size={20}></Icon>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
