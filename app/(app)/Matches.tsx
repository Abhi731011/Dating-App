import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { View, Text, Button, ButtonText, Image } from "tamagui";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const Matches = () => {
  const [searchText, setSearchText] = useState("");

  const matches = [
    {
      id: 1,
      name: "Mario Chic",
      age: 30,
      job: "Supervisor",
      image: require("@/assets/images/Matches/Chat/Add Image (6).png"),
    },
    {
      id: 2,
      name: "Richard",
      age: 25,
      job: "Entreprenure",
      image: require("@/assets/images/Matches/Chat/Add Image (7).png"),
    },
    {
      id: 3,
      name: "Joe Law",
      age: 27,
      job: "Plice",
      image: require("@/assets/images/Matches/Chat/Add Image (8).png"),
    },
    {
      id: 4,
      name: "Cavero",
      age: 28,
      job: "Soldier",
      image: require("@/assets/images/Matches/Chat/Add Image (9).png"),
    },
    {
      id: 5,
      name: "Nabila",
      age: 22,
      job: "Lawyer",
      image: require("@/assets/images/Matches/Chat/Add Image (10).png"),
    },
    {
      id: 6,
      name: "Daren",
      age: 30,
      job: "Barista",
      image: require("@/assets/images/Matches/Chat/Add Image (11).png"),
    },
    {
      id: 7,
      name: "Laura",
      age: 20,
      job: "Lecturer",
      image: require("@/assets/images/Matches/Chat/Add Image (12).png"),
    },
    {
      id: 7,
      name: "Lavendre",
      age: 30,
      job: "Architect",
      image: require("@/assets/images/Matches/Add Image (9).png"),
    },
    {
      id: 7,
      name: "Shareef",
      age: 27,
      job: "Engineer",
      image: require("@/assets/images/Matches/Chat/Add Image (13).png"),
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          paddingTop: Platform.OS === "android" ? 40 : 0,
        }}
      >
        <View
          flexDirection="row"
          alignItems="center"
          paddingHorizontal={10}
          paddingVertical={10}
          marginTop={"5%"}
          borderRadius={8}
        >
          <View
            flex={1}
            flexDirection="row"
            alignItems="center"
            backgroundColor={"#FFF"}
            borderRadius={8}
            borderWidth={1}
            borderColor={"#CCC"}
            paddingHorizontal={10}
            padding={5}
          >
            <EvilIcons name="search" size={24} color="black" />
            <TextInput
              style={{
                flex: 1,
                paddingVertical: 8,
                fontSize: 16,
                marginLeft: 10,
              }}
              placeholder="Search Matches"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          {searchText ? (
            <Button
              backgroundColor={"#FFF"}
              pressStyle={{
                backgroundColor: "#FFF",
                borderRadius: "0",
                borderColor: "#FFF",
              }}
              onPress={() => setSearchText("")}
            >
              <ButtonText marginLeft={10} color={"#007AFF"} fontSize={16}>
                Cancel
              </ButtonText>
            </Button>
          ) : null}
        </View>

        <ScrollView
          style={{ marginBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <View width={"95%"} alignSelf="center">
            {matches.map((match) => (
              <TouchableOpacity
                key={match.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 15,
                  paddingHorizontal: 8,
                  borderColor: "#ddd",
                  backgroundColor: "#fff",
                }}
              >
                <Image
                  width={55}
                  height={55}
                  borderRadius={40}
                  marginRight={12}
                  source={match.image}
                />
                <View flex={1}>
                  <Text
                    fontSize={16}
                    fontWeight={"600"}
                    lineHeight={17}
                    fontFamily={"Mulish"}
                    color={"#5E5E5E"}
                  >
                    {match.name}, {match.age}
                  </Text>
                  <Text
                    fontSize={12}
                    color={"#ACACAC"}
                    fontFamily={"Mulish"}
                    lineHeight={14}
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
                  <Feather name="message-circle" size={20} color="white" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Matches;
