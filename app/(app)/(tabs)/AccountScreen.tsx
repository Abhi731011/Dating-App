import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { View, Text } from "tamagui";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";


const AccountScreen = () => {


  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ width: "100%", alignSelf: "center" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View alignSelf="center" marginTop={"15%"}>
            <TouchableOpacity>
              <Image
                style={{ width: 100, height: 100 }}
                source={require("@/assets/images/Profile/1.png")}
              />
            </TouchableOpacity>
            <View alignSelf="center" marginTop={20}>
              <Text
                alignSelf="center"
                fontFamily={"Mulish"}
                fontWeight={600}
                lineHeight={25}
                fontSize={20}
                color={"#5E5E5E"}
              >
                Brain , 22
              </Text>
              <View
                width={100}
                height={30}
                borderWidth={2}
                borderColor={"#EF4765"}
                borderRadius={5}
                mt={"5%"}
                flexDirection="row"
              >
                <MaterialIcons
                  name="favorite-border"
                  size={20}
                  color="#EF4765"
                  style={{ marginLeft: 10, marginTop: 4 }}
                />
                <Text color={"#EF4765"} fontSize={15} marginLeft={10} mt={4}>
                  10 K
                </Text>
              </View>
            </View>
          </View>
          <View
            backgroundColor={"white"}
            borderTopLeftRadius={30}
            borderTopRightRadius={30}
            padding={20}
            width={"95%"}
            alignSelf="center"
          >
            <View
              flexDirection="row"
              justifyContent="space-between"
              marginTop={10}
            >
              <View>
                <Text fontSize={12} color={"grey"} fontFamily={"Mulish"}>
                  <Ionicons name="bag-handle-outline" size={13} color="grey" />
                  {"  "}
                  Graphic Designer
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
                  Design Center
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
                  Design School
                </Text>
              </View>
            </View>
            {/* About Section */}
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
              I really like dancing. Dancing is a part of my life. Do you want
              to dance with me? I will teach you to dance, you will not regret
              doing it. See you tomorrow!
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
                  router.navigate('/(app)/BrainGallery')
                }}>
                  <Text fontSize={14} color="#FF5C5C">
                    See All →
                  </Text>
                </TouchableOpacity>
              </View>

              <View flexDirection="row" marginTop={10}>
                <Image
                  source={require("@/assets/images/Profile/Add Image (6).png")}
                  style={{
                    width: "32%",
                    height: 150,
                    borderRadius: 10,
                  }}
                />
                <Image
                  source={require("@/assets/images/Profile/Add Image (7).png")}
                  style={{
                    marginLeft: 10,
                    width: "32%",
                    height: 150,
                    borderRadius: 10,
                  }}
                />
                <Image
                  source={require("@/assets/images/Profile/Add Image (8).png")}
                  style={{
                    marginLeft: 10,
                    width: "32%",
                    height: 150,
                    borderRadius: 10,
                  }}
                />
              </View>
              <View flexDirection="row" marginTop={10}>
                <Image
                  source={require("@/assets/images/Profile/Add Image (9).png")}
                  style={{
                    width: "32%",
                    height: 150,
                    borderRadius: 10,
                  }}
                />
                <Image
                  source={require("@/assets/images/Profile/Add Image (10).png")}
                  style={{
                    marginLeft: 10,
                    width: "32%",
                    height: 150,
                    borderRadius: 10,
                  }}
                />
                <Image
                  source={require("@/assets/images/Profile/Add Image (11).png")}
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img: {
    marginLeft: 10,
    width: "32%",
    height: 150,
    borderRadius: 10,
  },
  activeIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AccountScreen;
