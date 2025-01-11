import React, { useState } from "react";
import { TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { View, Text } from "tamagui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Router, router } from "expo-router";

const SignupScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.subtitle}>Create account to continue</Text>

      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#aaa"
        keyboardType="email-address"
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
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#aaa"
          style={{
            flex: 1,
            paddingLeft: 15,
            fontSize: 16,
          }}
        />
        <MaterialCommunityIcons
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          color="#aaa"
          onPress={() => setShowPassword(!showPassword)}
          style={{ marginRight: 10 }}
        />
      </View>

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

      <TouchableOpacity style={styles.signupButton} onPress={()=>{
        router.navigate('/(auth)/LoginScreen')
      }}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View alignSelf="center" mt={20}>
      <Text textAlign="center" fontSize={15} lineHeight={24} color={'grey'} width={250}>
        by Sign Up you agree with our <Text color={'#FF007F'} fontWeight={500}>terms</Text> &{' '}
        <Text color={'#FF007F'} fontWeight={500}>condition of use</Text>
      </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.termsText}>
          Already have an account?{" "}
          <TouchableOpacity
            onPress={() => {
              router.navigate("/LoginScreen");
            }}
          >
            <Text color={"#E91E63"} fontSize={13}>
              Login
            </Text>
          </TouchableOpacity>
        </Text>
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
    marginBottom: 40,
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  signupButton: {
    backgroundColor: "#FF007F",
    borderRadius: 20,
    paddingVertical: 15,
    marginTop: 20,
    alignItems: "center",
    height:50
  },
  signupButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
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

export default SignupScreen;
