import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { checkFormData } from "../../utils/usefulFunctions";
import CustomKeyboardView from "../../components/CustomKeyboardView";
import msd from "../../assets/Indian-cricketer-Mahendra-Singh-Dhoni-2011.webp";
import { useAuth } from "../../context/authContext";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { signin } = useAuth();

  async function submitClickHandler() {
    if (checkFormData(formData)) return;

    setIsLoading(true);
    let response = await signin(formData.email, formData.password);
    setIsLoading(false);

    if (!response?.success) {
      Alert.alert("Sign in", response?.msg);
    }
  }

  return (
    <CustomKeyboardView>
      <View
        style={{ width: "90%", marginHorizontal: "auto", marginVertical: 10 }}
      >
        <Image style={styles.authImg} source={msd} />
        <Text style={styles.head}>SignIn Page</Text>
        <>
          <InputField
            title="Email"
            value={formData.email}
            placeholder="Enter you Email*"
            handleChange={(e) => setFormData({ ...formData, email: e })}
            otherStyles={{ marginVertical: 10 }}
          />
          <InputField
            title="Password"
            value={formData.password}
            placeholder="Enter you Password*"
            handleChange={(e) => setFormData({ ...formData, password: e })}
          />

          <Text
            style={{
              marginVertical: 5,
              textAlign: "right",
              fontWeight: "bold",
              color: "gray",
              fontSize: 15,
            }}
          >
            Forget Password?
          </Text>
        </>

        <CustomButton
          title="Sign-in"
          handlePress={submitClickHandler}
          btnColor="seagreen"
          otherStyle={{
            width: "100%",
            marginTop: 15,
          }}
          isLoading={isLoading}
        />

        <View
          style={{ margin: 8, flexDirection: "row", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 17 }}>Don't have account? </Text>
          <Link
            style={{
              color: "magenta",
              fontWeight: "bold",
              fontSize: 17,
            }}
            href="/sign-up"
          >
            Sign Up
          </Link>
        </View>
      </View>
    </CustomKeyboardView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  authImg: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    objectFit: "cover",
    borderRadius: 75,
    alignSelf: "center",
  },
  head: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
