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
  import React from 'react'
  import BodyShaper from '../../assets/image/BODYSHAPER.jpg'

const ChestWorkout = () => {
  return (
    <ScrollView>
    <View style={{margin:30}}>
      <Text style={{textAlign:"center", alignItems:"center",fontWeight:"bold", marginTop:30, fontSize:20}}>CHEST</Text>
      <View style={{marginTop:30}}>
        <TouchableOpacity style={{height:220,backgroundColor:"#FFFFFF", borderRadius:10, elevation:3, overflow:"hidden"}}>
          <ImageBackground source={BodyShaper} style={{height:154}}>
          </ImageBackground>
          <Text style={{marginTop:10,marginLeft:10, fontWeight:"bold"}}>BODY SHAPER</Text>
          <View style={{flexDirection:"row"}}>
          <Text style={{marginTop:4,marginLeft:10,}}>Intermediate</Text>
          <Text style={{marginTop:4,marginLeft:10,}}>10 m</Text>
          </View>


        </TouchableOpacity>
        <TouchableOpacity style={{height:220,backgroundColor:"#FFFFFF", borderRadius:10, elevation:3, overflow:"hidden", marginTop:30}}>
          <Text style={{textAlign:"center"}}>IMAGE</Text>

        </TouchableOpacity>

        <TouchableOpacity style={{height:220,backgroundColor:"#FFFFFF", borderRadius:10, elevation:3, overflow:"hidden", marginTop:30}}>
          <Text style={{textAlign:"center"}}>IMAGE</Text>

        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

export default ChestWorkout