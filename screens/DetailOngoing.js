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
import { useNavigation, useRoute } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { Divider } from "react-native-paper";

import LOGO from "../assets/logo.png"; // Replace with your local image path
import BACKGROUND from "../assets/bg/home.jpg"; // Replace with your background image path

// Prevent the splash screen from auto-hiding

// SplashScreen.preventAutoHideAsync();

// Function to load fonts
const fetchFonts = () => {
  return Font.loadAsync({
    roboto: require("../assets/fonts/Roboto-Medium.ttf"),
  });
};

const { width, height } = Dimensions.get("window");

const DetailOngoing = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);
  const route = useRoute();

  const { inquiry } = route.params;

  useEffect(() => {
    const loadFont = async () => {
      await fetchFonts();
      setFontLoaded(true);
      await SplashScreen.hideAsync();
    };
    loadFont();
  }, []);

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
          <View style={styles.formContainer}>
            <View style={styles.formCard}>
              <Text style={styles.formTitle}>Guest Inquiry Form</Text>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Messanger :</Text>
                <Text style={styles.input}>{inquiry.messenger}</Text>
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Date :</Text>
                <Text style={styles.input}>{inquiry.date}</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Hotel :</Text>
                <Text style={styles.input}>{inquiry.hotel}</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Department :</Text>
                <Text style={styles.input}>{inquiry.department}</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Category :</Text>
                <Text style={styles.input}>{inquiry.category}</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Subject :</Text>
                <Text style={styles.input}>{inquiry.subject}</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Detail :</Text>
                <TextInput
                  style={[styles.inputArea, styles.textArea]}
                  value={inquiry.desc}
                  editable={false}
                  multiline
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Guest Name :</Text>
                <Text style={styles.input}>{inquiry.guestName}</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Email :</Text>
                <Text style={styles.input}>{inquiry.guestEmail}</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Phone Number :</Text>
                <Text style={styles.input}>{inquiry.guestPhone}</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Expected Time :</Text>
                <Text style={styles.input}>{inquiry.expectedTime}</Text>
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Time Remaining :</Text>
                <Text style={styles.inputRed}>2 Hours 27 Minutes</Text>
              </View>

              {/* <TouchableOpacity
                style={styles.buttonResponse}
                onPress={() => navigation.navigate("MyTaskStack")}
              >
                <Text style={styles.textResponse}>Response</Text>
              </TouchableOpacity> */}
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
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
    //marginBottom: 60,
    //paddingBottom: 55,
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
    paddingBottom: 30,
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
  inputRed: {
    color: "#FF0000",
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
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: "#FFC807",
    padding: 12,
  },
  textResponse: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DetailOngoing;
