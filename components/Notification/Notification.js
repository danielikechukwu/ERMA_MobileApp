import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Screen from '../Screen'
import HamburgerMenu from '../HamburgerMenu'
import { AntDesign } from '@expo/vector-icons';

const ALERTS = [

    {
        id: 1,
        alert: 'Payroll configuration',
        status: 'Status : '
    },

    {
        id: 2,
        alert: 'Bank reconcillation',
        status: 'Status : '
    },

    {
        id: 3,
        alert: 'Payable, Receivables and inventory',
        status: 'Status : '
    },

    {
        id: 4,
        alert: 'Payroll configuration',
        status: 'Status : '
    },

    {
        id: 5,
        alert: 'Payroll configuration',
        status: 'Status : '
    },

    {
        id: 6,
        alert: 'Bank reconcillation',
        status: 'Status : '
    },

    {
        id: 7,
        alert: 'Payable, Receivables and inventory',
        status: 'Status : '
    },

    {
        id: 8,
        alert: 'Payroll configuration',
        status: 'Status : '
    },
]


export default function NotificationMessage({navigation: {goBack}}) {

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

              {/* <Screen /> */}

              <AntDesign name="arrowleft" size={24} color="white" onPress={() => goBack()}/>
             

              <Text style={{ fontSize: 24, color: '#ffffff' }}>ERM Application</Text>

        </View>

        <View style={styles.secondTextNav}>
          
            <Text style={{ color: '#ffffff', fontSize: 24 }}>Notification</Text>

            {/* <Text style={{ color: '#1261A0', backgroundColor: '#ffffff', borderRadius: 20, paddingVertical: 9, paddingHorizontal: 39, textAlign: 'center', fontSize: 14, fontWeight: 'bold', lineHeight: 21,}}>
               
               Add complaint
               
            </Text> */}

        </View>

        </View>

    </SafeAreaView>

    <View style={styles.alert}>


<ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>

{ALERTS.map((elements, id) => {
return (

<View key={id} style={styles.singleAlert}>

<Text style={{ fontSize: 18, fontWeight: 'bold', }}>{elements.alert}</Text>

<View style={{ flexDirection: 'row', justifyContent: 'space-between',
marginTop: 10, marginBottom: 10,}}>

<Text style={{ fontSize: 18,}}>{elements.status} <Text style={{ fontWeight: 'bold',}}>Read</Text></Text>

<Text style={{ fontStyle: 'italic', color: '#1261A0', fontSize: 18,}}>Read message
</Text>

</View>


</View>

)
})}

</ScrollView>


</View>

    </View>
  )
}

const styles = StyleSheet.create({

main__container: {
    flex: 1,
    backgroundColor: '#F1F7FF',
  },

  container: {
  
    // height: 203,
    // backgroundColor: '#1261A0',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

  },

  Nav__Details: {

    marginTop: '23%'

  },

  FirstTextNav: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginTop: "-9%",
    marginRight: 30,

  },

  alert: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,

},

  secondTextNav: {
  
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginLeft: 30,
    marginRight: 30,
    marginTop: '9%',
    height : '45%', 

  },

  singleAlert: {
    //   borderWidth: 3,
      padding: 16,
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      
  },

})
