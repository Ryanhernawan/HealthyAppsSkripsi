import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from './Screens/HomePage'
import LoginPage from './Screens/LoginPage'

const homeName = 'Home';
const loginName = 'Login'

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={homeName}
      screenOptions ={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName){
                iconName = focused ? 'Home' : 'home-outline'
            }else if(rn === loginName){
              iconName = focused ? 'login' : 'login-outline'
            }

            return <Ionicons name={iconName} size={size} color={color}/>
        },
      })}>
        <Tab.Screen name={homeName} component={HomePage}/>
         
      </Tab.Navigator>
    </NavigationContainer>
  );
}