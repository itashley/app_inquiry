// IncomingStackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IncomingScreen from "../screens/Incoming";
import DetailScreen from "../screens/Detail";

const Stack = createStackNavigator();

const IncomingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Incoming" component={IncomingScreen} />
      {/* <Stack.Screen
        name="DetailIncoming"
        component={DetailScreen}
        options={{ headerBackVisible: false, tabBarVisible: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default IncomingStackNavigator;
