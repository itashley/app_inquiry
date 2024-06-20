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
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import { Divider } from "react-native-paper";

import AVA from "../assets/ava.jpg";
import AVA2 from "../assets/ava2.jpg";
import AVA3 from "../assets/ava3.jpg";
import LOGO from "../assets/logo.png"; // Replace with your local image path
import BACKGROUND from "../assets/bg/home.jpg"; // Replace with your background image path
import CAT1 from "../assets/images/rings.png";
import CAT2 from "../assets/images/meeting.png";
import CAT3 from "../assets/images/roomrate.png";
import MAP from "../assets/images/map-bold.png";

// SplashScreen.preventAutoHideAsync();

// Function to load fonts
const fetchFonts = () => {
  return Font.loadAsync({
    roboto: require("../assets/fonts/Roboto-Medium.ttf"),
  });
};

const { width, height } = Dimensions.get("window");

const Finished = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);
  const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString());
  const [filter, setFilter] = useState("All");

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
      descFollowUp: "Custom Menu : 1. Snack, 2. Coffee",
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
      descFollowUp: "Custom Menu : 1. Snack, 2. Coffee",
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
      descFollowUp: "Custom Menu : 1. Snack, 2. Coffee",
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
      descFollowUp: "Custom Menu : 1. Snack, 2. Coffee",
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

  const filteredInquiries = inquiries.filter(
    (inquiry) => filter === "All" || inquiry.status === filter.toLowerCase()
  );

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
      <View style={styles.containerBackground}>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[
              filter === "All"
                ? styles.activeFilterButton
                : styles.filterButton,
              styles.allButton,
            ]}
            onPress={() => setFilter("All")}
          >
            <Text
              style={
                filter === "All"
                  ? styles.activeFilterButtonText
                  : styles.filterButtonText
              }
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              filter === "1" ? styles.activeSuccessButton : styles.filterButton,
            ]}
            onPress={() => setFilter("1")}
          >
            <Text
              style={
                filter === "1"
                  ? styles.activeFilterButtonText
                  : styles.filterButtonText
              }
            >
              Success
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              filter === "0" ? styles.activeFailedButton : styles.filterButton,
              styles.failedButton,
            ]}
            onPress={() => setFilter("0")}
          >
            <Text
              style={
                filter === "0"
                  ? styles.activeFilterButtonText
                  : styles.filterButtonText
              }
            >
              Failed
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {filteredInquiries.map((inquiry) => (
            <TouchableOpacity
              key={inquiry.id}
              style={getStyleForCategory(inquiry.category)}
              onPress={() => navigation.navigate("DetailFinished", { inquiry })}
            >
              <View style={styles.inquiryCard}>
                <View style={styles.cardWrapper}>
                  <View style={styles.headerWrapper}>
                    <Image
                      source={getIconForCategory(inquiry.category)}
                      style={getIconStyleForCategory(inquiry.category)}
                    />
                    <View style={styles.statusWrapper}>
                      <Text style={styles.statusLabelText}>Status :</Text>
                      <Text
                        style={
                          inquiry.status === "0"
                            ? styles.statusTextFailed
                            : styles.statusTextSuccess
                        }
                      >
                        {inquiry.status === "0" ? "Failed" : "Success"}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.titleText}>{inquiry.subject}</Text>
                  <View style={styles.infoWrapper}>
                    <View style={styles.locationWrapper}>
                      <Image source={MAP} style={styles.iconLocation} />
                      <Text style={styles.locationText}>{inquiry.hotel}</Text>
                    </View>
                    <Text style={styles.dateText}>{inquiry.date}</Text>
                  </View>
                  <Divider />
                  <View style={styles.timeWrapper}>
                    <Text style={styles.timeLabelText}>Expected Time:</Text>
                    <Text style={styles.expectedTimeText}>
                      {inquiry.expectedTime}
                    </Text>
                  </View>
                </View>
                {/* <View style={styles.messengerWrapper}>
                  <Text style={styles.messengerNameText}>Messenger</Text>
                  <Image source={AVA3} style={styles.messengerAva} />
                  <Text style={styles.messengerNameText}>
                    {inquiry.messenger}
                  </Text>
                </View> */}
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
    //justifyContent: "center",
  },
  containerBackground: {
    backgroundColor: "#3220DD",
    width: "100%",
    height: 68,
    maxHeight: 68,
    margin: 0,
    padding: 0,
  },
  filterContainer: {
    marginTop: 0,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    height: 55,
    maxHeight: 55,
    zIndex: 1, // Ensure the filterContainer is above the scroll content
    position: "absolute", // Fix the filterContainer's position
    top: 5,
  },
  filterButton: {
    backgroundColor: "#FFF",
    //backgroundColor: "#5B4CFF",
    height: 40,
    width: "31.5%",
    borderRadius: 10,
    justifyContent: "center",
    marginHorizontal: 0,
  },
  activeFilterButton: {
    backgroundColor: "#5B4CFF",
    height: 40,
    width: "31.5%",
    borderRadius: 10,
    justifyContent: "center",
    marginHorizontal: 0,
  },
  filterButtonText: {
    color: "#979797",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  activeFilterButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "400",
  },
  allButton: {
    marginLeft: 7,
    marginRight: 0,
  },
  failedButton: {
    marginRight: 7,
    marginLeft: 0,
  },
  activeSuccessButton: {
    backgroundColor: "#5B4CFF",
    //backgroundColor: "#00D830",
    height: 40,
    width: "31.5%",
    borderRadius: 10,
    justifyContent: "center",
    marginHorizontal: 0,
  },
  activeFailedButton: {
    backgroundColor: "#5B4CFF",
    //backgroundColor: "#ff0000",
    height: 40,
    width: "31.5%",
    borderRadius: 10,
    justifyContent: "center",
    marginHorizontal: 0,
  },
  scrollContainer: {
    flexGrow: 1,
    marginTop: 0,
    alignItems: "center",
    //justifyContent: "center",
    //marginBottom: 60,
    paddingBottom: 10,
  },
  container: {
    width: "90%",
    marginTop: 16,
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
    width: "100%",
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
  statusWrapper: {
    flexDirection: "row",
    marginTop: 3,
  },
  statusLabelText: {
    fontSize: 15,
    color: "#888",
    paddingBottom: 2.5,
  },
  statusTextSuccess: {
    marginLeft: 5,
    fontSize: 15,
    color: "#00B929",
    fontWeight: "500",
    paddingBottom: 2.5,
  },
  statusTextFailed: {
    marginLeft: 5,
    fontSize: 15,
    color: "#ff0000",
    fontWeight: "500",
    paddingBottom: 2.5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 2,
    marginBottom: 5,
  },
  infoWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginTop: 2,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 7,
  },
  iconLocation: {
    width: 14,
    height: 14,
    tintColor: "#8F8F8F",
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#8F8F8F",
  },
  dateText: {
    fontSize: 14,
    marginVertical: 4,
    color: "#8F8F8F",
  },
  timeWrapper: {
    flexDirection: "row",
    marginTop: 10,
  },
  timeLabelText: {
    fontSize: 12,
    color: "#888",
  },
  expectedTimeText: {
    marginLeft: 5,
    fontSize: 12,
    //color: "#ff0000",
  },
  messengerWrapper: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 24,
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

export default Finished;
