import React from "react";
import { View, Text, Button, ButtonText } from "tamagui";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { router, useNavigation } from "expo-router";

const UploadPhotoScreen = () => {
  return (
    <View backgroundColor={"#FFF"} flex={1}>
      <Image
        source={require("@/assets/images/Profile/UploadPhoto.png")}
        style={{
          width: "100%",
          height: 400,
          resizeMode: "cover",
        }}
      />
      <View
        style={{
          width: "90%",
          height: 150,
          borderRadius: 5,
          backgroundColor: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#ACACAC",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <TextInput
          style={{
            flex: 1,
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
          placeholder="Write a caption..."
          multiline={true}
        />
      </View>
      <View>
        <Button
          pressStyle={{
            backgroundColor: Colors.primary,
            opacity: 0.7,
          }}
          backgroundColor={Colors.primary}
          alignItems="center"
          justifyContent="center"
          width={"90%"}
          height={60}
          borderRadius={10}
          alignSelf="center"
          marginTop={30}
        >
          <ButtonText
            color={"white"}
            fontWeight={"bold"}
            textAlign="center"
            fontFamily={"Poppins"}
          >
            Upload
          </ButtonText>
        </Button>
      </View>
    </View>
  );
};

export default UploadPhotoScreen;
