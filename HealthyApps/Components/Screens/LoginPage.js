import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import Logo from '../../assets/image/Logo.png';
import CustomInput from '../CustomComponents/CustomInput';
import CustomButton from '../CustomComponents/CustomButton';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigation = useNavigation();

  const goToRegister = () =>{
    navigation.navigate("Register");
  };

  const validateLogin = () => {
    if(Email.length == " " || Email.length == null){
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
    else{
      navigation.navigate("Home");
      console.warn("Berhasil Login");
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={Logo}
        style = {[styles.logo]}
        resizeMode = "contain"
        />

      <Text style= {styles.title}>Welcome To Healthy Apps</Text>
      <Text style= {styles.desc}>Getting Healthy Is Important For Your Life
      </Text>

      <Text style={styles.labelEmail}>Email/Username</Text>
      <CustomInput  placeholder="Email" value = {Email} setValue={setEmail} />

      <Text style={styles.labelPassword}>Pasword</Text>
      <CustomInput  placeholder="Password" value ={Password} setValue={setPassword} secureTextEntry/>

    <TouchableOpacity onPress={goToRegister}>
      <Text style={styles.goToRegister} > Dont have account?{' '}
        <Text style={{color:'blue'}}>Create Now</Text>
      
       </Text>
    </TouchableOpacity>
      
      <CustomButton  style={styles.button}  text= "Login" onpress={validateLogin}/>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  logo:{
    marginLeft: 50,
    marginRight: 50,
    width: '70%',
    maxWidth: 385,
    maxHeight: 308,
  },
  title:{
    alignContent: 'center',
    marginLeft: 69,
    marginRight:69,
    alignItems: 'center',
    marginTop:16,
    fontSize: 20,
    fontWeight:'bold',
    fontFamily: 'Arial',
    color: 'black',
  },
  desc:{
    marginLeft: 61,
    marginRight:62,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  labelEmail:{
    marginTop: 30,
    marginLeft:16,
  },
 labelPassword:{
    marginTop: 10,
    marginLeft:16,
  },
  button:{
    marginTop: 20
  },
  goToRegister:{
    marginLeft:16,
    marginTop: 8,
  },
});

export default Login;