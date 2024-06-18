import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/Welcome";
import LoginScreen from "./screens/Login";
import DetailScreen from "./screens/Detail";
import DetailMyTaskScreen from "./screens/DetailMyTask";
import "react-native-gesture-handler";
import TabNavigator from "./navigations/TabNavigator";
import { PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

const AuthLoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const checkToken = async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      console.log(userToken);
      navigation.navigate(userToken ? "Tab" : "Welcome");
    };

    checkToken();
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthLoading">
          <Stack.Screen
            name="AuthLoading"
            component={AuthLoadingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tab"
            component={TabNavigator} // Use TabNavigator here
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailMyTask"
            component={DetailMyTaskScreen}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        /> */}
          {/* <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerTransparent: true,
            headerTitle: 'Order Form', // Optionally, you can set an empty header title
          }}
          
        /> */}

          {/* <Stack.Screen 
          name="History Order" 
          component={HistoryListScreen} 
          options={{
            headerTransparent: true,
            headerTitle: 'Order List', // Optionally, you can set an empty header title
          }}
          
        />     */}

          {/* <Stack.Screen 
          name="Detail Order" 
          component={DetailOrderScreen} 
          options={{
            headerTransparent: true,
            headerTitle: 'Order Detail', // Optionally, you can set an empty header title
          }}
          
        />       */}
          {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
          {/* <Stack.Screen
          name="INCOMING"
          component={IncomingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MYTASK"
          component={MyTaskScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ONGOING"
          component={OngoingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FINISHED"
          component={FinishedScreen}
          options={{ headerShown: false }}
        /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
