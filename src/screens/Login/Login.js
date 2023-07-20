import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    // Handle login logic here
    navigation.navigate("Home");
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    navigation.navigate("ForgotPassword");
  };

  const handleSignUp = () => {
    // Handle sign up logic here
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    width: "80%",
    height: 48,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    width: "80%",
    height: 48,
    backgroundColor: "#000",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#000",
    textDecorationLine: "underline",
    marginBottom: 16,
  },
  signUpText: {
    color: "#000",
    textDecorationLine: "underline",
  },
});

export { LoginScreen };
