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

// IMPORT FETCHNG API
import axios from "axios";
import app from "./config";

// import {db} from './config'
import firebase from "firebase/compat/app";
import 'firebase/auth'
import auth from "@react-native-firebase/auth";

import { getDatabase, ref, onValue, get } from "firebase/database";

// -------------------------

const Login = () => {
  const [Email, setEmail] = useState("healthyApps@gmail.com");
  const [Password, setPassword] = useState("1234455");
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  

  const loginUser = async (Email, Password) => {
    try {
      await auth().signInWithEmailAndPassword(Email, Password);
    } catch (error) {
      alert(error.message);
    }
  };

  const validateLogin = () => {
    if (Email.length == " " || Email.length == null) {
      Alert.alert("Email tidak boleh kosong");
      return false;
    } else if (Password.length == " " || Password.length == null) {
      Alert.alert("Password tidak boleh kosong");
      return false;
    } else if (Password.length > 8) {
      Alert.alert("Password maksimal 8 karakter");
      return false;
    } else if (Password.length <= 6) {
      Alert.alert("Password minimal 6 dan maximal 8");
      return false;
    } else {
      navigation.navigate("Home");
      // console.warn("Berhasil Login");
    }
  };

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

        <Text style={styles.labelPassword}>Pasword</Text>
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
          onChangeText={(Password) => setPassword(Password)}
          autoCapilatize="none"
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.goToRegister}>
            {" "}
            Dont have account? 
            <Text style={{ color: "blue" }}>Create Now</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={validateLogin}
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
          <Text style={{ fontWeight: "bold", color: "white", marginTop: 10 }}>
            Sign In
          </Text>
        </TouchableOpacity>
        {/* <CustomButton
          style={styles.button}
          text="Login"
          onpress={validateLogin}
        /> */}
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
