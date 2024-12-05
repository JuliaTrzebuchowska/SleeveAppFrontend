import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  BackHandler,
} from "react-native";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PermissionPrompt = ({ navigation }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  useEffect(() => {
    const checkPermission = async () => {
      const hasAgreed = await AsyncStorage.getItem("hasAgreedToPermission");
      if (hasAgreed === "true") {
        setIsModalVisible(false);
        navigation.navigate("WelcomeScreen");
      }
    };
    checkPermission();
    const backAction = () => {
      handleDisagree();
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);

  const handleAgree = async () => {
    await AsyncStorage.setItem("hasAgreedToPermission", "true");
    setIsModalVisible(false);
    navigation.navigate("WelcomeScreen");
  };

  const handleDisagree = async () => {
    await AsyncStorage.setItem("hasAgreedToPermission", "false");
    setIsModalVisible(false);
    alert("You must agree to proceed with the app.");
    setTimeout(() => {
      BackHandler.exitApp();
    }, 100);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        backdropColor="rgba(0, 0, 0, 0.7)"
        style={styles.modalStyle}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            Aplikacja będzie mieć dostęp do twoich danych. Czy wyrażasz zgodę?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleAgree}>
              <Text style={styles.buttonText}>Wyrażam zgodę</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDisagree}>
              <Text style={styles.buttonText}>Nie wyrażam zgody</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  modalStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PermissionPrompt;
