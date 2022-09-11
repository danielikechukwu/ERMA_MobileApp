import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';

export default function HamburgerMenu(props) {
  return (

  <View>  

    <TouchableOpacity>

      <Octicons name="three-bars" size={24} color="#ffffff" onPress={props.menu__name} />
      
    </TouchableOpacity > 

  </View>

  )
}