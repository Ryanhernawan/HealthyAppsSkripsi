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
import React, { useState } from "react";
import Week1 from "../../assets/image/RecipesThisWeek1.png";
import Week2 from "../../assets/image/RecipesThisWeek2.png";

const RecipesPage = () => {
  return (
    <View>
      {/* HEADER SECTION */}
      <View style={{ backgroundColor: "#166534", width: "100%", height: 250 }}>
        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: "bold",
            marginTop: 58,
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Recipes
        </Text>
        <Text
          style={{
            marginTop: 69,
            marginLeft: 16,
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
        >
          Popular Recipes
        </Text>
        <Text
          style={{
            marginTop: 2,
            marginLeft: 16,
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
        >
          This Week
        </Text>
        {/* CAROUSEL RECIPES THIS WEEK SECTION */}

        <View style={{ width: "100%", height: 120 , }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ flexDirection: "row"}}>
              <View
                style={{
                  marginLeft: 16,
                  marginTop: 20,
                  backgroundColor: "#FFFFFF",
                  width: 253,
                  height: 100,
                  borderRadius: 8,
                  padding: 20,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={Week1} style={{ width: 60, height: 60 }} />
                  <Text style={{ marginLeft: 8 }}>The Greedy Belly</Text>
                </View>
              </View>
              <View
                style={{
                  marginLeft: 16,
                  marginTop: 20,
                  backgroundColor: "#FFFFFF",
                  width: 253,
                  height: 100,
                  borderRadius: 8,
                  padding: 20,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={Week2} style={{ width: 60, height: 60 }} />
                  <Text style={{ marginLeft: 8 }}>Whole-Grain Waffles</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipesPage;
