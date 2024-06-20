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
import { Picker } from "@react-native-picker/picker";

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

const feedbackOptions = ["Positive", "Negative"];
const intentionOptions = [
  "Business Potential",
  "Personal Connection",
  "Networking Opportunity",
];
const resultOptions = [
  "Confirm Booking",
  "Follow-Up Meeting",
  "No Further Action Needed",
];

const { width, height } = Dimensions.get("window");

const DetailFinished = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);
  const route = useRoute();

  const { inquiry } = route.params;

  const [feedback, setFeedback] = useState(feedbackOptions[0]);
  const [intention, setIntention] = useState(intentionOptions[0]);
  const [result, setResult] = useState(resultOptions[0]);

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
          {/* <Text style={styles.title}>Detail</Text> */}
          <View style={styles.formContainer}>
            <View style={styles.formCard}>
              <Text style={styles.formTitle}>Result Inquiry Form</Text>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Messenger :</Text>
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
                <Text style={styles.label}>Actual Time :</Text>
                <Text style={styles.inputGreen}>14.15 PM</Text>
              </View>

              {inquiry.status == "1" && (
                <View>
                  <Divider />
                  <Divider />
                  <Divider />
                  <Divider />
                  <Text style={styles.formTitle2}>Follow-Up</Text>
                  <View style={styles.formGroup}>
                    <Text style={styles.boldlabel}>Guest Feedback:</Text>
                    <Picker
                      style={styles.picker}
                      selectedValue={feedback}
                      onValueChange={(itemValue) => setFeedback(itemValue)}
                    >
                      {feedbackOptions.map((option, index) => (
                        <Picker.Item
                          key={index}
                          label={option}
                          value={option}
                        />
                      ))}
                    </Picker>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.boldlabel}>Guest Intention:</Text>
                    <Picker
                      style={styles.picker}
                      selectedValue={intention}
                      onValueChange={(itemValue) => setIntention(itemValue)}
                    >
                      {intentionOptions.map((option, index) => (
                        <Picker.Item
                          key={index}
                          label={option}
                          value={option}
                        />
                      ))}
                    </Picker>
                  </View>
                  <View style={styles.formGroup}>
                    <Text style={styles.boldlabel}>Guest Result:</Text>
                    <Picker
                      style={styles.picker}
                      selectedValue={result}
                      onValueChange={(itemValue) => setResult(itemValue)}
                    >
                      {resultOptions.map((option, index) => (
                        <Picker.Item
                          key={index}
                          label={option}
                          value={option}
                        />
                      ))}
                    </Picker>
                  </View>
                </View>
              )}
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
    paddingBottom: 50,
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
  formTitle2: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25,
    marginTop: 20,
    textAlign: "left",
  },
  formGroup: {
    marginBottom: 0,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  boldlabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
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
  inputGreen: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
    height: 40,
  },
  inputArea: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    height: 50,
    marginRight: 3,
  },
  inputAreaInput: {
    color: "#000",
    fontSize: 18,
    fontWeight: "400",
    height: 128,
    marginRight: 3,
    textAlign: "left",
    padding: 10,
  },
  textArea: {
    height: 128,
    marginBottom: 18,
  },
  textAreaInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    height: 120,
  },
  doubleButton: {
    marginTop: 25,
    marginBottom: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonFollowUp: {
    borderRadius: 8,
    backgroundColor: "#FFC807",
    padding: 12,
    width: "45%",
  },
  buttonSubmit: {
    borderRadius: 8,
    backgroundColor: "#00E833",
    padding: 12,
    width: "45%",
  },
  textResponse: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  picker: {
    height: 30,
    color: "#000", // Text color
    backgroundColor: "#f0f0f0", // Background color

    fontSize: 18, // Font size
    marginBottom: 30,
  },
});

export default DetailFinished;
