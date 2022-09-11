import React from 'react'
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native'
import News from './News'
import WelcomeUser from './WelcomeUser'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import HamburgerMenu from '../HamburgerMenu'
import { useNavigation } from '@react-navigation/native'

export const DashBoardAppsx = (props) => {

  const navigation = useNavigation();

  const GenerateToken = () => props.navigation.navigate("GenerateTokenScreen");

  const GetMassage = () => props.navigation.navigate("Message");

  const GetNotification = () => props.navigation.navigate("notification");

  const GetComplaint = () => props.navigation.navigate("MainComplt");

  const Profile = () => props.navigation.navigate("GetProfile");

  const clicked = () => navigation.openDrawer();


  //Styling base on the OS the user is using

  const generateAppsContainer = (isBgcolor, anBgcolor, anHEIT, isHEIT) => {


  if(Platform.OS === 'ios') {
    styles.container = {
    backgroundColor: isBgcolor,
    height: isHEIT,
  

  };
}
  else if (Platform.OS === 'android') {
    styles.container = {
    backgroundColor: anBgcolor,
    height: anHEIT,
    padding: "-2%"

    };

  }
  }

  generateAppsContainer('#1261A0', '#1261A0', '24%', '27%', )
  
    return (
    
        <View style={styles.main__container}>   
    
          <SafeAreaView style={styles.container}>
    
    {/* <Hamburgermeun /> */}
    <View style={styles.Nav__Details}>
    
      <View style={styles.FirstTextNav}>
    
            <HamburgerMenu menu__name={clicked}/>
    
            <Text style={{ fontSize: 24, color: '#ffffff' }}>ERM Application</Text>
    
      </View>
    
      <View style={styles.secondTextNav}>
        
          <Text style={{ color: '#ffffff', fontSize: 20 }}>Dashbord</Text>
    
    <TouchableOpacity style={{ backgroundColor: '#ffffff', borderRadius: 20, paddingVertical: 7, paddingHorizontal: '7%', textAlign: 'center', lineHeight: 21, height: 40}}  onPress={ GenerateToken }>

          <Text style={{ color: '#1261A0', fontSize: 16, }}>
            
            Generate Token
            
          </Text>

    </TouchableOpacity>
          
    
      </View>
    
      </View>
    
    </SafeAreaView>     
    
    
    {/* Users name */}   
    <View style={{ flex :1}}>

      <WelcomeUser name={Profile}/>
    
      <Main name={GetMassage} Notifi_name={GetNotification} Complain__name={GetComplaint} />

      <News /> 

    </View> 
       
    
        </View>
      )
}

export const Main = (props) => (

  

    <View style={styles.Mainscontainer}>

{/* First card */}
<TouchableOpacity style={{...styles.card1}}>

    <View style={{ alignItems: 'flex-end',}}>
        <AntDesign name="addusergroup" size={34} color="#1261A0" />
    </View>

    <View>
    <View>
      <Text style={{ color: "#1261A0", fontSize: 18, fontWeight: 'bold',}}>Visitors</Text>  
    </View>
    <View>
    <Text style={{ fontSize: 18, fontWeight: 'bold',}}>301</Text>
    </View>
    </View>


</TouchableOpacity>

{/* Second card */}
<TouchableOpacity style={styles.card2} >

    <View style={{ alignItems: 'flex-end',}} >
    <Feather name="message-square" size={24} color="#1261A0" />
    </View>

    <View >

    <View>
      <Text style={{ color:"#1261A0", fontSize: 18, fontWeight: 'bold',}}>Message</Text>  
    </View>

    <View>
    <Text style={{ fontSize: 18, fontWeight: 'bold',}}>24</Text>
    </View>

    </View>
    

</TouchableOpacity>

{/* Third card */}
<TouchableOpacity style={styles.card3} >

    <View style={{ alignItems: 'flex-end',}}>
    <Feather name="credit-card" size={24} color="#1261A0" />
    </View>  

    <View>

      <View>
        <Text style={{ color:"#1261A0", fontSize: 18, fontWeight: 'bold',}}>Outstanding</Text>  
      </View>

      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold',}}>350,000 NGN</Text>
      </View>

    </View>    
        
</TouchableOpacity>

{/* Fourth card */}

<TouchableOpacity style={styles.card4} onPress={props.Notifi_name}>

  <View style={styles.Notification__Icon}>
  <Ionicons name="ios-notifications-outline" size={34} color="white"/>
  </View>


  {/* <View style={{ marginTop: 90, paddingHorizontal: 52,}}> */}
    <Text style={{ textAlign: 'center',  fontSize: 18, width: 103, color:"#1261A0", fontWeight: 'bold', bottom: 0, marginTop: 65, }}>Notification</Text>
  {/* </View> */}

</TouchableOpacity>

</View>

  )


const styles = StyleSheet.create({

    main__container: {
      flex: 1,
      backgroundColor: '#F1F7FF',
  
    },
  
    container: {

      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,  
    },
  
    Nav__Details: {
    
      marginTop: '23%', 
    },
  
    FirstTextNav: {
    
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 30,
      marginTop: "-9%",
      marginRight: 30,  
    },
  
    secondTextNav: {
      
      flexDirection: 'row',
      justifyContent: 'space-between', 
      marginLeft: 30,
      marginRight: 30,
      marginTop: '9%',
      height : '45%', 
    },

    Mainscontainer: {
      backgroundColor: '#F1F7FF',
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 7,
      position: 'absolute',
      marginTop: '24%',  
      
  },

  Notification__Icon: {
    backgroundColor: '#1261A0',    
    borderRadius: 15,
    padding: 10,
    position: 'absolute',    
    width: 58,
    height: 59,
    
    
  },

  card1: {   
     
    padding: 18,
    width: '46%',
    margin: 6,
    height: '40%',
    borderRadius: 10,
    backgroundColor: '#ffffff',  
    flexDirection: 'column',
    justifyContent: 'space-between', 
   
  },    

  card2: {
     
    padding: 18,
    width: '46%',
    margin: 6,
    height: '40%',
    borderRadius: 10,
    backgroundColor: '#ffffff',  
    flexDirection: 'column',
    justifyContent: 'space-between',

  },

  card3: {
    
    padding: 18,
    width: '45%',
    margin: 6,
    height: '40%',
    borderRadius: 10,
    backgroundColor: '#ffffff',  
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  card4: {
    
    width: '45%',
    margin: 10,
   
    height: '40%',
    borderRadius: 6,
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

  },

  })