import React, { useState, useRef } from "react";
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Link, useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
import Video from "react-native-video";
import YoutubePlayer from "react-native-youtube-iframe";

import Abs from "../../../assets/image/AbsCategory.png";
import Back from "../../../assets/image/BackCategory.png";
import Arms from "../../../assets/image/ArmsCategory.png";
import Chest from "../../../assets/image/ChestCategory.png";
import Leg from "../../../assets/image/LegCategory.png";
import Butt from "../../../assets/image/ButtCategory.png";
import { renderNode } from "react-native-elements/dist/helpers";

const DetailWorkout = ({ route }) => {
  const navigation = useNavigation();

  const goToWorkout = () => {
    navigation.goBack();
  };

  const goToChestDetail = () => {
    navigation.navigate("Chest");
  };

  const goToAbsDetail = () => {
    navigation.navigate("Abs");
  };

  const goToBackDetail = () => {
    navigation.navigate("Back");
  };

  const goToArmsDetail = () => {
    navigation.navigate("Arms");
  };

  const goToLegsDetail = () => {
    navigation.navigate("Legs");
  };

  const goToButtDetail = () => {
    navigation.navigate("Butt");
  };

 
  const touchableRef = useRef();

  return (
    <>
      <View style={{ marginBottom: 20 }}>
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
              onPress={goToWorkout}
            />
            <Text
              style={{
                textAlign: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: 20,
                marginLeft: 85,
              }}
            >
              Details Workout
            </Text>
          </View>
        </View>
      </View>

      <WebView
        source={{ uri: route.params.data.videoURL }}
        androidHardwareAccelerationDisabled={true}
        mediaPlaybackRequiresUserAction={false}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={true}
        // style={{marginBottom:227}}
      />
    </>
  );
};

export default DetailWorkout;
