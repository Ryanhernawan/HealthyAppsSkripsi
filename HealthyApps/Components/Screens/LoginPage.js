import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Logo from "../../assets/image/Logo.png";
import CustomInput from "../CustomComponents/CustomInput";
import CustomButton from "../CustomComponents/CustomButton";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// IMPORT FETCHNG API

import firebase from "firebase/compat/app";
import {
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";

import { getDatabase, ref, onValue, get } from "firebase/database";
import { FIREBASE_AUTH } from "./config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ActivityIndicator } from "react-native-paper";

// -------------------------

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const auth = FIREBASE_AUTH;

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  const signIn = async () => {
    if (Email.length == " " || Email.length == null) {
      Alert.alert("Email must be filled");
      return false;
    } else if (Password.length == " " || Password.length == null) {
      Alert.alert("Password must be filled");
      return false;
    } else {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          Email,
          Password
        );
        console.log(response);
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
        alert("Sign in failed: " + "Check your email and password");
      }
    }
  };

  const forgotPassword = () => {
    // if (Email.length == " " || Email.length == null) {
    //   Alert.alert("Email must be filled");
    //   return false;
    // } else {
    //   sendPasswordResetEmail(auth, Email)
    //     .then(() => {
    //       alert("Password reset email sent");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  };

  // const validateLogin = () => {
  //   if (Email.length == " " || Email.length == null) {
  //     Alert.alert("Email tidak boleh kosong");
  //     return false;
  //   } else if (Password.length == " " || Password.length == null) {
  //     Alert.alert("Password tidak boleh kosong");
  //     return false;
  //   } else if (Password.length > 8) {
  //     Alert.alert("Password maksimal 8 karakter");
  //     return false;
  //   } else if (Password.length <= 6) {
  //     Alert.alert("Password minimal 6 dan maximal 8");
  //     return false;
  //   } else {
  //     navigation.navigate("Home");
  //     // console.warn("Berhasil Login");
  //   }
  // };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={Logo} style={[styles.logo]} resizeMode="contain" />

        <Text style={styles.title}>Welcome To Healthy Apps</Text>
        <Text style={styles.desc}>
          Getting Healthy Is Important For Your Life
        </Text>

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
          onChangeText={(Email) => setEmail(Email)}
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
            // value="Ryanhs15"
            onChangeText={(Password) => setPassword(Password)}
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
        {/* <TouchableOpacity onPress={forgotPassword}>
          <Text style={{ color: "grey", marginLeft: 18, marginTop: 10, marginBottom:10 }}>
            Forgot Pasword
          </Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.goToRegister}>
            {" "}
            Dont have account?
            <Text style={{ color: "blue" }}>Create Now</Text>
          </Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <TouchableOpacity
              onPress={signIn}
              // onPress={() => loginUser(Email, Password)}
              style={{
                backgroundColor: "#22C55E",
                width: 180,
                height: 40,
                marginLeft: 106,
                marginRight: 106,
                alignItems: "center",
                borderRadius: 5,
                marginTop: 47,
              }}
            >
              <Text
                style={{ fontWeight: "bold", color: "white", marginTop: 10 }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  logo: {
    marginLeft: 50,
    marginRight: 50,
    width: "70%",
    maxWidth: 290,
    maxHeight: 240,
  },
  title: {
    alignContent: "center",
    marginLeft: 69,
    marginRight: 69,
    alignItems: "center",
    marginTop: 16,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  desc: {
    marginLeft: 61,
    marginRight: 62,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  labelEmail: {
    marginTop: 30,
    marginLeft: 16,
  },
  labelPassword: {
    marginTop: 10,
    marginLeft: 16,
  },
  button: {
    marginTop: 20,
  },
  goToRegister: {
    marginLeft: 16,
    marginTop: 8,
  },
});

export default Login;
