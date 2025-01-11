import React from "react";
import { View, Text, Input, Button, Image } from "tamagui";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const CallScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>
      <View alignSelf="center" mt={"30%"}>
        <Image
          style={{ width: 120, height: 120 }}
          source={require("@/assets/images/MatchScreen/Add Image 2.png")}
        />
        <Text
          alignSelf="center"
          marginTop={30}
          fontSize={28}
          fontWeight={600}
          lineHeight={35}
          color={"#5E5E5E"}
        >
          Patricia
        </Text>
        <Text
          alignSelf="center"
          mt={30}
          fontSize={14}
          fontFamily={"Mulish"}
          lineHeight={16}
        >
          Calling...
        </Text>
        <View
          backgroundColor={"#EF4765"}
          width={80}
          height={80}
          justifyContent="center"
          alignSelf="center"
          alignItems="center"
          borderRadius={50}
          marginTop={"50%"}
        >
          <MaterialIcons name="call-end" size={40} color="white" onPress={()=>{
            router.navigate('/(app)/JeniferChatScreen')
          }}/>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginTop: "10%",
          padding: 10,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
  
        }}
      >
        <View
          style={{
            backgroundColor: "#FFF",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            width: 55,
            height: 55,
            marginHorizontal: 20,
            elevation: 3, 
            
          }}
        >
          <Feather name="volume-2" size={24} color="#ACACAC" />
        </View>
        <View
          style={{
            backgroundColor: "#FFF",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            width: 55,
            height: 55,
            marginHorizontal: 20,
            elevation: 3, 
          }}
        >
          <AntDesign name="videocamera" size={24} color="#ACACAC" />
        </View>
        <View
          style={{
            backgroundColor: "#FFF",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            width: 55,
            height: 55,
            marginHorizontal: 20,
            elevation: 3, 
          }}
        >
          <Feather name="mic-off" size={24} color="#ACACAC" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CallScreen;
