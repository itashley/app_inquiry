import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import bg1 from '../assets/bg/home.jpg'; // Ensure this path is correct
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../axiosConfig'; // Import the configured Axios instance

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === '' || password === '') {  
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      const res = await axiosInstance.post('/api/login', {
        email,
        password,
      });
      // console.log(res.data);
      // Validate response
      if (res.data.status === 200) {
        await AsyncStorage.setItem('userToken', res.data.token);
        await AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        navigation.navigate('Home');
      } else {
        Alert.alert('Login Failed', res.data.message);
        alert('Login Failed', res.data.message)
      }
    } catch (error) {
      //   console.error('Error during login:', error);
      Alert.alert('Login Error', 'An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg1} style={styles.backgroundImage} resizeMode="cover">
        <View style={styles.content}>
          <Text style={styles.title}>Sign in</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#666"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#666"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View style={styles.rememberMeContainer}>
            <Text style={styles.rememberMeText}>Remember Me</Text>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.signupTextContainer}>
            <Text style={styles.signupText}>Don't have an Account?</Text>
            <TouchableOpacity>
              <Text style={styles.signupLinkText}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: To make content stand out
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#7464F9',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#7464F9',
    color: "#7464F9",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  rememberMeText: {
    fontSize: 14,
  },
  forgotPasswordText: {
    color: '#7464F9',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#7464F9',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signupTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 14,
  },
  signupLinkText: {
    color: '#7464F9',
    fontSize: 14,
  },
});

export default Login;
