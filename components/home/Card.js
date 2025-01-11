import { View, Text, Button, ButtonText, Image } from "tamagui";
import React from "react";
import { TouchableOpacity, Dimensions, Pressable } from "react-native";
import { router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

const Card = (props) => {
  const { name, age, distance, job, image } = props.user;
  const { height, width } = Dimensions.get("window");
  return (
    <View
      width={"80%"}
      height={528}
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
      marginTop={"20%"}
    >
      <Pressable
        onPress={() => {
          router.navigate("/(app)/ProfileScreen");
        }}
      >
        <Image
          source={image}
          style={{
            height: height * 0.5,
            width: width * 0.7,
            borderRadius: 10,
          }}
        />
      </Pressable>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 15,
          padding: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.3,
          shadowRadius: 1.41,
          elevation: 2,
        }}
      >
        <View flex={1}>
          <Text fontSize={16} fontWeight={"bold"} color={"#333"}>
            {name},{age}
          </Text>
          <Text fontSize={14} color={"#888"} marginTop={4}>
            {job}
          </Text>
        </View>

        <View flexDirection="row" alignItems="center">
          <FontAwesome5 name="map-marker-alt" size={14} color="#FF5C5C" />
          <Text fontSize={14} color={"#555"} marginLeft={5}>
            {distance}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
