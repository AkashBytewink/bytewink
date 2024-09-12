import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const ios = Platform.OS === "ios";
const CustomKeyboardView = ({ children, inChat = false }) => {
  let keyConfig = {};
  let scrolllViewConfig = {};
  if (inChat) {
    keyConfig = { keyboardVerticalOffset: 90 };
    scrolllViewConfig = {
      contentContainerStyle: {
        flex: 1,
      },
    };
  }

  return (
    <KeyboardAvoidingView
      behavior={ios ? "padding" : "height"}
      style={{
        flex: 1,
      }}
      {...keyConfig}
    >
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        {...scrolllViewConfig}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CustomKeyboardView;

const styles = StyleSheet.create({});
