import { StyleSheet, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.stackContainer}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="sign-in" />
          <Stack.Screen name="sign-up" />
        </Stack>
      </View>
    </SafeAreaView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  stackContainer: {
    flex: 1,
    width: "100%", //importatnt
  },
});
