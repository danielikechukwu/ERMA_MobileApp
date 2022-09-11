import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import HamburgerMenu from '../HamburgerMenu';


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
    {
      id: 9,
      alert: 'Payroll configuration',
      status: 'Status : '
  },

  {
      id: 10,
      alert: 'Bank reconcillation',
      status: 'Status : '
  },

  {
      id: 11,
      alert: 'Payable, Receivables and inventory',
      status: 'Status : '
  },

  {
      id: 12,
      alert: 'Payroll configuration',
      status: 'Status : '
  },

  {
      id: 13,
      alert: 'Payroll configuration',
      status: 'Status : '
  },

  {
      id: 14,
      alert: 'Bank reconcillation',
      status: 'Status : '
  },

  {
      id: 15,
      alert: 'Payable, Receivables and inventory',
      status: 'Status : '
  },

  {
      id: 16,
      alert: 'Payroll configuration',
      status: 'Status : '
  },
]

export const Massage = (props) => {

  const clicked = () => props.navigation.openDrawer();

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

                  <HamburgerMenu menu__name={clicked}/>

                  <Text style={{ fontSize: 24, color: '#ffffff' }}>ERM Application</Text>

            </View>

            <View style={styles.secondTextNav}>
              
                <Text style={{ color: '#ffffff', fontSize: 24 }}>Messages</Text>

            </View>

            </View>

        </SafeAreaView>

        <View style={{  margin: 20, padding: 10, width: '49%', borderRadius: 10, backgroundColor: '#7B93E8', height: 94, justifyContent: 'center', }}>

            <View style={{  flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 18,}}>Inbox Messages</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 24, marginTop: 11,}}>5</Text>
            </View>
        </View>

        <View style={styles.alert}>


        <ScrollView showsVerticalScrollIndicator={false} >

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

      secondTextNav: {
      
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginLeft: 30,
        marginRight: 30,
        marginTop: '9%', 
        height : '45%',
  
      },

      alert: {
          flex: 1,
          marginRight: 20,
          marginLeft: 20,
      },

      singleAlert: {
        //   borderWidth: 3,
          padding: 16,
          marginBottom: 10,
          borderRadius: 10,
          backgroundColor: '#FFFFFF',
          
      },

    })
