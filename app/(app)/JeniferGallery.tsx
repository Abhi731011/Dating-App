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

const JeniferGallery = () => {
  const [activeIcon, setActiveIcon] = useState("photos");

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ width: "100%", alignSelf: "center",paddingTop: Platform.OS === "android" ? '10%' : 0,}} >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View alignSelf="center" marginTop={30}>
            <TouchableOpacity onPress={()=>{
              router.navigate('/(app)/Gallery_Preview Photo')
            }}>
            <Image 
              style={{ width: 100, height: 100 }}
              source={require("@/assets/images/Gallery/Add Image (1).png")}
            />
            </TouchableOpacity>
            <View alignSelf="center" marginTop={20}>
              <Text
                alignSelf="center"
                fontFamily={"Mulish"}
                fontWeight={600} 
                lineHeight={25}
                fontSize={20}
                color={"#5E5E5E"}
              >
                Jennifer, 22
              </Text>
              <Text
                alignSelf="center"
                fontSize={16}
                lineHeight={18}
                fontFamily={"Mulish"}
                color={"#ACACAC"}
                marginTop={10}
              >
                Model Fashion
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
                50
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
                20
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
          <View flexDirection="row" marginTop={20} width={'95%'}>
            <Image 
              source={require("@/assets/images/Gallery/Add Image (2).png")}
              style={styles.img}
            
            />
            <Image
              source={require("@/assets/images/Gallery/Add Image (3).png")}
              style={styles.img}
            />
            <Image
              source={require("@/assets/images/Gallery/Add Image (4).png")}
              style={styles.img}
            />
          </View>
          <View flexDirection="row" marginTop={10} width={'95%'}>
            <Image
              source={require("@/assets/images/Gallery/Add Image (5).png")}
              style={styles.img}
            />
            <Image
              source={require("@/assets/images/Gallery/Add Image (6).png")}
              style={styles.img}
            />
            <Image
              source={require("@/assets/images/Gallery/Add Image (7).png")}
              style={styles.img}
            />
          </View>
          <View flexDirection="row" marginTop={10} width={'95%'}>
            <Image
              source={require("@/assets/images/Gallery/Add Image (8).png")}
              style={styles.img}
            />
            <Image
              source={require("@/assets/images/Gallery/Add Image (9).png")}
              style={styles.img}
            />
            <Image
              source={require("@/assets/images/Gallery/Add Image_01.png")}
              style={styles.img}
            />
          </View>
        </ScrollView>
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

export default JeniferGallery;
