import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Splash() {  

  return (
    <View style={{ flex :1}}>


      <Image source={require('../assets/newSplash.jpg')} style={styles.container} />


    </View>
  )
}

const styles = StyleSheet.create({ 

  container :{
    height: '100%',
    width: '100%',
    marginBottom: 10,
    top: 0,

    },
    
});