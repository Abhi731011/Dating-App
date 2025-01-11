import React from "react";
import { TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { View, Text, Button, ButtonText } from "tamagui";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

const LoginScreen = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="User Name"
        placeholderTextColor="#aaa"
      />

      <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderWidth={1}
        borderColor="#ddd"
        borderRadius={20}
        backgroundColor="#FFF"
        height={55}
        mb={20}
      >
        <TextInput
          secureTextEntry={!showCurrentPassword}
          value={currentPassword}
          onChangeText={setCurrentPassword}
          placeholder="Enter  Password"
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

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forget Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={()=>{
        router.navigate('/OtpScreen')
      }}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.facebookButtonText}>
      
          <FontAwesome name="facebook-official" size={20} color={"#FFF"} />{"  "}
          Sign up with Facebook
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.emailButton}>
        <Text style={styles.emailButtonText}>Sign up with Email</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.termsText}>Terms of use & Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    marginTop: 20,
  },
  inputPassword: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  eyeIcon: {
    fontSize: 20,
    color: "#666",
  },
  forgotPassword: {
    textAlign: "right",
    color: "#E91E63",
    fontSize: 14,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#FF007F",
    borderRadius: 20,
    paddingVertical: 15,
    marginBottom: 20,
    alignItems: "center",
    height:50
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    marginVertical: 10,
    marginBottom: 20,
  },
  facebookButton: {
    backgroundColor: "#3b5998",
    borderRadius: 20,
    paddingVertical: 15,
    marginBottom: 30,
    alignItems: "center",
      height:50
  },
  facebookButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  emailButton: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
    height:50
  },
  emailButtonText: {
    color: "#666",
    fontSize: 16,
  },
  termsText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  footer: {
    position: "absolute",
    bottom: "5%",
    alignSelf: "center",
  },
});

export default LoginScreen;
