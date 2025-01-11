import React from "react";
import { SafeAreaView } from "react-native";
import {
  View,
  Text,
  Image,
  Stack,
  Button,
  Theme,
  YStack,
  XStack,
} from "tamagui";
import Feather from "@expo/vector-icons/Feather";
import { navigate } from "expo-router/build/global-state/routing";
import { router } from "expo-router";

const MatchScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Theme name="light">
        <YStack
          flex={1}
          alignItems="center"
          justifyContent="space-between"
          padding="10%"
        >
          <YStack alignItems="center" space="$2">
            <Text
              fontSize={28}
              color="$red10"
              fontFamily="$body"
              fontWeight="bold"
            >
              Cheers!
            </Text>
            <Text fontSize={28} color="$gray8" fontFamily="$body">
              It's a match
            </Text>
          </YStack>

   
          <YStack position="relative" width="90%" height={200}>
            <XStack
              justifyContent="space-between"
              position="absolute"
              width="100%"
            >
   
              <Stack alignItems="flex-start" top={"40%"}>
                <Image
                  source={require("@/assets/images/MatchScreen/Love Chat_01.png")}
                  style={{ width: 50, height: 50, left: 70, borderRadius: 10 }}
                />
                <Image
                  source={require("@/assets/images/MatchScreen/Add Image.png")}
                  style={{ width: 90, height: 90, marginTop: 20 }}
                />
              </Stack>

              <Stack alignItems="flex-end">
                <Image
                  source={require("@/assets/images/MatchScreen/Add Image (1).png")}
                  style={{ width: 90, height: 90 }}
                />
                <Image
                  source={require("@/assets/images/MatchScreen/Love Chat_02 (1).png")}
                  style={{
                    width: 50,
                    height: 50,
                    marginTop: 30,
                    borderRadius: 10,
                    right: 70,
                  }}
                />
              </Stack>
            </XStack>
          </YStack>

          <YStack space="$4" alignItems="center">
            <View
              backgroundColor={'#FF007F'}
              width={80}
              height={80}
              borderRadius={40}
              alignItems="center"
              justifyContent="center"
            >
              <Feather name="message-circle" size={40} color="white" onPress={()=>{
                router.navigate('/(app)/JeniferChatScreen')
              }}/>
            </View>
            <Button
             backgroundColor={'$colorTransparent'}
              theme="alt2"
              size="$4"
            onPress={()=>{
                router.navigate('/(app)/(tabs)')
            }}
            >
              Skip
            </Button>
          </YStack>
        </YStack>
      </Theme>
    </SafeAreaView>
  );
};

export default MatchScreen;
