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
  import React, { useState } from "react";
  import WO1 from "../../../assets/image/AbsWorkout/Abs1.webp";
  import WO2 from "../../../assets/image/AbsWorkout/Abs2.webp";
  import WO3 from "../../../assets/image/AbsWorkout/Abs3.webp";
  
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import { Link, useNavigation } from "@react-navigation/native";
  
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
  
    const [dataWorkout, setDataWorkout] = useState([
      {
        judul: "15 Minute Arm Burnout",
        level: "Beginner",
        time: "15 m",
        image: require("../../../assets/image/ArmsWorkout/Arms1.webp"),
        goTo: goToVidio1
      },
      {
        judul: "Get Bigger Arms In 30 Days",
        level: "Intermediate",
        time: "5 m",
        image: require("../../../assets/image/ArmsWorkout/Arms2.webp"),
        goTo: goToVidio2
      },
      {
        judul: "5 MIN TONED ARMS WORKOUT",
        level: "Beginner",
        time: "5 m",
        image: require("../../../assets/image/ArmsWorkout/Arms3.webp"),
        goTo: goToVidio3
  
      },
    ]);
  
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
      // </ScrollView>
    );
  };
  
  export default ArmsWorkout;
  