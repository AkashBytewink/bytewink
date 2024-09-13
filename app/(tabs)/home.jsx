import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import Loading from "../../components/Loading";
import ChatItem from "../../components/ChatItem";
import { useRouter } from "expo-router";
import { getDocs, query, where } from "firebase/firestore";
import { usersRef } from "../../utils/firebaseConfig";

const Home = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const router = useRouter();

  async function fetchUsers() {
    const q = query(usersRef, where("userId", "!=", user?.uid));

    const querySnapshot = await getDocs(q);

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data() });
    });

    setUsers(data);
    setLoading(false);
  }

  useEffect(() => {
    if (user?.uid) {
      fetchUsers();
    }
  }, []);

  return (
    <View
      style={{
        paddingVertical: 15,
        paddingHorizontal: 5,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {loading ? (
        <Loading size="large" color="violet" />
      ) : users?.length === 0 ? (
        <Text>No Users Found!!!</Text>
      ) : (
        <FlatList
          data={users}
          contentContainerStyle={{ gap: 10 }}
          keyExtractor={(item) => Math.random()}
          showsVerticalScrollIndicator={false}
          renderItem={(item, index) => (
            <ChatItem
              router={router}
              currUserId={user?.userId}
              item={item}
              index={index}
            />
          )}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
