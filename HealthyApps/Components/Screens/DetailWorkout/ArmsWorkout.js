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

  import WO1 from "../../../assets/image/AbsWorkout/Abs1.webp";
  import WO2 from "../../../assets/image/AbsWorkout/Abs2.webp";
  import WO3 from "../../../assets/image/AbsWorkout/Abs3.webp";
  
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import { Link, useNavigation } from "@react-navigation/native";
  
  // IMPORT FETCHNG API
  import axios from "axios";
  import app from '../config'

  // import {db} from './config'
  import firebase from 'firebase/compat/app'

  import {getDatabase, ref, onValue} from  'firebase/database';

  // --------------

  
  const ArmsWorkout = () => {
    const navigation = useNavigation();
  
    const goToWorkout = () => {
      navigation.navigate("Workout");
    };
  
    const goToVidio1 = () => {
      Linking.openURL("https://www.youtube.com/watch?v=Y346900i9qE");
    };
    const goToVidio2 = () => {
      Linking.openURL("https://youtu.be/jDvdHXpA1Eg");
    };
    const goToVidio3 = () => {
      Linking.openURL("https://www.youtube.com/watch?v=kfP_9z-BtmA");
    };
  
    const [isLiked, setIsLiked] = useState(false);
  
    const handlePress = () => {
      setIsLiked(!isLiked);
    };

    // FETCHING DATA
  
    const [dataWorkout, setDataWorkout] = useState([]);
    const linkingURL = (item) => {
      Linking.openURL(item.videoURL)
    };
  
  
    useEffect (() =>{
      const db = getDatabase(app)
      const dbRef = ref(db, 'data/Workout/categoryWorkout/ARMS');
      console.log("Receiving Data");
      onValue(dbRef, (snapshot) =>{
        let data = snapshot.val();
        let dWorkout = Object.values(data)
        setDataWorkout(dWorkout)
        console.log("Console Log Set Data",  data)
      })
    }, [])
  
    // ----------------------
  
    return (
      // <ScrollView>
      <View style={{ margin: 30 }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={25}
            onPress={goToWorkout}
          />
          <Text
            style={{
              textAlign: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 122,
            }}
          >
            ARMS
          </Text>
        </View>
  
        <View style={{ marginTop: 30 }}>
          <FlatList
           style={{ borderColor: "#FFFFF",height: 550}}
           showsVerticalScrollIndicator={false}
            data={dataWorkout}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 10,
                  elevation: 3,
                  overflow: "hidden",
                  marginTop:20
                 
                }}
                onPress={() => linkingURL(item)}
              >
                <ImageBackground
                  source={{uri: item.imageURL}}
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
  
                  <TouchableOpacity onPress={handlePress}>
                    <MaterialCommunityIcons
                      name="heart"
                      size={30}
                      style={{ marginRight: 10 }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 16 }}>
                  <Text style={{ marginTop: 4, marginLeft: 10 }}>{item.level}</Text>
                  <Text style={{ marginTop: 4, marginLeft: 10 }}>{item.time}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      // </ScrollView>
    );
  };
  
  export default ArmsWorkout;
  