import React, { useState } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "@/constants/Colors";
import { router, useNavigation } from "expo-router";
import { View, Text, Button, ButtonText, Image } from "tamagui";
import * as SecureStorage from 'expo-secure-store';
import { Config } from "@/Config/Config";



export default function BlindDateScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#fff" style={styles.spinner} />
      <Text style={styles.loadingText}>Find the closest blind date ...</Text>
      <View
        backgroundColor={"white"}
        width={"100%"}
        height={200}
        position="absolute"
        bottom={0}
        alignItems="center"
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
      >
        <Text
          fontSize={14}
          fontFamily={"Mulish"}
          color={"#5E5E5E"}
          lineHeight={20}
          width={220}
          textAlign="center"
          mt={"7%"}
        >
          To Continue Blind Date asks you to activate GPS.
        </Text>
        <View flexDirection="row" justifyContent="space-between">
          <Button
            pressStyle={{
              backgroundColor: Colors.primary,
              opacity: 0.7,
            }}
            backgroundColor='#FF007F'
            alignItems="center"
            justifyContent="center"
            width={"40%"}
            height={60}
            borderRadius={10}
            marginTop={30}
            onPress={()=>{
              SecureStorage.setItem(Config.AUTH_KEY, "1");
              router.navigate('/(app)/MatchScreen')
            }}
          >
            <ButtonText
              color={"white"}
              fontWeight={700}
              textAlign="center"
              fontFamily={"Poppins"}
              fontSize={14}
            >
              ok
            </ButtonText>
          </Button>
          <Button
            pressStyle={{
              backgroundColor: "white",
              opacity: 0.7,
            }}
            backgroundColor={"#FFF"}
            alignItems="center"
            justifyContent="center"
            width={"40%"}
            height={60}
            borderRadius={10}
            marginTop={30}
            marginLeft={20}
            shadowColor={"black"}
            shadowOpacity={0.2}
            shadowRadius={3}
            onPress={()=>{
              SecureStorage.setItem(Config.AUTH_KEY, "1");
              router.navigate('/(app)/(tabs)')
            }}
          >
            <ButtonText
              color={"#ACACAC"}
              fontWeight={700}
              textAlign="center"
              fontFamily={"Poppins"}
              fontSize={14}
            >
              No
            </ButtonText>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444",
    alignItems: "center",
    justifyContent: "center",
  },

  spinner: {
    position: "absolute",
    top: "40%",
  },
  loadingText: {
    position: "absolute",
    top: "50%",
    color: "#fff",
    fontSize: 16,
  },
});
