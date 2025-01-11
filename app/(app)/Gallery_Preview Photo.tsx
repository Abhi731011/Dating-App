import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { View, Text, Button, Input } from "tamagui";
import { router } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

const ProfileCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    require("@/assets/images/Gallery/Add Image.png"),
    require("@/assets/images/Gallery/Add Image.png"),
    require("@/assets/images/Gallery/Add Image (4).png"),
    require("@/assets/images/Gallery/Add Image (6).png"),
    require("@/assets/images/Gallery/Add Image (5).png"),
    require("@/assets/images/Gallery/Add Image (8).png"),
    require("@/assets/images/Gallery/Add Image.png"),
    require("@/assets/images/Gallery/Add Image (5).png"),
    require("@/assets/images/Gallery/Add Image (8).png"),
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.8)",
        position: "relative",
        justifyContent: "center",
      }}
    >
      <View
        onPress={() => router.back()}
        flex={1}
        position="absolute"
        top={0}
        right={0}
        left={0}
        bottom={0}
      >
        <View
          onPress={() => {}}
          backgroundColor="white"
          width="100%"
          alignSelf="center"
          borderRadius={20}
          overflow="hidden"
          position="absolute"
          bottom={10}
          paddingBottom={20}
        >
          <View position="relative" height={400} backgroundColor="#000">
            <Image
              source={images[currentIndex]}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
              }}
            />

            <TouchableOpacity
              onPress={handlePrev}
              style={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: [{ translateY: -20 }],

                borderRadius: 30,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.8,
              }}
            >
              <AntDesign name="left" size={20} color="#FFF" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNext}
              style={{
                position: "absolute",
                top: "50%",
                right: 10,

                borderRadius: 30,
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.8,
              }}
            >
              <AntDesign name="right" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>

          <View padding={20} m={10}>
            <Text
              fontSize={20}
              fontWeight="600"
              color="#5E5E5E"
              fontFamily={"Mulish"}
            >
              Jennifer, 22
            </Text>
            <Text fontSize={12} color="#ACACAC" mt={10} lineHeight={20}>
              Very bright morning, have a nice day. Tell the world that you have
              a spirit of fire that never goes out.
            </Text>
            <TouchableOpacity>
              <Text
                mt={20}
                fontSize={12}
                color="#EF4765"
                fontFamily={"Mulish"}
                lineHeight={12}
                fontWeight={600}
              >
                View All Comment{" "}
                <Feather name="arrow-right" size={14} color="#EF4765" />
              </Text>
            </TouchableOpacity>

            <Text
              fontSize={12}
              color="#ACACAC"
              mt={20}
              lineHeight={20}
              fontFamily={"Mulish"}
            >
              <Text fontWeight="700" color="#5E5E5E">
                Richard{" "}
              </Text>
              Be careful, the sun can hurt your beautiful face. It would be
              better if I were your light.
            </Text>

            <View mt={20} fd="row" ai="center" justifyContent="space-between">
              <Input
                placeholder="Add a Comment"
                borderWidth={1}
                borderColor="#ddd"
                borderRadius={5}
                flex={1}
                padding={10}
                bg="#FFF"
              />
              <View fd={"row"} marginLeft={10}>
                <Ionicons name="send-outline" size={24} color="grey" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileCard;
