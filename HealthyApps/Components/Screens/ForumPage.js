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
  LogBox,
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

const ForumPage = ({ value, setValue, placeholder, item }) => {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  const sendData = (item) => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/forum1");
    const newPostRef = push(dbRef);

    set(ref(db, "data/forum1/postForum" + title), {
      name: name,
      title: title,
      body: body,
      timestamp: new Date().toISOString(),
    });
    setData("");
  };

  const [dataForum, setDataForum] = useState([]);
  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data/forum1");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      let newPost = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      // console.log(newPost);

      setDataForum(newPost);
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
      LogBox.ignoreLogs(['Each Child in a list shoudld']);
    });
  }, []);

  const formatDate = (item) => {
    const date = new Date(item);
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  };

  return (
    <ScrollView>
      <View style={{ marginTop: 58, marginBottom: 30 }}>
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
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Name"
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
              value={title}
              onChangeText={(text) => setTitle(text)}
              placeholder="Add Title"
              style={{
                backgroundColor: "#F3F4F6",
                width: 266,
                marginLeft: 10,
                marginTop: 6,
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
              style={{ marginLeft: 12 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 16, marginRight: 16 }}>
          {dataForum.length === 0 ? (
            <View style={{justifyContent:"center", alignItems:"center", alignContent:"center", margin:150}}>
              <Text style={{fontSize:15}}>No Data</Text>
            </View>
          ) : (
            <FlatList
              style={{ borderColor: "#FFFFF" }}
              showsVerticalScrollIndicator={false}
              data={dataForum}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <>
                  <View style={{ marginLeft: 10, marginTop: 30 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      {item.name}
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                    <Text style={{ marginTop: 10 }}>
                      {formatDate(item.timestamp)}
                    </Text>
                    <Text style={{ marginTop: 10 }}>{item.body}</Text>
                  </View>
                </>
              )}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ForumPage;
