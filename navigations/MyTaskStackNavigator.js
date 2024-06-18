import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyTaskScreen from "../screens/MyTask";
import DetailScreen from "../screens/Detail";

const Stack = createStackNavigator();

const MyTaskStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyTask" component={MyTaskScreen} />
      {/* <Stack.Screen name="DetailMyTask" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default MyTaskStackNavigator;
