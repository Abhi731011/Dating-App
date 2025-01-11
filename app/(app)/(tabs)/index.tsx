import { StyleSheet, Dimensions, TouchableOpacity, Platform } from "react-native";
import { View, Text, Button, ButtonText, Image } from "tamagui";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import "react-native-gesture-handler";

import {
  GestureHandlerRootView,

} from "react-native-gesture-handler";
import Card from "@/components/home/Card";
import user from "@/assets/data/user";
import AnimatedStack from "@/components/home/AnimatedStack";
const { height, width } = Dimensions.get("window");


const Homescreen = () => {

  const onSwipeLeft = (user:{name:string}) =>{
    console.warn("Swipe Left", user.name)
  }
  const onSwipeRight = (user:{name:string}) =>{
    console.warn("Swipe Right", user.name)
  }

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
    <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.main}>
          <AnimatedStack
            data={user}
            renderItem={({ item }) => <Card user={item} />}
            onSwipeLeft={onSwipeLeft}
            onSwipeRight={onSwipeRight}

          />
        </View>
    </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    alignSelf: "center",
    flex: 1,
  },

});

export default Homescreen;
