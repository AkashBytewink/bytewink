import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import { checkFormData } from "../../utils/usefulFunctions";
import CustomKeyboardView from "../../components/CustomKeyboardView";
import msd from "../../assets/Indian-cricketer-Mahendra-Singh-Dhoni-2011.webp";
import { useAuth } from "../../context/authContext";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();

  async function signupClickHandler() {
    if (checkFormData(formData)) return;

    if (formData.password !== formData.confirmPassword) {
      return Alert.alert(
        "Invalid",
        "Password and Confirm Password should be same."
      );
    }

    setIsLoading(true);

    let response = await signup(
      formData.email,
      formData.password,
      formData.username
    );

    setIsLoading(false);

    if (!response?.success) {
      return Alert.alert("Sign Up", response?.msg);
    }
  }
  return (
    <CustomKeyboardView>
      <View style={{ width: "90%", margin: "auto", marginVertical: 10 }}>
        <Image style={styles.authImg} source={msd} />
        <Text style={styles.head}>SignUp Page</Text>
        <>
          <InputField
            title="Email"
            value={formData.email}
            placeholder="Enter you Email*"
            handleChange={(e) => setFormData({ ...formData, email: e })}
            otherStyles={{ marginVertical: 5 }}
          />
          <InputField
            title="Username"
            value={formData.username}
            placeholder="Enter you Name*"
            handleChange={(e) => setFormData({ ...formData, username: e })}
            otherStyles={{ marginVertical: 5 }}
          />
          <InputField
            title="Password"
            value={formData.password}
            placeholder="Create a strong password*"
            handleChange={(e) => setFormData({ ...formData, password: e })}
            otherStyles={{ marginVertical: 5 }}
          />
          <InputField
            title="Confirm Password"
            value={formData.confirmPassword}
            placeholder="Confirm Password*"
            handleChange={(e) =>
              setFormData({ ...formData, confirmPassword: e })
            }
            otherStyles={{ marginVertical: 5 }}
          />
        </>
        <CustomButton
          title="Sign-up"
          handlePress={signupClickHandler}
          isLoading={isLoading}
          btnColor="coral"
          otherStyle={{
            width: "100%",
            marginVertical: 10,
          }}
        />
      </View>
    </CustomKeyboardView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  authImg: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    objectFit: "cover",
    borderRadius: 75,
    alignSelf: "center",
  },
});
