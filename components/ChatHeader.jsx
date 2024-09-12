import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const ChatHeader = ({ photoURL, name, router, color }) => {
  return (
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: "white" },
        title: "",
        headerLeft: () => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                display: "flex",
                justifyContent: "center",
              }}
              onPress={() => router.back()}
            >
              <Icon name="chevron-left" size={25} color={color} />
            </TouchableOpacity>
            {photoURL ? (
              <Image source={photoURL} style={styles.profilePhoto} />
            ) : (
              <View style={styles.profileIcon}>
                <Icon name="user" size={30} color={color} />
              </View>
            )}
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
          </View>
        ),
        headerRight: () => (
          <View style={{ flexDirection: "row", gap: 20 }}>
            <TouchableOpacity>
              <Icon name="phone" size={25} color={color} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="video-camera" size={25} color={color} />
            </TouchableOpacity>
          </View>
        ),
      }}
    />
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  profilePhoto: {
    width: 45,
    height: 45,
    borderRadius: 23,
  },
  profileIcon: {
    padding: 4,
    height: 40,
    width: 40,
    borderRadius: 25,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerRightIcon: {
    height: 30,
    width: 30,
  },
});
