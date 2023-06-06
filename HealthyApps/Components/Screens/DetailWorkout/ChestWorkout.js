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
  import WO1 from '../../../assets/image/ChestWorkout/Chest1.webp'
  import WO2 from '../../../assets/image/ChestWorkout/Chest2.webp'
  import WO3 from '../../../assets/image/ChestWorkout/Chest3.webp'


  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import { Link, useNavigation } from "@react-navigation/native";
  
  // IMPORT FETCHNG API
  import axios from "axios";
  import app from '../config'

  // import {db} from './config'
  import firebase from 'firebase/compat/app'

  import {getDatabase, ref, onValue} from  'firebase/database';

  // --------------


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

  const handlePress = () => {
    setIsLiked(!isLiked);
  };

  const [isLiked, setIsLiked] = useState(false);

  // FECTHING DATA
  const [dataWorkout, setDataWorkout] = useState([]);
  const linkingURL = (item) => {
    Linking.openURL(item.videoURL)
  };


  useEffect (() =>{
    const db = getDatabase(app)
    const dbRef = ref(db, 'data/Workout/categoryWorkout/CHEST');
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) =>{
      let data = snapshot.val();
      let dWorkout = Object.values(data)
      setDataWorkout(dWorkout)
      console.log("Console Log Set Data",  data)
    })
  }, [])

  // ----------------------

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
          CHEST
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
              onPress={() => navigation.navigate("DetailWO", { data: item })}
              // onPress={() => linkingURL(item)}
            >
              <ImageBackground
                source={{uri: item.imageURL}}
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
                  {item.title}
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

export default ChestWorkout