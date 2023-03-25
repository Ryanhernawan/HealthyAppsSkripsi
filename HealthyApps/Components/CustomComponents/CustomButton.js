import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onpress, text}) => {
  return (
    <Pressable onPress={onpress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#22C55E',
        width: 180,
        height: 40,
        marginLeft:106,
        marginRight:106,
        alignItems: 'center',
        borderRadius:5,
        marginTop: 47
       

    },
    text:{
      fontWeight: 'bold',
      color: 'white',
      marginTop: 10,
      
    }
})

export default CustomButton