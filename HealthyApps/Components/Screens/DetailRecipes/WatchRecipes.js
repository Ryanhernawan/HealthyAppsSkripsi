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

const WatchRecipes = () => {
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
            {/* <MaterialCommunityIcons
              name="arrow-left"
              size={25}
              onPress={goToBreakfast}
            /> */}
            <Text
              style={{
                textAlign: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: 20,
                marginLeft: 100,
              }}
            >
              Details Recipes
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
  )
}

export default WatchRecipes