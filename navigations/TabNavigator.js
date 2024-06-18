import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, CommonActions } from "@react-navigation/native";

import HOME from "../assets/images/home2.png";
import INCOMING from "../assets/images/incoming2.png";
import MYTASK from "../assets/images/mytask2.png";
import ONGOING from "../assets/images/ongoing2.png";
import FINISHED from "../assets/images/finished2.png";

import HomeScreen from "../screens/Home";
import IncomingStackNavigator from "../navigations/IncomingStackNavigator";
import MyTaskStackNavigator from "../navigations/MyTaskStackNavigator";
import OngoingStackNavigator from "../navigations/OngoingStackNavigator";
import FinishedStackNavigator from "../navigations/FinishedStackNavigator";
//import CustomTabBar from "../navigations/CustomTabBar";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Home"
        //tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 70,
            backgroundColor: "rgba(48, 35, 76, 0.95)",
            borderTopWidth: 0,
            paddingTop: 4,
            paddingBottom: 14,
          },
          tabBarActiveTintColor: "#5B4CFF",
          tabBarInactiveTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Image
                source={HOME}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? "#5B4CFF" : "#fff",
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="IncomingStack"
          component={IncomingStackNavigator}
          options={{
            title: "Incoming",
            tabBarIcon: ({ focused }) => (
              <Image
                source={INCOMING}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? "#5B4CFF" : "#fff",
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MyTaskStack"
          component={MyTaskStackNavigator}
          options={{
            title: "MyTask",
            tabBarIcon: ({ focused }) => (
              <Image
                source={MYTASK}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? "#5B4CFF" : "#fff",
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="OngoingStack"
          component={OngoingStackNavigator}
          options={{
            title: "Ongoing",
            tabBarIcon: ({ focused }) => (
              <Image
                source={ONGOING}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? "#5B4CFF" : "#fff",
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="FinishedStack"
          component={FinishedStackNavigator}
          options={{
            title: "Finished",
            tabBarIcon: ({ focused }) => (
              <Image
                source={FINISHED}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? "#5B4CFF" : "#fff",
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
