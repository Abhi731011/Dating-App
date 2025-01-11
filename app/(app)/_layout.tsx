import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { Slot } from "expo-router";
import { LogBox } from 'react-native';
import * as SecureStorage from 'expo-secure-store';
import { Config } from "@/Config/Config";

LogBox.ignoreAllLogs(); 

const RootLayout = () => {
  let session = false;

const checkStorage =  SecureStorage.getItem(Config.AUTH_KEY);

if (checkStorage==="1") {
    session=true;
} else {
    session=false;
}

  if (!session) {
    return <Redirect href={"/Onboarding"} />;
  }
  

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="ProfileScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="white"
            />
          ),
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="JeniferMatchesScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="grey"
            />
          ),
          headerTitle: "Jenifer Matches",
          headerTitleAlign:'center',
          headerRight: () => <Feather name="menu" size={24} color="grey" />,
        }}
      />
      <Stack.Screen
        name="JeniferGallery"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,

          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="grey"
            />
          ),
          headerTitle: "Jenifer Gallery",
          headerTitleAlign:'center',
        }}
      />
      <Stack.Screen
        name="FilterPageScreen"
        options={{
          headerShown: false,
          headerShadowVisible: false,
          presentation: "transparentModal",
          animation: "fade",
          
        }}
      />
      <Stack.Screen
        name="NotificationPageScreen"
        options={{
          headerShown: false,
          headerShadowVisible: false,
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="Gallery_Preview Photo"
        options={{
          headerShown: false,
          headerShadowVisible: false,
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="JeniferChatScreen"
        options={{
          headerShown: false,
          headerShadowVisible: false,
          headerTransparent: true,

          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="CallScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,

          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="grey"
            />
          ),
          headerTitle: "Call",
          headerTitleAlign:'center',
        }}
      />
      <Stack.Screen
        name="ViedoCallScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="white"
            />
          ),
          headerTitle: "Viedo Call",
          headerTitleAlign:'center',
          headerRight: () => (
            <Ionicons name="camera-reverse-outline" size={24} color="white" />
          ),
        }}
      />
      <Stack.Screen
        name="Matches"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="grey"
            />
          ),
          headerTitle: "Matches",
          headerTitleAlign:'center',
          headerRight: () => (
            <Feather
              style={{ marginLeft: 20, marginTop: 10 }}
              name="menu"
              size={24}
              color="grey"
            />
          ),
        }}
      />
      <Stack.Screen
        name="BrainGallery"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          headerLeft: () => (
            <Ionicons
              onPress={()=>{
                router.navigate('/(app)/(tabs)/AccountScreen')
              }}
              name="chevron-back"
              size={24}
              color="grey"
            />
          ),
          headerTitle: "My Gallery",
          headerTitleAlign:'center',
        }}
      />
      <Stack.Screen
        name="AddPhotoScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="grey"
            />
          ),
          headerTitle: "My Photo",
          headerTitleAlign:'center',
        }}
      />
      <Stack.Screen
        name="UploadPhotoScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="#FFF"
            />
          ),
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="SettingPageScreen"
        options={{
          headerShown: false,
          headerShadowVisible: false,
          presentation: "transparentModal",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="PersonalInfoScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="#5E5E5E"
            />
          ),
          headerTitle: "Personal Info",
          headerTitleAlign:'center',
          presentation:'containedTransparentModal'
        }}
      />
      <Stack.Screen
        name="ChangePasswordScreen"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="#5E5E5E"
            />
          ),
          headerTitle: "Change Password",
          headerTitleAlign:'center',
          presentation:'containedTransparentModal'
        }}
      />
      
    </Stack>
  );
};

export default RootLayout;
