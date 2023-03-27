import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Components/Index';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


export default function App() {
  return (
    <View style={styles.container}>
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
