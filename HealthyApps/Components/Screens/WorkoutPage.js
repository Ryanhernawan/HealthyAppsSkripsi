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
  Linking,
  Button,
  LogBox
} from "react-native";
import React, { useState, useEffect } from "react";
import { WebView } from 'react-native-webview';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Link, useNavigation } from "@react-navigation/native";
import Video from 'react-native-video';


import Cardio from "../../assets/image/Cardio.jpg";
import Abs from "../../assets/image/AbsCategory.png";
import Back from "../../assets/image/BackCategory.png";
import Arms from "../../assets/image/ArmsCategory.png";
import Chest from "../../assets/image/ChestCategory.png";
import Leg from "../../assets/image/LegCategory.png";
import Butt from "../../assets/image/ButtCategory.png";

// IMPORT FETCHNG API
import app from "./config";

// import {db} from './config'
import firebase from "firebase/compat/app";

import { getDatabase, ref, onValue, get } from "firebase/database";

//---------------------------------

const WorkoutPage = () => {
  const navigation = useNavigation();

  const goToAllWorkout = () => {
    navigation.navigate("AllWorkout");
  };

  const goToFavoriteWorkout = () => {
    navigation.navigate("MyFavoriteWorkout");
  };

  const goToBeginnerWorkout = () => {
    navigation.navigate("BeginnerWorkout");
  };

  const goToAdvanceWorkout = () => {
    navigation.navigate("AdvanceWorkout");
  };

  const goToIntermediateWorkout = () => {
    navigation.navigate("IntermediateWorkout");
  };

  const goToChestDetail = () => {
    navigation.navigate("Chest");
  };

  const goToAbsDetail = () => {
    navigation.navigate("Abs");
  };

  const goToBackDetail = () => {
    navigation.navigate("Back");
  };

  const goToArmsDetail = () => {
    navigation.navigate("Arms");
  };

  const goToLegsDetail = () => {
    navigation.navigate("Legs");
  };

  const goToButtDetail = () => {
    navigation.navigate("Butt");
  };

  const goToVidio1 = () => {
    Linking.openURL("https://www.youtube.com/watch?v=4o1YzksPuqg");
  };

  const goToVidio2 = (item) => {
    // Linking.openURL(item.videoURL);
  };

  // FECTHING DATA

  const [trandingWorkout, setTranding] = useState([]);

  const linkingURL = (item) => {
    Linking.openURL(item.videoURL)
  };

  

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/Workout/trandingWorkout");
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      let dWorkout = Object.values(data);
      setTranding(dWorkout);
      console.log("Console Log Set Data", data);
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
      LogBox.ignoreLogs(['Each Child']);

    });
  }, []);

  return (
    <ScrollView>
      <View style={{ margin: 30 }}>
        <Text style={{ marginTop: 50, fontSize: 20, fontWeight: "bold" }}>
          Workouts
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#E2E8F0",
              width: 30,
              height: 20,
              marginTop: 10,
              borderRadius: 4,
            }}
            onPress={goToAllWorkout}
          >
            <Text style={{ textAlign: "center" }}>All</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={{
              backgroundColor: "#E2E8F0",
              width: 90,
              height: 20,
              marginTop: 10,
              borderRadius: 4,
              marginLeft: 10,
            }}
            onPress={goToFavoriteWorkout}
          >
            <Text style={{ textAlign: "center" }}>My Favorite</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              backgroundColor: "#E2E8F0",
              width: 70,
              height: 20,
              marginTop: 10,
              borderRadius: 4,
              marginLeft: 10,
            }}
            onPress={goToBeginnerWorkout}
          >
            <Text style={{ textAlign: "center" }}>Beginner</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#E2E8F0",
              width: 90,
              height: 20,
              marginTop: 10,
              borderRadius: 4,
              marginLeft: 10,
            }}
            onPress={goToIntermediateWorkout}
          >
            <Text style={{ textAlign: "center" }}>Intermediate</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#E2E8F0",
              width: 70,
              height: 20,
              marginTop: 10,
              borderRadius: 4,
              marginLeft: 10,
            }}
            onPress={goToAdvanceWorkout}
          >
            <Text style={{ textAlign: "center" }}>Advance</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          
        </View>

        {/* TRANDING WORKOUT SECTION */}
        <View
          style={{ marginTop: 30, flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", flex: 1 }}>
            Tranding Workout
          </Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={trandingWorkout}
            keyExtractor={(item) => item.key}
            initialNumToRender={2}
            style={{ marginLeft: -30 }}
            renderItem={({ item }) => (
              <View style={{ marginTop: 18, flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: "#E2E8F0",
                    width: 257,
                    height: 210,
                    borderRadius: 10,
                    marginLeft: 30,
                  }}
                >
                  <Image
                    source={{ uri: item.imageURL }}
                    style={{
                      width: 257,
                      height: 120,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
               
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        marginTop: 20,
                        marginLeft: 13,
                        fontSize: 16,
                        flex: 1,
                      }}
                    >
                      {item.title}
                    </Text>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="play-circle"
                        size={40}
                        style={{ marginRight: 10 }}
                        onPress={() => navigation.navigate("DetailWO", { data: item })}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={{ marginTop: 1, marginLeft: 13, fontSize: 12 }}>
                    15 min
                  </Text>
                </View>
              </View>
            )}
          />
        </ScrollView>

        {/* TRANDING WOKROUT END SECTION */}

        {/* CATEGORY WORKOUT SECTION */}

        <View style={{ marginTop: 45 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Category</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View>
              <TouchableOpacity onPress={goToAbsDetail}>
                <Image source={Abs} style={{ width: 89, height: 90 }} />
                <Text
                  style={{
                    alignItems: "center",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Abs
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 37 }}>
              <TouchableOpacity onPress={goToBackDetail}>
                <Image source={Back} style={{ width: 89, height: 90 }} />
                <Text
                  style={{
                    alignItems: "center",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Back
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 37 }}>
              <TouchableOpacity onPress={goToArmsDetail}>
                <Image source={Arms} style={{ width: 89, height: 90 }} />
                <Text
                  style={{
                    alignItems: "center",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Arms
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <TouchableOpacity onPress={goToChestDetail}>
              <Image source={Chest} style={{ width: 89, height: 90 }} />
              <Text
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Chest
              </Text>
            </TouchableOpacity>

            <View style={{ marginLeft: 37 }}>
              <TouchableOpacity onPress={goToLegsDetail}>
                <Image source={Leg} style={{ width: 89, height: 90 }} />
                <Text
                  style={{
                    alignItems: "center",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Legs
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft: 37 }}>
              <TouchableOpacity onPress={goToButtDetail}>
                <Image source={Butt} style={{ width: 89, height: 90 }} />
                <Text
                  style={{
                    alignItems: "center",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Butt
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* CATEGORY WORKOUT END SECTION */}

     
      </View>
    </ScrollView>
  );
};

export default WorkoutPage;
