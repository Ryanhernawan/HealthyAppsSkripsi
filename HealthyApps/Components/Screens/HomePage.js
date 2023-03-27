import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, Touchable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Profile from '../../assets/image/ProfilePic.png'
const HomePage = () => {
  const [dataRecomendWO, setRecomendWO] = useState([
    {
      "judul" : "Walking Cardio",
      "image" : require('../../assets/image/Cardio.jpeg')
    },
    {
      "judul" : "Beginner Cardio Workout",
      "image" : require('../../assets/image/Cardio.jpeg')
    }

  ])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.teks}>Halo,Reza</Text>
        <Image source={Profile} style={styles.gambar} />
      </View>
      <Text style={{marginLeft:16, marginTop:30, fontWeight:"bold"}}>Recomendation Workout</Text>
      <View style={{marginLeft:16, marginTop:20}}>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
          data={dataRecomendWO} renderItem={({item} )=>
          <TouchableOpacity style={{width:160, backgroundColor:"#FFFFFF", elevation:3}}>
            <Image source={item.image} style={{borderRadius:10, width:140, height:80}} />
             <Text style={{marginTop:10}}>{item.judul}</Text>
          </TouchableOpacity>
        } 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    marginLeft:16,
    marginRight:16,
  },
  gambar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  teks: {
    flex: 1,
    fontSize: 16,
  },
});

export default HomePage;
