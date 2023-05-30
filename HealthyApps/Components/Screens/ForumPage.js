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
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";

// IMPORT FETCHNG API
import axios from "axios";
import app from "./config";

// import firebase from 'firebase/compat/app'

import { getDatabase, ref, onValue, get, set, push } from "firebase/database";

//---------------------------------

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Link, useNavigation } from "@react-navigation/native";

import Profile from "../../assets/image/ProfilePic.png";

const ForumPage = ({ value, setValue, placeholder }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  

  // const sendData = () =>{
  //   let newData ={
  //     title: title,
  //     body: body
  //   };
  //   const ref = app.push('data/forum');
  //   const key = ref.key;
  //   app.child(key).update({'key' : key})
  // }

  const sendData = (item) => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/forum");
    const newPostRef = push(dbRef)
    
    // const newPost ={
    //   title,
    //   body,
    //   timestamp: new Date().toISOString(),
    // };
    // newPostRef.set(newPost, (error) => {
    //   if (error) {
    //     console.error('Terjadi kesalahan:', error);
    //   } else {
    //     console.log('Posting berhasil dikirim ke Firebase');
    //     console.log('Kunci posting:', newPostRef.key);
    //   }
    // });

    set(ref(db, "data/forum"), {
      title: title,
      body: body,
      timestamp: new Date().toISOString(),
    });
    setTitle('');
    setBody('');
  };

  return (
    <ScrollView>
      <View style={{ marginTop: 58 }}>
        <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}>
          Forum
        </Text>
        <View
          style={{
            backgroundColor: "#E2E8F0",
            padding: 9,
            marginLeft: 16,
            marginRight: 16,
            borderRadius: 20,
            marginTop: 40,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={Profile} style={{ width: 50, height: 50 }} />
          <View>
            <TextInput
              value={title}
              onChangeText={(text) => setTitle(text)}
              placeholder="Add Title"
              style={{
                backgroundColor: "#F3F4F6",
                width: 266,
                marginLeft: 10,
                borderRadius: 8,
                paddingLeft: 12,
                height: 40,
              }}
            />
            <TextInput
              value={body}
              onChangeText={(text) => setBody(text)}
              placeholder="Post New Thread"
              style={{
                backgroundColor: "#F3F4F6",
                width: 266,
                marginLeft: 10,
                borderRadius: 8,
                paddingLeft: 12,
                marginTop: 6,
                height: 40,
              }}
            />
          </View>

          <TouchableOpacity onPress={sendData}>
            <MaterialCommunityIcons
              name="send"
              size={25}
              style={{ marginLeft: 12}}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 16, marginRight: 16 }}>
          <View
            style={{
              flexDirection: "row",

              marginTop: 30,
              alignItems: "center",
            }}
          >
            <Image source={Profile} style={{ width: 50, height: 50 }} />
            <View style={{ marginLeft: 10 }}>
              <Text>Lorem</Text>
              <Text>6 Jan 2023</Text>
            </View>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              marginTop: 20,
              fontSize: 22,
            }}
          >
            Title
          </Text>
          <Text style={{ marginTop: 5, textAlign: "justify", lineHeight: 20 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            {/* <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 13,
              }}
            >
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="heart"
                  color={"#F87171"}
                  size={20}
                  style={{ marginRight: 4 }}
                />
              </TouchableOpacity>
              <Text>100</Text>
            </View> */}
            {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="comment"
                  color={"black"}
                  size={20}
                  style={{ marginRight: 4 }}
                />
              </TouchableOpacity>
              <Text>100</Text>
            </View> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForumPage;
