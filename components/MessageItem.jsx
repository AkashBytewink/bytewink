import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MessageItem = ({ message, currUser }) => {
  let myMsg = false;
  if (currUser?.userId === message?.userId) {
    myMsg = true;
  }
  return (
    <View
      style={[
        myMsg
          ? { alignSelf: "flex-end", backgroundColor: "rgb(217 258 221)" }
          : { alignSelf: "flex-start", backgroundColor: "white" },
        styles.msgItem,
      ]}
    >
      <Text style={{ fontSize: 16 }}>{message.text}</Text>
    </View>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  msgItem: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    margin: 5,
    minWidth: 60,
    shadowColor: "gray",
    shadowOffset: 6,
    elevation: 3,
  },
});
