import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <View style={styles.stackContainer}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="sign-up" />
      </Stack>
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  stackContainer: {
    flex: 1,
    width: "100%", //importatnt
  },
});
