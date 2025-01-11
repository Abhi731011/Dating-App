import { View, Text, Button, ButtonText } from "tamagui";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

const OtpScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.infoText}>
          Please enter the 4-digit OTP sent to{" "}
          <Text style={styles.highlight}>+62812-0101-0101</Text>
        </Text>
      </View>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => handleOtpChange(value, index)}
          />
        ))}
      </View>

      <Text style={styles.warningText}>Don't tell anyone the code</Text>
      <Text style={styles.expiryText}>Expiring in 04:59</Text>

      <Button pressStyle={styles.resendPressStyle} style={styles.resendButton}>
        <ButtonText style={styles.resendButtonText}>RESEND OTP</ButtonText>
      </Button>

      <Button
        pressStyle={styles.acceptPressStyle}
        style={styles.acceptButton}
        onPress={() => router.push("/(auth)/EnterPersonalDetailScreen")}
      >
        <ButtonText style={styles.acceptButtonText}>Accept</ButtonText>
      </Button>

      <Text style={styles.footerText}>Terms of Use & Privacy Policy</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: 10,
    width: "60%",
    alignSelf: "center",
   
  },
  infoText: {
    textAlign: "center",
    fontSize: 14,
    color: "grey",
    fontFamily: "Mulish",
    lineHeight: 20,
  },
  highlight: {
    color: "#EF4765",
    fontWeight: "bold",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    width: "80%",
    alignSelf: "center",
  },
  otpInput: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "grey",
    fontSize: 24,
    textAlign: "center",
    color: "#000",
  },
  warningText: {
    textAlign: "center",
    color: "grey",
    fontSize: 14,
    marginTop: 20,
    fontFamily: "Mulish",
  },
  expiryText: {
    textAlign: "center",
    color: "grey",
    fontSize: 14,
    marginTop: 5,
    fontFamily: "Mulish",
  },
  resendButton: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor:'#FFF'
  },
  resendPressStyle: {
    opacity: 0.7,
  },
  resendButtonText: {
    color: "#EF4765",
    fontWeight: "600",
    fontSize: 12,
  },
  acceptButton: {
    backgroundColor: '#FF007F',
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 30,
  },
  acceptPressStyle: {
    opacity: 0.8,
  },
  acceptButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerText: {
    textAlign: "center",
    color: "grey",
    fontSize: 12,
    paddingBottom: 20,
    marginTop: "auto",
    fontFamily: "Mulish",
  },
});

export default OtpScreen;
