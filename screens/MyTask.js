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

const MyTask = () => {
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
          <Text style={styles.title}>My Task</Text>
          <TouchableOpacity
            style={styles.slide}
            onPress={() => navigation.navigate("DetailMyTask")}
          >
            <View style={styles.inquiryCard}>
              <View style={styles.cardWrapper}>
                <View style={styles.headerWrapper}>
                  <Image source={RING} style={styles.iconWedding} />
                  <Text style={styles.dateText}>Expected : 15:00 PM.</Text>
                </View>
                <Text style={styles.titleText}>
                  Request for Customized Wedding Menu and Decorations.
                </Text>
                <View style={styles.infoWrapper}>
                  <View style={styles.locationWrapper}>
                    <Image source={MAP} style={styles.iconLocation} />
                    <Text style={styles.locationText}>Ashley Wahid Hasyim</Text>
                  </View>
                  <Text style={styles.inquiryDate}>Thursday, 13/06/2024</Text>
                </View>
                <Divider />
                <View style={styles.timeWrapper}>
                  <Text style={styles.timeLabelText}>
                    2 Hours 27 minutes remaining
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.slide}
            onPress={() => navigation.navigate("DetailMyTask")}
          >
            <View style={styles.inquiryCard}>
              <View style={styles.cardWrapper}>
                <View style={styles.headerWrapper}>
                  <Image source={RING} style={styles.iconWedding} />
                  <Text style={styles.dateText}>Expected : 15:00 PM.</Text>
                </View>
                <Text style={styles.titleText}>
                  Request for Customized Wedding Menu and Decorations.
                </Text>
                <View style={styles.infoWrapper}>
                  <View style={styles.locationWrapper}>
                    <Image source={MAP} style={styles.iconLocation} />
                    <Text style={styles.locationText}>Ashley Wahid Hasyim</Text>
                  </View>
                  <Text style={styles.inquiryDate}>Thursday, 13/06/2024</Text>
                </View>
                <Divider />
                <View style={styles.timeWrapper}>
                  <Text style={styles.timeLabelText}>
                    2 Hours 27 minutes remaining
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.slide}
            onPress={() => navigation.navigate("DetailMyTask")}
          >
            <View style={styles.inquiryCard}>
              <View style={styles.cardWrapper}>
                <View style={styles.headerWrapper}>
                  <Image source={RING} style={styles.iconWedding} />
                  <Text style={styles.dateText}>Expected : 15:00 PM.</Text>
                </View>
                <Text style={styles.titleText}>
                  Request for Customized Wedding Menu and Decorations.
                </Text>
                <View style={styles.infoWrapper}>
                  <View style={styles.locationWrapper}>
                    <Image source={MAP} style={styles.iconLocation} />
                    <Text style={styles.locationText}>Ashley Wahid Hasyim</Text>
                  </View>
                  <Text style={styles.inquiryDate}>Thursday, 13/06/2024</Text>
                </View>
                <Divider />
                <View style={styles.timeWrapper}>
                  <Text style={styles.timeLabelText}>
                    2 Hours 27 minutes remaining
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.slide}
            onPress={() => navigation.navigate("DetailMyTask")}
          >
            <View style={styles.inquiryCard}>
              <View style={styles.cardWrapper}>
                <View style={styles.headerWrapper}>
                  <Image source={RING} style={styles.iconWedding} />
                  <Text style={styles.dateText}>Expected : 15:00 PM.</Text>
                </View>
                <Text style={styles.titleText}>
                  Request for Customized Wedding Menu and Decorations.
                </Text>
                <View style={styles.infoWrapper}>
                  <View style={styles.locationWrapper}>
                    <Image source={MAP} style={styles.iconLocation} />
                    <Text style={styles.locationText}>Ashley Wahid Hasyim</Text>
                  </View>
                  <Text style={styles.inquiryDate}>Thursday, 13/06/2024</Text>
                </View>
                <Divider />
                <View style={styles.timeWrapper}>
                  <Text style={styles.timeLabelText}>
                    2 Hours 27 minutes remaining
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.slide}
            onPress={() => navigation.navigate("DetailMyTask")}
          >
            <View style={styles.inquiryCard}>
              <View style={styles.cardWrapper}>
                <View style={styles.headerWrapper}>
                  <Image source={RING} style={styles.iconWedding} />
                  <Text style={styles.dateText}>Expected : 15:00 PM.</Text>
                </View>
                <Text style={styles.titleText}>
                  Request for Customized Wedding Menu and Decorations.
                </Text>
                <View style={styles.infoWrapper}>
                  <View style={styles.locationWrapper}>
                    <Image source={MAP} style={styles.iconLocation} />
                    <Text style={styles.locationText}>Ashley Wahid Hasyim</Text>
                  </View>
                  <Text style={styles.inquiryDate}>Thursday, 13/06/2024</Text>
                </View>
                <Divider />
                <View style={styles.timeWrapper}>
                  <Text style={styles.timeLabelText}>
                    2 Hours 27 minutes remaining
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
    paddingBottom: 60,
  },
  container: {
    width: "90%",
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
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F84F96",
    borderRadius: 10,
    padding: 1,
    paddingLeft: 5,
    marginBottom: 30,
  },
  inquiryCard: {
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
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingLeft: 15,
  },
  iconWedding: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  dateText: {
    fontSize: 14,
    color: "#888",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  infoWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 5,
    marginTop: 5,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  iconLocation: {
    width: 14,
    height: 14,
    tintColor: "#8F8F8F",
  },
  locationText: {
    marginLeft: 2,
    fontSize: 14,
    color: "#8F8F8F",
  },
  inquiryDate: {
    fontSize: 14,
    marginVertical: 5,
    color: "#8F8F8F",
  },
  timeWrapper: {
    flexDirection: "row",
    marginVertical: 8,
    paddingHorizontal: 18,
    paddingBottom: 5,
  },
  timeLabelText: {
    fontSize: 13,
    color: "#FF0000",
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
});

export default MyTask;
