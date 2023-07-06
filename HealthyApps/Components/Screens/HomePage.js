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
   
  const auth = FIREBASE_AUTH

  const navigation = useNavigation();

  const [name, setName] = useState(null)


  useEffect(() => {
    const currentUserId = auth.currentUser.uid
    const db = getDatabase(app);
    const dbRef = ref(db, "data/users/" + currentUserId);
    onValue(dbRef, (snapshot) => {
      const user = snapshot.val()
      setName(user)
      console.log(user)
      LogBox.ignoreLogs(['Possible Unhandled Promise']);
    })
    // return () => {
    //   userRef.off('value');
    // };
  }, [])

 


  const goToBreakfast = () => {
    navigation.navigate("Breakfast");
  };
  const goToLunch = () => {
    navigation.navigate("Lunch");
  };

  const goToDinner = () => {
    navigation.navigate("Dinner");
  };

  const goToDetailArticle = () => {
    navigation.navigate("DetailArticle");
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  const [dataRecomendWO, setRecomendWO] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/Workout/recomendationWorkout");
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      let dWorkout = Object.values(data);
      setRecomendWO(dWorkout);
      console.log("Console Log Set Data", data);
    });
  }, []);

  const [dataFoodCategory, setdataFoodCategory] = useState([
    {
      judul: "Breakfast",
      image: require("../../assets/image/breakfast.png"),
      goTo: goToBreakfast,
    },
    {
      judul: "Lunch",
      image: require("../../assets/image/lunch.png"),
      goTo: goToLunch,
    },
    {
      judul: "Dinner",
      image: require("../../assets/image/dinner.png"),
      goTo: goToDinner,
    },
  ]);

  const [dataHealthyStory, setdataHealthyStory] = useState([]);
  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/article");
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      let dWorkout = Object.values(data);
      setdataHealthyStory(dWorkout);
      console.log("Console Log Set Data", data);
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          {name && (
          <>
          <Text style={{fontWeight: "bold", fontSize: 20, flex: 1, }}>Hello, {name.Fullname}</Text>
          <TouchableOpacity>
            <Text style={styles.teks}>Being healthy is important</Text>

            {/* <Image source={Profile} style={styles.gambar} /> */}
          </TouchableOpacity>
          </>
          )}
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
            Recommendation Workout
          </Text>
        </View>

        <View style={{ marginLeft: 16, marginTop: 20 }}>
          <FlatList
            horizontal
            style={{ borderColor: "#FFFFF" }}
            showsHorizontalScrollIndicator={false}
            data={loading ? Array.from({ length: 1 }) : dataRecomendWO} // Menggunakan skeleton loader saat loading masih true
            keyExtractor={(item, index) => item?.key || index.toString()}
            renderItem={({ item }) => {
              if (loading) {
                // Tampilkan skeleton loader saat masih loading
                return (
                  <>
                    <View
                      style={{
                        backgroundColor: "#94A3B8",
                        padding: 10,
                        borderRadius: 10,
                        width: 140,
                        height: 80,
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      {/* <Text>Getting Data...</Text> */}
                    </View>
                    <View
                      style={{
                        backgroundColor: "#94A3B8",
                        padding: 10,
                        borderRadius: 10,
                        width: 140,
                        height: 80,
                        marginLeft: 16,
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      {/* <Text>Getting Data...</Text> */}
                    </View>
                    <View
                      style={{
                        backgroundColor: "#94A3B8",
                        padding: 10,
                        borderRadius: 10,
                        width: 140,
                        height: 80,
                        marginLeft: 16,
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      {/* <Text>Getting Data...</Text> */}
                    </View>
                  </>
                );
              } else {
                // Tampilkan data aktual setelah selesai loading
                return (
                  <TouchableOpacity
                    style={{ width: 160, elevation: 1, padding: 10 }}
                    onPress={() =>
                      navigation.navigate("DetailWO", { data: item })
                    }
                  >
                    <Image
                      source={{ uri: item.imageURL }}
                      style={{ borderRadius: 10, width: 140, height: 80 }}
                    />
                    <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                      {item.title}
                    </Text>
                    <Text style={{ marginTop: 5 }}>{item.time}</Text>
                    {/* <Text style={{ marginTop: 5 }}>{item.level}</Text> */}
                  </TouchableOpacity>
                );
              }
            }}
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
            renderItem={({ item }) => {
              if (loading) {
                // Tampilkan skeleton loader saat masih loading
                return (
                  <>
                    <View
                      style={{
                        backgroundColor: "#94A3B8",
                        padding: 10,
                        borderRadius: 10,
                        width: 140,
                        height: 80,
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      {/* <Text>Getting Data...</Text> */}
                    </View>
                    <View
                      style={{
                        backgroundColor: "#94A3B8",
                        padding: 10,
                        borderRadius: 10,
                        width: 140,
                        height: 80,
                        marginLeft: 16,
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      {/* <Text>Getting Data...</Text> */}
                    </View>
                    <View
                      style={{
                        backgroundColor: "#94A3B8",
                        padding: 10,
                        borderRadius: 10,
                        width: 140,
                        height: 80,
                        marginLeft: 16,
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      {/* <Text>Getting Data...</Text> */}
                    </View>
                  </>
                );
              } else {
                // Tampilkan data aktual setelah selesai loading
                return (
                  <TouchableOpacity
                  style={{ width: 160, elevation: 1, padding: 10 }}
                  onPress={item.goTo}
                >
                  <Image
                    source={item.image}
                    style={{ borderRadius: 10, width: 140, height: 80 }}
                  />
                  <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                    {item.judul}
                  </Text>
                </TouchableOpacity>
                )
              }
            }}
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
            Article
          </Text>
          {/* <TouchableOpacity>
            <Text style={{ marginTop: 30, marginRight: 16 }}>See More</Text>
          </TouchableOpacity> */}
        </View>

        <View style={{ marginLeft: 16, marginTop: 20 }}>
          <FlatList
            horizontal
            style={{ borderColor: "#FFFFF" }}
            showsHorizontalScrollIndicator={false}
            data={loading ? Array.from({ length: 1 }) : dataHealthyStory} // Menggunakan skeleton loader saat loading masih true
            keyExtractor={(item, index) => item?.key || index.toString()}
            renderItem={({ item }) => {
              if (loading) {
                // Tampilkan skeleton loader saat masih loading
                return (
                  <>
                    <View
                      style={{
                        backgroundColor: "#94A3B8",
                        padding: 10,
                        borderRadius: 10,
                        width: 140,
                        height: 80,
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      {/* <Text>Getting Data...</Text> */}
                    </View>
                    <View
                      style={{
                        backgroundColor: "#94A3B8",
                        padding: 10,
                        borderRadius: 10,
                        width: 140,
                        height: 80,
                        marginLeft: 16,
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      {/* <Text>Getting Data...</Text> */}
                    </View>
                    <View
                      style={{
                        backgroundColor: "#94A3B8",
                        padding: 10,
                        borderRadius: 10,
                        width: 140,
                        height: 80,
                        marginLeft: 16,
                        alignItems: "center",
                        alignContent: "center",
                      }}
                    >
                      {/* <Text>Getting Data...</Text> */}
                    </View>
                  </>
                );
              } else {
                return (
                  <TouchableOpacity
                    style={{ width: 160, elevation: 1, padding: 10 }}
                    onPress={() =>
                      navigation.navigate("DetailArticle", { data: item })
                    }
                    // onPress={goToDetailArticle}
                  >
                    <Image
                      source={{ uri: item.imageURL }}
                      style={{ borderRadius: 10, width: 140, height: 80 }}
                    />
                    <Text
                      style={{
                        marginTop: 10,
                        fontWeight: "bold",
                        width: 130,
                        height: 100,
                      }}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                );
              }
            }}
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
