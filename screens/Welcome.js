import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import LOGO from '../assets/logo.png';

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto': require('../assets/fonts/Roboto-Medium.ttf'),
  });
};

// Prevent the splash screen from auto-hiding
// SplashScreen.preventAutoHideAsync();
const Welcome = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const loadFont = async () => {
      await fetchFonts();
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  if (!fontLoaded) {
    return null;
  }

  return (
    <LinearGradient colors={['#3d31af', '#7464F9', '#7464F9']} style={styles.gradient}>
      <View style={styles.container}>
        <Image
          source={LOGO}
          style={styles.logo}
          resizeMode="contain"
          onError={(e) => console.log(e.nativeEvent.error)}
        />
        <Text style={styles.title}>Manage your daily tasks</Text>
        <Text style={styles.subtitle}>Team and Project management with solution providing App</Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 11,
  },
  logo: {
    width: 280,
    height: 260,
    marginBottom: 30,
    marginTop: '20%',
  },
  title: {
    fontFamily: 'roboto',
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'justify',
    marginBottom: 10,
    lineHeight: 66,
    letterSpacing: -4,
    textShadowColor: '#fff',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontFamily: 'roboto',
    fontSize: 14,
    color: '#333',
    textAlign: 'justify',
    paddingVertical: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    fontFamily: 'roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Welcome;
