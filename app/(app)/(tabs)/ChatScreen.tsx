import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { View, Text, Image, Button, ButtonText } from "tamagui";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const matches = [
  {
    id: 1,
    name: "Mario Chic",
    time: "8:33 PM",
    job: "Omg, that was so much fun. Let's go ...",
    image: require("@/assets/images/Chat/Add Image (1).png"),
  },
  {
    id: 2,
    name: "Richard",
    time: "8:33 PM",
    job: "Hi Brain how are you Long time to see",
    image: require("@/assets/images/Chat/Add Image (2).png"),
  },
  {
    id: 3,
    name: "Joe Law",
    time: "8:33 PM",
    job: "We can go together. I'll wait in the bus stop....",
    image: require("@/assets/images/Chat/Add Image (3).png"),
  },
  {
    id: 4,
    name: "Cavero",
    time: "8:33 PM",
    job: "have a nice days",
    image: require("@/assets/images/Chat/Add Image (4).png"),
  },
  {
    id: 5,
    name: "Nabila",
    time: "8:33 PM",
    job: "Hi, How are you",
    image: require("@/assets/images/Chat/Add Image (5).png"),
  },
];
const ChatScreen = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ width: "100%", alignSelf: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            marginTop: "15%",
            borderRadius: 8,
            width: "90%",
            alignSelf: "center",
       
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFF",
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "#CCC",
              paddingHorizontal: 10,
              padding: 5,
            }}
          >
            <EvilIcons name="search" size={24} color="grey" />
            <TextInput
              style={{
                flex: 1,
                paddingVertical: 8,
                fontSize: 16,
                marginLeft: 10,
              }}
              placeholder="Search Messages"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          {searchText ? (
            <Button
              backgroundColor="#FFF"
              pressStyle={{
                backgroundColor: "#FFF",
                borderRadius: 0,
                borderColor: "#FFF",
              }}
              onPress={() => setSearchText("")}
            >
              <ButtonText marginLeft={10} color="#007AFF" fontSize={16}>
                Cancel
              </ButtonText>
            </Button>
          ) : null}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "5%",
            width: "90%",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "#5E5E5E",
              fontFamily: "Mulish",
              lineHeight: 17,
            }}
          >
            New Matches
          </Text>

          <TouchableOpacity onPress={()=>{
            router.navigate('/(app)/Matches')
          }}>
            <Text style={{ fontSize: 14, color: "#FF5C5C" }}>See All →</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 10 }}
         >
          <View style={{ flexDirection: "row" }}>
            {matches.map((match) => (
              <TouchableOpacity
                key={match.id}
                style={{
                  marginHorizontal: 8,
                  alignItems: "center",
                  marginTop: 20,
                  marginLeft: 20,
                }}
              >
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 40,
                  }}
                  source={match.image}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View>
          <Text
            fontSize={14}
            fontFamily={"Mulish"}
            color={"#5E5E5E"}
            fontWeight={600}
            mt={15}
            mb={10}
            ml={20}
          >
            Messages
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View width={"100%"} alignSelf="center">
              {matches.map((match, index) => (
                <TouchableOpacity
                  key={match.id}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderColor: "#ddd",
                    backgroundColor: index === 0 ? "#FFC0CB" : "#fff",
                    borderRadius: 3, 
                    marginTop:10
                   
                  }}
                >
                  <Image
                    style={{
                      width: 55,
                      height: 55,
                      borderRadius: 40,
                      marginRight: 20,
                    }}
                    source={match.image}
                  />
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "600",
                        lineHeight: 17,
                        fontFamily: "Mulish",
                        color: "#5E5E5E",
                      }}
                    >
                      {match.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#ACACAC",
                        fontFamily: "Mulish",
                        lineHeight: 11,
                        position: "absolute",
                        right: 0,
                      }}
                    >
                      {match.time}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#ACACAC",
                        fontFamily: "Mulish",
                        lineHeight: 14,
                        marginTop: 4,
                      }}
                    >
                      {match.job}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
