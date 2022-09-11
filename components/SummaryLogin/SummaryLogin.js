import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import DuePicker from './DuePicker';
import HamburgerMenu from '../HamburgerMenu';

const title = 'Preview';





export const SummaryLogin = (props) => {

  const [activeTab, setActiveTab] = useState('Summary');

  const clicked = () => props.navigation.openDrawer();

  const openSummaryTransaction = () => props.navigation.navigate("TransacSummaryDues");

  const openDetailTransaction = () => props.navigation.navigate("TransacDetailsDues");

  const GetPayScreen = () => props.navigation.navigate("PaymentScreen")

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
                  <HamburgerMenu menu__name={clicked}/>

                  <Text style={{ fontSize: 24, color: '#ffffff' }}>ERM Application</Text>

            </View>

            <View style={styles.secondTextNav}>
              
                <Text style={{ color: '#ffffff', fontSize: 24 }}> Due </Text>

                <TouchableOpacity style={{ backgroundColor: '#ffffff', borderRadius: 20, paddingVertical: 9, paddingHorizontal: 39, textAlign: 'center', fontSize: 14, fontWeight: 'bold', lineHeight: 21, height: 40}}  onPress={GetPayScreen}>
                  <Text  style={{ color: '#1261A0', fontSize: 18, }}>
                   
                  Make Payment
                   
                </Text>
                </TouchableOpacity>
                

            </View>

            </View>

        </SafeAreaView>

        <View style={{ flexDirection:"row", justifyContent: 'space-between', margin: 40, color: '#000000',  }}>                 

             {/* Summary Title */}
            <SummaryTitle name="Summary" BottomBorder={3} BottomBorderColor="#1261A0" activestate={activeTab} setactivestate={setActiveTab} />

             {/* Detail Title */}
            <SummaryTitle name="Details" BottomBorder={3} BottomBorderColor="#1261A0" activestate={activeTab} setactivestate={setActiveTab} />   

        </View>

        <View style={{ backgroundColor: '#ffffff', marginLeft: 60, marginRight: 60, borderRadius: 15,}}>

   
          { activeTab === 'Summary' ? <SummaryLoginData name={openSummaryTransaction}/> : <DetailsLoginData name={openDetailTransaction}/> }

        </View>

      
    </View>
  )
}


//Title:::Functions (Summary and Details) 
const SummaryTitle = (props) => ( 

    <View style={{ borderBottomWidth: props.activestate === props.name ? props.BottomBorder : 0, borderBottomColor: props.BottomBorderColor,}}>

    <TouchableOpacity onPress={() => props.setactivestate(props.name)}>

        <Text style={{
             color: '#000000', 
             fontSize: 24,
             fontWeight: '600',              
             paddingBottom: 6,
             }}>
            {props.name}
        </Text>

    </TouchableOpacity>

    </View>
 )

 
// Summary Function Login
 const SummaryLoginData = (props) => (

  <View style={{  padding: 30, borderRadius: 35,}}>
   
            <Text style={{ marginBottom: 11, fontSize: 18,}}>From summary: </Text>

            <TextInput placeholder=" " style={{  marginBottom: 20, height: 48, padding: 9, borderRadius: 10, borderColor: '#1261A0', borderWidth: 2,  backgroundColor: '#F1F7FF',  fontSize: 20,}}/>

            <Text style={{ marginBottom: 11, fontSize: 18,}}>To:</Text>

            <TextInput placeholder=" " style={{  height: 48, padding: 9, borderRadius: 10, borderColor: '#1261A0', borderWidth: 2,  backgroundColor: '#F1F7FF',  fontSize: 20,}}/>  

            
          <TouchableOpacity 
            style={{
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1261A0',
            height: 48,
            borderRadius: 40,
            }} 
            onPress={props.name}
          >
        
              <Text style={{ fontSize: 20, color: '#ffffff', }} >{title}</Text>

          </TouchableOpacity> 

  </View>
 )


 // Detail Function Login

 const DetailsLoginData =(props) => (

<View style={{  padding: 30, borderRadius: 35,}}>
   
   <Text style={{ marginBottom: 11, fontSize: 18,}}>From Details: </Text>

   <TextInput placeholder="" style={{  marginBottom: 20, height: 48, padding: 9, borderRadius: 10, borderColor: '#1261A0', borderWidth: 2,  backgroundColor: '#F1F7FF',  fontSize: 20,}}/>

   <Text style={{ marginBottom: 11, fontSize: 18,}}>To:</Text>

   <TextInput placeholder="" style={{  height: 48, padding: 9, borderRadius: 10, borderColor: '#1261A0', borderWidth: 2,  backgroundColor: '#F1F7FF', marginBottom: 30,  fontSize: 20,}}/> 


       <DuePicker />

   <TouchableOpacity 
      style={{     
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1261A0',
      height: 48,
      borderRadius: 40,
    }}

    onPress={props.name}
    
    >

      <Text style={{ fontSize: 20, color: '#ffffff', }} >{title}</Text>
      
  </TouchableOpacity> 

</View>
 )

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
        marginBottom: 20,   
        height : '45%',
  
      },

    })