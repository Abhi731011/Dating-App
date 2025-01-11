import { Platform } from "react-native";
import React from "react";
import { Tabs, router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); // Suppress all LogBox warnings and errors

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            bottom: 0,
            backgroundColor: "white",
            borderRadius: 30,
            shadowColor: "black",
            shadowOpacity: 0.06,
          },
        }),
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={25} color={color || "grey"} />
          ),
          headerLeft: () => (
            <Feather
              style={{ marginLeft: 20, marginTop: 10 }}
              name="menu"
              size={24}
              color="grey"
              onPress={() => {
                router.navigate("/(app)/FilterPageScreen");
              }}
            />
          ),
          headerTitle: "Home",
          headerTitleAlign:'center',
          headerRight: () => (
            <MaterialIcons
              style={{ marginRight: 20, marginTop: 10 }}
              name="notifications-none"
              size={24}
              color="grey"
              onPress={() => {
                router.navigate("/(app)/NotificationPageScreen");
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="ChatScreen"
        options={{
          title: "",
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="chat-outline"
              size={30}
              color={color || "grey"}
            />
          ),
        
          headerTitle: "Chat",
          headerTitleAlign:'center',
        }}
      />

      <Tabs.Screen
        name="NotificationScreen"
        options={{
          title: "",
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={25} color={color || "grey"} />
          ),
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="black"
            />
          ),
          headerTitle: "Match Request",
          headerTitleAlign:'center',
          headerRight: () => (
            <Feather
              name="menu"
              size={24}
              color="grey"
              style={{ marginRight: 20, marginTop: 10 }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="AccountScreen"
        options={{
          title: "",
          headerShown: true,
          headerShadowVisible: false,
          headerTransparent: true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={28}
              color={color || "grey"}
            />
          ),
          headerLeft: () => (
            <Ionicons
              onPress={() => router.back()}
              name="chevron-back"
              size={24}
              color="black"
            />
          ),
          headerTitle: "Profile",
          headerTitleAlign:'center',
          headerRight: () => (
            <AntDesign
              name="setting"
              size={24}
              color="black"
              style={{ marginRight: 20, marginTop: 10 }}
              onPress={()=>{
                router.navigate('/(app)/SettingPageScreen')
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
