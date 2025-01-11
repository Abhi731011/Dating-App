import React from "react";
import { TamaguiProvider, View, Text, Button, Image } from "tamagui";
import { ScrollView, SafeAreaView, TouchableOpacity,Platform,StatusBar } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { router, useNavigation } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";

const photos = [
  {
    id: 1,
    image: require("@/assets/images/Profile/Gallery/Add Image (11).png"),
  },
  {
    id: 2,
    image: require("@/assets/images/Profile/Gallery/Add Image (12).png"),
  },
  {
    id: 3,
    image: require("@/assets/images/Profile/Gallery/Add Image (13).png"),
  },
  {
    id: 4,
    image: require("@/assets/images/Profile/Gallery/Add Image (14).png"),
  },
  {
    id: 5,
    image: require("@/assets/images/Profile/Gallery/Add Image (15).png"),
  },
  {
    id: 6,
    image: require("@/assets/images/Profile/Gallery/Add Image (16).png"),
  },
  {
    id: 7,
    image: require("@/assets/images/Profile/Gallery/Add Image (17).png"),
  },
  {
    id: 8,
    image: require("@/assets/images/Profile/Gallery/Add Image (18).png"),
  },
  {
    id: 9,
    image: require("@/assets/images/Profile/Gallery/Add Image (19).png"),
  },
  {
    id: 10,
    image: require("@/assets/images/Profile/Gallery/Add Image (20).png"),
  },
  {
    id: 11,
    image: require("@/assets/images/Profile/Gallery/Add Image (21).png"),
  },
  {
    id: 12,
    image: require("@/assets/images/Profile/Gallery/Add Image (22).png"),
  },
  {
    id: 13,
    image: require("@/assets/images/Profile/Gallery/Add Image (23).png"),
  },
  {
    id: 14,
    image: require("@/assets/images/Profile/Gallery/Add Image (24).png"),
  },
  {
    id: 15,
    image: require("@/assets/images/Profile/Gallery/Add Image (5).png"),
  },
  {
    id: 16,
    image: require("@/assets/images/Profile/Gallery/Add Image (6).png"),
  },
  {
    id: 17,
    image: require("@/assets/images/Profile/Gallery/Add Image (8).png"),
  },
  {
    id: 18,
    image: require("@/assets/images/Profile/Gallery/Add Image (9).png"),
  },
  {
    id: 19,
    image: require("@/assets/images/Profile/Gallery/Add Image (5).png"),
  },
  {
    id: 20,
    image: require("@/assets/images/Profile/Gallery/Add Image (6).png"),
  },
  {
    id: 21,
    image: require("@/assets/images/Profile/Gallery/Add Image (8).png"),
  },
  {
    id: 22,
    image: require("@/assets/images/Profile/Gallery/Add Image (9).png"),
  },
];

const AddPhotoScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#FFF' }}>
      <View flex={1} style={{paddingTop: Platform.OS === "android" ? '10%' : 0,}} >
        {/* <View
          style={{
            backgroundColor: "#fff",
            padding: 20,
            borderBottomWidth: 1,
            borderColor: "#ddd",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            shadowColor: "black",
            height: 107,
          }}
         >
          <TouchableOpacity
            onPress={() => {
              router.navigate("/(app)/BrainGallery");
            }}
            style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color="grey"
              style={{ marginRight: 20 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#5E5E5E" }}>
              My Photos
            </Text>
          </TouchableOpacity>
        </View> */}

        {/* Photo Grid */}
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            {photos.map((photo, index) => (
              <View
                key={photo.id}
                style={{
                  width: "32%",
                  height: 100,
                  aspectRatio: 1,
                  marginBottom: 10,
                  borderRadius: 10,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  source={photo.image}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            ))}
          </View>
        </ScrollView>
        <View
          style={{
            position: "absolute",
            bottom: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%", // Ensures the row spans the width of the screen
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#FFF",
              width: 60,
              height: 60,
              borderRadius: 35,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <Feather name="camera" size={30} color="#EF4765" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#EF4765",
              width: 80,
              height: 80,
              borderRadius: 35,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
            }}
            onPress={() => {
              router.navigate("/(app)/UploadPhotoScreen");
            }}
          >
            <Ionicons name="cloud-upload-outline" size={50} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#FFF",
              width: 60,
              height: 60,
              borderRadius: 35,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <Entypo name="video-camera" size={30} color="#EF4765" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddPhotoScreen;
