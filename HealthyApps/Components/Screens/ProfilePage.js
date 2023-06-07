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
  Modal,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Profile from "../../assets/image/ProfilePic.png";

const ProfilePage = ({route}) => {
  const navigation = useNavigation();

  // const {Fullname, Email} = route.params

  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    navigation.navigate("Login");
  };
  const goToEditProfile = () => {
    navigation.navigate("DetailProfile")
  }
  const cancelLogout = () => {
    setModalVisible(false);
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
        Profile
      </Text>
      <View
        style={{
          flexDirection: "row",

          marginTop: 30,
          alignItems: "center",
        }}
      >
        {/* <Image source={Profile} style={{ width: 50, height: 50 }} /> */}
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Helo,</Text>
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Reza</Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MaterialCommunityIcons name="exit-to-app" size={25} />
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,

              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 20,

                justifyContent: "center",
                borderRadius: 14,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  alignItems: "center",
                  marginLeft: 80,
                  marginBottom: 10,
                }}
              >
                Confirm Logout
              </Text>
              <Text style={{ marginBottom: 20, marginLeft: 30 }}>
                Are you sure you want to logout?
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginBottom: 20, width: 100 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#EC4E4E",
                      padding: 10,
                      borderRadius: 6,
                      alignItems: "center",
                    }}
                    onPress={cancelLogout}
                  >
                    <Text style={{ color: "white" }}>Cancel</Text>
                  </TouchableOpacity>
                  {/* <Button title="Cancel" onPress={cancelLogout} /> */}
                </View>
                <View style={{ marginLeft: 50, width: 100 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#22C55E",
                      padding: 10,
                      borderRadius: 6,
                      alignItems: "center",
                    }}
                    onPress={handleLogout}
                  >
                    <Text style={{ color: "white" }}>Yes</Text>
                  </TouchableOpacity>
                  {/* <Button title="Yes" onPress={handleLogout} /> */}
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#22C55E",
            padding: 10,
            borderRadius: 6,
            alignItems: "center",
          }}
          onPress={goToEditProfile}
        >
          <Text style={{color:"white", fontSize:15}}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#959191",
          borderBottomStyle: "solid",
          marginTop: 22,
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
          <MaterialCommunityIcons name="account" size={25} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Username</Text>
          </View>

          <Text style={{ fontWeight: "bold", fontSize: 15, color: "grey" }}>
            Reza
          </Text>
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
          <MaterialCommunityIcons name="email" size={25} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Email</Text>
          </View>

          <Text style={{ fontWeight: "bold", fontSize: 15, color: "grey" }}>
            healthyApps@gmail.com
          </Text>

          {/* <MaterialCommunityIcons name="chevron-right" size={25} /> */}
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
          <MaterialCommunityIcons name="lock" size={25} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Password</Text>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "grey" }}>
            . . . . .
          </Text>

          {/* <MaterialCommunityIcons name="chevron-right" size={25} /> */}
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
          <MaterialCommunityIcons name="information" size={25} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Version</Text>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "grey" }}>
            v.1.0
          </Text>

          {/* <MaterialCommunityIcons name="chevron-right" size={25} /> */}
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
