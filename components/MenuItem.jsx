import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

const MenuItem = ({ title, icon, action }) => {
  return (
    <Pressable
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
    </Pressable>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
