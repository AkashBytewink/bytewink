import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MessageItem from "./MessageItem";
import { useAuth } from "../context/authContext";

const MessageList = ({ messages, scrollViewRef, setMessage }) => {
  const { user } = useAuth();

  return (
    <ScrollView
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 10, flex: 1 }}
    >
      {messages?.length !== 0 ? (
        messages.map((msg, index) => {
          return <MessageItem key={index} message={msg} currUser={user} />;
        })
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              elevation: 5,
              shadowColor: "grey",
              backgroundColor: "lightgrey",
              borderRadius: 7,
              paddingHorizontal: 10,
              paddingVertical: 3,
            }}
            onPress={() => setMessage("Hii 👋")}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Say Hii 👋</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default MessageList;

const styles = StyleSheet.create({});
