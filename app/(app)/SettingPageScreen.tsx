import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Platform
} from "react-native";
import { View, Text } from "tamagui";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import * as SecureStorage from 'expo-secure-store';
import { Config } from "@/Config/Config";

interface SettingOption {
  title: string;
  subItems?: string[];
  subItemActions?: (() => void)[];
}

const FilterPageScreen = () => {
  const { height } = Dimensions.get("window");
  const { top, bottom } = useSafeAreaInsets();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const router = useRouter();
  const isIOS = Platform.OS === "ios";
  const modalHeight = isIOS ? height * 0.88 : height * 0.92;

  const toggleAccountOptions = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const settingsOptions: SettingOption[] = [
    {
      title: "My Account",
      subItems: ["Personal Info", "Change Password"],
      subItemActions: [
        () => router.push("/(app)/PersonalInfoScreen"),
        () => router.push("/(app)/ChangePasswordScreen"),
      ],
    },
    { title: "Notifications" },
    { title: "Legal" },
    { title: "Language" },
    { title: "Privacy Policy" },
    { title: "Terms And Conditions" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)" }}>
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
        onPress={() => router.back()}
      >
        <View
          style={{
          
            width: "75%",
            backgroundColor: "#FFF",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            paddingHorizontal: 20,
            paddingTop: 20,

            height: modalHeight,
          }}
          onPress={()=>{}}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
          
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "grey",
                marginRight: 20,
              }}
            >
              Settings
            </Text>
            <AntDesign
              name="setting"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />
          </View>

          <ScrollView contentContainerStyle={{ padding: 20 }}>
            <View mt={"10%"}>
              {settingsOptions.map((item, index) => (
                <React.Fragment key={index}>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingVertical: 15,
                      marginTop: 10,
                      borderBottomColor: "#E0E0E0",
                    }}
                    onPress={() =>
                      item.subItems ? toggleAccountOptions(index) : null
                    }
                  >
                    <Text fontSize={16} fontWeight="500" color="#5E5E5E">
                      {item.title}
                    </Text>
                    <Ionicons
                      name={
                        expandedIndex === index
                          ? "chevron-down"
                          : "chevron-forward"
                      }
                      size={20}
                      color="#EF4765"
                    />
                  </TouchableOpacity>

                  {expandedIndex === index &&
                    item.subItems &&
                    item.subItems.map((subItem, subIndex) => (
                      <TouchableOpacity
                        key={subIndex}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          paddingVertical: 15,
                          paddingLeft: 20,
                          borderBottomColor: "#E0E0E0",
                        }}
                        onPress={item.subItemActions![subIndex]}
                      >
                        <Text fontSize={14} fontWeight="500" color="#5E5E5E">
                          {subItem}
                        </Text>
                        <Ionicons
                          name="chevron-forward"
                          size={20}
                          color="#EF4765"
                        />
                      </TouchableOpacity>
                    ))}
                </React.Fragment>
              ))}
              <View style={{ flex: 1 }} />
            </View>
          </ScrollView>
          <View
            flexDirection="row"
            justifyContent="space-between"
            marginBottom={"20%"}
            marginRight={30}
            onPress={()=>{
              SecureStorage.deleteItemAsync(Config.AUTH_KEY);
              router.navigate('/(auth)/Onboarding')
           }}
           >
            <Text
              marginLeft={30}
              fontSize={14}
              fontWeight={600}
              marginTop={10}
              color={"#5E5E5E"} 
            >
              Log Out
            </Text>
            <Ionicons name="log-out-outline" size={25} color="#EF4765" style={{marginTop:6}} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterPageScreen;
