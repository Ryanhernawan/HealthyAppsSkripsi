import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from './Components/Screens/HomePage';
import WorkoutPage from './Components/Screens/WorkoutPage';
import RecipesPage from './Components/Screens/RecipesPage';
import ForumPage from './Components/Screens/ForumPage';
import ProfilePage from './Components/Screens/ProfilePage';
import LoginPage from './Components/Screens/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState('Home');

  const renderScreen = () => {
    if (isLoggedIn) {
      if (activeScreen === 'Home') {
        return <HomePage />;
      } else if (activeScreen === 'Workout') {
        return <WorkoutPage />;
      } else if (activeScreen === 'Recipes') {
        return <RecipesPage />;
      } else if (activeScreen === 'Forum') {
        return <ForumPage />;
      } else if (activeScreen === 'Profile') {
        return <ProfilePage />;
      }
    } else {
      return <LoginPage setIsLoggedIn={setIsLoggedIn} />;
    }
  };

  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <View style={styles.container}>
        {renderScreen()}

        {isLoggedIn && (
          <View style={styles.bottomNavigation}>
            <Icon
              name="home"
              size={24}
              color={activeScreen === 'Home' ? 'blue' : 'gray'}
              onPress={() => setActiveScreen('Home')}
            />

            <Icon
              name="dumbbell"
              size={24}
              color={activeScreen === 'Workout' ? 'blue' : 'gray'}
              onPress={() => setActiveScreen('Workout')}
            />

            <Icon
              name="book-open-blank-variant"
              size={24}
              color={activeScreen === 'Recipes' ? 'blue' : 'gray'}
              onPress={() => setActiveScreen('Recipes')}
            />

            <Icon
              name="chat"
              size={24}
              color={activeScreen === 'Forum' ? 'blue' : 'gray'}
              onPress={() => setActiveScreen('Forum')}
            />

            <Icon
              name="account"
              size={24}
              color={activeScreen === 'Profile' ? 'blue' : 'gray'}
              onPress={() => setActiveScreen('Profile')}
            />
          </View>
        )}
      </View>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 56,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
});