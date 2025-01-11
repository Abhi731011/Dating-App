import { View, Text, Image, Button, ButtonText } from "tamagui";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import { router, useNavigation } from "expo-router";

const PhoneLoginScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View position="absolute" right={10}>
        <View
          gap={10}
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
          marginRight={20}
        >
          <Image
            width={23.64}
            height={22.32}
            source={require("@/assets/images/Icon 2.png")}
          />
          <Text fontSize={7}>Match meet & marry</Text>
        </View>
      </View>
      <View w={"90%"} alignSelf="center" flex={1}>
        <View flex={1} marginTop={"5%"}>
          <Text
            fontFamily={"Mulish"}
            fontSize={12}
            paddingBottom={10}
            color={"#5E5E5E"}
          >
            Country
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
              placeholder="Enter country"
            />
            <Feather
              name="arrow-down"
              size={24}
              color="grey"
              style={{
                marginRight: 10,
              }}
            />
          </View>

          <View>
            <Text
              fontFamily={"Mulish"}
              fontSize={12}
              paddingBottom={10}
              marginTop={"10%"}
              color={"#5E5E5E"}
            >
              Phone Number
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
                placeholder="Enter phone number"
                keyboardType="phone-pad"
              />
              <Feather
                name="smartphone"
                size={24}
                color="grey"
                style={{
                  marginRight: 10,
                }}
              />
            </View>
            <Text
              width={200}
              textAlign="center"
              color={"grey"}
              alignSelf="center"
              fontSize={14}
              marginTop={"10%"}
              lineHeight={20}
              fontFamily={"Mulish"}
            >
              We need your mobile number to get you signed in
            </Text>
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
              onPress={() => {
                router.navigate("/OtpScreen");
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
        <Text
          textAlign="center"
          color={"grey"}
          alignSelf="center"
          fontSize={12}
          paddingBottom={20}
        >
          Term Of Use Privacy & Policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default PhoneLoginScreen;
