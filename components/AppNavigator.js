import React, {useState, useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import { DashBoardAppsx } from './DashBoard/DashBoardAppsx';
import { Token } from './GenerateToken/Token'
import { Massage } from './Messages/Massage'
import NotificationMessage from './Notification/Notification';
import { Complaint } from './complaint/Complaint';
import { MainComplt } from './complaint/MainComplt';
import {VendorScreen} from './Vendor/VendorScreen';
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { SummaryLogin } from './SummaryLogin/SummaryLogin';
import DuesPayment from './DuesPayment/DuesPayment'
import DetailsTransaction from './DetAndSum_Transaction/DetailsTransaction';
import { SummaryTransaction } from './DetAndSum_Transaction/SummaryTransaction';
import Splash from './Splash';
import {AppLogin} from './AppLogin/AppLogin'
import Profile from './Profile/Profile';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigation() { 
  
  return(


    <Drawer.Navigator screenOptions={{ headerShown: false, drawerActiveBackgroundColor: '#1261A0', drawerInactiveTintColor: '#1261A0',  drawerActiveTintColor: '#ffffff',  drawerLabelStyle: { fontSize: 18, marginLeft: -20, }}} drawerContent={ props => <CustomDrawer {...props}/> } >


          {/* First screen */}
          <Drawer.Screen name="DashBoard" component={DashBoardAppsx} options={{ drawerIcon:({color}) => (<Ionicons name="home" size={22} color={color} />)
          }} />

          {/* Second screen */}
          <Drawer.Screen name="Dues" component={SummaryLogin} options={{ drawerIcon:({color}) => (
          <Ionicons name="card" size={22} color={color} style={{ color: '#1261A0',}}/>
          )
          }} />

          {/* Third screen */}
          <Drawer.Screen name="Messages" component={Massage}
          options={{ drawerIcon:({color}) => (<Feather name="message-square" size={24} color={color}  style={{ color: '#1261A0',}}/>
          )
          }} />


          {/* Fourth screen */}
          <Drawer.Screen name="Vendor" component={VendorScreen} options={{ drawerIcon:({color}) => (
          <AntDesign name="contacts" size={24} color={color} style={{ color: '#1261A0',}}/>
          )
          }} />


          {/* Fifth screen */}
          <Drawer.Screen name="Complaint" component={MainComplt} options={{ drawerIcon:({color}) => (<AntDesign name="questioncircleo" size={24} color={color} style={{ color: '#1261A0',}}/> 
          )
          }} />

    </Drawer.Navigator>

  )

};

export  default function AppNavigator() {  

   const [isLoading, setIsLoading] = useState(true); 
  


// const token = useSelector(props.nameState);

// console.log(token)


// const token = null;

  useEffect(() => { 

    setTimeout(() => {

      setIsLoading(false);

    }, 4000);


  }, [])


  if(isLoading){
return <Splash />
  }
  

  
  return(

    
    <NavigationContainer>

        <Stack.Navigator >  


              <Stack.Screen name="Login" component={AppLogin} options={{ headerShown: false}}/>       
            

                {/* <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false}}/> */}

                <Stack.Screen name="Home"  component={DrawerNavigation} options={{ headerShown: false }}/>

                <Stack.Screen name="GenerateTokenScreen" component={Token} options={{ headerShown: false }}/>        

                <Stack.Screen name="Message" component={Massage} options={{ headerShown: false }} />

                <Stack.Screen name="notification" component={NotificationMessage} options={{ headerShown: false }}/>   

                <Stack.Screen name="GetComplain" component={Complaint} options={{ headerShown: false }} />

                <Stack.Screen name="MainComplt" component={MainComplt} options={{ headerShown: false }} />

                <Stack.Screen name="TransacSummaryDues" component={SummaryTransaction} options={{ headerShown: false }}/>

                <Stack.Screen name="TransacDetailsDues" component={DetailsTransaction} options={{ headerShown: false }} />

                <Stack.Screen name="PaymentScreen" component={DuesPayment} options={{ headerShown: false }}/>

                <Stack.Screen name="GetProfile" component={Profile} options={{ headerShown: false }}/>
                
          
         
        </Stack.Navigator>

  </NavigationContainer>

  

  )
};


