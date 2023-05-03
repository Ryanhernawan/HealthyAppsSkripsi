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

const ProfilePage = () => {
  const navigation = useNavigation();

  const Logout = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={{ margin: 30 }}>
      <Text
        style={{
          textAlign: "center",
          marginTop: 40,
          fontSize: 19,
          fontWeight: "bold",
        }}
      >
        Account
      </Text>
      <View
        style={{
          flexDirection: "row",

          marginTop: 30,
          alignItems: "center",
        }}
      >
        <Image source={Profile} style={{ width: 50, height: 50 }} />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Reza</Text>
        </View>
        <TouchableOpacity onPress={Logout}>
          <MaterialCommunityIcons name="exit-to-app" size={25} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#959191",
          borderBottomStyle: "solid",
          marginTop: 32,
        }}
      />

      {/* SETTING MENU SECTION */}
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",

            marginTop: 30,
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="account-outline" size={25} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>My Profile</Text>
          </View>

          <MaterialCommunityIcons name="chevron-right" size={25} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",

            marginTop: 30,
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="heart-outline" size={25} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              My Favorite
            </Text>
          </View>

          <MaterialCommunityIcons name="chevron-right" size={25} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",

            marginTop: 30,
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="cog-outline" size={25} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Settings</Text>
          </View>

          <MaterialCommunityIcons name="chevron-right" size={25} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        {/* <MaterialCommunityIcons name="bell-outline" size={25} />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Notification</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="toggle-switch-off-outline" size={25} />
        </TouchableOpacity> */}
      </View>

      {/* END SETTING MENU SECTION */}
    </View>
  );
};

export default ProfilePage;
