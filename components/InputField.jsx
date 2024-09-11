import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const InputField = ({
  title,
  value,
  placeholder,
  handleChange,
  otherStyles,
}) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <View style={[otherStyles, styles.inpContainer]}>
      <Text>{title}</Text>
      <TextInput
        placeholder={placeholder || title}
        value={value}
        style={[
          styles.inp,
          (title === "Password" || title === "Confirm Password") && {
            paddingRight: 40,
          },
        ]}
        onChangeText={handleChange}
        // autoCapitalize={title === "Email" ? "none" : "words"}
        secureTextEntry={
          (title == "Password" || title == "Confirm Password") && !showPass
        }
        keyboardType={title === "Email" ? "email-address" : "default"}
      />
      {(title === "Password" || title === "Confirm Password") &&
        (showPass ? (
          <TouchableOpacity
            style={styles.eyeContainer}
            onPress={() => setShowPass((pre) => !pre)}
          >
            <Icon name="eye-slash" size={20} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.eyeContainer}
            onPress={() => setShowPass((pre) => !pre)}
          >
            <Icon name="eye" size={20} />
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inp: {
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderColor: "grey",
    fontSize: 16,
  },
  inpContainer: {
    position: "relative",
    gap: 2,
    width: "25",
    height: "25",
  },
  eyeContainer: {
    position: "absolute",
    right: 10,
    top: "50%",
  },
});
