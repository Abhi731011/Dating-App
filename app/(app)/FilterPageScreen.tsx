import React, { useState } from "react";
import { Dimensions, SafeAreaView, ScrollView } from "react-native";
import { View, Text, Button, ButtonText } from "tamagui";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Foundation from "@expo/vector-icons/Foundation";
import { FontAwesome5 } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const FilterPageScreen = () => {
  const { height, width } = Dimensions.get("window");

  const { top, bottom } = useSafeAreaInsets();

  const [selectedGender, setSelectedGender] = useState<
    "Male" | "Female" | null
  >(null);
  const [distance, setDistance] = useState(20);
  const [ageRange, setAgeRange] = useState([18, 35]);

  const handleGenderSelection = (gender: "Male" | "Female") => {
    setSelectedGender(gender);
  };
  const handleAgeRangeChange = (values: number[]) => {
    setAgeRange(values);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.8)",
        position: "relative",
        justifyContent: "center",
      }}
    >
      <View
        onPress={() => router.back()}
        flex={1}
        position="absolute"
        top={0}
        right={0}
        left={0}
        bottom={0}
      >
        <View
          onPress={() => {}}
          mt={0}
          h={height * 0.94}
          top={top}
          bottom={bottom}
          position="absolute"
          width={"75%"}
          backgroundColor={"#FFF"}
          flex={1}
          borderTopRightRadius={30}
          borderBottomRightRadius={30}
        >
          <View
            marginTop={20}
            marginLeft={20}
            flexDirection="row"
            justifyContent="space-between"
          >
            <Feather name="menu" size={24} color="grey" />
            <Text
              marginRight={40}
              fontSize={16}
              fontWeight={600}
              lineHeight={20}
              fontFamily={"Mulish"}
              color={"grey"}
            >
              Filters
            </Text>
          </View>

          <Text
            fontFamily={"Mulish"}
            fontSize={14}
            fontWeight={600}
            paddingBottom={10}
            lineHeight={17}
            color={"#5E5E5E"}
            marginTop={30}
            marginLeft={20}
          >
            Gender
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: 110,
                height: 50,
                borderRadius: 10,
                borderWidth: 1,
                marginTop: 5,
                borderColor: selectedGender === "Male" ? "#DA498D" : "#ACACAC",
              }}
              onTouchEnd={() => handleGenderSelection("Male")}
            >
              <Foundation
                name="male-symbol"
                size={18}
                color={selectedGender === "Male" ? "#DA498D" : "#ACACAC"}
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: selectedGender === "Male" ? "#EF4765" : "#ACACAC",
                }}
              >
                Male
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: 110,
                height: 50,
                borderRadius: 10,
                borderWidth: 1,
                marginTop: 5,
                borderColor:
                  selectedGender === "Female" ? "#DA498D" : "#ACACAC",
              }}
              onTouchEnd={() => handleGenderSelection("Female")}
            >
              <MaterialIcons
                name="female"
                size={18}
                color={selectedGender === "Female" ? "#DA498D" : "#ACACAC"}
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: selectedGender === "Female" ? "#DA498D" : "#ACACAC",
                }}
              >
                Female
              </Text>
            </View>
          </View>

          <View
            flexDirection="row"
            marginTop={20}
            width={"85%"}
            height={50}
            borderWidth={1}
            borderRadius={10}
            borderColor={"#ACACAC"}
            alignSelf="center"
            justifyContent="flex-start"
            alignItems="center"
          >
            <View marginLeft={20} flexDirection="row">
              <FontAwesome5 name="map-marker-alt" size={14} color="#FF5C5C" />
              <Text
                marginLeft={10}
                fontSize={12}
                lineHeight={14}
                fontFamily={"Mulish"}
                color={"#5E5E5E"}
              >
                Jakarta, Indonesia
              </Text>
            </View>
          </View>

          <View marginTop={20} marginLeft={20}>
            <Text
              fontSize={14}
              fontWeight={600}
              lineHeight={17}
              fontFamily={"Mulish"}
              color={"#5E5E5E"}
            >
              Distance
            </Text>
            <View flexDirection="row" marginTop={10}>
              <Slider
                style={{ width: 210, height: 40 }}
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={distance}
                onValueChange={(value) => setDistance(value)}
                minimumTrackTintColor="#DA498D"
                maximumTrackTintColor="#ACACAC"
              />
              <Text
                marginLeft={20}
                marginTop={15}
                fontSize={10}
                fontFamily={"Mulish"}
                lineHeight={11}
                color={"#ACACAC"}
              >
                {" "}
                {distance} KM
              </Text>
            </View>
          </View>

          <View marginTop={20} marginLeft={20}>
            <Text
              fontFamily={"Mulish"}
              fontSize={14}
              fontWeight={600}
              paddingBottom={10}
              lineHeight={17}
              color={"#5E5E5E"}
            >
              Age Range
            </Text>

            <View flexDirection="row" alignItems="center" marginLeft={20}>
              <MultiSlider
                values={ageRange}
                sliderLength={width * 0.47}
                onValuesChange={handleAgeRangeChange}
                
                min={0}
                max={100}
                step={1}
                selectedStyle={{
                  backgroundColor: "#DA498D",
                  height: 4,
                }}
                unselectedStyle={{
                  backgroundColor: "#ACACAC",
                  height: 4,
                }}
                markerStyle={{
                  backgroundColor: "#FFF",
                  height: 25,
                  width: 25,
                  elevation:5
                }}
              />

              <Text
                fontSize={12}
                fontWeight={600}
                fontFamily={"Mulish"}
                marginLeft={10}
                lineHeight={11}
                color={"#ACACAC"}
              >
                {ageRange[0]} - {ageRange[1]} Yrs
              </Text>
            </View>
          </View>

          <View marginTop={40}>
            <Button
              backgroundColor={"#EF4765"}
              width={"80%"}
              alignSelf="center"
              height={50}
            >
              <ButtonText
                fontSize={14}
                fontWeight={700}
                fontFamily={"poppins"}
                lineHeight={17}
                color={"#FFF"}
              >
                Continue
              </ButtonText>
            </Button>
            <Button
              backgroundColor={"#FFF"}
              width={"80%"}
              alignSelf="center"
              marginTop={20}
              height={50}
              shadowColor={"black"}
              shadowOpacity={0.2}
              shadowRadius={2}
            >
              <ButtonText
                fontSize={14}
                fontWeight={700}
                fontFamily={"poppins"}
                lineHeight={17}
                color={"grey"}
              >
                Clear
              </ButtonText>
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterPageScreen;
