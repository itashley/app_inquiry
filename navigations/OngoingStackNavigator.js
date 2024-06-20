import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OngoingScreen from "../screens/Ongoing";
import DetailScreen from "../screens/Detail";
import { View, Text, StyleSheet } from "react-native";

const Stack = createStackNavigator();

const CustomHeader = ({ title, description }) => (
  <View style={styles.headerContainer}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    {description && <Text style={styles.description}>{description}</Text>}
  </View>
);

const OngoingStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ongoing"
        component={OngoingScreen}
        options={{
          // title: "Ongoing Inquiries",
          // headerLeft: () => null, // Remove back button
          // headerTitleStyle: {
          //   fontWeight: "bold", // Change font weight
          //   color: "#fff",
          //   fontSize: 26,
          //   marginLeft: 10,
          // },
          header: () => (
            <CustomHeader
              title="Ongoing Inquiries"
              description="Inquiries currently handled by Sales Department"
            />
          ),
          headerStyle: {
            backgroundColor: "#3220DD", // Change background color
          },
          //headerTransparent: true,
        }}
      />
      {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#3220DD",
    padding: 10,
    paddingTop: 45,
    paddingLeft: 25,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#fff",
    marginLeft: 0, // Adjust as needed
  },
  description: {
    fontSize: 16,
    color: "#fff",
    marginTop: 4, // Adjust as needed
    width: "100%",
  },
  iconBack: {
    width: 7,
    height: 12.25,
    marginRight: 10, // Adjust as needed
  },
});

export default OngoingStackNavigator;
