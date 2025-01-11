import React from "react";
import { View, Text, Button, ButtonText } from "tamagui";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { router, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const ProfileScreen = () => {
  
  return (
    // <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>

    <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        source={require("@/assets/images/ProfileImage.png")}
        style={{
          width: "100%",
          height: 400,
          resizeMode: "cover",
        }}
      />

      <View w="100%" alignItems="center">
        <View
          position="absolute"
          bottom={-10}
          zIndex={10}
          flexDirection="row"
          justifyContent="space-between"
          width={"60%"}
          alignSelf="center"
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#F0F0F0",
              width: 60,
              height: 60,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            onPress={()=>{
              router.navigate('/(app)/MatchScreen')
            }}
          >
            <AntDesign name="close" size={28} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#EF4765",
              width: 75,
              height: 75,
              borderRadius: 35,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <AntDesign name="hearto" size={34} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#F0F0F0",
              width: 60,
              height: 60,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            onPress={() => {
              router.navigate("/(app)/JeniferMatchesScreen");
            }}
          >
            <AntDesign name="hearto" size={20} color="#FF5C5C" />
            <Text color={"grey"}>90 k</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        backgroundColor={"white"}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        padding={20}
        marginTop={-30}
       >
        <Text
          fontSize={28}
          fontWeight={600}
          fontFamily={"MUlish"}
          lineHeight={35}
          width={199}
          height={35}
          color={"#5E5E5E"}
          marginTop={20}
        >
          Jennifer, 22
        </Text>
        <View flexDirection="row" justifyContent="space-between" marginTop={10} >
          <View>
            <Text fontSize={12} color={"grey"} fontFamily={"Mulish"}>
              <Ionicons name="bag-handle-outline" size={13} color="grey" />
              {"  "}
              Model Fashion
            </Text>
            <Text
              fontSize={12}
              color={"grey"}
              fontFamily={"Mulish"}
              marginTop={10}
            >
              <EvilIcons name="location" size={13} color="grey" />
              {"  "}
              Jakarta, Indonesia
            </Text>
          </View>
          <View>
            <Text fontSize={12} color={"grey"} fontFamily={"Mulish"}>
              <FontAwesome name="university" size={13} color="grey" />
              {"  "}
              Fashion Center
            </Text>
            <Text
              fontSize={12}
              color={"grey"}
              fontFamily={"Mulish"}
              marginTop={10}
            >
              <FontAwesome5
                name="user-graduate"
                size={13}
                color="grey"
                style={{
                  marginRight: 10,
                }}
              />
              {"   "}
              Fashion School
            </Text>
          </View>
        </View>
     
        <Text
          fontSize={14}
          fontWeight={600}
          color={"#5E5E5E"}
          marginTop={20}
          lineHeight={17}
        >
          About Me
        </Text>
        <Text
          fontSize={12}
          color={"#ACACAC"}
          marginTop={10}
          fontFamily={"Mulish"}
          lineHeight={20}
        >
          I really like dancing. Dancing is a part of my life. Do you want to
          dance with me? I will teach you to dance, you will not regret doing
          it. See you tomorrow!
        </Text>

        <View mt={20}>
          <View fd="row" jc="space-between" mb={10}>
            <Text
              fontSize={14}
              fontWeight="600"
              color="#5E5E5E"
              fontFamily={"Mulish"}
              lineHeight={17}
            >
              Gallery
            </Text>

            <TouchableOpacity onPress={()=>{
                router.navigate('/(app)/JeniferGallery')
            }}>
              <Text fontSize={14} color="#FF5C5C">
                See All →
              </Text>
            </TouchableOpacity>
          </View>
          <View flexDirection="row">
            <Image
              source={require("@/assets/images/Gallery.png")}
              style={{
                width: "49%",
                height: 280,
                borderRadius: 10,
              }}
            />
            <Image
              source={require("@/assets/images/Gallery1.png")}
              style={{
                marginLeft: 10,
                width: "49%",
                height: 280,
                borderRadius: 10,
              }}
            />
          </View>
          <View flexDirection="row" marginTop={10}>
            <Image
              source={require("@/assets/images/Gallery2.png")}
              style={{
                width: "32%",
                height: 150,
                borderRadius: 10,
              }}
            />
            <Image
              source={require("@/assets/images/Gallery3.png")}
              style={{
                marginLeft: 10,
                width: "32%",
                height: 150,
                borderRadius: 10,
              }}
            />
            <Image
              source={require("@/assets/images/Gallery4.png")}
              style={{
                marginLeft: 10,
                width: "32%",
                height: 150,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
};

export default ProfileScreen;
