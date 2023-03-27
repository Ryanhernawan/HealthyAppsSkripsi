import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import Login from './Screens/LoginPage'
import Register from './Screens/RegisterPage'
import Home from './Screens/HomePage'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen(){
  return(
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{headerShown: false}}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{title: "Home",
          tabBarIcon:({size, color}) => (
            <MaterialCommunityIcons name="home"
            size={size} color={color} />
          )
        }}
        >

        </Tab.Screen>
      </Tab.Navigator>
  );
}





export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={Register} options={{
          title: "Sign Up"
        }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}