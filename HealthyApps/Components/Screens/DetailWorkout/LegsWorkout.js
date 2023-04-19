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
      Linking.openURL("https://www.youtube.com/watch?v=q7rCeOa_m58");
    };
    const goToVidio2 = () => {
      Linking.openURL("https://www.youtube.com/watch?v=wB9ukMeQfjU");
    };
    const goToVidio3 = () => {
      Linking.openURL("https://www.youtube.com/watch?v=Jg61m0DwURs");
    };
  
    const handlePress = () => {
      setIsLiked(!isLiked);
    };
  
    const [isLiked, setIsLiked] = useState(false);
  
  
  
    const [dataWorkout, setDataWorkout] = useState([
      {
        judul: "20 Min Complete Home Leg Workout",
        level: "Beginner",
        time: "20 m",
        image: require("../../../assets/image/LegsWorkout/Legs1.webp"),
        goTo: goToVidio1
      },
      {
        judul: "15 Min Complete Home Leg Workout",
        level: "Intermediate",
        time: "15 m",
        image: require("../../../assets/image/LegsWorkout/Legs2.webp"),
        goTo: goToVidio2
      },
      {
        judul: "SLIM LEGS IN 20 DAYS",
        level: "Advance",
        time: "11 m",
        image: require("../../../assets/image/LegsWorkout/Legs3.webp"),
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
            LEGS
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
  