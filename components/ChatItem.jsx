import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useAuth } from "../context/authContext";
import { formatDate, getRoomId } from "../utils/usefulFunctions";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const ChatItem = ({ item, router, currUserId }) => {
  const { user } = useAuth();
  const [lastMessage, setLastMessage] = useState(undefined);

  const openChatRoom = () => {
    router.push({ pathname: "/chat", params: item.item });
  };

  useEffect(() => {
    let roomId = getRoomId(user?.userId, item?.item?.userId);
    const docRef = doc(db, "rooms", roomId);
    let msgRef = collection(docRef, "messages");
    let q = query(msgRef, orderBy("createdAt", "desc"));

    let unsub = onSnapshot(q, (snapshot) => {
      let allMessages = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setLastMessage(allMessages[0] ? allMessages[0] : null);
    });
    return unsub;
  }, []);

  function renderTime() {
    if (lastMessage) {
      return formatDate(new Date(lastMessage?.createdAt?.seconds * 1000));
    }
  }

  function renderLastMessage() {
    if (typeof lastMessage === "undefined") return "Loading...";
    let msg = lastMessage?.text;
    console.log(lastMessage);
    if (msg?.includes("\n")) {
      msg = msg.substring(0, msg.indexOf("\n")) + "...";
    }

    if (lastMessage) {
      if (currUserId === lastMessage?.userId) return "You: " + msg;
      return msg;
    } else {
      return "Say Hii 👋";
    }
  }

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={openChatRoom}>
      {item?.item?.photoURL ? (
        <Image source={item?.item?.photoURL} style={styles.profilePhoto} />
      ) : (
        <View style={styles.profileIcon}>
          <Icon name="user" size={30} color="grey" />
        </View>
      )}

      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            {item?.item?.username}
          </Text>
          <Text>{renderTime()}</Text>
        </View>
        <Text style={{ fontSize: 15.5 }}>{renderLastMessage()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    height: 55,
    paddingHorizontal: 8,
    backgroundColor: "#d8dce3",
    borderRadius: 7,
    width: "100%",
  },
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
});
