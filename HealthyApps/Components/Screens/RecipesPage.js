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
import BOD1 from "../../assets/image/BOD1.png"
import BOD2 from "../../assets/image/BOD2.png"
import BOD3 from "../../assets/image/BOD3.png"


const RecipesPage = () => {

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

  return (
    <ScrollView>
    <View>
      {/* HEADER SECTION */}
      <View style={{ backgroundColor: "#166534", width: "100%", height: 280 }}>
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
            fontSize:18
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
            fontSize:18
          }}
        >
          This Week
        </Text>
        {/* END HEADER SECTION */}
        {/* CAROUSEL RECIPES THIS WEEK SECTION */}

        <View style={{ width: "100%", height: 120 , }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ flexDirection: "row", marginRight:16}}>
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
              >
                <View style={{ 
                  flexDirection: "row", 
                  alignItems: "center", 
                  
                  
                  }}>
                  <Image source={Week1} style={{ width: 60, height: 60 }} />
                  <Text style={{ marginLeft: 8 }}>The Greedy Belly</Text>
                </View>
              </TouchableOpacity>
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
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={Week2} style={{ width: 60, height: 60 }} />
                  <Text style={{ marginLeft: 8 }}>Whole-Grain Waffles</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
        {/* END SECTON CAROUSEL THIS WEEK */}

        {/* BEST OF THE DAY SECTION */}
        <View style={{marginTop:40}}>
        <Text style={{fontSize:16, fontWeight:"bold",marginTop:34, marginLeft:16, }}>Best of The Day</Text>
        <View style={{ width: "100%", height: "100%", marginLeft:16, height:420}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <View style={{ flexDirection: "row", marginRight:30}}>
                <TouchableOpacity   
                 style={{
                  marginTop: 20,
                  width: 139,
                  height: 140,
                  borderRadius: 8,
                  padding: 20,
                }}
                >
                  <View style={{flexDirection:"column", width:117}}>
                    <Image source={BOD1} style={{width:145, height:140, borderRadius:0, marginLeft:-23, marginTop:-20}} />
                    <Text style={{marginLeft:-20, marginTop:10}}>Shirataki Noodle Salad with Ginger Sesame</Text>
                    <View style={{flexDirection:"row",marginLeft:-20, marginTop:10}}>
                      <Text>15m</Text>
                      <Text style={{marginLeft:11}}>8 Servings</Text>
                    </View>
                    <Text style={{marginLeft:-20, marginTop:10, color:"#F97316"}}>Rating 5.0</Text>

                  </View>
                </TouchableOpacity>
                <TouchableOpacity   
                 style={{
                  marginTop: 20,
                  width: 139,
                  height: 140,
                  borderRadius: 8,
                  padding: 20,
                  marginLeft:16,
                }}
                >
                  <View style={{flexDirection:"column", width:117}}>
                    <Image source={BOD2} style={{width:139, height:140, borderRadius:9, marginLeft:-23, marginTop:-20}} />
                    <Text style={{marginLeft:-20, marginTop:10}}>Healthy Quinoa Salad With Light Honey Dressing</Text>
                    <View style={{flexDirection:"row",marginLeft:-20, marginTop:10}}>
                      <Text>15m</Text>
                      <Text style={{marginLeft:11}}>8 Servings</Text>
                    </View>
                    <Text style={{marginLeft:-20, marginTop:10, color:"#F97316"}}>Rating 5.0</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity   
                 style={{
                  marginTop: 20,
                  width: 140,
                  height: 140,
                  padding: 20,
                  marginLeft:1,
                  
                }}
                >
                  <View style={{flexDirection:"column", width:117}}>
                    <Image source={BOD3} style={{width:139, height:140, borderRadius:8, marginLeft:-23, marginTop:-20}} />
                    <Text style={{marginLeft:-20, marginTop:10}}>Garlic Brown Sugar Glazed Salmon</Text>
                    <View style={{flexDirection:"row",marginLeft:-20, marginTop:10}}>
                      <Text>15m</Text>
                      <Text style={{marginLeft:11}}>8 Servings</Text>
                    </View>
                    <Text style={{marginLeft:-20, marginTop:10, color:"#F97316"}}>Rating 5.0</Text>
                  </View>
                </TouchableOpacity>
                </View>

          </ScrollView>
       
        </View>
        </View>
        {/* END BEST OF THE DAY SECTION */}

         {/* Healthy Food Category Section */}
         <View style={{ flexDirection: "row", alignItems: "center", marginTop:-130 }}>
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
