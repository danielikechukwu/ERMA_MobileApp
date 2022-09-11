
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DashBoardAppsx } from './DashBoard/DashBoardAppsx'


const Drawer = createDrawerNavigator();

export default function AppStack() {
  return (
   
  
    <Drawer.Navigator initialRouteName="DashBoard">

        <Drawer.Screen name="DashBoard" component={DashBoardAppsx} options={{ headerShown: false }} />
        
    </Drawer.Navigator>


  )
}