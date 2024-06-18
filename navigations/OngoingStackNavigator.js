import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OngoingScreen from "../screens/Ongoing";
import DetailScreen from "../screens/Detail";

const Stack = createStackNavigator();

const OngoingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Ongoing" component={OngoingScreen} />
      {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default OngoingStackNavigator;
