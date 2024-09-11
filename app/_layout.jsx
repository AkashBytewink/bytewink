import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Stack, useRouter, useSegments } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AuthContextProvider, useAuth } from "../context/authContext";
import { MenuProvider } from "react-native-popup-menu";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuthenticated === "undefined") return router.replace("/");
    const inApp = segments[0] == "(tabs)";

    if (isAuthenticated && !inApp) return router.replace("/home");
    else if (!isAuthenticated) return router.replace("/sign-in");
  }, [isAuthenticated]);

  useEffect(() => {
    const inApp = segments[0] == "(tabs)";
    if (isAuthenticated && !inApp) return router.replace("/home");
  });

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout = () => {
  return (
    <MenuProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="auto" backgroundColor="lightgrey" />
        <AuthContextProvider>
          <MainLayout />
        </AuthContextProvider>
      </SafeAreaView>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
