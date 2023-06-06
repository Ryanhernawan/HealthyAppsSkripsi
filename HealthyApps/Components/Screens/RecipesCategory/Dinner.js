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
    LogBox
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
  
const Dinner = () => {
 const navigation = useNavigation();

    const columns = 2;
  
    const goToHome = () => {
      navigation.navigate("Home");
    };
  
   
  
    //  FETCHING DATA
    const [dataDiner, setDatadinner] = useState([]);
  
    useEffect(() => {
      const db = getDatabase(app);
      const dbRef = ref(db, "data/recipes/recipesCategory/dinner");
      console.log("Receiving Data");
      onValue(dbRef, (snapshot) => {
        let data = snapshot.val();
        let dRecipes = Object.values(data);
        setDatadinner(dRecipes);
        console.log("Console Log Set Data", data);
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        LogBox.ignoreLogs(['Each Child in a list shoudld']);

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
                  marginLeft: 140,
                  color: "white",
                  marginTop: 35,
                }}
              >
                Dinner
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
                        <Text style={{ marginLeft: 8, width:100 }}>{item.title}</Text>
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
              Choose your Dinner
            </Text>
  
          {/* CHOOSE YOUR BREAKFAST*/}
     
          <View style={{ margin: 30 }}>
          <FlatList
           style={{ borderColor: "#FFFFF"}}
           showsVerticalScrollIndicator={false}
           data={dataDiner}
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
                  <Text style={{ marginTop: 4, marginLeft: 10 }}>{item.time}m</Text>
                </View>
              </TouchableOpacity>
             )}
          /> 
        </View>
         
          {/* END CHOOSE YOUR BRAKFAST*/}
        </View>
        </ScrollView>
    );  
}

export default Dinner