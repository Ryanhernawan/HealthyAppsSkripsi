import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  LogBox
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Profile from "../../assets/image/ProfilePic.png";
import BodyShapper from "../../assets/image/BODYSHAPER.jpg";
import SkeletonLoader from "react-native-loading-skeleton";

// IMPORT FETCHNG API
import axios from "axios";
import app from "./config";

// import {db} from './config'
import firebase from "firebase/compat/app";
import { FIREBASE_AUTH } from "./config";

import { getDatabase, ref, onValue, get,  } from "firebase/database";

// -------------------------

const HomePage = ({ route }) => {
   
  // const auth = FIREBASE_AUTH

  // const navigation = useNavigation();

  // const [name, setName] = useState(null)


  // useEffect(() => {
  //   const currentUserId = auth.currentUser.uid
  //   const db = getDatabase(app);
  //   const dbRef = ref(db, "data/users/" + currentUserId);
  //   onValue(dbRef, (snapshot) => {
  //     const user = snapshot.val()
  //     setName(user)
  //     console.log(user)
  //     LogBox.ignoreLogs(['Possible Unhandled Promise']);
  //   })
  //   // return () => {
  //   //   userRef.off('value');
  //   // };
  // }, [])

 


  // const goToBreakfast = () => {
  //   navigation.navigate("Breakfast");
  // };
  // const goToLunch = () => {
  //   navigation.navigate("Lunch");
  // };

  // const goToDinner = () => {
  //   navigation.navigate("Dinner");
  // };

  // const goToDetailArticle = () => {
  //   navigation.navigate("DetailArticle");
  // };

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   if (loading) {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   }
  // }, [loading]);

  // const [dataRecomendWO, setRecomendWO] = useState([]);

  // useEffect(() => {
  //   const db = getDatabase(app);
  //   const dbRef = ref(db, "data/Workout/recomendationWorkout");
  //   console.log("Receiving Data");
  //   onValue(dbRef, (snapshot) => {
  //     let data = snapshot.val();
  //     let dWorkout = Object.values(data);
  //     setRecomendWO(dWorkout);
  //     console.log("Console Log Set Data", data);
  //   });
  // }, []);

  // const [dataFoodCategory, setdataFoodCategory] = useState([
  //   {
  //     judul: "Breakfast",
  //     image: require("../../assets/image/breakfast.png"),
  //     goTo: goToBreakfast,
  //   },
  //   {
  //     judul: "Lunch",
  //     image: require("../../assets/image/lunch.png"),
  //     goTo: goToLunch,
  //   },
  //   {
  //     judul: "Dinner",
  //     image: require("../../assets/image/dinner.png"),
  //     goTo: goToDinner,
  //   },
  // ]);

  // const [dataHealthyStory, setdataHealthyStory] = useState([]);
  // useEffect(() => {
  //   const db = getDatabase(app);
  //   const dbRef = ref(db, "data/article");
  //   console.log("Receiving Data");
  //   onValue(dbRef, (snapshot) => {
  //     let data = snapshot.val();
  //     let dWorkout = Object.values(data);
  //     setdataHealthyStory(dWorkout);
  //     console.log("Console Log Set Data", data);
  //   });
  // }, []);

  // const { data } = route.params;


  return (
    <ScrollView>
      {/* <Text style={{padding:100}}>Data yang diterima: {data}</Text> */}

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
  },
  gambar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  teks: {
    flex: 1,
    fontSize: 16,
  },
});

export default HomePage;
