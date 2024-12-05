import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Stwórz konto</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Imię</Text>
        <TextInput
          style={styles.input}
          placeholder="Imię"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hasło</Text>
        <TextInput
          style={styles.input}
          placeholder="Hasło"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Stwórz konto</Text>
      </TouchableOpacity>

      <Text style={styles.switchText}>
        Masz już konto?{" "}
        <TouchableOpacity>
          <Text style={styles.linkText}>Zaloguj się</Text>
        </TouchableOpacity>
      </Text>

      <Text style={styles.footerText}>
        Tworząc konto, wyrażasz zgodę na regulamin naszej aplikacji oraz
        politykę prywatności.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    fontSize: 16,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#7AB2D3",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
  switchText: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 14,
    color: "#666",
  },
  linkText: {
    color: "#1E90FF",
    fontWeight: "bold",
  },
  footerText: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 12,
    color: "#888",
  },
});

export default RegisterScreen;
