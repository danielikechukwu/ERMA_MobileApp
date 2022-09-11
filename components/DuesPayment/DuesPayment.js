import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import StructurePicker from './StructurePicker';

export default function DuesPayment({navigation: {goBack}}) {

    const title = " Pay ";

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
    
            {/* <HamburgerMenu menu__name={clicked}/> */}
            <AntDesign name="arrowleft" size={24} color="#ffffff" onPress={() => goBack()}/>
    
            <Text style={{ fontSize: 24, color: '#ffffff' }}>ERM Application</Text>
    
      </View>
    
      <View style={styles.secondTextNav}>
        
          <Text style={{ color: '#ffffff', fontSize: 24 }}>Dues</Text>
          
    
      </View>
    
      </View>
    
    </SafeAreaView>

    <View style={styles.textInput}>

    <View>
        <Text style={{  color: '#1261A0', marginTop: 20, fontSize: 22, marginBottom: 20, }}> Kindly make your payment </Text>
    </View> 

    <Text style={{ marginBottom: 2, fontSize: 18,}}>Structure Number</Text>

    <TextInput placeholder="Visitor's Name" style={{  marginBottom: 15, height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, borderWidth: 1, borderColor: '#1261A0',  fontSize: 20,}}/>
  

    <Text style={{ marginBottom: 2, fontSize: 18,}}>Select Dues</Text>

    {/* <TextInput placeholder="Visitor Email" style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#1261A0', }}/>           */}
    <StructurePicker />

    <Text style={{ marginBottom: 2, fontSize: 18,}}>Discount</Text>

    <TextInput placeholder="" style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#1261A0',  fontSize: 20, }}/>  

    <Text style={{ marginBottom: 2, fontSize: 18,}}>Amount Payable</Text>

    <TextInput placeholder="Amount Payable" style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 15,  borderWidth: 1, borderColor: '#1261A0',  fontSize: 20,}}/>   

    <Text style={{ fontSize: 18, marginBottom: 2,}}>Amount Ready to be Paid</Text>

    <TextInput placeholder="Amount Ready to be Paid" style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, borderWidth: 1, borderColor: '#1261A0',  fontSize: 20, }}/>   


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
      
        // height: 203,
        // backgroundColor: '#1261A0',
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
        marginTop: '-9%',
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
        
        marginLeft: '6%',
        marginRight: '6%',
    },

    appButtonContainer: {
        
        marginTop: 20,
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
        color: '#ffffff',        
    },
})