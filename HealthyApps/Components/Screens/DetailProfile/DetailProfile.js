import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Alert,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../CustomComponents/CustomInput";
import CustomButton from "../../CustomComponents/CustomButton";
import { RadioButton } from "react-native-paper";

const DetailProfile = () => {
  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState("first");

  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = () => {
    navigation.navigate("Profile");
  };

  const cancleSave = () => {
    setModalVisible(false);
  };

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const backToLogin = () => {
    navigation.navigate("LoginScreen");
    console.warn("Berhasil kembali ke login");
  };
  const validateRegister = () => {
    if (Fullname.length == " " || Fullname.length == null) {
      Alert.alert("Fullname tidak boleh kosong");
      return false;
    } else if (Email.length == " " || Email.length == null) {
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
    } else if (
      ConfirmPassword.length == " " ||
      ConfirmPassword.length == null
    ) {
      Alert.alert("Confirm Password tidak boleh kosong");
    } else if (ConfirmPassword != Password) {
      Alert.alert("password tidak cocok");
      return false;
    } else {
      navigation.navigate("Home");
      console.warn("berhasil sign in");
    }
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.labelEmail}>Fullname</Text>
        <CustomInput
          placeholder="Fullname"
          value={Fullname}
          setValue={setFullname}
        />

        <Text style={styles.labelEmail}>Email</Text>
        <CustomInput placeholder="Email" value={Email} setValue={setEmail} />

        <Text style={styles.labelPassword}>Pasword</Text>
        <CustomInput
          placeholder="Password"
          value={Password}
          setValue={setPassword}
          secureTextEntry
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

        <TouchableOpacity
          style={{
            backgroundColor: "#22C55E",
            padding: 10,
            borderRadius: 6,
            width: 180,
            height: 40,
            marginLeft: 106,
            marginRight: 106,
            marginTop:100,
            alignItems: "center",
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{color:"white"}}>Save</Text>
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
                    onPress={handleSave}
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
