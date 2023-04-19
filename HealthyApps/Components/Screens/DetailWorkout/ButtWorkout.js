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
import React, { useState, useEffect  } from "react";
import WO1 from "../../../assets/image/AbsWorkout/Abs1.webp";
import WO2 from "../../../assets/image/AbsWorkout/Abs2.webp";
import WO3 from "../../../assets/image/AbsWorkout/Abs3.webp";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Link, useNavigation } from "@react-navigation/native";

const AbsWorkout = () => {
  const navigation = useNavigation();

  const goToWorkout = () => {
    navigation.navigate("Workout");
  };

  const goToVidio1 = () => {
    Linking.openURL("https://www.youtube.com/watch?v=bggX6ocjojk");
  };
  const goToVidio2 = () => {
    Linking.openURL("https://www.youtube.com/watch?v=yV7fDgNlYKM");
  };
  const goToVidio3 = () => {
    Linking.openURL("https://www.youtube.com/watch?v=6hOAGDbkLOw");
  };

  const handlePress = () => {
    setIsLiked(!isLiked);
  };

  const [isLiked, setIsLiked] = useState(false);



  const [dataWorkout, setDataWorkout] = useState([
    {
      judul: "15 min BOOTY BURN",
      level: "Beginner",
      time: "17 m",
      image: require("../../../assets/image/ButtWorkout/Butt1.webp"),
      goTo: goToVidio1
    },
    {
      judul: "10 BEST EXERCISES TO START GROWING YOUR BOOTY",
      level: "Intermediate",
      time: "12 m",
      image: require("../../../assets/image/ButtWorkout/Butt2.webp"),
      goTo: goToVidio2
    },
    {
      judul: "10 MIN GLUTE WORKOUT: Work Your Booty with No Equipment",
      level: "Advance",
      time: "15 m",
      image: require("../../../assets/image/ButtWorkout/Butt3.webp"),
      goTo: goToVidio3

    },
  ]);

  return (
   
    <>
    {/* {console.log(data)} */}
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
          BUTT
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
              onPress={item.goTo}
            >
              <ImageBackground
                source={item.image}
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
                  {item.judul}
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

    </>
  );
};

export default AbsWorkout;
