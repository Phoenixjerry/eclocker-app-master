import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const changeVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.sub_title}>Login to access your account.</Text>
      </View>
      <View style={styles.form_container}>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />

        <View style={styles.input_password_container}>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={isPasswordVisible}
          />
          {isPasswordVisible ? (
            <Ionicons
              name="ios-eye-off-outline"
              size={24}
              color="black"
              style={styles.eyes_icon}
              onPress={() => changeVisibility()}
            />
          ) : (
            <Ionicons
              name="ios-eye-outline"
              size={24}
              color="black"
              style={styles.eyes_icon}
              onPress={() => changeVisibility()}
            />
          )}
        </View>
        <Text style={styles.forgot}>Forgot Pin?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.finger_print_container}>
          <Entypo name="fingerprint" size={24} color="#4329BA" />
          <Text style={styles.finger_print}>Sign in with Finger Print</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 32,
    // alignItems: "center",
    // justifyContent: "center",
  },

  header: {
    marginBottom: 48,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 2,
    color: "#28293D",
    textAlign: "left",
  },

  sub_title: {
    fontSize: 14,
    color: "#8F90A6",
  },

  form_container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: "100%",
    height: 52,
    borderWidth: 1,
    borderColor: "#C7C9D9",
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
  },

  input_password_container: {
    position: "relative",
    width: "100%",
  },
  eyes_icon: {
    position: "absolute",
    right: 10,
    top: 12,
  },

  forgot: {
    alignSelf: "flex-end",
    marginBottom: 64,
    color: "#4329BA",
  },

  button: {
    width: "100%",
    height: 52,
    backgroundColor: "#4329BA",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  finger_print_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 74,
  },

  finger_print: {
    color: "#4329BA",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 10,
  },
});
