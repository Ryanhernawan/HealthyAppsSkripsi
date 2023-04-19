import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Login from "./Screens/LoginPage";
import Register from "./Screens/RegisterPage";
import Home from "./Screens/HomePage";
import Workout from "./Screens/WorkoutPage";
import Recipes from "./Screens/RecipesPage";
import Forum from "./Screens/ForumPage";
import Profile from "./Screens/ProfilePage";
import DetailRecipes from  "./Screens/DetailRecipes/DetailRecipes";


// IMPORT DETAIL WOKROUT
import ChestWO from "./Screens/DetailWorkout/ChestWorkout";
import AbsWO from "./Screens/DetailWorkout/AbsWorkout";
import BackWO from "./Screens/DetailWorkout/BackWorkout";
import ArmsWO from "./Screens/DetailWorkout/ArmsWorkout";
import LegsWO from "./Screens/DetailWorkout/LegsWorkout";
import ButtWO from "./Screens/DetailWorkout/ButtWorkout";

// IMPORT LEVEL WORKOUT
import AllWorkout from "./Screens/LevelWorkout/AllWorkout";
import MyFavoriteWorkout from "./Screens/LevelWorkout/MyFavoriteWorkout";
import BeginnerWorkout from "./Screens/LevelWorkout/BeginnerWorkout";
import AdvanceWorkout from "./Screens/LevelWorkout/AdvanceWorkout";
import IntermediateWorkout from "./Screens/LevelWorkout/IntermediateWorkout";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Workout"
        component={Workout}
        options={{
          title: "Workout",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="dumbbell" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Recipes"
        component={Recipes}
        options={{
          title: "Recipes",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="book-open-blank-variant" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Forum"
        component={Forum}
        options={{
          title: "Forum",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="chat" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>

      
      
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
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Sign Up",
          }}
        />
        <Stack.Screen
          name="Home"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="workout"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="recipes"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Forum"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Profile"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />

        {/* DETAIL WORKOUT */}

        <Stack.Screen
          name="Chest"
          component={ChestWO}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Abs"
          component={AbsWO}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Back"
          component={BackWO}
          options={{
            headerShown: false,
          }}
        /> 

        <Stack.Screen
          name="Arms"
          component={ArmsWO}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen
          name="Legs"
          component={LegsWO}
          options={{
            headerShown: false,
          }}
        />     
        
        <Stack.Screen
          name="Butt"
          component={ButtWO}
          options={{
            headerShown: false,
          }}
        />    

        {/* DETAIL WORKOUT END */}

        <Stack.Screen
          name="DetailRecipes"
          component={DetailRecipes}
          options={{
            headerShown: false,
          }}
        />

        {/* LEVEL WORKOUT */}

        <Stack.Screen
          name="AllWorkout"
          component={AllWorkout}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="MyFavoriteWorkout"
          component={MyFavoriteWorkout}
          options={{
            headerShown: false,
          }}
        />

         <Stack.Screen
          name="BeginnerWorkout"
          component={BeginnerWorkout}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="AdvanceWorkout"
          component={AdvanceWorkout}
          options={{
            headerShown: false,
          }}
        />

         <Stack.Screen
          name="IntermediateWorkout"
          component={IntermediateWorkout}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>  
    </NavigationContainer>
  );
}
