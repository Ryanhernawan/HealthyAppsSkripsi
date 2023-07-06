import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Alert,
  ScrollView,
  TextInput,
  Modal,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../CustomComponents/CustomInput";
import CustomButton from "../CustomComponents/CustomButton";
import { RadioButton } from "react-native-paper";
import { FIREBASE_AUTH } from "./config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import app from "./config";
import { ref, getDatabase, push, set, onValue } from "firebase/database";
import { useId } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RegisterScreen = () => {
  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [idToken, setToken] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const toggleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const [checked, setChecked] = useState("first");
  const [modalVisible, setModalVisible] = useState(false);

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const handleModal = () => {
    if (Fullname.length == " " || Fullname.length == null) {
      Alert.alert("Fullname must be filled");
      return false;
    } else if (Email.length == " " || Email.length == null) {
      Alert.alert("Email must be filled");
      return false;
    } else if (Password.length == " " || Password.length == null) {
      Alert.alert("Password must be filled");
      return false;
    } else if (Password.length >= 12) {
      Alert.alert("Maximum password is 12 characters");
      return false;
    } else if (Password.length <= 5) {
      Alert.alert("Password minimum 5 and maximum 12");
      return false;
    } else if (
      ConfirmPassword.length == " " ||
      ConfirmPassword.length == null
    ) {
      Alert.alert("Confirm Password must be filled");
    } else if (ConfirmPassword != Password) {
      Alert.alert("Passwords don't match");
      return false;
    } else {
      setModalVisible(true);
    }
  };

  const auth = FIREBASE_AUTH;

  const signUp = async (Email, Password, Fullname) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        Email,
        Password
      ).then((userCredential) => {
        const userId = userCredential.user.uid;
        const db = getDatabase(app);
        const dbRef = ref(db, "data/users");
        const newUsers = push(dbRef);

        set(ref(db, "data/users/" + userId), {
          Fullname,
          Email,
        });
      });
      navigation.navigate("Home");

      //  console.log("DATA USER", response)
    } catch (error) {
      alert("Sign Up failed" + error.message);
    }
  };

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

        <CustomButton
          text="Sign Up"
          onpress={handleModal}
          // onpress={() => signUp(Email, Password, Fullname)}
        />
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
                  marginLeft: 50,
                  marginBottom: 10,
                }}
              >
                Congratulations
              </Text>
              <Text style={{ marginBottom: -20, marginLeft: 3 }}>
                Your account has been created
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginLeft: -97, width: 20 }}>
                  <CustomButton
                    text="Go to home"
                    onpress={() => signUp(Email, Password, Fullname)}
                  />
                  {/* <Button title="Yes" onPress={handleLogout} /> */}
                </View>
              </View>
            </View>
          </View>
        </Modal>
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
