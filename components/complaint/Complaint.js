import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Textarea from 'react-native-textarea';


export const Complaint = ({navigation: { goBack }}) => {

  const title = 'Send';

  const backToDashBoard = () => goBack();

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
          <AntDesign name="arrowleft" size={24} color="#ffffff" onPress={backToDashBoard}/>
    
          <Text style={{ fontSize: 24, color: '#ffffff' }}>ERM Application</Text>
    
      </View>
    
      <View style={styles.secondTextNav}>
        
          <Text style={{ color: '#ffffff', fontSize: 24,  }}>Complaint</Text>          
    
      </View>
    
      </View>
    
    </SafeAreaView> 

    <View style={{ margin: 20, }}>
      <Text style={{ fontSize: 20, color: '#1261A0',  }}> Kindly make your complaint </Text>
    </View>

    <View style={styles.typed__complaint}>
      
      <View>
        <Text style={{ marginBottom: 11, fontSize: 18,}}>Subject</Text>
        <TextInput style={styles.text__subject} placeholder="" />
      </View>

      <View>
        <Text style={{ marginBottom: 15, fontSize: 18,}}>Input your complaint</Text> 
        {/* <TextInput style={styles.text__complaint} placeholder=""/>       */}
        <Textarea containerStyle={styles.textareaContainer} style={styles.textarea}  maxLength={120}  placeholder={'Input complain...'}  placeholderTextColor={'#c7c7c7'} underlineColorAndroid={'transparent'}/>
      </View>

      <View style={styles.touchableButton}>

      <TouchableOpacity style={styles.appButtonContainer}>
        
          <Text style={styles.appButtonText}>{title}</Text>

      </TouchableOpacity>    

      </View>

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

      typed__complaint: {
        
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        // width: '80%',
        margin: 30,
      },

      text__complaint: {
        borderWidth: 1,
        borderColor: '#1261A0',
        height: 185,
        marginBottom: 18,
        padding: 9,
        fontSize: 23,

      },

      text__subject: {
        borderWidth:1,
        borderColor: '#1261A0',
        marginBottom: 15,
        height: 46,
        width: 151,
        padding: 9,
        fontSize: 20,
        borderRadius: 10,
        
      },

      appButtonContainer: {
        // borderWidth: 3,
        backgroundColor: '#1261A0',
        height: 46,
        width: 119,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },

      appButtonText: {
        color: '#000000',
        fontSize: 18,        
      },

      touchableButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',

      },

      textareaContainer: {
        height: 180,
        padding: 15,
        backgroundColor: '#F5FCFF',
        borderWidth: 0,
        borderColor: '#1261A0',
        marginBottom: 18,
        borderRadius: 10,


      },
      
      textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 18,
        color: '#333',
        
      },

      
})
