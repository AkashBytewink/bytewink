import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const TabsLayout = () => {
  return (
    <View style={styles.tabLayout}>
      <View>
        <Text>Head</Text>
      </View>
      <View style={styles.tabContent}>
        <Stack>
          <Stack.Screen name="home" options={{ headerShown: false }} />
        </Stack>
      </View>
      <View style={styles.tabFooter}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  tabLayout: {
    flex: 1,
    justifyContent: "space-between",
  },
  tabContent: {
    flex: 1,
    backgroundColor: "pink",
    height: 80,
  },
  tabFooter: {
    height: 50,
    backgroundColor: "lightcoral",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
