import {
  Alert,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import ChatHeader from "../../components/ChatHeader";
import { StatusBar } from "expo-status-bar";
import MessageList from "../../components/MessageList";
import Icon from "react-native-vector-icons/FontAwesome";
import { useAuth } from "../../context/authContext";
import { getRoomId } from "../../utils/usefulFunctions";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import CustomKeyboardView from "../../components/CustomKeyboardView";
import Loading from "../../components/Loading";

const Chat = () => {
  const item = useLocalSearchParams();
  const { user } = useAuth();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef(null);
  let roomId = getRoomId(user?.userId, item?.userId);

  async function sendMessage() {
    let msg = message.trim();
    if (!msg || msg.length === 0) return;
    try {
      const docRef = doc(db, "rooms", roomId);
      let msgRef = collection(docRef, "messages");

      const newDoc = await addDoc(msgRef, {
        userId: user?.userId,
        text: message,
        senderName: user?.username,
        photoURL: user?.photoURL,
        createdAt: Timestamp.fromDate(new Date()),
      });

      setMessage("");
    } catch (err) {
      Alert.alert("Message", err.message);
    }
  }

  const createRoomIfNotExists = async () => {
    await setDoc(doc(db, "rooms", roomId), {
      roomId,
      createdAt: Timestamp.fromDate(new Date()),
    });
  };

  useEffect(() => {
    createRoomIfNotExists();
    const docRef = doc(db, "rooms", roomId);
    let msgRef = collection(docRef, "messages");
    let q = query(msgRef, orderBy("createdAt", "asc"));

    let unsub = onSnapshot(q, (snapshot) => {
      let allMessages = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setMessages([...allMessages]);
    });
    setLoading(false);
    const keyboardListener = Keyboard.addListener(
      "keyboardDidShow",
      updateScrollView
    );

    return () => {
      unsub;
      keyboardListener.remove();
    };
  }, []);

  useEffect(() => {
    updateScrollView();
  }, [messages]);

  function updateScrollView() {
    setTimeout(() => {
      scrollViewRef?.current?.scrollToEnd({ animted: true });
    }, 100);
  }

  if (loading) {
    return <Loading size={"large"} color="black" />;
  } else {
    return (
      <CustomKeyboardView inChat={true}>
        <View style={styles.chat}>
          <StatusBar style="dark" />
          <ChatHeader
            name={item?.username || item?.email}
            photoURL={item?.photoURL}
            router={router}
            color="black"
          />
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View style={{ flex: 1 }}>
              <MessageList scrollViewRef={scrollViewRef} messages={messages} />
            </View>
            <View style={styles.inputBottom}>
              <TextInput
                placeholder="Type messages..."
                value={message}
                onChangeText={(e) => setMessage(e)}
                style={{ fontSize: 17, width: "90%" }}
                // onSubmitEditing={sendMessage}
                multiline={true}
              />
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={sendMessage}
                style={styles.sendBtn}
              >
                <Icon name="send" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </CustomKeyboardView>
    );
  }
};

export default Chat;

const styles = StyleSheet.create({
  chat: {
    flex: 1,
    // backgroundColor: "pink",
  },
  inputBottom: {
    paddingHorizontal: 15,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 25,
    height: 45,
    justifyContent: "center",
    shadowOpacity: 0.7,
    shadowColor: "black",
    shadowOffset: 12,
    elevation: 3,
  },
  sendBtn: {
    position: "absolute",
    right: 6,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "lightgrey",
    padding: 3,
    borderRadius: 25,
  },
});
