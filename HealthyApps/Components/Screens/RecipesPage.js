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
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Week1 from "../../assets/image/RecipesThisWeek1.png";
import Week2 from "../../assets/image/RecipesThisWeek2.png";
import BOD1 from "../../assets/image/BOD1.png";
import BOD2 from "../../assets/image/BOD2.png";
import BOD3 from "../../assets/image/BOD3.png";

const RecipesPage = ({ item }) => {
  const [dataFoodCategory, setdataFoodCategory] = useState([
    {
      judul: "Breakfast",
      image: require("../../assets/image/breakfast.png"),
    },
    {
      judul: "Lunch",
      image: require("../../assets/image/lunch.png"),
    },
    {
      judul: "Dinner",
      image: require("../../assets/image/dinner.png"),
    },
  ]);

  const [dataBOD, setDataBOD] = useState([
    {
      judul: "Shirataki Noodle Salad with Ginger Sesame",
      time: "15m",
      serve: "8 Servings",
      image: require("../../assets/image/BOD1.png"),
      rating: "Rating 5.0",
      ingredients:
        "1 8-ounce package, tofu shirataki noodles, spaghetti cut, ½ bell pepper diced, 1 cup sliced red cabbage, 1 cup chopped cucumber, 3 green onions diced, 1 (15-ounce) can chickpeas, rinsed, drained, 2 tablespoons chopped cilantro, 1 tablespoon sesame seeds",
    },
    {
      judul: "Healthy Quinoa Salad With Light Honey Dressing",
      time: "15m",
      serve: "8 Servings",
      image: require("../../assets/image/BOD2.png"),
      rating: "Rating 5.0",
      ingredients: "1/2 cup avocado oil (olive oil works great too), 1/4 cup red wine vinegar, 2 TBSP fresh chopped parsley, 2 cloves garlic minced, 1/2 tsp dried oregano leaves, 1/2 tsp dried basil leaves, 1/2 tsp sea salt, 1/4 tsp black pepper"
    },
    {
      judul: "Garlic Brown Sugar Glazed Salmon",
      time: "15m",
      serve: "8 Servings",
      image: require("../../assets/image/BOD3.png"),
      rating: "Rating 5.0",
      ingredients: "1/4 cup (50 g) brown sugar, packed 2 tablespoons dijon mustard, 4 (6 ounces) boneless salmon fillets, salt and ground black pepper to taste"
     
    },
  ]);

  const [dataThisWeek, setDataThisWeek] = useState([
      {
        judul: "Hot Egg Toast",
        image: require("../../assets/image/RecipesThisWeek1.png"),
        time: "20m",
        ingredients: "6 egg, 5 chopped onion, 1/3 cup milk, 1 1/2 tablespoon ginger paste, 2 pinch powdered turmeric, 4 pinches salt, 10 bread slices, 6 peppercorns, 4 chopped green chilli, 1 tablespoon garlic paste, 2 piece cinnamon, 3 tablespoon virgin olive oil"
      },
      {
        judul: "Whole-Grain Waffles",
        image: require("../../assets/image/RecipesThisWeek2.png"),
        time: "15m",
        ingredients: "1 1/2 cups (170g) King Arthur White Whole Wheat Flour, 2 teaspoons baking powder, 1/2 teaspoon salt, 2 tablespoons (25g) granulated sugar, 1 large egg, 1 1/2 cups (340g) milk, lukewarm, 5 tablespoons (71g) butter, melted or 1/3 cup (67g) vegetable oil"
      }
  ]);

  const navigation = useNavigation();


  return (
    <ScrollView>
      <View>
        {/* HEADER SECTION */}
        <View
          style={{ backgroundColor: "#166534", width: "100%", height: 280 }}
        >
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
              fontSize: 18,
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
              fontSize: 18,
            }}
          >
            This Week
          </Text>
          {/* END HEADER SECTION */}

          {/* CAROUSEL RECIPES THIS WEEK SECTION */}
          <View style={{ width: "100%", height: 120 }}>
          <FlatList
              horizontal
              style={{ borderColor: "#FFFFF",marginRight:1, }}
              showsHorizontalScrollIndicator={false}
              data={dataThisWeek}
              renderItem={({ item }) => (
              <View style={{ flexDirection: "row", marginRight: 1 }}>
                <TouchableOpacity
                  style={{
                    marginLeft: 16,
                    marginTop: 20,
                    backgroundColor: "#FFFFFF",
                    width: 253,
                    height: 100,
                    borderRadius: 8,
                    padding: 20,
                  }}
                  onPress={() =>
                    navigation.navigate("DetailRecipes", { data: item })
                  }
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image source={item.image} style={{ width: 60, height: 60, borderRadius:100 }} />
                    <Text style={{ marginLeft: 8 }}>{item.judul}</Text>
                  </View>
                </TouchableOpacity>
            
              </View>
            
            )}
            />
          </View>
        </View>
        {/* END SECTON CAROUSEL THIS WEEK */}

        {/* BEST OF THE DAY SECTION */}
        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 34,
              marginLeft: 16,
            }}
          >
            Best of The Day
          </Text>
          <View
            style={{
              width: "100%",
              height: "100%",
              marginLeft: 16,
              height: 420,

            }}
          >
            <FlatList
              horizontal
              style={{ borderColor: "#FFFFF",marginRight:12, }}
              showsHorizontalScrollIndicator={false}
              data={dataBOD}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row", marginRight: 25 }}>
                  <TouchableOpacity
                    style={{
                      marginTop: 20,
                      width: 139,
                      height: 140,
                      borderRadius: 8,
                      padding: 20,
                    }}
                    onPress={() =>
                      navigation.navigate("DetailRecipes", { data: item })
                    }
                  >
                    <View style={{ flexDirection: "column", width: 117 }}>
                      <Image
                        source={item.image}
                        style={{
                          width: 145,
                          height: 150,
                          borderRadius: 15,
                          marginLeft: -23,
                          marginTop: -20,
                        }}
                      />
                      <Text style={{ marginLeft: -20, marginTop: 10 }}>
                        {item.judul}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          marginLeft: -20,
                          marginTop: 10,
                        }}
                      >
                        <Text>{item.time}</Text>
                        <Text style={{ marginLeft: 11 }}>{item.serve}</Text>
                      </View>
                      <Text
                        style={{
                          marginLeft: -20,
                          marginTop: 10,
                          color: "#F97316",
                        }}
                      >
                        {item.rating}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
        {/* END BEST OF THE DAY SECTION */}

        {/* Healthy Food Category Section */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: -130,
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
          <TouchableOpacity>
            <Text style={{ marginTop: 30, marginRight: 16 }}>See More</Text>
          </TouchableOpacity>
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
        {/* END SECTION HEALTHY FOOD CATEGORY */}
      </View>
    </ScrollView>
  );
};

export default RecipesPage;
