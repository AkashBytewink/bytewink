import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack, Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default RootLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My App Header</Text>
        </View> */}

      <View style={styles.content}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </View>

      {/* <View style={styles.footer}>
          <Text style={styles.footerText}>My App Footer</Text>
        </View> */}
      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    height: 60,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
  content: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
  footer: {
    height: 50,
    backgroundColor: "lightcoral",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 18,
    color: "white",
  },
});
