import { StyleSheet, View } from "react-native";
import React from "react";
import { Menu, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { useRouter } from "expo-router";
import { useAuth } from "../context/authContext";
import Icon from "react-native-vector-icons/FontAwesome";
import MenuItem from "./MenuItem";

const MenuHeader = () => {
  const router = useRouter();
  const { logout, user } = useAuth();

  async function handleLogout() {
    await logout();
  }
  return (
    <>
      <Menu>
        <MenuTrigger>
          {user?.photoURL && user?.photoURL !== "" ? (
            <Image source={user?.photoURL} alt="profile_photo" />
          ) : (
            <View
              style={{
                padding: 5,
                borderRadius: 50,
                borderStyle: "solid",
                borderWidth: 2,
                marginRight: 14,
                height: 45,
                width: 45,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="user" size={33} color="#00000f" />
            </View>
          )}
        </MenuTrigger>

        <MenuOptions
          customStyles={{
            optionsContainer: {
              borderRadius: 6,
              paddingVertical: 10,
              paddingHorizontal: 5,
              marginTop: 50,
            },
          }}
        >
          <MenuItem
            title="Profile"
            icon="user"
            action={() => router.push("/profile")}
          />
          <View
            style={{
              marginVertical: 10,
              height: 1,
              backgroundColor: "lightgrey",
              width: "100%",
            }}
          />
          <MenuItem title="Logout" icon="logout" action={handleLogout} />
        </MenuOptions>
      </Menu>
    </>
  );
};

export default MenuHeader;

const styles = StyleSheet.create({});
