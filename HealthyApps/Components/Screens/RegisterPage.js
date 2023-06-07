import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Alert,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../CustomComponents/CustomInput";
import CustomButton from "../CustomComponents/CustomButton";
import { RadioButton } from "react-native-paper";
import { FIREBASE_AUTH } from "./config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import app from './config'
import { ref, getDatabase, push, set, onValue } from "firebase/database";
import { useId } from "react";




const RegisterScreen = () => {
  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [idToken, setToken] = useState('')
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const [checked, setChecked] = useState("first");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const auth = FIREBASE_AUTH

  const signUp = async () => {
    try{
       const response = await createUserWithEmailAndPassword(auth, Email, Password)
       .then(userCredential => {
          const userId = userCredential.user.uid;
          const db = getDatabase(app);
          const dbRef = ref(db, "data/users");
          const newUsers = push(dbRef);

          set(ref(db, 'data/users/' + userId),{
            Fullname,
            Email
          })
       })
       console.log("DATA USER", response)

    } catch(error){
      alert("Sign Up failed" + error.message)
    }
  }



  const backToLogin = () => {
    navigation.navigate("Login");
    console.warn("Berhasil kembali ke login");
  };
  // const validateRegister = () => {
  //   if (Fullname.length == " " || Fullname.length == null) {
  //     Alert.alert("Fullname tidak boleh kosong");
  //     return false;
  //   } else if (Email.length == " " || Email.length == null) {
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
  //   } else if (
  //     ConfirmPassword.length == " " ||
  //     ConfirmPassword.length == null
  //   ) {
  //     Alert.alert("Confirm Password tidak boleh kosong");
  //   } else if (ConfirmPassword != Password) {
  //     Alert.alert("password tidak cocok");
  //     return false;
  //   } else {
  //     navigation.navigate("Home", { Fullname, Email });
  //     // console.warn("berhasil sign in")
  //     console.log(Fullname);
  //   }
  // };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Sign up your account now</Text>

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
          onChangeText={(displaName) => setFullname(displaName)}
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

        <Text style={styles.labelPassword}>Confirm Pasword</Text>
        <CustomInput
          placeholder="Confirm Pasword"
          value={ConfirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry
        />
        {/* 
      <Text style={styles.labelPassword} > Gender:</Text>

      <View style={{ flexDirection: "row", alignItems: "center", marginTop:16, marginLeft:16}}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text>Male</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>Female</Text>
        </View>
      </View> */}

        <CustomButton text="Sign Up" onpress={signUp} />
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

export default RegisterScreen;
