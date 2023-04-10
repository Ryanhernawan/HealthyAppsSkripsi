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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Cardio from '../../assets/image/Cardio.jpg'


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

      {/* TRANDING WORKOUT SECTION */}
      <View style={{marginTop:30, flexDirection:"row",alignItems:"center" }}>
        <Text style={{fontSize:20, fontWeight:"bold",flex:1}}>Tranding Workout</Text>
        <TouchableOpacity>
          <Text style={{ }}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      <View style={{marginTop:18, flexDirection:"row"}}>
        <View style={{backgroundColor:"#E2E8F0", width:257, height:210, borderRadius:10}}>
          <Image source={Cardio} style={{width:257, height:120, borderTopLeftRadius:10, borderTopRightRadius:10}} />
          <Text style={{marginTop:1, marginLeft:13, fontSize:16}}>Cardio</Text>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{marginTop:1, marginLeft:13, fontSize:16, flex:1}}>Beginner Cardio Workout</Text>
            <TouchableOpacity>
             <MaterialCommunityIcons name="play-circle" size={40} style={{marginRight:10}} />
            </TouchableOpacity>
          </View>
          <Text style={{marginTop:1, marginLeft:13, fontSize:12,}}>10 min</Text>
        </View>

        <View style={{backgroundColor:"#E2E8F0", width:257, height:210, borderRadius:10, marginLeft:16}}>
          <Image source={Cardio} style={{width:257, height:120, borderTopLeftRadius:10, borderTopRightRadius:10}} />
          <Text style={{marginTop:1, marginLeft:13, fontSize:16}}>Cardio</Text>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{marginTop:1, marginLeft:13, fontSize:16, flex:1}}>Beginner Cardio Workout</Text>
            <TouchableOpacity>
             <MaterialCommunityIcons name="play-circle" size={40} style={{marginRight:10}} />
            </TouchableOpacity>
          </View>
          <Text style={{marginTop:1, marginLeft:13, fontSize:12,}}>10 min</Text>
        </View>

      </View>
      </ScrollView>

      {/* TRANDING WOKROUT END SECTION */}
    </View>
    </ScrollView>
  )
}

export default WorkoutPage