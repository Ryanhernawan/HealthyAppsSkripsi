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
import React, { useState, useEffect } from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Link, useNavigation } from "@react-navigation/native";

// IMPORT FETCHNG API
import axios from "axios";
import app from "../config";

// import {db} from './config'
import firebase from "firebase/compat/app";

import { getDatabase, ref, onValue } from "firebase/database";

// --------------
import Video from "react-native-video";
import { WebView } from "react-native-webview";

const DetailArticle = ({ route }) => {
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.goBack();
  };

  return (
    // <View style={{width:100}} renderToHardwareTextureAndroid={true}>
    <>
      <View style={{ marginBottom: 10 }}>
        <View style={{ margin: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={25}
              onPress={goToBack}
            />
            <Text
              style={{
                textAlign: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: 20,
                marginLeft: 120,
              }}
            >
              Articles
            </Text>
          </View>
        </View>
      </View>

      <WebView
        source={{ uri: route.params.data.linkURL }}
        androidHardwareAccelerationDisabled={true}
      />
    </>
  );
};

export default DetailArticle;
