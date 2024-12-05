import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import med from "../assets/images/med.png";
import { useNavigation } from "@react-navigation/native";

const StartScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={med} style={styles.illustration} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignInScreen")}
        >
          <Text style={styles.buttonText}>Zaloguj się</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={[styles.buttonText, styles.registerText]}>
            Zarejestruj się
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  buttonContainer: {
    marginTop: 60,
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#4A628A",
    alignItems: "center",
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: "#7AB2D3",
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "500",
  },
  registerText: {
    color: "#ffffff",
  },
});

export default StartScreen;
