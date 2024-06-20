import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FinishedScreen from "../screens/Finished";
import DetailScreen from "../screens/Detail";
import { View, Text, StyleSheet } from "react-native";

const Stack = createStackNavigator();

const CustomHeader = ({ title, description }) => (
  <View style={styles.headerContainer}>
    <View style={styles.titleContainer}>
      {/* <Image source={BACK} style={styles.iconBack} /> */}
      <Text style={styles.title}>{title}</Text>
    </View>
    {description && <Text style={styles.description}>{description}</Text>}
  </View>
);

const FinishedStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Finished"
        component={FinishedScreen}
        options={{
          // title: "Finished Inquiries",
          // headerLeft: () => null, // Remove back button
          // headerTitleStyle: {
          //   fontWeight: "bold", // Change font weight
          //   color: "#fff",
          //   fontSize: 26,
          //   marginLeft: 10,
          // },
          header: () => (
            <CustomHeader
              title="Finished Inquiries"
              description="Inquiries marked as completed or failed"
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
  },
  iconBack: {
    width: 7,
    height: 12.25,
    marginRight: 10, // Adjust as needed
  },
});

export default FinishedStackNavigator;
