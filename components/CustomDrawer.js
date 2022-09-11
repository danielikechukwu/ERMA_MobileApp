import React from 'react'
import {View, Text, Image} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'





export default function CustomDrawer(props) {

  
  return (

    <View style={{ flex: 1,}}>

        <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#ffffff', }}>

            <View style={{ backgroundColor: '#1261A0', marginTop: -35, paddingTop: "14%", paddingLeft: "9%", height : '38.3%',}}>

                <Image source={require('../assets/avatar.png')} style={{ height: 90, width: 90, borderRadius: 50, marginBottom: 10, top: 0,}}/>

                <Text style={{ color: '#ffffff', fontSize: 20, marginTop: 20,}}> Magodo South-East Zone.</Text>

            </View>

        <View style={{ flex: 1, backgroundColor: '#ffffff', paddingTop: 30, marginBottom: '20%',}}>
          <DrawerItemList {...props}/>  
        </View>
        
        </DrawerContentScrollView>  
    </View>


  )
}