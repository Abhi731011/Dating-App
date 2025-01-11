import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform
} from "react-native";
import { View, Text } from "tamagui";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";

const BrainGallery = () => {
  const [activeIcon, setActiveIcon] = useState("photos");

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ width: "100%", alignSelf: "center" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View alignSelf="center" marginTop={30} style={{paddingTop: Platform.OS === 'android' ? '20%' : 0,}}>
            <View
              style={{
                position: "relative",
                width: 100,
                height: 100,
                alignSelf: "center",
                
                
              }}
            >
              <Image
                style={{ width: "100%", height: "100%", borderRadius: 50  }}
                source={require("@/assets/images/Profile/1.png")}
              />
              <TouchableOpacity>
                <Octicons
                  name="pencil"
                  color="#EF4765"
                  size={20}
                  style={{
                    position: "absolute",
                    bottom: 5,
                    right: 5,
                    backgroundColor: "white",
                    borderRadius: 10,
                    padding: 3,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View alignSelf="center" marginTop={20}>
              <Text
                alignSelf="center"
                fontFamily={"Mulish"}
                fontWeight={600}
                lineHeight={25}
                fontSize={20}
                color={"#5E5E5E"}
              >
                Brain Immanuel, 22
              </Text>
              <Text
                alignSelf="center"
                fontSize={16}
                lineHeight={18}
                fontFamily={"Mulish"}
                color={"#ACACAC"}
                marginTop={10}
              >
                Graphic Designer
              </Text>
            </View>
          </View>
          <View
            marginTop={20}
            flexDirection="row"
            justifyContent="space-around"
          >
            <View width={50}>
              <Text
                fontSize={28}
                fontWeight={600}
                lineHeight={35}
                fontFamily={"Mulish"}
                color={"#5E5E5E"}
              >
                30
              </Text>
              <Text
                fontSize={12}
                fontWeight={600}
                lineHeight={14}
                fontFamily={"Mulish"}
                color={"#ACACAC"}
              >
                Photos
              </Text>
            </View>
            <View>
              <Text
                fontSize={28}
                fontWeight={600}
                lineHeight={35}
                fontFamily={"Mulish"}
                color={"#5E5E5E"}
              >
                10
              </Text>
              <Text
                fontSize={12}
                fontWeight={600}
                lineHeight={14}
                fontFamily={"Mulish"}
                color={"#ACACAC"}
              >
                Videos
              </Text>
            </View>
          </View>

          <View
            marginTop={"10%"}
            flexDirection="row"
            justifyContent="space-around"
          >
            <TouchableOpacity onPress={() => setActiveIcon("photos")}>
              <View
                style={[activeIcon === "photos" && styles.activeIconContainer]}
              >
                <Feather
                  name="grid"
                  size={30}
                  color={activeIcon === "photos" ? "#EF4765" : "#ACACAC"}
                />
                {activeIcon === "photos" && (
                  <View
                    marginTop={5}
                    width={"200%"}
                    height={2}
                    backgroundColor={"#EF4765"}
                  />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveIcon("videos")}>
              <View
                style={[activeIcon === "videos" && styles.activeIconContainer]}
              >
                <MaterialIcons
                  name="local-movies"
                  size={35}
                  color={activeIcon === "videos" ? "#EF4765" : "#ACACAC"}
                />
                {activeIcon === "videos" && (
                  <View
                    marginTop={5}
                    width={"200%"}
                    height={2}
                    backgroundColor={"#EF4765"}
                  />
                )}
              </View>
            </TouchableOpacity>
          </View>

          {/* Gallery Images */}
          <View flexDirection="row" marginTop={20} width={"95%"}>
            <Image
              source={require("@/assets/images/Profile/Gallery/Add Image (1).png")}
              style={styles.img}
            />
            <Image
              source={require("@/assets/images/Profile/Gallery/Add Image (2).png")}
              style={styles.img}
            />
            <Image
              source={require("@/assets/images/Profile/Gallery/Add Image (3).png")}
              style={styles.img}
            />
          </View>
          <View flexDirection="row" marginTop={10} width={"95%"}>
            <Image
              source={require("@/assets/images/Profile/Gallery/Add Image (4).png")}
              style={styles.img}
            />
            <Image
              source={require("@/assets/images/Profile/Gallery/Add Image (5).png")}
              style={styles.img}
            />
            <Image
              source={require("@/assets/images/Profile/Gallery/Add Image (6).png")}
              style={styles.img}
            />
          </View>
          <View flexDirection="row" marginTop={10} width={"95%"}>
            <Image
              source={require("@/assets/images/Profile/Gallery/Add Image (7).png")}
              style={styles.img}
            />
            <Image
              source={require("@/assets/images/Profile/Gallery/Add Image (8).png")}
              style={styles.img}
            />
            <Image
              source={require("@/assets/images/Profile/Gallery/Add Image (9).png")}
              style={styles.img}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 20,
            alignSelf: "center",
            backgroundColor: "#EF4765",
            width: 70,
            height: 70,
            borderRadius: 35,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            router.navigate("/(app)/AddPhotoScreen");
          }}
        >
          <MaterialIcons name="add-a-photo" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img: {
    marginLeft: 10,
    width: "32%",
    height: 150,
    borderRadius: 10,
  },
  activeIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BrainGallery;
