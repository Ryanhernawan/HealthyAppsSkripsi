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
import { useNavigation } from "@react-navigation/native";

import Cardio from '../../assets/image/Cardio.jpg'
import Abs from '../../assets/image/AbsCategory.png'
import Back from '../../assets/image/BackCategory.png'
import Arms from '../../assets/image/ArmsCategory.png'
import Chest from '../../assets/image/ChestCategory.png'
import Leg from '../../assets/image/LegCategory.png'
import Butt from '../../assets/image/ButtCategory.png'
import WO1 from '../../assets/image/ChestWorkout/Chest1.webp'
import WO2 from "../../assets/image/AbsWorkout/Abs2.webp";



const WorkoutPage = () => {

  const navigation = useNavigation();

  const goToChestDetail = () =>{
    navigation.navigate("Chest")
  }

  const goToAbsDetail = () =>{
    navigation.navigate("Abs")
  }

  const goToBackDetail = () =>{
    navigation.navigate("Back")
  }

  const goToArmsDetail = () =>{
    navigation.navigate("Arms")
  }

  const goToVidio1 = () =>{
    Linking.openURL('https://www.youtube.com/watch?v=4o1YzksPuqg');
  }

  const goToVidio2 = () => {
    Linking.openURL("https://www.youtube.com/watch?v=EfJ4aB_enVE&t=5s");
  };

 

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
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      <View style={{marginTop:18, flexDirection:"row"}}>
        <View style={{backgroundColor:"#E2E8F0", width:257, height:210, borderRadius:10}}>
          <Image source={WO2} style={{width:257, height:120, borderTopLeftRadius:10, borderTopRightRadius:10}} />
          <Text style={{marginTop:1, marginLeft:13, fontSize:16}}>15 Min Abs Workout</Text>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{marginTop:1, marginLeft:13, fontSize:16, flex:1}}>Intermediate ABS Workout</Text>
            <TouchableOpacity>
             <MaterialCommunityIcons name="play-circle" size={40} style={{marginRight:10}} onPress={goToVidio2}/>
            </TouchableOpacity>
          </View>
          <Text style={{marginTop:1, marginLeft:13, fontSize:12,}}>15 min</Text>
        </View>

        <View style={{backgroundColor:"#E2E8F0", width:257, height:210, borderRadius:10, marginLeft:16}}>
          <Image source={WO1} style={{width:257, height:120, borderTopLeftRadius:10, borderTopRightRadius:10}} />
          <Text style={{marginTop:1, marginLeft:13, fontSize:16}}>Chest Workout</Text>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{marginTop:1, marginLeft:13, fontSize:16, flex:1}}>Beginner Chest Workout</Text>
            <TouchableOpacity>
             <MaterialCommunityIcons name="play-circle" size={40} style={{marginRight:10}} onPress={goToVidio1} />
            </TouchableOpacity>
          </View>
          <Text style={{marginTop:1, marginLeft:13, fontSize:12,}}>10 min</Text>
        </View>

      </View>
      </ScrollView>

      {/* TRANDING WOKROUT END SECTION */}

      {/* CATEGORY WORKOUT SECTION */}

      <View style={{marginTop:45}}>
        <Text style={{fontSize:20, fontWeight:"bold",}}>Category</Text>
        <View style={{flexDirection:"row", marginTop:10}}>
          <View> 
            <TouchableOpacity onPress={goToAbsDetail}>
              <Image source={Abs} style={{width:89, height:90}} />
              <Text style={{alignItems:"center", textAlign:"center", fontWeight:"bold"}}>Abs</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginLeft:37}}> 
            <TouchableOpacity onPress={goToBackDetail}>
              <Image source={Back} style={{width:89, height:90}} />
              <Text style={{alignItems:"center", textAlign:"center", fontWeight:"bold"}}>Back</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginLeft:37}}>
            <TouchableOpacity onPress={goToArmsDetail}>
              <Image source={Arms} style={{width:89, height:90}} />
              <Text style={{alignItems:"center", textAlign:"center", fontWeight:"bold"}}>Arms</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <View style={{flexDirection:"row", marginTop:10}}>
          <TouchableOpacity onPress={goToChestDetail}>
              <Image source={Chest} style={{width:89, height:90}} />
              <Text style={{alignItems:"center", textAlign:"center", fontWeight:"bold"}}>Chest</Text>
            </TouchableOpacity>

            <View style={{marginLeft:37}}> 
            <TouchableOpacity>
              <Image source={Leg} style={{width:89, height:90}} />
              <Text style={{alignItems:"center", textAlign:"center", fontWeight:"bold"}}>Legs</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginLeft:37}}> 
            <TouchableOpacity>
              <Image source={Butt} style={{width:89, height:90}} />
              <Text style={{alignItems:"center", textAlign:"center", fontWeight:"bold"}}>Butt</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

      {/* CATEGORY WORKOUT END SECTION */}


    </View>
    </ScrollView>
  )
}

export default WorkoutPage