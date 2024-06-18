import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FinishedScreen from "../screens/Finished";
import DetailScreen from "../screens/Detail";

const Stack = createStackNavigator();

const FinishedStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Finished" component={FinishedScreen} />
      {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default FinishedStackNavigator;
