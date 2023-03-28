import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Components/Index';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from './Components/Screens/HomePage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomePage /> */}
      <Navigation/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
