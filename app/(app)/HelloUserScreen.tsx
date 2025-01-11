import { View, Text, Button, ButtonText, Image } from "tamagui";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, ScrollView, TextInput } from "react-native";
import { Colors } from "@/constants/Colors";
import { router, useNavigation } from "expo-router";

const HelloUserScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ImageBackground
        style={{ width: "100%", height: 652, position: "absolute", bottom: 0 }}
        source={require("@/assets/images/Backround.png")}
      />
      <View w={"90%"} alignSelf="center" flex={1} marginTop={'20%'}>
        <Text
          width={34}
          height={21}
          fontSize={14}
          fontFamily={"Mulish"}
          lineHeight={16}
          color={"#5E5E5E"}
        >
          Hi,
        </Text>
        <Text
          width={214}
          height={37}
          fontWeight={600}
          fontSize={28}
          lineHeight={35}
          color={"#5E5E5E"}
          marginTop={20}
        >
          Brain Immanuel
        </Text>

        <View>
          <Image
            style={{
              width: 115,
              height: 115,
              borderRadius: 70,
              marginTop: 20,
              borderWidth: 10,
              borderColor: "white",
              shadowColor: "black",
              shadowOpacity: 0.8,
              shadowRadius: 3,
              shadowOffset: { width: 0, height: 2 },
            }}
            source={require("@/assets/images/PersonalDetailScreenImage.png")}
          />
        </View>
      </View>
      <View left={29} marginBottom={'30%'}>
        <Text
          color={"#FFFFFF"}
          fontSize={28}
          lineHeight={32}
          fontFamily={"Muli sh"}
          width={182}
          height={35}
          
        >
          Let's find your{" "}
        </Text>
        <Text
          color={"#FFFFFF"}
          width={300}
          height={35}
          fontWeight={600}
          fontSize={28}
          lineHeight={32}
          marginTop={20}
        >
          BLIND DATE now!
        </Text>
        
      </View>
      <Button
          pressStyle={{
            backgroundColor: "white",
            opacity: 0.7,
          }}
          backgroundColor={"white"}
          alignItems="center"
          justifyContent="center"
          alignSelf="center"
          height={60}
          width={'90%'}
          borderRadius={10}
          shadowColor={"black"}
          shadowOpacity={0.2}
          shadowRadius={3}
          marginTop={30}
          marginBottom={30}
          onPress={()=>{
            router.navigate('/(app)/(tabs)')
          }}
     
        >
          
          <ButtonText
            color={Colors.primary}
            fontWeight={"bold"}
            textAlign="center"
          >
            Start
          </ButtonText>
        </Button>
    </SafeAreaView>
  );
};

export default HelloUserScreen;
