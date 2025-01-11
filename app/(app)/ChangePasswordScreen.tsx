import React, { useState } from "react";
import { SafeAreaView, ScrollView, TextInput,Platform } from "react-native";
import { View, Text, Button, ButtonText } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View w="90%" alignSelf="center" mt={30} style={{paddingTop: Platform.OS === "android" ? '20%' : 0,}}>
          

        
          <Text fontSize={14} color="#5E5E5E" mb={10}>
            Current Password
          </Text>
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            borderWidth={1}
            borderColor="grey"
            borderRadius={10}
            backgroundColor="#FFF"
            height={55}
            mb={20}
           >
            <TextInput
              secureTextEntry={!showCurrentPassword}
              value={currentPassword}
              onChangeText={setCurrentPassword}
              placeholder="Enter Current Password"
              placeholderTextColor="#aaa"
              style={{
                flex: 1,
                paddingLeft: 15,
                fontSize: 16,
              }}
            />
            <MaterialCommunityIcons
              name={showCurrentPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              onPress={() => setShowCurrentPassword(!showCurrentPassword)}
              style={{ marginRight: 10 }}
            />
          </View>

      
          <Text fontSize={14} color="#5E5E5E" mb={10}>
            New Password
          </Text>
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            borderWidth={1}
            borderColor="grey"
            borderRadius={10}
            backgroundColor="#FFF"
            height={55}
            mb={20}
          >
            <TextInput
              secureTextEntry={!showNewPassword}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Enter New Password"
              placeholderTextColor="#aaa"
              style={{
                flex: 1,
                paddingLeft: 15,
                fontSize: 16,
              }}
            />
            <MaterialCommunityIcons
              name={showNewPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              onPress={() => setShowNewPassword(!showNewPassword)}
              style={{ marginRight: 10 }}
            />
          </View>

      
          <Text fontSize={14} color="#5E5E5E" mb={10}>
            Confirm New Password
          </Text>
          <View
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            borderWidth={1}
            borderColor="grey"
            borderRadius={10}
            backgroundColor="#FFF"
            height={55}
          >
            <TextInput
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor="#aaa"
              style={{
                flex: 1,
                paddingLeft: 15,
                fontSize: 16,
              }}
            />
            <MaterialCommunityIcons
              name={showConfirmPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{ marginRight: 10 }}
            />
          </View>

        
          <Button
            bg="#EF4765"
            pressStyle={{ backgroundColor: "#E63946", opacity: 0.7 }}
            height={55}
            mt={30}
            borderRadius={10}
            justifyContent="center"
            alignItems="center"
          >
            <ButtonText color="white" fontWeight="600" fontSize={16}>
              Save
            </ButtonText>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
