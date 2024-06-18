import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { Divider } from "react-native-paper";

import AVA from "../assets/ava.jpg";
import AVA2 from "../assets/ava2.jpg";
import AVA3 from "../assets/ava3.jpg";
import LOGO from "../assets/logo.png"; // Replace with your local image path
import BACKGROUND from "../assets/bg/home.jpg"; // Replace with your background image path
import RING from "../assets/images/rings.png";
import MAP from "../assets/images/map-bold.png";
import IMAGE1 from "../assets/image1.jpg"; // Replace with your first swiper image path
import IMAGE2 from "../assets/image1.jpg"; // Replace with your second swiper image path
import IMAGE3 from "../assets/image1.jpg"; // Replace with your third swiper image path
// Prevent the splash screen from auto-hiding

// SplashScreen.preventAutoHideAsync();

// Function to load fonts
const fetchFonts = () => {
  return Font.loadAsync({
    roboto: require("../assets/fonts/Roboto-Medium.ttf"),
  });
};

const { width, height } = Dimensions.get("window");

const Detail = () => {
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
      await AsyncStorage.removeItem("userToken");
      navigation.navigate("Welcome");
      // Alert.alert('Logout', 'Token successfully removed!');
    } catch (e) {
      console.error("Failed to remove the token:", e);
      Alert.alert("Logout", "Failed to remove the token.");
    }
  };

  if (!fontLoaded) {
    return null; // Return null until the font is loaded
  }

  return (
    <ImageBackground
      source={BACKGROUND}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* <Text style={styles.title}>Detail</Text> */}
          <View style={styles.formContainer}>
            <View style={styles.formCard}>
              <Text style={styles.formTitle}>Guest Inquiry Form</Text>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Date :</Text>
                <Text style={styles.input}>Thursday, 13/06/2024</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Hotel :</Text>
                <Text style={styles.input}>Ashley Wahid Hasyim</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Department :</Text>
                <Text style={styles.input}>Sales</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Category :</Text>
                <Text style={styles.input}>Wedding</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Subject :</Text>
                <Text style={styles.input}>
                  Request for Customized Wedding Menu
                </Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Detail :</Text>
                <TextInput
                  style={[styles.inputArea, styles.textArea]}
                  value="The guests are planning a wedding reception at our hotel and request a customized menu tailored to their dietary preferences. Please provide options for appetizers, main courses, and desserts, including vegetarian and gluten-free choices."
                  editable={false}
                  multiline
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Guest Name :</Text>
                <Text style={styles.input}>Rafid Ammar</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Email :</Text>
                <Text style={styles.input}>rafid.adinegoro@gmail.com</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Phone Number :</Text>
                <Text style={styles.input}>082210478147</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Expected Time :</Text>
                <Text style={styles.input}>15.00 PM</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Time Remaining :</Text>
                <Text style={styles.input}>2 Hours 27 Minutes</Text>
              </View>

              <TouchableOpacity
                style={styles.buttonResponse}
                onPress={() => navigation.navigate("MyTaskStack")}
              >
                <Text style={styles.textResponse}>Response</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    //paddingBottom: 70,
  },
  scrollContainer: {
    flexGrow: 1,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
    paddingBottom: 55,
  },
  container: {
    width: "100%",
    //width: "100%",
    //alignItems: "center",
  },
  title: {
    fontFamily: "roboto",
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    marginBottom: 20,
    marginLeft: 25,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
    //backgroundColor: "#F84F96",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  formCard: {
    width: "100%",
    backgroundColor: "#fafafa",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 0,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    height: 40,
  },
  inputArea: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    height: 40,
    marginRight: 3,
  },
  textArea: {
    height: 128,
    marginBottom: 18,
  },
  buttonResponse: {
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 30,
    backgroundColor: "#FFC807",
    padding: 10,
  },
  textResponse: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Detail;
