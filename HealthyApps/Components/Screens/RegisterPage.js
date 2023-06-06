import { StyleSheet, Text, View , Image, useWindowDimensions, Alert, ScrollView} from 'react-native';
import React , {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../CustomComponents/CustomInput';
import CustomButton from '../CustomComponents/CustomButton';
import { RadioButton } from "react-native-paper";


const RegisterScreen = () => {
  const [Fullname, setFullname] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState("first");


  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const backToLogin = () =>{
    navigation.navigate('LoginScreen');
    console.warn("Berhasil kembali ke login");
  }
  const validateRegister = () =>{
    if(Fullname.length == " " || Fullname.length == null){
      Alert.alert('Fullname tidak boleh kosong');
      return false;
    }
    else if(Email.length == " " || Email.length == null){
        Alert.alert('Email tidak boleh kosong');
        return false;
    }
    else if(Password.length == " " || Password.length == null){
      Alert.alert('Password tidak boleh kosong');
      return false;
    }
    else if(Password.length > 8){
      Alert.alert('Password maksimal 8 karakter');
      return false;
    }
    else if(Password.length <= 6){
      Alert.alert('Password minimal 6 dan maximal 8');
      return false;
    }
    else if(ConfirmPassword.length == " " || ConfirmPassword.length == null){
      Alert.alert('Confirm Password tidak boleh kosong');
    }
    else if(ConfirmPassword != Password){
      Alert.alert('password tidak cocok');
      return false;
    }
    else{
      
      navigation.navigate("Home", {Fullname, Email});
      // console.warn("berhasil sign in")
      console.log(Fullname)
    }
  }

  

  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Sign up your account now</Text>

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

      <CustomButton text="Sign Up" onpress={validateRegister} />
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  root:{
    marginTop: 16,
  },
  title:{
    
    marginLeft: 16,
    marginRight: 153,
    marginTop:1,
    marginBottom: 20,
    width:300,
    alignItems: 'center',
    fontSize: 20,
    fontWeight:'bold',
    color: 'black',
  },
   labelFullname:{
    marginTop: 10,
    marginLeft:16,
  },
  labelEmail:{
    marginTop: 16,
    marginLeft:16,
  },
  labelPassword:{
    marginTop: 16,
    marginLeft:16,
  },
  logo:{
    marginLeft: 50,
    marginRight:50,
    width: '70%',
    maxWidth: 385,
    // maxWidth: 500,
    maxHeight: 308,
  },
  backToLogin:{
    marginLeft:'30%',
    marginTop: 10,

  },
  
});

export default RegisterScreen;
