import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import MenuHeader from "../../components/MenuHeader";

const TabsLayout = () => {
  return (
    <View style={styles.tabLayout}>
      <Stack
        screenOptions={{
          headerTitleStyle: {
            fontSize: 22,
          },
        }}
      >
        <Stack.Screen
          name="home"
          options={{
            headerTitle: "Home",
            headerStyle: { backgroundColor: "violet" },
            headerRight: () => <MenuHeader />,
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            headerTitle: "Profile",
            headerStyle: { backgroundColor: "violet" },
            headerRight: () => <MenuHeader />,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="violet" />
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
