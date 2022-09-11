import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DashBoardAppsx } from './DashBoard/DashBoardAppsx';
import { Massage } from './Messages/Massage';
import {VendorScreen} from './Vendor/VendorScreen';
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MainComplt } from './complaint/MainComplt';
import SummaryLogin from './SummaryLogin/SummaryLogin';
import { Complaint } from './complaint/Complaint';


 function DrawerNavigation() {

  const Drawer = createDrawerNavigator(); 

  return (

<NavigationContainer style={{ marginBottom: -30, }}>

    <Drawer.Navigator screenOptions={{ headerShown: false, drawerActiveBackgroundColor: '#1261A0', drawerInactiveTintColor: '#1261A0',  drawerActiveTintColor: '#ffffff',  drawerLabelStyle: { fontSize: 18, marginLeft: -20, }}} drawerContent={ props => <CustomDrawer {...props}/> } >


          {/* First screen */}
          <Drawer.Screen name="DashBoard" component={DashBoardAppsx} options={{ drawerIcon:({color}) => (

          <Ionicons name="home" size={22} color={color} />

          )
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

           <Drawer.Screen name="complaint" component={Complaint}  />


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

</NavigationContainer>


  )
}

export  default DrawerNavigation;