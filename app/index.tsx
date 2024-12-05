import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PermissionPrompt from "@/components/PermissionPrompt";
import WelcomeScreen from "@/screens/WelcomeScreen";
import StartScreen from "@/screens/StartScreen";

const Stack = createStackNavigator();

export default function Index() {
  const [isPermissionGranted, setIsPermissionGranted] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    const checkPermission = async () => {
      const hasAgreed = await AsyncStorage.getItem("hasAgreedToPermission");
      if (hasAgreed === "true") {
        setIsPermissionGranted(true);
      } else {
        setIsPermissionGranted(false);
      }
    };
    checkPermission();
  }, []);

  if (isPermissionGranted === null) {
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName={
        isPermissionGranted ? "WelcomeScreen" : "PermissionPrompt"
      }
    >
      <Stack.Screen
        name="PermissionPrompt"
        component={PermissionPrompt}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
