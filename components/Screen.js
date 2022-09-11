import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const Screen = () => {
  return (
    <View style={styles.container}>

            <TouchableOpacity  >
                <Octicons name="three-bars" size={24} color="#ffffff" onPress={ () => { alert('hello man')}}/>
            </TouchableOpacity>        

     </View>
  )
}

export default Screen

const styles = StyleSheet.create({

    container: {
        // flex: 1,
    },

})