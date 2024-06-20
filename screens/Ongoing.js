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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { Divider } from "react-native-paper";

import AVA1 from "../assets/ava.jpg";
import AVA2 from "../assets/ava2.jpg";
import AVA3 from "../assets/ava3.jpg";
import LOGO from "../assets/logo.png"; // Replace with your local image path
import BACKGROUND from "../assets/bg/home.jpg"; // Replace with your background image path
import CAT1 from "../assets/images/rings.png";
import CAT2 from "../assets/images/meeting.png";
import CAT3 from "../assets/images/roomrate.png";
import MAP from "../assets/images/map-bold.png";
import DATE from "../assets/images/calendar.png";
// Prevent the splash screen from auto-hiding

// SplashScreen.preventAutoHideAsync();

// Function to load fonts
const fetchFonts = () => {
  return Font.loadAsync({
    roboto: require("../assets/fonts/Roboto-Medium.ttf"),
  });
};

const { width, height } = Dimensions.get("window");

const Ongoing = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);

  const inquiries = [
    {
      id: 1,
      date: "Thursday, 13/06/2024",
      hotel: "Ashley Wahid Hasyim",
      department: "Sales",
      category: "Wedding",
      time: "12.00 PM",
      subject: "Request 1 for Customized Wedding Menu and Decorations",
      desc: "The guests are planning a wedding reception at our hotel and request a customized menu tailored to their dietary preferences. Please provide options for appetizers, main courses, and desserts, including vegetarian and gluten-free choices.",
      guestName: "Rafid Ammar",
      guestEmail: "rafid.adinegoro@gmail.com",
      guestPhone: "082210478147",
      status: "1",
      startTime: "12.24 PM",
      expectedTime: "15.00 PM",
      finishedTime: "14.15 PM",
      messenger: "Hana",
    },
    {
      id: 2,
      date: "Thursday, 13/06/2024",
      hotel: "Ashley Tanah Abang",
      department: "Sales",
      category: "Meeting",
      time: "12.00 PM",
      subject: "Request 2 for Customized Meeting and Snack",
      desc: "The guests are planning a wedding reception at our hotel and request a customized menu tailored to their dietary preferences. Please provide options for appetizers, main courses, and desserts, including vegetarian and gluten-free choices.",
      guestName: "Rafid Ammar",
      guestEmail: "rafid.adinegoro@gmail.com",
      guestPhone: "082210478147",
      status: "0",
      startTime: "12.24 PM",
      expectedTime: "15.00 PM",
      finishedTime: "14.15 PM",
      messenger: "Ryan",
    },
    {
      id: 3,
      date: "Thursday, 13/06/2024",
      hotel: "Ashley Sabang",
      department: "Sales",
      category: "Room Rate",
      time: "12.00 PM",
      subject: "Request 3 for Customized Room Rate",
      desc: "The guests are planning a wedding reception at our hotel and request a customized menu tailored to their dietary preferences. Please provide options for appetizers, main courses, and desserts, including vegetarian and gluten-free choices.",
      guestName: "Rafid Ammar",
      guestEmail: "rafid.adinegoro@gmail.com",
      guestPhone: "082210478147",
      status: "1",
      startTime: "12.24 PM",
      expectedTime: "15.00 PM",
      finishedTime: "14.15 PM",
      messenger: "Joko",
    },
    {
      id: 4,
      date: "Thursday, 13/06/2024",
      hotel: "Ashley Wahid Hasyim",
      department: "Sales",
      category: "Wedding",
      time: "12.00 PM",
      subject: "Request 4 for Customized Wedding Menu and Decorations",
      desc: "The guests are planning a wedding reception at our hotel and request a customized menu tailored to their dietary preferences. Please provide options for appetizers, main courses, and desserts, including vegetarian and gluten-free choices.",
      guestName: "Rafid Ammar",
      guestEmail: "rafid.adinegoro@gmail.com",
      guestPhone: "082210478147",
      status: "0",
      startTime: "12.24 PM",
      expectedTime: "15.00 PM",
      finishedTime: "14.15 PM",
      messenger: "Hana",
    },
  ];

  const getStyleForCategory = (category) => {
    switch (category) {
      case "Wedding":
        return styles.slide1;
      case "Meeting":
        return styles.slide2;
      case "Room Rate":
        return styles.slide3;
      default:
        return styles.slide1; // Default to slide1 style if category doesn't match
    }
  };

  const getIconForCategory = (category) => {
    switch (category) {
      case "Wedding":
        return CAT1;
      case "Meeting":
        return CAT2;
      case "Room Rate":
        return CAT3;
      default:
        return CAT1; // Default to CAT1 image if category doesn't match
    }
  };

  const getIconStyleForCategory = (category) => {
    switch (category) {
      case "Wedding":
        return styles.icon1;
      case "Meeting":
        return styles.icon2;
      case "Room Rate":
        return styles.icon3;
      default:
        return styles.icon1; // Default to icon1 style if category doesn't match
    }
  };

  const getAvaForMessanger = (messanger) => {
    switch (messanger) {
      case "Ryan":
        return AVA1;
      case "Joko":
        return AVA2;
      case "Hana":
        return AVA3;
      default:
        return AVA1; // Default to CAT1 image if category doesn't match
    }
  };

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
          {inquiries.map((inquiry) => (
            <TouchableOpacity
              key={inquiry.id}
              style={getStyleForCategory(inquiry.category)}
              onPress={() => navigation.navigate("DetailOngoing", { inquiry })}
            >
              <View style={styles.inquiryCard}>
                <View style={styles.cardWrapper}>
                  <View style={styles.headerWrapper}>
                    <Image
                      source={getIconForCategory(inquiry.category)}
                      style={getIconStyleForCategory(inquiry.category)}
                    />
                    <Text style={styles.expectedTime}>
                      Expected: {inquiry.expectedTime}
                    </Text>
                  </View>
                  <Text style={styles.titleText}>{inquiry.subject}</Text>
                  <View style={styles.locationWrapper}>
                    <Image source={MAP} style={styles.iconLocation} />
                    <Text style={styles.locationText}>{inquiry.hotel}</Text>
                  </View>
                  <View style={styles.dateWrapper}>
                    <Image source={DATE} style={styles.iconLocation} />
                    <Text style={styles.dateText}>{inquiry.date}</Text>
                  </View>
                  <View style={styles.timeWrapper}>
                    <Text style={styles.timeLabelText}>Time Remaining:</Text>
                    <Text style={styles.actualTimeText}>
                      2 hours 18 minutes
                    </Text>
                  </View>
                </View>

                <View style={styles.messengerWrapper}>
                  <Text style={styles.messengerNameText}>Messenger</Text>
                  <Image
                    source={getAvaForMessanger(inquiry.messenger)}
                    style={styles.messengerAva}
                  />
                  <Text style={styles.messengerNameText}>
                    {inquiry.messenger}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    paddingBottom: 70,
  },
  scrollContainer: {
    flexGrow: 1,
    marginTop: 16,
    alignItems: "center",
    //justifyContent: "center",
    //marginBottom: 60,
    paddingBottom: 25,
  },
  container: {
    width: "90%",
    marginTop: 12,
    //width: "100%",
    //alignItems: "center",
  },
  title: {
    fontFamily: "roboto",
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    marginBottom: 25,
    marginLeft: 7,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F84F96",
    borderRadius: 10,
    padding: 1,
    paddingLeft: 5,
    marginBottom: 30,
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#627BFF",
    borderRadius: 10,
    padding: 1,
    paddingLeft: 5,
    marginBottom: 30,
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00FE75",
    borderRadius: 10,
    padding: 1,
    paddingLeft: 5,
    marginBottom: 30,
  },
  inquiryCard: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    //padding: 20,
    backgroundColor: "#fdfdfd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cardWrapper: {
    width: "72%",
    padding: 10,
    paddingLeft: 15,
    marginBottom: 5,
    paddingRight: 15,
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon1: {
    width: 20,
    height: 20,
    marginRight: 6,
    tintColor: "#F84F96",
  },
  icon2: {
    width: 20,
    height: 20,
    marginRight: 6,
    tintColor: "#627BFF",
  },
  icon3: {
    width: 20,
    height: 20,
    marginRight: 6,
    tintColor: "#00FE75",
  },
  expectedTime: {
    fontSize: 14,
    color: "#888",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  iconLocation: {
    width: 15,
    height: 15,
    tintColor: "#8F8F8F",
  },
  locationText: {
    marginLeft: 6,
    fontSize: 13,
    color: "#8F8F8F",
  },
  dateWrapper: {
    flexDirection: "row",
    marginTop: 0,
    marginBottom: 8,
  },
  timeWrapper: {
    flexDirection: "row",
    marginTop: 0,
  },
  timeLabelText: {
    fontSize: 12,
    color: "#888",
  },
  dateText: {
    marginLeft: 6,
    fontSize: 13,
    color: "#8F8F8F",
  },
  actualTimeText: {
    marginLeft: 5,
    fontSize: 12,
    color: "#ff0000",
  },
  messengerWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    //marginTop: 24,
  },
  messengerAva: {
    width: 70,
    height: 70,
    marginVertical: 10,
  },
  messengerNameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "#000",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
});

export default Ongoing;
