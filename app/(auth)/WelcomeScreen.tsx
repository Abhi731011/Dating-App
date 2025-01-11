import { View, Text, Image, Button, ButtonText } from "tamagui";
import React from "react";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { TamaguiProvider, createTamagui } from "@tamagui/core";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, useNavigation } from "expo-router";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View w={"90%"} alignSelf="center" flex={1}>
        <View gap={10} flexDirection="row" mt={29} alignItems="center">
          <Image
            width={23.64}
            height={22.32}
            source={require("@/assets/images/Icon 2.png")}
          />
          <Text fontSize={8} fontWeight={600}>
            Match meet & marry
          </Text>
        </View>
        <View gap={30} justifyContent="center" flex={1} alignItems="center">
          <Image
            width={312}
            height={262}
            source={require("@/assets/images/WelcomeScreen.png")}
          />

          <View alignItems="center" justifyContent="center" mt={20}>
            <Text fontSize={14} lineHeight={16.41} color={"Grey_02"}>
              Welcome To
            </Text>
            <Text fontWeight={600} fontSize={20} lineHeight={35}>
              Match meet & marry
            </Text>
            <Text
              fontSize={12}
              fontWeight={600}
              color={Colors.lightpink}
              lineHeight={15}
            >
              Match. Chat. Meet.
            </Text>
          </View>

          <View gap={10} width={"90%"}>
            <Button
              pressStyle={{
                backgroundColor: Colors.primary,
                opacity: 0.7,
              }}
              backgroundColor={Colors.primary}
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              height={50}
              borderRadius={10}
              onPress={() => {
                router.navigate("/PhoneLoginScreen");
              }}
            >
              <Feather name="smartphone" size={24} color="white" />
              <ButtonText
                color={"white"}
                fontWeight={"bold"}
                textAlign="center"
              >
                Continue with phone
              </ButtonText>
            </Button>

            <Button
              pressStyle={{
                backgroundColor: "white",
                opacity: 0.7,
              }}
              backgroundColor={"white"}
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              height={50}
              borderRadius={10}
              shadowColor={"black"}
              shadowOpacity={0.2}
              shadowRadius={3}
              elevation={3}
            >
              <FontAwesome
                name="facebook-official"
                size={24}
                color={Colors.primary}
              />
              <ButtonText
                color={Colors.primary}
                fontWeight={"bold"}
                textAlign="center"
              >
                Continue with Facebook
              </ButtonText>
            </Button>
          </View>
          <View justifyContent="center" flexDirection="row">
            <Text fontFamily={"Mulish"} fontSize={12}>
              Don't have an account?
            </Text>
            <TouchableOpacity>
              <Text fontFamily={"Mulish"} fontSize={12} color={Colors.primary}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
