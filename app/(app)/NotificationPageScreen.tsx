import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import { View, Text, Button, ButtonText, Image } from "tamagui";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";
import { FontAwesome5 } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

const FilterPageScreen = () => {
  const { height, width } = Dimensions.get("window");

  const { top, bottom } = useSafeAreaInsets();
  const isIOS = Platform.OS === "ios";
  const modalHeight = isIOS ? height * 0.88 : height * 0.92;

  const matches = [
    {
      id: 1,
      name: "Carla",
      age: 22,
      job: "Invites you yo for a match!",
      time: "2 MIN AGO",
      distance: "  5 KM",
      image: require("@/assets/images/Notifications/Add Image (1).png"),
    },
    {
      id: 2,
      name: "Renna",
      age: 23,
      job: "Invites you yo for a match!",
      time: "10 MIN AGO",
      distance: "  10 KM",
      image: require("@/assets/images/Notifications/Add Image (2).png"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)" }}>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
        onPress={() => router.back()}
      >
        <View
          style={{
          
            width: "75%",
            backgroundColor: "#FFF",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            paddingHorizontal: 20,
            paddingTop: 20,

            height: modalHeight,
          }}
          onPress={()=>{}}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
          
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "grey",
                marginRight: 20,
              }}
            >
              Notifications
            </Text>
            <MaterialIcons
              name="notifications-none"
              size={24}
              color="grey"
              style={{ marginRight: 10 }}
            />
          </View>

          <Text
            fontFamily={"Mulish"}
            fontSize={14}
            fontWeight={600}
            paddingBottom={10}
            lineHeight={17}
            color={"#5E5E5E"}
            marginTop={30}
            marginLeft={20}
          >
            Today
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View width={"95%"} alignSelf="center">
              {matches.map((match) => (
                <TouchableOpacity
                  key={match.id}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 10,
                    paddingHorizontal: 8,
                    borderColor: "#ddd",
                    backgroundColor: "#fff",
                  }}
                >
                  <Image
                    width={50}
                    height={50}
                    borderRadius={40}
                    marginRight={10}
                    source={match.image}
                  />
                  <View flex={1}>
                    <Text
                      fontSize={10}
                      fontWeight={"600"}
                      lineHeight={13}
                      fontFamily={"Mulish"}
                      color={"#ACACAC"}
                    >
                      {match.time}
                    </Text>
                    <Text
                      fontSize={10}
                      fontWeight={"600"}
                      lineHeight={13}
                      fontFamily={"Mulish"}
                      color={"#5E5E5E"}
                    >
                      {match.name}, {match.age},{"   "}
                      <FontAwesome5
                        name="map-marker-alt"
                        size={10}
                        color="#FF5C5C"
                      />
                      {match.distance}
                    </Text>
                    <Text
                      fontSize={12}
                      color={"#ACACAC"}
                      fontFamily={"Mulish"}
                      lineHeight={12}
                      marginTop={4}
                    >
                      {match.job}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#EF4765",
                      width: 40,
                      height: 40,
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}
                  >
                    <AntDesign name="hearto" size={10} color="white" />
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 8,
                borderColor: "#ddd",
                backgroundColor: "#fff",
              }}
            >
              <Image
                width={50}
                height={50}
                borderRadius={40}
                marginRight={10}
                marginLeft={10}
                source={require("@/assets/images/Notifications/Add Image (3).png")}
              />
              <View flex={1}>
                <Text
                  fontSize={10}
                  fontWeight={"600"}
                  lineHeight={13}
                  fontFamily={"Mulish"}
                  color={"#ACACAC"}
                >
                  10 MIN AGO
                </Text>
                <Text
                  fontSize={10}
                  fontWeight={"600"}
                  lineHeight={13}
                  fontFamily={"Mulish"}
                  color={"#5E5E5E"}
                >
                  Patrics, 23,{" "}
                  <Text color={"#ACACAC"}>messaged you, reply now!</Text>
                </Text>
                <Text
                  fontSize={12}
                  color={"#ACACAC"}
                  fontFamily={"Mulish"}
                  lineHeight={12}
                  marginTop={4}
                >
                  "Omg, that was so much fun.Let's....
                </Text>
              </View>
            </TouchableOpacity>

            {/* Yesterday */}

            <Text
              fontFamily={"Mulish"}
              fontSize={14}
              fontWeight={600}
              paddingBottom={10}
              lineHeight={17}
              color={"#5E5E5E"}
              marginTop={30}
              marginLeft={20}
            >
              Yesterday
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 8,
                borderColor: "#ddd",
                backgroundColor: "#fff",
              }}
            >
              <Image
                width={50}
                height={50}
                borderRadius={40}
                marginRight={10}
                marginLeft={10}
                source={require("@/assets/images/Notifications/Add Image (3).png")}
              />
              <View flex={1}>
                <Text
                  fontSize={10}
                  fontWeight={"600"}
                  lineHeight={13}
                  fontFamily={"Mulish"}
                  color={"#ACACAC"}
                >
                  24 HOUR AGO
                </Text>
                <Text
                  fontSize={10}
                  lineHeight={13}
                  fontFamily={"Mulish"}
                  color={"#5E5E5E"}
                >
                  Patrics, 23,{" "}
                  <Text color={"#ACACAC"}>Commented on your Photo.</Text>
                </Text>
                <Text
                  fontSize={12}
                  color={"#ACACAC"}
                  fontFamily={"Mulish"}
                  lineHeight={12}
                  marginTop={4}
                  width={180}
                >
                  This Scenery is very beautiful, I want go to there
                </Text>
              </View>
            </TouchableOpacity>
            <Image
              style={{
                width: 184,
                height: 135,
                marginTop: 10,
                alignSelf: "center",
              }}
              source={require("@/assets/images/Notifications/Add Image (5).png")}
            />
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 8,
                borderColor: "#ddd",
                backgroundColor: "#fff",
              }}
            >
              <Image
                width={50}
                height={50}
                borderRadius={40}
                marginRight={10}
                marginLeft={10}
                source={require("@/assets/images/Notifications/Add Image (4).png")}
              />
              <View flex={1}>
                <Text
                  fontSize={10}
                  fontWeight={"600"}
                  lineHeight={13}
                  fontFamily={"Mulish"}
                  color={"#ACACAC"}
                >
                  24 HOUR AGO
                </Text>
                <Text
                  fontSize={10}
                  lineHeight={13}
                  fontFamily={"Mulish"}
                  color={"#5E5E5E"}
                >
                  Reena, 23, <Text color={"#ACACAC"}>Like your Photo.</Text>
                </Text>
              </View>
            </TouchableOpacity>
            <Image
              style={{
                width: 184,
                height: 135,
                alignSelf: "center",
              }}
              source={require("@/assets/images/Notifications/Add Image (6).png")}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterPageScreen;
