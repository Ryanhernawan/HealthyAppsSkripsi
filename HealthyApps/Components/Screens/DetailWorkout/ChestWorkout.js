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
  import React from 'react'
  import WO1 from '../../../assets/image/ChestWorkout/Chest1.webp'
  import WO2 from '../../../assets/image/ChestWorkout/Chest2.webp'
  import WO3 from '../../../assets/image/ChestWorkout/Chest3.webp'


  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import { Link, useNavigation } from "@react-navigation/native";


const ChestWorkout = () => {

  const navigation = useNavigation();

  const goToVidio1 = () =>{
    Linking.openURL('https://www.youtube.com/watch?v=4o1YzksPuqg');
  }
  const goToVidio2 = () =>{
    Linking.openURL('https://www.youtube.com/watch?v=qwx1VV9vV1A');
  }
  const goToVidio3 = () =>{
    Linking.openURL('https://www.youtube.com/watch?v=rxEMKXW2Wqs');
  }

  const goToWorkout = () =>{
    navigation.navigate("Workout")
  }



  return (
    <ScrollView>
    <View style={{margin:30}}>

      <View style={{flexDirection:"row", alignItems:"center", marginTop:30}}>
        <MaterialCommunityIcons name="arrow-left" size={25} onPress={goToWorkout} />
        <Text style={{textAlign:"center", alignItems:"center",fontWeight:"bold",fontSize:20, marginLeft:122}}>CHEST</Text>
      </View>


      <View style={{marginTop:30}}>
        <TouchableOpacity style={{backgroundColor:"#FFFFFF", borderRadius:10, elevation:3, overflow:"hidden"}} onPress={goToVidio1}>
            <ImageBackground source={WO1} style={{height:170}}>
            </ImageBackground>
            <Text style={{marginTop:10,marginLeft:10, fontWeight:"bold"}}>15 Minutes Dumbell Chest At Home</Text>
          <View style={{flexDirection:"row",marginBottom:16}}>
            <Text style={{marginTop:4,marginLeft:10,}}>Intermediate</Text>
            <Text style={{marginTop:4,marginLeft:10,}}>15 m</Text>
          </View>


        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"#FFFFFF", borderRadius:10, elevation:3, overflow:"hidden", marginTop:30}} onPress={goToVidio2}>
          <ImageBackground source={WO2} style={{height:170}}>
            </ImageBackground>
            <Text style={{marginTop:10,marginLeft:10, fontWeight:"bold"}}>Most Effective CHEST Workout at HOME</Text>
          <View style={{flexDirection:"row",marginBottom:16}}>
            <Text style={{marginTop:4,marginLeft:10,}}>Intermediate</Text>
            <Text style={{marginTop:4,marginLeft:10,}}>13 m</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:"#FFFFFF", borderRadius:10, elevation:3, overflow:"hidden", marginTop:30}} onPress={goToVidio3}>
          <ImageBackground source={WO3} style={{height:170}}>
            </ImageBackground>
            <Text style={{marginTop:10,marginLeft:10, fontWeight:"bold"}}>Home Chest Workout</Text>
          <View style={{flexDirection:"row",marginBottom:16}}>
            <Text style={{marginTop:4,marginLeft:10,}}>Beginner</Text>
            <Text style={{marginTop:4,marginLeft:10,}}>10 m</Text>
          </View>

        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

export default ChestWorkout