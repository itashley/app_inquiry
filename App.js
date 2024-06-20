import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/Welcome";
import LoginScreen from "./screens/Login";
import DetailScreen from "./screens/Detail";
import DetailMyTaskScreen from "./screens/DetailMyTask";
import DetailOngoingScreen from "./screens/DetailOngoing";
import DetailFinishedScreen from "./screens/DetailFinished";
import ProfileScreen from "./screens/Profile";
import "react-native-gesture-handler";
import TabNavigator from "./navigations/TabNavigator";
import { PaperProvider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import BACK from "./assets/images/leftarrow3.png";

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

const CustomHeader = ({ title, description }) => {
  const navigation = useNavigation();

  const handleBack = () => {
    console.log("BackButton been pressed!");
    navigation.goBack(); // Navigate back when the back button is pressed
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleBack} style={styles.touchableBack}>
          <Image source={BACK} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      {description && <Text style={styles.description}>{description}</Text>}
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
            options={{
              // title: "Incoming Inquiries",
              // //headerTitle: () => <CustomHeaderInquiries />,
              // headerLeft: () => (
              //   <>
              //     <Text> . </Text>
              //   </>
              // ),
              // headerTitleStyle: {
              //   fontWeight: "bold", // Change font weight
              //   color: "#fff",
              //   fontSize: 26,
              //   marginLeft: 10,
              //   //flex: 1,
              //   textAlign: "center",
              // },
              header: () => (
                <CustomHeader
                  title="Incoming Inquiries"
                  // description="New Inquiries sent from Reservation Team"
                />
              ),
              headerStyle: {
                backgroundColor: "#3220DD", // Change background color
              },
              //headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="DetailMyTask"
            component={DetailMyTaskScreen}
            options={{
              // title: "My Task",
              // //headerTitle: () => <CustomHeaderInquiries />,
              // headerLeft: () => (
              //   <>
              //     <Text> . </Text>
              //   </>
              // ),
              // headerTitleStyle: {
              //   fontWeight: "bold", // Change font weight
              //   color: "#fff",
              //   fontSize: 26,
              //   marginLeft: 10,
              //   //flex: 1,
              //   textAlign: "center",
              // },
              header: () => (
                <CustomHeader
                  title="My Task"
                  // description="New Inquiries sent from Reservation Team"
                />
              ),
              headerStyle: {
                backgroundColor: "#3220DD", // Change background color
              },
              //headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="DetailOngoing"
            component={DetailOngoingScreen}
            options={{
              // title: "Ongoing Inquiries",
              // //headerTitle: () => <CustomHeaderInquiries />,
              // headerLeft: () => (
              //   <>
              //     <Text> . </Text>
              //   </>
              // ),
              // headerTitleStyle: {
              //   fontWeight: "bold", // Change font weight
              //   color: "#fff",
              //   fontSize: 26,
              //   marginLeft: 10,
              //   //flex: 1,
              //   textAlign: "center",
              // },
              header: () => (
                <CustomHeader
                  title="Ongoing Inquiries"
                  //description="New Inquiries sent from Reservation Team"
                />
              ),
              headerStyle: {
                backgroundColor: "#3220DD", // Change background color
              },
              //headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="DetailFinished"
            component={DetailFinishedScreen}
            options={{
              // title: "Ongoing Inquiries",
              // //headerTitle: () => <CustomHeaderInquiries />,
              // headerLeft: () => (
              //   <>
              //     <Text> . </Text>
              //   </>
              // ),
              // headerTitleStyle: {
              //   fontWeight: "bold", // Change font weight
              //   color: "#fff",
              //   fontSize: 26,
              //   marginLeft: 10,
              //   //flex: 1,
              //   textAlign: "center",
              // },
              header: () => (
                <CustomHeader
                  title="Finished Inquiries"
                  //description="New Inquiries sent from Reservation Team"
                />
              ),
              headerStyle: {
                backgroundColor: "#3220DD", // Change background color
              },
              //headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              // title: "Ongoing Inquiries",
              // //headerTitle: () => <CustomHeaderInquiries />,
              // headerLeft: () => (
              //   <>
              //     <Text> . </Text>
              //   </>
              // ),
              // headerTitleStyle: {
              //   fontWeight: "bold", // Change font weight
              //   color: "#fff",
              //   fontSize: 26,
              //   marginLeft: 10,
              //   //flex: 1,
              //   textAlign: "center",
              // },
              header: () => (
                <CustomHeader
                  title="Profile"
                  description="Change your profile picture and password"
                />
              ),
              headerStyle: {
                backgroundColor: "#3220DD", // Change background color
              },
              //headerTransparent: true,
            }}
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

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#3220DD",
    padding: 10,
    paddingTop: 45,
    paddingLeft: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#fff",
    marginLeft: 12, // Adjust as needed
  },
  description: {
    fontSize: 16,
    color: "#fff",
    marginTop: 4, // Adjust as needed
    marginLeft: 8,
  },
  touchableBack: {
    width: 20,
    height: 20,
    paddingTop: 3,
    padding: 10,
    paddingBottom: 2,
    paddingRight: 10,
  },
  iconBack: {
    width: 9,
    height: 15.75,
    //marginRight: 10, // Adjust as needed
  },
});

export default App;
