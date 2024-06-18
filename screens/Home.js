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

import AVA from "../assets/ava.jpg";
import AVA2 from "../assets/ava2.jpg";
import AVA3 from "../assets/ava3.jpg";
import LOGO from "../assets/logo.png"; // Replace with your local image path
import BACKGROUND from "../assets/bg/home.jpg"; // Replace with your background image path
import RING from "../assets/images/rings.png";
import MAP from "../assets/images/map-bold.png";
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
            <TouchableOpacity style={styles.touchable} onPress={doLogout}>
              <Image source={AVA} style={styles.avatar} />
            </TouchableOpacity>
          </View>

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
            showsButtons={true}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            loop={false}
          >
            <View style={styles.slide}>
              <View style={styles.inquiryCard}>
                <View style={styles.cardWrapper}>
                  <View style={styles.headerWrapper}>
                    <Image source={RING} style={styles.iconWedding} />
                    <Text style={styles.dateText}>Thursday, 13/06/2024</Text>
                  </View>
                  <Text style={styles.titleText}>
                    Request for Customized Wedding Menu and Decorations.
                  </Text>
                  <View style={styles.locationWrapper}>
                    <Image source={MAP} style={styles.iconLocation} />
                    <Text style={styles.locationText}>Ashley Wahid Hasyim</Text>
                  </View>
                  <View style={styles.timeWrapper}>
                    <Text style={styles.timeLabelText}>Expected:</Text>
                    <Text style={styles.timeText}>15.00 PM</Text>
                  </View>
                  <View style={styles.timeWrapper}>
                    <Text style={styles.timeLabelText}>Actual:</Text>
                    <Text style={styles.actualTimeText}>14.15 PM</Text>
                  </View>
                </View>

                <View style={styles.messengerWrapper}>
                  <Text style={styles.messengerNameText}>Messanger</Text>
                  <Image source={AVA3} style={styles.messengerAva} />
                  <Text style={styles.messengerNameText}>Hana</Text>
                </View>
              </View>
            </View>

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
    marginBottom: 60,
  },
  container: {
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
    marginLeft: 35,
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
  card: {
    width: "100%",
    backgroundColor: "#AA80EE",
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
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    //padding: 20,
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F84F96",
    width: width,
  },
  inquiryCard: {
    width: width * 0.9,
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#fdfdfd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cardWrapper: {
    width: "65%",
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWedding: {
    width: 20,
    height: 20,
    marginRight: 6,
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
    marginVertical: 5,
  },
  iconLocation: {
    width: 15,
    height: 15,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
  },
  timeWrapper: {
    flexDirection: "row",
    marginVertical: 5,
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
    marginTop: 10,
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
  sectionTitle: {
    marginTop: 20,
    fontFamily: "roboto",
    fontSize: 16,
    fontWeight: "bold",
    color: "#9e9ef7",
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
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  gridItem2: {
    width: "48%",
    backgroundColor: "rgba(255, 247, 48, 0.5)",
    //"rgba(620, 64, 16, 0.5)",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  gridItem3: {
    width: "48%",
    backgroundColor: "rgba(183, 128, 238, 0.5)",
    //"rgba(60, 64, 107, 0.5)",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  gridItem4: {
    width: "48%",
    backgroundColor: "rgba(0, 209, 96, 0.45)",
    //"rgba(610, 64, 167, 0.5)",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  gridItemNumber: {
    fontFamily: "roboto",
    fontSize: 24,
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
