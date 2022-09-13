import React from 'react'
import { View, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export const Token = ({navigation: {goBack}}) => {   

    const title = 'Generate Token';

    const generateAppsContainer = (isBgcolor, anBgcolor, anHEIT, isHEIT) => {

      //Selection of style for each platform
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
            {/* <HamburgerMenu menu__name={clicked}/> */}
            <AntDesign name="arrowleft" size={24} color="#ffffff" onPress={() => goBack()}/>
    
            <Text style={{ fontSize: 24, color: '#ffffff' }}>ERM Application</Text>
    
      </View>
    
      <View style={styles.secondTextNav}>
        
          <Text style={{ color: '#ffffff', fontSize: 24 }}>Token</Text>
    
      </View>
    
      </View>
    
    </SafeAreaView>    

    <View style={styles.textInput}>

    <View>
        <Text style={{  color: '#1261A0', marginTop: 20, fontSize: 22, marginBottom: 22, }}> Kindly generate token </Text>
    </View> 

        <Text style={{ marginBottom: 7, fontSize: 18,}}>Visitor's Name</Text>

        <TextInput placeholder="Visitor's Name" style={{  marginBottom: 20, height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, fontSize: 20,}}/>

        <Text style={{ marginBottom: 7, fontSize: 18,}}>Visitor Email</Text>

        <TextInput placeholder="Visitor Email" style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 20, fontSize: 20,}}/>          

        <Text style={{ marginBottom: 7, fontSize: 18,}}>Purpose</Text>

        <TextInput placeholder="Purpose" style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 20, fontSize: 20, }}/>  

        <Text style={{ marginBottom: 7, fontSize: 18,}}>Number of visitors</Text>

        <TextInput placeholder="Number of visitors" style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, fontSize: 20, }}/>   

        <TouchableOpacity style={styles.appButtonContainer} >
        
        <Text style={styles.appButtonText} >{title}</Text>

       </TouchableOpacity>        


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

      textInput: {
          paddingLeft: 20,
          paddingRight: 20,

      },

      appButtonContainer: {
        
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: '#1261A0',
        height: 48,
        borderRadius: 40,
    },

    appButtonText: {
        fontSize: 20,
        color: '#ffffff'
        
    },


})
