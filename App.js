import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/Welcome';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';


// import HomeScreen from './screens/HomeScreen';
// import FormScreen from './screens/FormScreen';
// import HistoryListScreen from './screens/HistoryListScreen';
// import DetailOrderScreen from './screens/DetailOrderScreen';

const Stack = createNativeStackNavigator();

const AuthLoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const checkToken = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      console.log(userToken)
      navigation.navigate(userToken ? 'Home' : 'Welcome');
    };
    
    checkToken();
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

function App() {
  return (
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
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
