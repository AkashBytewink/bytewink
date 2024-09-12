import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MessageItem from "./MessageItem";
import { useAuth } from "../context/authContext";

const MessageList = ({ messages, scrollViewRef }) => {
  const { user } = useAuth();
  return (
    <ScrollView
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 10 }}
    >
      {messages.map((msg, index) => {
        return <MessageItem key={index} message={msg} currUser={user} />;
      })}
    </ScrollView>
  );
};

export default MessageList;

const styles = StyleSheet.create({});
