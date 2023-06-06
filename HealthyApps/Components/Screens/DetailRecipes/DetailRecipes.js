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
  LogBox 
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Link, useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
import Dinner from "../RecipesCategory/Dinner";

const DetailRecipes = ({ route }) => {
  const navigation = useNavigation();

  const goToBreakfast = () => {
    navigation.navigate("Breakfast");
  };

  const goToLunch = () => {
    navigation.navigate("Lunch");
  };

  const goToDinner = () => {
    navigation.navigate("Dinner");
  };

  const goToBack = () =>{
    navigation.goBack();
  }

  const [dataFoodCategory, setdataFoodCategory] = useState([
    {
      judul: "Breakfast",
      image: require("../../../assets/image/breakfast.png"),
      goTo: goToBreakfast,
    },
    {
      judul: "Lunch",
      image: require("../../../assets/image/lunch.png"),
      goTo: goToLunch
    },
    {
      judul: "Dinner",
      image: require("../../../assets/image/dinner.png"),
      goTo: goToDinner
    },
  ]);

  const goToRecipes = () => {
    navigation.navigate("Recipes");
  };

  const touchableRef = useRef();

  return (
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
                marginLeft: 90,
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
        style={{ height: 200, padding: 70 }}

        // style={{marginBottom:227}}
      />

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={{ textAlign: "center", fontWeight: "500", marginTop: 13 }}>
          {route.params.data.title}
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 30,
            marginBottom: 5,
            backgroundColor: "#FFFFFF",
            color: "#16A34A",
            width: 40,
            height: 40,
            paddingTop: 9,
            borderRadius: 100,
          }}
        >
          {route.params.data.time}m
        </Text>
        <Text style={{ textAlign: "center", marginTop: 13 }}>Cooking Time</Text>
        <Text
          style={{
            marginLeft: 16,
            marginTop: 10,
            fontWeight: "bold",
            flex: 1,
          }}
        >
          Healthy Food Category
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 16,
              marginTop: 10,
              fontWeight: "bold",
              flex: 1,
            }}
          >
            Healthy Food Category
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 16, marginTop: 20 }}>
        <FlatList
          horizontal
          style={{ borderColor: "#FFFFF" }}
          showsHorizontalScrollIndicator={false}
          data={dataFoodCategory}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ width: 160, elevation: 1, padding: 10 }}
              onPress={item.goTo}
            >
              <Image
                source={item.image}
                style={{ borderRadius: 10, width: 140, height: 80 }}
              />
              <Text style={{ marginTop: 10, fontWeight: "bold" }}>
                {item.judul}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default DetailRecipes;
