import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import { View, Text, Image, Button, ButtonText } from "tamagui";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const matches = [
  {
    id: 1,
    name: "Carla",
    age: "22",
    distance: "5 KM ",
    image: require("@/assets/images/Match_request/1.png"),
  },
  {
    id: 2,
    name: "Eveline",
    age: "19",
    distance: "6 KM ",
    image: require("@/assets/images/Match_request/5.png"),
  },
  {
    id: 3,
    name: "Melly",
    age: "20",
    distance: "8 KM ",
    image: require("@/assets/images/Match_request/4.png"),
  },
  {
    id: 4,
    name: "Renna",
    age: "23",
    distance: "10 KM ",
    image: require("@/assets/images/Match_request/3.png"),
  },
  {
    id: 5,
    name: "Layla",
    age: "22",
    distance: "12 KM ",
    image: require("@/assets/images/Match_request/2.png"),
  },
  {
    id: 6,
    name: "Widy",
    age: "21",
    distance: "15 KM ",
    image: require("@/assets/images/Match_request/6.png"),
  },
];

const NotificationScreen = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ width: "100%", alignSelf: "center",paddingBottom:150,paddingTop: Platform.OS === "android" ? '5%' : 0,}} >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            marginTop: "10%",
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
              placeholder="Search Matches"
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

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            width={"90%"}
            alignSelf="center"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            mt={30}
         
          >
            {matches.map((match) => (
              <TouchableOpacity
                key={match.id}
                style={{
                  width: "48%",
                  marginBottom: 15,
                  borderRadius: 10,
                  overflow: "hidden",
                  backgroundColor: "#FFF",
                  elevation: 2,
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: 230,
                  }}
                  source={match.image}
                />
                <View
                  style={{
                    padding: 10,
                    alignItems: "flex-start",
                    position: "absolute",
                    top: 0,
                  }}
                 >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "600",
                      color: "#FFF",
                      lineHeight: 17,
                      fontFamily: "Mulish",
                    }}
                  >
                    {match.name}, {match.age}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#FFF",
                      fontFamily: "Mulish",
                      marginTop: 10,
                    }}
                  >
                    <EvilIcons name="location" size={15} color="white" />{" "}
                    {match.distance}
                  </Text>
                  <View
                    flexDirection="row"
                    justifyContent="space-between"
                    mt={"60%"}
                    width={"100%"}
                  >
                    {/* Cancel Button */}
                    <TouchableOpacity
                      style={{
                        backgroundColor: "white",
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        justifyContent: "center",
                        alignItems: "center",
                        
                      }}
                    >
                      <AntDesign name="close" size={28} color="grey" />
                    </TouchableOpacity>

                    {/* Favorite Button */}
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#EF4765",
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        justifyContent: "center",
                        alignItems: "center",
                       
                      }}
                    >
                      <AntDesign name="hearto" size={28} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
