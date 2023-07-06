import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Alert,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../CustomComponents/CustomInput";
import CustomButton from "../../CustomComponents/CustomButton";
import { RadioButton } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// IMPORT FETCHNG API
import axios from "axios";
import app from "../config";

// import {db} from './config'
import firebase from "firebase/compat/app";
import { FIREBASE_AUTH } from "../config";

import { getDatabase, ref, onValue, get, set, update } from "firebase/database";
import {
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";

// -------------------------

const DetailProfile = () => {
  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState("first");
  const [modalVisible, setModalVisible] = useState(false);
  const [newFullName, setNewFullName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const auth = FIREBASE_AUTH;

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const toggleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const cancleSave = () => {
    setModalVisible(false);
  };

  const changePassoword = () => {
    const currentUser = auth.currentUser;
    sendPasswordResetEmail(currentUser.email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const handleUpdateFullname = () => {
    const currentUser = auth.currentUser;
    const currentUserId = auth.currentUser.uid;
    // const credential = promptForCredentials();
    const db = getDatabase(app);
    const dbRef = ref(db, "data/users/" + currentUserId);

    if (newFullName != "") {
      update(dbRef, { Fullname: newFullName })
        .then(() => {
          console.log("Fullname berhasil diperbarui");
        })
        .catch((error) => {
          console.log("Terjadi kesalahan saat memperbarui fullname:", error);
        });
    }

    if (newEmail != "") {
      update(dbRef, { Email: newEmail })
        .then(() => {
          console.log("Fullname berhasil diperbarui");
        })
        .catch((error) => {
          console.log("Terjadi kesalahan saat memperbarui fullname:", error);
        });
    }

    if (newEmail != currentUser.email && newEmail != "") {
      updateEmail(currentUser, newEmail)
        .then(() => {
          console.log("Email berhasil diperbarui");
        })
        .catch((error) => {
          console.log("Terjadi kesalahan saat memperbarui email:", error);
        });
    }

    if (newPassword != "") {
      sendPasswordResetEmail(auth, currentUser.email)
        .then(() => {
          alert("Password reset email sent");
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // if (newPassword != "") {
    //   updatePassword(currentUser, newPassword)
    //     .then(() => {
    //       console.log("Password updated successfully");
    //     })
    //     .catch((error) => {
    //       console.log("Error updating password:", error);
    //     });
    // }

    navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.labelEmail}>Fullname</Text>
        <TextInput
          style={{
            backgroundColor: "white",
            width: "90%",
            height: 35,
            marginTop: 10,
            marginLeft: 16,
            borderColor: "#e8e8e8",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,

            marginVertical: 5,
          }}
          placeholder="Fullname"
          value={newFullName}
          // onChangeText={(displaName) => setFullname(displaName)}
          onChangeText={setNewFullName}
          autoCapilatize="none"
        />

        <Text style={styles.labelEmail}>Email</Text>
        <TextInput
          style={{
            backgroundColor: "white",
            width: "90%",
            height: 35,
            marginTop: 10,
            marginLeft: 16,
            borderColor: "#e8e8e8",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,

            marginVertical: 5,
          }}
          placeholder="Email"
          value={newEmail}
          // onChangeText={(Email) => setEmail(Email)}
          onChangeText={setNewEmail}
          autoCapilatize="none"
        />

        <Text style={styles.labelPassword}>Password</Text>
        <View>
          <TextInput
            style={{
              backgroundColor: "white",
              width: "90%",
              height: 35,
              marginTop: 10,
              marginLeft: 16,
              borderColor: "#e8e8e8",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,

              marginVertical: 5,
            }}
            placeholder="Password"
            value={newPassword}
            // onChangeText={(Password) => setPassword(Password)}
            onChangeText={setNewPassword}
            autoCapilatize="none"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={toggleShowPassword}
            style={{ position: "absolute", top: 13, right: 30 }}
          >
            <MaterialCommunityIcons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={25}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.labelPassword}>Confirm Password</Text>
        <View>
          <TextInput
            style={{
              backgroundColor: "white",
              width: "90%",
              height: 35,
              marginTop: 10,
              marginLeft: 16,
              borderColor: "#e8e8e8",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,

              marginVertical: 5,
            }}
            placeholder="Confirm Password"
            onChangeText={(ConfirmPassword) =>
              setConfirmPassword(ConfirmPassword)
            }
            autoCapilatize="none"
            secureTextEntry={!showPasswordConfirm}
          />
          <TouchableOpacity
            onPress={toggleShowPasswordConfirm}
            style={{ position: "absolute", top: 13, right: 30 }}
          >
            <MaterialCommunityIcons
              name={showPasswordConfirm ? "eye-outline" : "eye-off-outline"}
              size={25}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 16,
            marginTop: 20,
          }}
        >
          {/* <View style={{flex:1}}> */}
          {/* <MaterialCommunityIcons name={"circle"} size={12} color={"grey"} />
          <Text style={{ flex: 1, marginLeft: 5, color: "grey" }}>
            Only fill what you want to change
          </Text> */}
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#22C55E",
            padding: 10,
            borderRadius: 6,
            width: 180,
            height: 40,
            marginLeft: 106,
            marginRight: 106,
            marginTop: 100,
            alignItems: "center",
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: "white" }}>Save</Text>
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
                Confirm Save
              </Text>
              <Text style={{ marginBottom: 20, marginLeft: 26 }}>
                Are you sure you want to change?
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
                    onPress={cancleSave}
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
                    onPress={handleUpdateFullname}
                  >
                    <Text style={{ color: "white" }}>Yes</Text>
                  </TouchableOpacity>
                  {/* <Button title="Yes" onPress={handleLogout} /> */}
                </View>
              </View>
            </View>
          </View>
        </Modal>

        {/* <CustomButton text="Save" onPress={() => setModalVisible(true)}/> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 16,
  },
  title: {
    marginLeft: 16,
    marginRight: 153,
    marginTop: 1,
    marginBottom: 20,
    width: 300,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  labelFullname: {
    marginTop: 10,
    marginLeft: 16,
  },
  labelEmail: {
    marginTop: 16,
    marginLeft: 16,
  },
  labelPassword: {
    marginTop: 16,
    marginLeft: 16,
  },
  logo: {
    marginLeft: 50,
    marginRight: 50,
    width: "70%",
    maxWidth: 385,
    // maxWidth: 500,
    maxHeight: 308,
  },
  backToLogin: {
    marginLeft: "30%",
    marginTop: 10,
  },
});

export default DetailProfile;
