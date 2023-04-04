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

const WorkoutPage = () => {
  return (
    <ScrollView>
    <View style={{margin:30}}>
      <Text style={{marginTop:50, fontSize:20, fontWeight:"bold"}}>Workouts</Text>
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{backgroundColor:"#E2E8F0", width:30, height:20, marginTop:10, borderRadius:4}}>
          <Text style={{textAlign:"center"}}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:"#E2E8F0", width:90, height:20, marginTop:10, borderRadius:4, marginLeft:10}}>
          <Text style={{textAlign:"center"}}>My Favorite</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={{backgroundColor:"#E2E8F0", width:70, height:20, marginTop:10, borderRadius:4}}>
          <Text style={{textAlign:"center"}}>Beginner</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:"#E2E8F0", width:90, height:20, marginTop:10, borderRadius:4, marginLeft:10}}>
          <Text style={{textAlign:"center"}}>Intermediate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:"#E2E8F0", width:70, height:20, marginTop:10, borderRadius:4, marginLeft:10}}>
          <Text style={{textAlign:"center"}}>Advance</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop:30, flexDirection:"row",alignItems:"center" }}>
        <Text style={{fontSize:20, fontWeight:"bold",flex:1}}>Tranding Workout</Text>
        <TouchableOpacity>
          <Text style={{ }}>View All</Text>
        </TouchableOpacity>
       

      </View>
    </View>
    </ScrollView>
  )
}

export default WorkoutPage