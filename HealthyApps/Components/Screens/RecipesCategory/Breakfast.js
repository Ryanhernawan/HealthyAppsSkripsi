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
} from "react-native";
import React, { useState, useEffect } from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Link, useNavigation } from "@react-navigation/native";

// IMPORT FETCHNG API
import axios from "axios";
import app from "../config";

// import {db} from './config'
import firebase from "firebase/compat/app";

import { getDatabase, ref, onValue } from "firebase/database";

const Breakfast = () => {
  const navigation = useNavigation();

  const columns = 2;

  const goToHome = () => {
    navigation.navigate("Home");
  };

  const [data, setData] = useState([
    {
      title: "resep1",
      rating: "12",
      image:
        "https://firebasestorage.googleapis.com/v0/b/healthyappsskripsi.appspot.com/o/Recipes%20BOD%2FBOD1.png?alt=media&token=572e1c00-d7d3-492f-851b-a266d81bfa8a",
    },
    {
      title: "resep2",
      rating: "12",
      image:
        "https://firebasestorage.googleapis.com/v0/b/healthyappsskripsi.appspot.com/o/Recipes%20BOD%2FBOD1.png?alt=media&token=572e1c00-d7d3-492f-851b-a266d81bfa8a",
    },
    {
      title: "resep3",
      rating: "12",
      image:
        "https://firebasestorage.googleapis.com/v0/b/healthyappsskripsi.appspot.com/o/Recipes%20BOD%2FBOD1.png?alt=media&token=572e1c00-d7d3-492f-851b-a266d81bfa8a",
    },
    {
      title: "reseps4",
      rating: "12",
      image:
        "https://firebasestorage.googleapis.com/v0/b/healthyappsskripsi.appspot.com/o/Recipes%20BOD%2FBOD1.png?alt=media&token=572e1c00-d7d3-492f-851b-a266d81bfa8a",
    },
    {
      title: "resepsa5",
      rating: "12",
      image:
        "https://firebasestorage.googleapis.com/v0/b/healthyappsskripsi.appspot.com/o/Recipes%20BOD%2FBOD1.png?alt=media&token=572e1c00-d7d3-492f-851b-a266d81bfa8a",
    },
    {
      title: "reseps6s",
      rating: "1aa2",
      image:
        "https://firebasestorage.googleapis.com/v0/b/healthyappsskripsi.appspot.com/o/Recipes%20BOD%2FBOD1.png?alt=media&token=572e1c00-d7d3-492f-851b-a266d81bfa8a",
    },
    
    
  ]);

  //  FETCHING DATA
  const [dataBreakfast, setDataBreakfast] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/recipes/recipesCategory/breakfast");
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      let dRecipes = Object.values(data);
      setDataBreakfast(dRecipes);
      console.log("Console Log Set Data", data);
    });
  }, []);

  const [dataThisWeek, setDataThisWeek] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/recipes/recipesThisWeek");
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      let dRecipes = Object.values(data);
      setDataThisWeek(dRecipes);
      console.log("Console Log Set Data", data);
    });
  }, []);

  return (
    <ScrollView>
      <View style={{height: "100%"}}>
      <View
          style={{ backgroundColor: "#166534", width: "100%", height: 280 }}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: 50,
              marginTop: 20
            }}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={25}
              onPress={goToHome}
              color="white"
              style={{ marginLeft: 16, marginTop: 35 }}
            />
            <Text
              style={{
                textAlign: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: 20,
                marginLeft: 116,
                color: "white",
                marginTop: 35,
              }}
            >
              Breakfast
            </Text>
          </View>
          <Text
            style={{
             
              marginLeft: 16,
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Popular Recipes
          </Text>
          <Text
            style={{
              marginTop: 2,
              marginLeft: 16,
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            This Week
          </Text>
          {/* END HEADER SECTION */}

          {/* CAROUSEL RECIPES THIS WEEK SECTION */}
          <View style={{ width: "100%", height: 120 }}>
            <FlatList
              horizontal
              style={{ borderColor: "#FFFFF", marginRight: 1 }}
              showsHorizontalScrollIndicator={false}
              data={dataThisWeek}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row", marginRight: 1 }}>
                  <TouchableOpacity
                    style={{
                      marginLeft: 16,
                      marginTop: 20,
                      backgroundColor: "#FFFFFF",
                      width: 253,
                      height: 100,
                      borderRadius: 8,
                      padding: 20,
                    }}
                    onPress={() =>
                      navigation.navigate("DetailRecipes", { data: item })
                    }
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={{ width: 60, height: 60, borderRadius: 100 }}
                      />
                      <Text style={{ marginLeft: 8 }}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
        {/* END SECTON CAROUSEL THIS WEEK */}
        <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 80,
              marginLeft: 16,
           
            }}
          >
            Choose your breakfast
          </Text>

        {/* CHOOSE YOUR BREAKFAST*/}
   
        <View style={{ margin: 30 }}>
        <FlatList
         style={{ borderColor: "#FFFFF"}}
         showsVerticalScrollIndicator={false}
         data={dataBreakfast}
         keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                elevation: 3,
                overflow: "hidden",
                marginTop:20
               
              }}
              onPress={() =>
                navigation.navigate("DetailRecipes", { data: item })
              }
            >
              <ImageBackground
                source={{uri: item.image}}
                style={{ height: 170 }}
              ></ImageBackground>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    fontWeight: "bold",
                    flex: 1,
                  }}
                >
                  {item.title}
                </Text>

                {/* <TouchableOpacity >
                  <MaterialCommunityIcons
                    name="heart"
                    size={30}
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity> */}
              </View>
              <View style={{ flexDirection: "row", marginBottom: 16 }}>
                <Text style={{ marginTop: 4, marginLeft: 10 }}>Cooking time: </Text>
                <Text style={{ marginTop: 4, marginLeft: 10 }}>{item.time}</Text>
              </View>
            </TouchableOpacity>
           )}
        /> 
      </View>
       
        {/* END CHOOSE YOUR BRAKFAST*/}
      </View>
      </ScrollView>
 
  );
};

export default Breakfast;
