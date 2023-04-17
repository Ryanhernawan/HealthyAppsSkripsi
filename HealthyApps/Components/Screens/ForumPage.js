import React, { useState } from "react";
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
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Profile from "../../assets/image/ProfilePic.png";

const ForumPage = ({ value, setValue, placeholder }) => {
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
          <TextInput
            value={value}
            placeholder="Post New Thread"
            style={{
              backgroundColor: "#F3F4F6",
              width: "70%",
              marginLeft: 10,
              borderRadius: 8,
              paddingLeft: 12,
              height: 40,
            }}
          />
          <MaterialCommunityIcons
            name="send"
            size={25}
            style={{ marginLeft: 12 }}
          />
        </View>
        <View style={{ marginLeft: 16 }}>
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
          <Text style={{marginTop:5}}>Comment</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForumPage;
