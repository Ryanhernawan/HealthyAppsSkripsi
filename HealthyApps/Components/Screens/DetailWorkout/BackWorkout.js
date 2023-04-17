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
        Linking.openURL('https://www.youtube.com/watch?v=EfJ4aB_enVE&t=5s');
      }

    const goToVidio3 = () =>{
        Linking.openURL('https://www.youtube.com/watch?v=svdPTfOpAyQ&t=1s');
      }

  return (
    <ScrollView>
    <View style={{margin:30}}>

      <View style={{flexDirection:"row", alignItems:"center", marginTop:30}}>
        <MaterialCommunityIcons name="arrow-left" size={25} onPress={goToWorkout} />
        <Text style={{textAlign:"center", alignItems:"center",fontWeight:"bold",fontSize:20, marginLeft:122}}>BACK</Text>
      </View>


      <View style={{marginTop:30}}>
        <TouchableOpacity style={{backgroundColor:"#FFFFFF", borderRadius:10, elevation:3, overflow:"hidden"}} onPress={goToVidio1}>
            <ImageBackground source={WO1} style={{height:170}}>
            </ImageBackground>
            <Text style={{marginTop:10,marginLeft:10, fontWeight:"bold"}}>BACK WORKOUT AT HOME</Text>
          <View style={{flexDirection:"row",marginBottom:16}}>
            <Text style={{marginTop:4,marginLeft:10,}}>Beginner</Text>
            <Text style={{marginTop:4,marginLeft:10,}}>15 m</Text>
          </View>


        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"#FFFFFF", borderRadius:10, elevation:3, overflow:"hidden", marginTop:30}} onPress={goToVidio2}>
          <ImageBackground source={WO2} style={{height:170}}>
            </ImageBackground>
            <Text style={{marginTop:10,marginLeft:10, fontWeight:"bold"}}>12 MIN ABS WORKOUT</Text>
          <View style={{flexDirection:"row",marginBottom:16}}>
            <Text style={{marginTop:4,marginLeft:10,}}>Intermediate</Text>
            <Text style={{marginTop:4,marginLeft:10,}}>12 m</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:"#FFFFFF", borderRadius:10, elevation:3, overflow:"hidden", marginTop:30}} onPress={goToVidio3}>
          <ImageBackground source={WO3} style={{height:170}}>
            </ImageBackground>
            <Text style={{marginTop:10,marginLeft:10, fontWeight:"bold"}}>10 MIN SIX PACK ABS</Text>
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

export default BackWorkout