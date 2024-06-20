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
import Swiper from "react-native-swiper";

import AVA1 from "../assets/ava.jpg";
import AVA2 from "../assets/ava2.jpg";
import AVA3 from "../assets/ava3.jpg";
import BACKGROUND from "../assets/bg/home.jpg"; // Replace with your background image path
import CAT1 from "../assets/images/rings.png";
import CAT2 from "../assets/images/meeting.png";
import CAT3 from "../assets/images/roomrate.png";
import MAP from "../assets/images/map-bold.png";
import USER from "../assets/images/user.png";
import USERB from "../assets/images/userb.png";
import OUT1 from "../assets/images/logout1.png";
import OUT1B from "../assets/images/logout1b.png";
import OUT2 from "../assets/images/logout2.png";
import OUT2B from "../assets/images/logout2b.png";
// Prevent the splash screen from auto-hiding

// SplashScreen.preventAutoHideAsync();

// Function to load fonts
const fetchFonts = () => {
  return Font.loadAsync({
    roboto: require("../assets/fonts/Roboto-Medium.ttf"),
  });
};

const { width, height } = Dimensions.get("window");

const Home = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);
  const [timestamp, setTimestamp] = useState("");
  const [date, setDate] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

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
      startTime: "12.54 PM",
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
      startTime: "13.24 PM",
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
      startTime: "13.34 PM",
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

    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0"); // Get minutes, ensure two digits
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // Convert hour to 12-hour format
      const formattedTime = `${hours}:${minutes} ${ampm}`;
      setTimestamp(formattedTime);
    };

    // Update time initially and then every minute
    updateTime();
    const timeInterval = setInterval(updateTime, 60000); // Update every minute

    const updateDate = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      const formattedDate = now.toLocaleDateString("en-US", options);
      setDate(formattedDate);
    };

    // Update date initially
    updateDate();

    const dateInterval = setInterval(updateDate, 86400000); // Update every day

    return () => {
      clearInterval(timeInterval); // Clean up time interval on unmount
      clearInterval(dateInterval); // Clean up date interval on unmount
    };
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
          <View style={styles.header}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Hi Ryan</Text>
              <Text style={styles.subtitle}>6 Tasks are pending</Text>
            </View>
            <TouchableOpacity
              style={styles.touchable}
              onPress={toggleCardVisibility}
            >
              <Image source={AVA1} style={styles.avatar} />
            </TouchableOpacity>
          </View>

          {isCardVisible && (
            <TouchableOpacity
              style={styles.overlay}
              onPress={toggleCardVisibility}
              activeOpacity={1}
            >
              <View style={styles.miniCard}>
                <View style={styles.headerMiniCard}>
                  <Image source={AVA1} style={styles.cardAvatar} />
                  <View style={styles.cardNameWrapper}>
                    <Text style={styles.cardName}>Muhammad</Text>
                    <Text style={styles.cardDept}>Sales Team</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.cardButton}
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Image source={USERB} style={styles.miniCardIcon} />
                  <Text style={styles.cardButtonText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={doLogout}>
                  <Image source={OUT1B} style={styles.miniCardIcon} />
                  <Text style={styles.cardButtonText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Sales & Marketing</Text>
            <Text style={styles.cardSubtitle}>Teams</Text>
            <View style={styles.avatarContainer}>
              <Image source={AVA2} style={styles.smallAvatar} />
              <Image source={AVA3} style={styles.smallAvatar} />
            </View>
            <View style={styles.cardTimeContainer}>
              <Text style={styles.cardTime1}>{timestamp}</Text>
              <Text style={styles.cardTime2}>{date}</Text>
            </View>
          </View>

          {/* SLIDER/SWIPER */}
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            loop={true}
            paginationStyle={styles.pagination}
          >
            {inquiries.map((inquiry) => (
              <TouchableOpacity
                key={inquiry.id}
                style={getStyleForCategory(inquiry.category)}
                onPress={() =>
                  navigation.navigate("DetailFinished", { inquiry })
                }
              >
                <View style={styles.inquiryCard}>
                  <View style={styles.cardWrapper}>
                    <View style={styles.headerWrapper}>
                      <Image
                        source={getIconForCategory(inquiry.category)}
                        style={getIconStyleForCategory(inquiry.category)}
                      />
                      <Text style={styles.dateText}>{inquiry.date}</Text>
                    </View>
                    <Text style={styles.titleText}>{inquiry.subject}</Text>
                    <View style={styles.locationWrapper}>
                      <Image source={MAP} style={styles.iconLocation} />
                      <Text style={styles.locationText}>{inquiry.hotel}</Text>
                    </View>
                    <View style={styles.timeWrapper}>
                      <Text style={styles.timeLabelText}>Start Time:</Text>
                      <Text style={styles.timeText}>{inquiry.startTime}</Text>
                    </View>
                    <View style={styles.timeWrapper}>
                      <Text style={styles.timeLabelText}>Finished Time:</Text>
                      <Text style={styles.actualTimeText}>
                        {inquiry.finishedTime}
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
            {/* Additional slides can be added here */}
          </Swiper>
          {/* </Swiper> */}

          <Text style={styles.sectionTitle}>Monthly Review</Text>

          <View style={styles.grid}>
            <TouchableOpacity
              style={styles.gridItem1}
              onPress={() => navigation.navigate("IncomingStack")}
            >
              <Text style={styles.gridItemNumber}>12</Text>
              <Text style={styles.gridItemLabel}>Incoming for Review</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem2}
              onPress={() => navigation.navigate("MyTaskStack")}
            >
              <Text style={styles.gridItemNumber}>7</Text>
              <Text style={styles.gridItemLabel}>My Task</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem3}
              onPress={() => navigation.navigate("OngoingStack")}
            >
              <Text style={styles.gridItemNumber}>10</Text>
              <Text style={styles.gridItemLabel}>Ongoing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem4}
              onPress={() => navigation.navigate("FinishedStack")}
            >
              <Text style={styles.gridItemNumber}>23</Text>
              <Text style={styles.gridItemLabel}>Finished</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  container: {
    flex: 0,
    width: "90%",
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10%",
    marginBottom: 0,
    position: "relative",
    justifyContent: "space-between",
  },
  textContainer: {
    alignItems: "center", // Center the text vertically
    flex: 1, // Take up remaining space
    marginLeft: 30,
  },
  title: {
    fontFamily: "roboto",
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontFamily: "roboto",
    fontSize: 15,
    color: "#9e9ef7",
    marginBottom: 20,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 20,
    marginBottom: 14,
  },
  touchable: {
    // Ensure TouchableOpacity does not affect layout or visibility
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 36,
    paddingLeft: 80,
    zIndex: 1000, // Ensure it's above other elements
    //backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background to highlight the modal
  },
  miniCard: {
    flex: 0,
    minWidth: 155, // Minimum width of the card
    maxWidth: 190, // Maximum width of the card
    minHeight: 133,
    maxHeight: 144, // Adjust the height as needed
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexGrow: 1,
    flexShrink: 1,
  },
  headerMiniCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    flexWrap: "nowrap", // Ensures the row does not wrap
  },
  cardAvatar: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
  cardNameWrapper: {
    marginLeft: 10,
    flexShrink: 1,
    flexGrow: 1,
  },
  cardName: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
    marginBottom: 2,
  },
  cardDept: {
    fontSize: 12,
  },
  cardButton: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginVertical: 3,
    borderRadius: 10,
  },
  miniCardIcon: {
    width: 15,
    height: 15,
    tintColor: "#8F8F8F",
  },
  cardButtonText: {
    fontSize: 14,
    color: "#8F8F8F",
    marginLeft: 5,
  },
  card: {
    width: "100%",
    backgroundColor: "#AA80EE",
    //backgroundColor: "#E3AD46",
    borderRadius: 15,
    padding: 20,
    height: "auto",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontFamily: "roboto",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  cardSubtitle: {
    fontFamily: "roboto",
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
  },
  avatarContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  smallAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  cardTimeContainer: {
    marginTop: -20,
  },
  cardTime1: {
    fontFamily: "roboto",
    fontSize: 12,
    color: "#fff",
    textAlign: "right",
  },
  cardTime2: {
    fontFamily: "roboto",
    fontSize: 12,
    color: "#fff",
    textAlign: "right",
  },
  wrapper: {
    // width: "100%",
    // backgroundColor: "#fff",
    // borderRadius: 15,
    // //padding: 20,
    height: 175,
  },
  slide1: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F84F96",
    borderRadius: 15,
    padding: 1,
    paddingLeft: 5,
    marginBottom: 0,
  },
  slide2: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#627BFF",
    borderRadius: 15,
    padding: 1,
    paddingLeft: 5,
    marginBottom: 0,
  },
  slide3: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#00FE75",
    borderRadius: 15,
    padding: 1,
    paddingLeft: 5,
    marginBottom: 0,
  },
  inquiryCard: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    borderRadius: 15,
    paddingTop: 12,
    paddingHorizontal: 18,
    backgroundColor: "#fdfdfd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cardWrapper: {
    width: "70%",
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
  dateText: {
    fontSize: 12,
    color: "#888",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 8,
  },
  iconLocation: {
    width: 15,
    height: 15,
    tintColor: "#8F8F8F",
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#8F8F8F",
  },
  timeWrapper: {
    flexDirection: "row",
    marginVertical: 1,
  },
  timeLabelText: {
    fontSize: 12,
    color: "#888",
  },
  timeText: {
    marginLeft: 5,
    fontSize: 12,
  },
  actualTimeText: {
    marginLeft: 5,
    fontSize: 12,
    color: "green",
  },
  messengerWrapper: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 5,
  },
  messengerAva: {
    width: 80,
    height: 80,
    marginVertical: 10,
  },
  messengerNameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dot: {
    backgroundColor: "rgba(0,0,0,.2)",
    width: 6.5,
    height: 6.5,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "#000",
    width: 6.5,
    height: 6.5,
    borderRadius: 4,
    margin: 3,
  },
  pagination: {
    position: "absolute",
    bottom: 11,
    left: 22,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  sectionTitle: {
    marginTop: 18,
    fontFamily: "roboto",
    fontSize: 18,
    fontWeight: "bold",
    color: "#9e9ef7",
    //color: "#fff",
    marginBottom: 10,
  },
  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem1: {
    width: "48%",
    backgroundColor: "rgba(255, 82, 82, 0.52)",
    //"rgba(830, 514, 127, 0.5)",
    borderRadius: 15,
    paddingRight: 5,
    paddingTop: 13,
    marginBottom: 20,
    paddingBottom: 25,
    alignItems: "center",
  },
  gridItem2: {
    width: "48%",
    backgroundColor: "rgba(255, 247, 48, 0.5)",
    //"rgba(620, 64, 16, 0.5)",
    borderRadius: 15,
    paddingRight: 5,
    paddingTop: 13,
    marginBottom: 20,
    alignItems: "center",
  },
  gridItem3: {
    width: "48%",
    backgroundColor: "rgba(183, 128, 238, 0.5)",
    //"rgba(60, 64, 107, 0.5)",
    borderRadius: 15,
    paddingTop: 13,
    marginBottom: 20,
    paddingBottom: 25,
    alignItems: "center",
  },
  gridItem4: {
    width: "48%",
    backgroundColor: "rgba(0, 209, 96, 0.45)",
    //"rgba(610, 64, 167, 0.5)",
    borderRadius: 15,
    paddingRight: 5,
    paddingTop: 13,
    marginBottom: 20,
    alignItems: "center",
  },
  gridItemNumber: {
    fontFamily: "roboto",
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  gridItemLabel: {
    fontFamily: "roboto",
    fontSize: 12,
    color: "#fff",
  },
});

export default Home;
