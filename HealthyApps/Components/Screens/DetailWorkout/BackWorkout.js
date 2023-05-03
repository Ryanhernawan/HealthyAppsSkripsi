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
  import React, { useState, useEffect  } from 'react'
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import { Link, useNavigation } from "@react-navigation/native";


  import WO1 from '../../../assets/image/BackWorkout/Back1.webp'
  import WO2 from '../../../assets/image/AbsWorkout/Abs2.webp'
  import WO3 from '../../../assets/image/AbsWorkout/Abs3.webp'




const BackWorkout = () => {

  const navigation = useNavigation();

    const goToWorkout = () =>{
        navigation.navigate("Workout")
    }

    const goToVidio1 = () =>{
        Linking.openURL('https://www.youtube.com/watch?v=imRJUblCTjw');
      }

    const goToVidio2 = () =>{
        Linking.openURL('https://www.youtube.com/watch?v=tf685ggJv9k&t=13s');
      }

    const goToVidio3 = () =>{
        Linking.openURL('https://www.youtube.com/watch?v=nfsQW1uGoBg');
      }

      const handlePress = () => {
        setIsLiked(!isLiked);
      };
    
      const [isLiked, setIsLiked] = useState(false);
    

    const [dataWorkout, setDataWorkout] = useState([
        {
          judul: "BACK WORKOUT AT HOME",
          level: "Beginner",
          time: "15 m",
          image: require("../../../assets/image/BackWorkout/Back1.webp"),
          goTo: goToVidio1
        },
        {
          judul: "20 Minute Dumbbell Back and Biceps",
          level: "Intermediate",
          time: "20 m",
          image: require("../../../assets/image/BackWorkout/Back2.webp"),
          goTo: goToVidio2
        },
        {
          judul: "At Home Back Workout",
          level: "Beginner",
          time: "7 m",
          image: require("../../../assets/image/BackWorkout/Back3.webp"),
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
          BACK
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
  )
}

export default BackWorkout