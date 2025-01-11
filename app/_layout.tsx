import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { TamaguiProvider, createTamagui } from "@tamagui/core";
import { config } from "@tamagui/config/v3";
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(); // Suppress all LogBox warnings and errors

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

const AppLayout = () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      
      <Slot />
      
    </TamaguiProvider>
  );
};

export default AppLayout;
