import React, { useState, useEffect  } from "react";
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
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Profile from "../../assets/image/ProfilePic.png";
import BodyShapper from "../../assets/image/BODYSHAPER.jpg"

// IMPORT FETCHNG API
import axios from "axios";
import app from './config';

// import {db} from './config'
import firebase from 'firebase/compat/app'

import {getDatabase, ref, onValue, get} from  'firebase/database';

// -------------------------


const HomePage = () => {
  const navigation = useNavigation();

  const goToWorkout = () => {
    navigation.navigate("Workout");
  };

  const [dataRecomendWO, setRecomendWO] = useState([]);

  const [dataFoodCategory, setdataFoodCategory] = useState([
    {
      judul: "Breakfast",
      image: require("../../assets/image/breakfast.png"),
    },
    {
      judul: "Lunch",
      image: require("../../assets/image/lunch.png"),
    },
    {
      judul: "Dinner",
      image: require("../../assets/image/dinner.png"),
    },
  ]);

  const [dataHealthyStory, setdataHealthyStory] = useState([
    {
      judul: "Clyde’s Story (MGH DGIM Healthy Lifestyle Program) ",
      image: require("../../assets/image/healthyStory.jpeg"),
    },
    {
      judul: "Clyde’s Story (MGH DGIM Healthy Lifestyle Program) ",
      image: require("../../assets/image/healthyStory.jpeg"),
    },
    {
      judul: "Clyde’s Story (MGH DGIM Healthy Lifestyle Program) ",
      image: require("../../assets/image/healthyStory.jpeg"),
    },
  ]);

  useEffect (() =>{
    const db = getDatabase(app)
    const dbRef = ref(db, 'data/Workout/recomendationWorkout');
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) =>{
      let data = snapshot.val();
      let dWorkout = Object.values(data)
      setRecomendWO(dWorkout)
      console.log("Console Log Set Data",  data)
    })
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.teks}>Halo,Reza</Text>
          <TouchableOpacity>
          <Image source={Profile} style={styles.gambar} />
          </TouchableOpacity>
        </View>

        {/* Recomendation Workout Section  */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              marginLeft: 16,
              marginTop: 30,
              fontWeight: "bold",
              flex: 1,
            }}
          >
            Recomendation Workout
          </Text>
          {/* <TouchableOpacity onPress={goToWorkout}>
            <Text style={{ marginTop: 30, marginRight: 16 }}>See More</Text>
          </TouchableOpacity> */}
        </View>

        <View style={{ marginLeft: 16, marginTop: 20 }}>
          <FlatList
            horizontal
            style={{ borderColor: "#FFFFF" }}
            showsHorizontalScrollIndicator={false}
            data={dataRecomendWO}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ width: 160, elevation: 1, padding: 10 }}
              >
                <Image
                  source={{uri: item.imageURL}}
                  style={{ borderRadius: 10, width: 140, height: 80 }}
                />
                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  {item.title}
                </Text>
                <Text style={{ marginTop: 5 }}>{item.time}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* END SECTION  WORKOUT RECOMENDATION*/}

        {/* Healthy Food Category Section */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              marginLeft: 16,
              marginTop: 30,
              fontWeight: "bold",
              flex: 1,
            }}
          >
            Healthy Food Category
          </Text>
  
        </View>

        <View style={{ marginLeft: 16, marginTop: 20 }}>
          <FlatList
            horizontal
            style={{ borderColor: "#FFFFF" }}
            showsHorizontalScrollIndicator={false}
            data={dataFoodCategory}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ width: 160, elevation: 1, padding: 10 }}
              >
                <Image
                  source={item.image}
                  style={{ borderRadius: 10, width: 140, height: 80 }}
                />
                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  {item.judul}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* END SECTION HEALTHY FOOD CATEGORY */}

        {/* HEALTHY STORY SECTION */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              marginLeft: 16,
              marginTop: 30,
              fontWeight: "bold",
              flex: 1,
            }}
          >
            Healthy Life Story
          </Text>
          <TouchableOpacity>
            <Text style={{ marginTop: 30, marginRight: 16 }}>See More</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 16, marginTop: 20 }}>
          <FlatList
            horizontal
            style={{ borderColor: "#FFFFF" }}
            showsHorizontalScrollIndicator={false}
            data={dataHealthyStory}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ width: 160, elevation: 1, padding: 10 }}
              >
                <Image
                  source={item.image}
                  style={{ borderRadius: 10, width: 140, height: 80 }}
                />
                <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                  {item.judul}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* END HEALTHY STORY SECTION */}
      </View>
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
