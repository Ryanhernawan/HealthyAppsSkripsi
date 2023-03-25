import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import Login from './Screens/LoginPage'
import Register from './Screens/RegisterPage'

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}