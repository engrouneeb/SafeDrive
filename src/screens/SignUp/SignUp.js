import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Sign_Up = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Handle sign up logic here
    navigation.navigate("Home");
  };

  const handleLogin = () => {
    // Handle login redirection here
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setAgreeToTerms(!agreeToTerms)}>
          <View
            style={[styles.checkbox, agreeToTerms && styles.checkboxChecked]}
          />
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          I agree to the terms and conditions
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: "#000",
  },
  checkboxText: {
    fontSize: 16,
    color: "#000",
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
  loginText: {
    color: "#000",
    textDecorationLine: "underline",
  },
});

export { Sign_Up };
