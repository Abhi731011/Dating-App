import { View, Text, Button, ButtonText, Image } from "tamagui";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native";
import { Colors } from "@/constants/Colors";
import { router, useNavigation } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { widths } from "@tamagui/config/types/media";

const EnterPersonalDetailScreen = () => {
  const [selectedGender, setSelectedGender] = useState<
    "Male" | "Female" | null
  >(null);

  const handleGenderSelection = (gender: "Male" | "Female") => {
    setSelectedGender(gender);
  };
  
 

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <Image
          source={require("@/assets/images/PersonalDetailScreenImage.png")}
          width={"100%"}
          height={245}
        />
        <View w={"90%"} alignSelf="center" flex={1}>
          <Text
            fontFamily={"Mulish"}
            fontSize={12}
            paddingBottom={10}
            color={"#5E5E5E"}
            marginTop={20}
          >
            Name
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
              placeholder="Enter Name"
            />
            <MaterialCommunityIcons
              name="account"
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
              borderColor: "grey"
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
            <Ionicons
              name="calendar-clear"
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

          <Text
            fontFamily={"Mulish"}
            fontSize={12}
            paddingBottom={10}
            color={"#5E5E5E"}
            marginTop={20}
          >
            Location
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
              placeholder="Enter your Location"
            />
            <MaterialIcons
              name="location-on"
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
            Job
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
              placeholder="Enter your Job"
            />
            <FontAwesome6 name="bag-shopping" size={20} color="grey" style={{
                marginRight: 10,
              }}/>
           
          </View>
          <Text
            fontFamily={"Mulish"}
            fontSize={12}
            paddingBottom={10}
            color={"#5E5E5E"}
            marginTop={20}
          >
            Company
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
              placeholder="Enter your Company"
            />
            <FontAwesome
              name="university"
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
            College
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
              placeholder="Enter your College"
            />
            <FontAwesome5
              name="user-graduate"
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
            About Me
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              width: "100%",
              height: 150,
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
                paddingVertical: 10,
              }}
              placeholder="Write about yourself"
              multiline={true}
            />
          </View>

          <View paddingBottom={40}>
            <Button
              pressStyle={{
                backgroundColor: Colors.primary,
                opacity: 0.7,
              }}
              backgroundColor='#FF007F'
              alignItems="center"
              justifyContent="center"
              width={"100%"}
              height={60}
              borderRadius={10}
              alignSelf="center"
              marginTop={30}
              onPress={()=>{
                router.navigate('/(auth)/MapScreen')
              }}
              
            >
              <ButtonText
                color={"white"}
                fontWeight={"bold"}
                textAlign="center"
                fontFamily={"Poppins"}
              >
                Continue
              </ButtonText>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnterPersonalDetailScreen;
