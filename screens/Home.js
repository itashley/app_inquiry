import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import AVA from '../assets/ava.jpg';
import AVA2 from '../assets/ava2.jpg';
import AVA3 from '../assets/ava3.jpg';
import LOGO from '../assets/logo.png'; // Replace with your local image path
import BACKGROUND from '../assets/bg/home.jpg'; // Replace with your background image path
import Swiper from 'react-native-swiper';
import IMAGE1 from '../assets/image1.jpg'; // Replace with your first swiper image path
import IMAGE2 from '../assets/image1.jpg'; // Replace with your second swiper image path
import IMAGE3 from '../assets/image1.jpg'; // Replace with your third swiper image path
// Prevent the splash screen from auto-hiding

// SplashScreen.preventAutoHideAsync();

// Function to load fonts
const fetchFonts = () => {
  return Font.loadAsync({
    'roboto': require('../assets/fonts/Roboto-Medium.ttf'),
  });
};

const Home = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);
  const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const loadFont = async () => {
      await fetchFonts();
      setFontLoaded(true);
      await SplashScreen.hideAsync();
    };
    loadFont();
  }, []);

  // Function to remove token
  const doLogout = async () => {
    // console.log('asd');
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.navigate('Welcome')
      // Alert.alert('Logout', 'Token successfully removed!');
    } catch (e) {
      console.error('Failed to remove the token:', e);
      Alert.alert('Logout', 'Failed to remove the token.');
    }
  };

  if (!fontLoaded) {
    return null; // Return null until the font is loaded
  }

  return (
    <ImageBackground source={BACKGROUND} resizeMode="cover" style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Hi Ryan</Text>
            <Text style={styles.subtitle}>6 Tasks are pending</Text>
            <Image source={AVA} style={styles.avatar} />
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Sales & Marketing</Text>
            <Text style={styles.cardSubtitle}>Teams</Text>
            <View style={styles.avatarContainer}>
              <Image source={AVA2} style={styles.smallAvatar} />
              <Image source={AVA3} style={styles.smallAvatar} />
            </View>
            <Text style={styles.cardTime}>{timestamp}</Text>
          </View>

          {/* SLIDER/SWIPER */}
          {/* <Swiper style={styles.wrapper}> */}
            <View style={styles.card1}>
            
                <Image source={AVA} style={styles.thumbnail} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>Card Title</Text>
                  <Text style={styles.cardSubtitle}>Card Subtitle</Text>
                  <Text style={styles.cardText}>This is some sample text for the card. It can be a brief description or any other information that fits in the card layout.</Text>
                </View>
              
            </View>
           
          {/* </Swiper> */}

          <Text style={styles.sectionTitle}>Monthly Review</Text>

          <View style={styles.grid}>
            <TouchableOpacity style={styles.gridItem1} onPress={()=>doLogout()}>
              <Text style={styles.gridItemNumber}>22</Text>
              <Text style={styles.gridItemLabel}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem2}>
              <Text style={styles.gridItemNumber}>7</Text>
              <Text style={styles.gridItemLabel}>In progress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem3}>
              <Text style={styles.gridItemNumber}>10</Text>
              <Text style={styles.gridItemLabel}>Ongoing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gridItem4}>
              <Text style={styles.gridItemNumber}>12</Text>
              <Text style={styles.gridItemLabel}>Waiting for Review</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    // flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: 20,
    position: 'relative',
  },
  title: {
    fontFamily: 'roboto',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontFamily: 'roboto',
    fontSize: 16,
    color: '#9e9ef7',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  card1: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    height: 200,
  },
  card: {
    width: '100%',
    backgroundColor: '#973E96',
    borderRadius: 15,
    padding: 20,
    height: 'auto',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  thumbnail: {
    width: '100%',
    height: 80,
  },
  cardContent: {
    padding: 5,
  },
  cardTitle: {
    fontFamily: 'roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontFamily: 'roboto',
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  smallAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  cardTime: {
    fontFamily: 'roboto',
    fontSize: 12,
    color: '#fff',
    textAlign: 'right',
  },
  sectionTitle: {
    marginTop:20,
    fontFamily: 'roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9e9ef7',
    marginBottom: 10,
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem1: {
    width: '48%',
    backgroundColor: 'rgba(830, 514, 127, 0.5)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  gridItem2: {
    width: '48%',
    backgroundColor: 'rgba(620, 64, 16, 0.5)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  gridItem3: {
    width: '48%',
    backgroundColor: 'rgba(60, 64, 107, 0.5)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  gridItem4: {
    width: '48%',
    backgroundColor: 'rgba(610, 64, 167, 0.5)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  gridItemNumber: {
    fontFamily: 'roboto',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  gridItemLabel: {
    fontFamily: 'roboto',
    fontSize: 12,
    color: '#fff',
  },
  wrapper: {
    height: 160, // Adjust the height as needed
    marginLeft: 25,
    marginRight: 25,
    
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperImage: {
    width: '100%',
    height: 300,
    // resizeMode: 'cover',
  },
});

export default Home;
