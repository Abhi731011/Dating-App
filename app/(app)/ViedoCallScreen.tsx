import React from "react";
import { TamaguiProvider, Stack, Text, Button, Theme } from "tamagui";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Image, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";

const VideoCallScreen = () => {
  return (
    <TamaguiProvider>
      <Stack flex={1} backgroundColor="white">
        <Stack
          flex={1}
          position="relative"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            source={require("@/assets/images/Viedo/Add Image_01.png")}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              resizeMode: "cover",
            }}
          />

          <Stack
            width={100}
            height={150}
            borderRadius={10}
            backgroundColor="white"
            position="absolute"
            bottom={"20%"}
            left={20}
            overflow="hidden"
            borderWidth={2}
            borderColor="white"
          >
            <Image
              source={require("@/assets/images/Viedo/Add Image_02.png")}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Stack>
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            paddingVertical={20}
            backgroundColor="transparent"
            position="absolute"
            bottom={20}
          >
            <Button
              backgroundColor="#f5f5f5"
              size="$6"
              circular
              margin={10}
              elevation={5}
              shadowColor="#000"
            >
              <FontAwesome6 name="video-slash" size={24} color="#ACACAC" />
            </Button>

            <Button
              backgroundColor="red"
              size="$8"
              circular
              margin={10}
              elevation={5}
              shadowColor="#000"
            >
              <MaterialIcons name="call-end" size={40} color="white" onPress={()=>{
                router.navigate('/(app)/JeniferChatScreen')
              }}/>
            </Button>

            <Button
              backgroundColor="#f5f5f5"
              size="$6"
              circular
              margin={10}
              elevation={5}
              shadowColor="#000"
            >
              <Feather name="mic-off" size={24} color="#ACACAC" />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </TamaguiProvider>
  );
};

export default VideoCallScreen;
