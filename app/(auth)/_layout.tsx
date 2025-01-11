import { View, Text } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); // Suppress all LogBox warnings and errors

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="WelcomeScreen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PhoneLoginScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="black"
            />
          ),
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="OtpScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="black"
            />
          ),
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="EnterPersonalDetailScreen"
        options={{
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="MapScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="black"
            />
          ),
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Onboarding"
        options={{
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="black"
            />
          ),
          headerTitle: "Login",
          headerTitleAlign:'center'
        }}
      />
      <Stack.Screen
        name="SignupScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="black"
            />
          ),
          headerTitle: "Sign Up",
          headerTitleAlign:'center'
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
