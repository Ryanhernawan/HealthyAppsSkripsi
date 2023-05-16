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

const DetailRecipes = ({ route }) => {
  const [dataFoodCategory, setdataFoodCategory] = useState([
    {
      judul: "Breakfast",
      image: require("../../../assets/image/breakfast.png"),
    },
    {
      judul: "Lunch",
      image: require("../../../assets/image/lunch.png"),
    },
    {
      judul: "Dinner",
      image: require("../../../assets/image/dinner.png"),
    },
  ]);

  const navigation = useNavigation();

  const goToRecipes = () => {
    navigation.navigate("Recipes");
  };

  const touchableRef = useRef();

  return (
    <View style={{ marginBottom: 40 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              onPress={goToRecipes}
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
              Details Recipes
            </Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="heart"
                size={25}
                style={{ marginLeft: 68 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems:"center"}}>
          <Image
            style={{ width: 450, height: 198 }}
            source={{uri: route.params.data.image}}
          />
          <Text
            style={{ textAlign: "center", fontWeight: "500", marginTop: 13 }}
          >
            {route.params.data.title}
          </Text>
          <Text
            style={{ marginTop: 30, textAlign: "center", fontWeight: "500" }}
          >
            Ingredients
          </Text>
          <Text
            style={{
              textAlign: "center",
              width: 350,
              marginLeft: 5,
              marginTop: 16,
            }}
          >
            {route.params.data.ingredients}
          </Text>

          <Text
            style={{
              textAlign: "center",
              marginTop: 30,
              backgroundColor: "#FFFFFF",
              color: "#16A34A",
              width: 40,
              height: 40,
              paddingTop: 9,
              borderRadius: 100,
              
            }}
          >
            {route.params.data.time}
          </Text>

          <Text style={{ textAlign: "center", marginTop: 13 }}>
            Cooking Time
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
                marginTop: 30,
                fontWeight: "bold",
                flex: 1,
              }}
            >
              Healthy Food Category
            </Text>
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
        </View>
      </ScrollView>

      <TouchableOpacity
        style={{ backgroundColor: "#FFFFFF", height: 40, padding: 11 }}
      >
        <Text style={{ textAlign: "center", color: "#16A34A" }}>Cook Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailRecipes;
