import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import Loading from "../../components/Loading";

const Home = () => {
  const { logout } = useAuth();
  const [loading, setLoading] = useState(false);

  async function logoutClickHandler() {
    setLoading(true);
    await logout();
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  } else {
    return (
      <View>
        <Text>Home</Text>
        <TouchableOpacity onPress={logoutClickHandler}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Home;

const styles = StyleSheet.create({});
