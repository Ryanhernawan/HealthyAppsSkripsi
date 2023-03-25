import { StyleSheet, Text, View , Image, useWindowDimensions, Alert} from 'react-native';
import React , {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../CustomComponents/CustomInput';
import CustomButton from '../CustomComponents/CustomButton';


const RegisterScreen = () => {
  const [Fullname, setFullname] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  

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
      console.warn("berhasil sign in")
    }
  }

  

  return (
    <View style={styles.root}>
  
       <Text style={styles.title}>Sign Up</Text>

      <Text style={styles.labelEmail}>Fullname</Text>
      <CustomInput  placeholder="Fullname" value = {Fullname} setValue={setFullname} />

      <Text style={styles.labelEmail}>Email</Text>
      <CustomInput  placeholder="Email" value = {Email} setValue={setEmail} />

      <Text style={styles.labelPassword}>Pasword</Text>
      <CustomInput  placeholder="Password" value ={Password} setValue={setPassword} secureTextEntry/>

      <Text style={styles.labelPassword}>Confirm Pasword</Text>
      <CustomInput  placeholder="Confirm Pasword" value ={ConfirmPassword} setValue={setConfirmPassword} secureTextEntry/>

      <CustomButton text= "Sign Up" onpress={validateRegister}/>

      

    </View>
  )
}


const styles = StyleSheet.create({
  root:{
    marginTop: 30,
  },
  title:{
    alignContent: 'center',
    marginLeft: 152,
    marginRight: 153,
    marginTop:62,
    marginBottom: 73,
    alignItems: 'center',
    fontSize: 20,
    fontWeight:'bold',
    fontFamily: 'Arial',
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
