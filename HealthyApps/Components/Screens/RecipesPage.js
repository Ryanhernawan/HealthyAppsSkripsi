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
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Week1 from "../../assets/image/RecipesThisWeek1.png";
import Week2 from "../../assets/image/RecipesThisWeek2.png";
import BOD1 from "../../assets/image/BOD1.png";
import BOD2 from "../../assets/image/BOD2.png";
import BOD3 from "../../assets/image/BOD3.png";

// IMPORT FETCHNG API
import axios from "axios";
import app from './config'

// import firebase from 'firebase/compat/app'

import {getDatabase, ref, onValue, get} from  'firebase/database';

//---------------------------------


const RecipesPage = () => {


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

  const [dataBOD, setDataBOD] = useState([]);

  useEffect (() =>{
    const db = getDatabase(app)
    const dbRef = ref(db, 'data/recipes/recipesBOD');
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) =>{
      let data = snapshot.val();
      let dRecipes = Object.values(data)
      setDataBOD(dRecipes)
      console.log("Console Log Set Data",  data)
    })
  }, [])


  const [dataThisWeek, setDataThisWeek] = useState([]);

  useEffect (() =>{
    const db = getDatabase(app)
    const dbRef = ref(db, 'data/recipes/recipesThisWeek');
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) =>{
      let data = snapshot.val();
      let dRecipes = Object.values(data)
      setDataThisWeek(dRecipes)
      console.log("Console Log Set Data",  data)
    })
  }, [])

  const navigation = useNavigation();


  return (
    <ScrollView>
      <View>
        {/* HEADER SECTION */}
        <View
          style={{ backgroundColor: "#166534", width: "100%", height: 280 }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              marginTop: 58,
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Recipes
          </Text>
          <Text
            style={{
              marginTop: 69,
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
              style={{ borderColor: "#FFFFF",marginRight:1, }}
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
                    <Image source={{uri: item.image}} style={{ width: 60, height: 60, borderRadius:100 }} />
                    <Text style={{ marginLeft: 8 }}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
            
              </View>
            
            )}
            />
          </View>
        </View>
        {/* END SECTON CAROUSEL THIS WEEK */}

        {/* BEST OF THE DAY SECTION */}
        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 34,
              marginLeft: 16,
            }}
          >
            Best of The Day
          </Text>
          <View
            style={{
              width: "100%",
              height: "100%",
              marginLeft: 16,
              height: 420,

            }}
          >
            <FlatList
              horizontal
              style={{ borderColor: "#FFFFF",marginRight:12, }}
              showsHorizontalScrollIndicator={false}
              data={dataBOD}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row", marginRight: 25 }}>
                  <TouchableOpacity
                    style={{
                      marginTop: 20,
                      width: 139,
                      height: 140,
                      borderRadius: 8,
                      padding: 20,
                    }}
                    onPress={() =>
                      navigation.navigate("DetailRecipes", { data: item })
                    }
                  >
                    <View style={{ flexDirection: "column", width: 117 }}>
                      <Image
                        source={{uri: item.image}}
                        style={{
                          width: 145,
                          height: 150,
                          borderRadius: 15,
                          marginLeft: -23,
                          marginTop: -20,
                        }}
                      />
                      <Text style={{ marginLeft: -20, marginTop: 10 }}>
                        {item.title}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: -20,
                          marginTop: 10,
                        }}
                      >
                        <Text>{item.time}</Text>
                        <Text style={{ marginLeft: 11 }}>{item.serve}</Text>
                      </View>
                      <Text
                        style={{
                          marginLeft: -20,
                          marginTop: 10,
                          color: "#F97316",
                        }}
                      >
                        {item.rating}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
        {/* END BEST OF THE DAY SECTION */}

        {/* Healthy Food Category Section */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: -130,
          }}
        >
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
          <TouchableOpacity>
            <Text style={{ marginTop: 30, marginRight: 16 }}>See More</Text>
          </TouchableOpacity>
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
      </View>
    </ScrollView>
  );
};

export default RecipesPage;
