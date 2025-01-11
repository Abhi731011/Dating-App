import { View, Text, Button, ButtonText, Image } from "tamagui";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput, Platform } from "react-native";
import { Colors } from "@/constants/Colors";
import { router, useNavigation } from "expo-router";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import { widths } from "@tamagui/config/types/media";

const PersonalInfoScreen = () => {
  const [selectedGender, setSelectedGender] = useState<
    "Male" | "Female" | null
  >(null);

  const handleGenderSelection = (gender: "Male" | "Female") => {
    setSelectedGender(gender);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <View
          w={"90%"}
          alignSelf="center"
          flex={1}
          marginTop={"auto"}
          style={{ paddingTop: Platform.OS === "android" ? "20%" : 0 }}
        >
          <Text
            textAlign="center"
            width={319}
            alignSelf="center"
            fontSize={12}
            fontFamily={"Mulish"}
            color={"#5E5E5E"}
          >
            Providede personal information for the security of your account,do
            not give personal information to anyone
          </Text>
          <Text
            fontFamily={"Mulish"}
            fontSize={12}
            paddingBottom={10}
            color={"#5E5E5E"}
            marginTop={20}
          >
            Email Address
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              height: 55,
              borderRadius: 10,
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "grey",
            }}
          >
            <TextInput
              style={{
                flex: 1,
                fontSize: 16,
                paddingHorizontal: 10,
              }}
              placeholder="Enter Email"
            />
            <Fontisto
              name="email"
              size={20}
              color="grey"
              style={{ marginRight: 10 }}
            />
          </View>
          <Text
            fontFamily={"Mulish"}
            fontSize={12}
            paddingBottom={10}
            color={"#5E5E5E"}
            marginTop={20}
          >
            Number Phone
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              height: 55,
              borderRadius: 10,
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "grey",
            }}
          >
            <TextInput
              style={{
                flex: 1,
                fontSize: 16,
                paddingHorizontal: 10,
              }}
              placeholder="Enter Phone Number"
            />

            <Feather
              name="smartphone"
              size={20}
              color="grey"
              style={{
                marginRight: 10,
              }}
            />
          </View>

          <Text
            fontFamily={"Mulish"}
            fontSize={12}
            paddingBottom={10}
            color={"#5E5E5E"}
            marginTop={20}
          >
            Birthday
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              height: 55,
              borderRadius: 10,
              backgroundColor: "#FFFFFF",
              borderWidth: 1,
              borderColor: "grey",
            }}
          >
            <TextInput
              style={{
                flex: 1,
                fontSize: 16,
                paddingHorizontal: 10,
              }}
              placeholder="DD/MM/YYYY"
            />

            <AntDesign
              name="calendar"
              size={20}
              color="grey"
              style={{
                marginRight: 10,
              }}
            />
          </View>
          <Text
            fontFamily={"Mulish"}
            fontSize={12}
            paddingBottom={10}
            color={"#5E5E5E"}
            marginTop={20}
          >
            Gender
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Male Button */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "48%",
                height: 55,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: selectedGender === "Male" ? "#DA498D" : "grey",
              }}
              onTouchEnd={() => handleGenderSelection("Male")}
            >
              <Foundation
                name="male-symbol"
                size={24}
                color={selectedGender === "Male" ? "#DA498D" : "grey"}
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: selectedGender === "Male" ? "#EF4765" : "grey",
                }}
              >
                Male
              </Text>
            </View>

            {/* Female Button */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "48%",
                height: 55,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: selectedGender === "Female" ? "#DA498D" : "grey",
              }}
              onTouchEnd={() => handleGenderSelection("Female")}
            >
              <MaterialIcons
                name="female"
                size={24}
                color={selectedGender === "Female" ? "#DA498D" : "grey"}
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: selectedGender === "Female" ? "#DA498D" : "grey",
                }}
              >
                Female
              </Text>
            </View>
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
              width={"100%"}
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
                Save
              </ButtonText>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfoScreen;
