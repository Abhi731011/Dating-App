import { router } from 'expo-router';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const Onboarding = () => {
  return (
    <ImageBackground
      source={require('@/assets/images/Onboard.jpg')} // Your background image path
      style={styles.backgroundImage}
    >
      {/* Add a semi-transparent overlay */}
      <View style={styles.overlay} />

      <View style={styles.container}>
        <Text style={styles.title}>Find your Perfect match Today</Text>
        
      </View>
      <View style={styles.footer}>
      <TouchableOpacity style={styles.loginButton} onPress={()=>{
        router.navigate('/LoginScreen')
      }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={()=>{
            router.navigate('/SignupScreen')
        }}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(255, 192, 203, 0.5)', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop:'20%'

  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 40,
    lineHeight: 60,
    alignSelf:'flex-start',
    width:300,
    
  },
  footer:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    bottom:'10%'
  },
  loginButton: {
    backgroundColor: '#FF007F', 
    width: '80%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
 
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: '#FFFFFF', 
    width: '80%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  signupText: {
    color: '#FF007F',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Onboarding;
