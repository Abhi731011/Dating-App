import React from "react";
import { TamaguiProvider, View, Text, Input, Button, Image } from "tamagui";
import { ScrollView, SafeAreaView, TouchableOpacity,Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

const JeniferChatScreen = () => {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
      <View flex={1} style={{
          paddingTop: Platform.OS === "ios" ? 0 : 0, 
          marginTop: Platform.OS === "ios" ? 0 : -40, 
          
        }}>
        <View
          backgroundColor="#fff"
          padding={20}
          borderBottomWidth={1}
          borderColor="#ddd"
          borderBottomLeftRadius={40}
          borderBottomRightRadius={40}
          shadowColor={"black"}
          height={'120'}
          elevationAndroid={5}
        >
          <TouchableOpacity
            onPress={() => {
              router.navigate("/(app)/(tabs)/ChatScreen");
            }}
            style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color="grey"
              style={{ marginRight: 20,marginLeft:-10, }}
            />
            <Image
              width={40}
              height={40}
              borderRadius={40}
              marginRight={12}
              source={require("@/assets/images/MatchScreen/Add Image 2.png")}
            />
            <View flex={1}>
              <Text fontSize={16} fontWeight="600" color="#5E5E5E">
                Patrika
              </Text>
              <Text fontSize={12} color="#ACACAC">
                Online
              </Text>
            </View>
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Ionicons
                name="call-outline"
                size={26}
                color="#ACACAC"
                onPress={() => {
                  router.navigate("/(app)/CallScreen");
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                name="video"
                size={27}
                color="#ACACAC"
                onPress={() => {
                  router.navigate("/(app)/ViedoCallScreen");
                }}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{ marginBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <View padding={20} w={"100%"} alignSelf="center" marginTop={20}>
            <View
              style={{
                alignSelf: "flex-end",
                backgroundColor: "#FF748B",
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text color="#FFF">Hi Patriks, You Look beautiful</Text>
            </View>
            <Text
              fontSize={10}
              color="#ACACAC"
              marginBottom={20}
              alignSelf="flex-end"
            >
              08:30 PM
            </Text>

            <View
              style={{
                alignSelf: "flex-start",
                backgroundColor: "white",
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
                borderColor: "#ddd",
                borderWidth: 1,
              }}
            >
              <Text
                fontSize={12}
                fontFamily="Mulish"
                lineHeight={14}
                color="black"
              >
                Thank you, you look good too
              </Text>
            </View>
            <Text
              fontSize={10}
              color="#ACACAC"
              marginBottom={20}
              alignSelf="flex-start"
            >
              08:30 PM
            </Text>

            <View
              style={{
                alignSelf: "flex-end",
                backgroundColor: "#FF748B",
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text color="#FFF">What kind of music do you like Patrika</Text>
            </View>
            <Text
              fontSize={10}
              color="#ACACAC"
              marginBottom={20}
              alignSelf="flex-end"
            >
              08:35 PM
            </Text>

            <View
              style={{
                alignSelf: "flex-start",
                backgroundColor: "white",
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
                borderColor: "#ddd",
                borderWidth: 1,
              }}
            >
              <Text
                fontSize={12}
                fontFamily="Mulish"
                lineHeight={14}
                color="black"
              >
                Almost all music genres I like, but what I like best is rock and
                roll music.
              </Text>
            </View>
            <Text
              fontSize={10}
              color="#ACACAC"
              marginBottom={20}
              alignSelf="flex-start"
            >
              08:35 PM
            </Text>

            <View
              style={{
                alignSelf: "flex-end",
                backgroundColor: "#FF748B",
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text color="#FFF">
                I also like all rock and roll music. Next week are you busy? I
                want to take you to a music concert.
              </Text>
            </View>
            <Text
              fontSize={10}
              color="#ACACAC"
              marginBottom={20}
              alignSelf="flex-end"
            >
              08:43 PM
            </Text>

            <View
              style={{
                alignSelf: "flex-start",
                backgroundColor: "white",
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
                borderColor: "#ddd",
                borderWidth: 1,
              }}
            >
              <Text
                fontSize={12}
                fontFamily="Mulish"
                lineHeight={14}
                color="black"
              >
                Sure, I am free.
              </Text>
            </View>

            <Text
              fontSize={10}
              color="#ACACAC"
              marginBottom={20}
              alignSelf="flex-start"
            >
              08:44 PM
            </Text>
            <View
              style={{
                alignSelf: "flex-end",
                backgroundColor: "#FF748B",
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text color="#FFF">Okk</Text>
            </View>
            <Text
              fontSize={10}
              color="#ACACAC"
              marginBottom={20}
              alignSelf="flex-end"
            >
              08:30 PM
            </Text>
          </View>
        </ScrollView>

        <View
          paddingVertical={10}
          paddingHorizontal={15}
          position="absolute"
          bottom={30}
          width="95%"
          flexDirection="row"
          alignItems="center"
          alignSelf="center"
        >
          <View style={{ flex: 1, position: "relative" }}>
            <Input
              placeholder="Write a message"
              borderWidth={1}
              borderColor="#ddd"
              borderRadius={15}
              flex={1}
              paddingLeft={40}
              paddingRight={40}
              bg="#F8FAFC"
              height={50}
              backgroundColor={"#FFF"}
            />

            <Ionicons
              name="happy-outline"
              size={24}
              color="grey"
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: [{ translateY: -12 }],
              }}
            />

            <Ionicons
              name="camera-outline"
              size={24}
              color="grey"
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: [{ translateY: -12 }],
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#EF4765",
              borderRadius: 25,
              padding: 10,
              marginLeft: 10,
            }}
          >
            <Ionicons name="send-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    // </SafeAreaView>
  );
};

export default JeniferChatScreen;
