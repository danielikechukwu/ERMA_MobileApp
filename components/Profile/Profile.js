import React, {useEffect} from 'react'
import { View, SafeAreaView, StyleSheet, Text, TextInput, ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
 import {useSelector} from 'react-redux'
// import * as action from '../store/action'





export default function Profile({navigation: {goBack}}) {



    // const title = 'Generate Token';

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


      // const dispatch = useDispatch();

      // useEffect(() => {

      //   dispatch(action.Login())

      // },[dispatch])
    
       const personalProfile = useSelector(state => state.Authreducer.user)
    
      // console.log(personalProfile)

      // const name = personalProfile.data[0].gender;


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

            <Text style={{ color: '#ffffff', fontSize: 24 }}>Profile</Text>

            </View>

        </View>

    </SafeAreaView>    

    <View style={styles.textInput}>

        <ScrollView showsVerticalScrollIndicator={false} >

                <Text style={{ marginBottom: 7, fontSize: 18, }}>Full Name</Text>

                <TextInput placeholder="" value={personalProfile.data[0].fullname} style={{  marginBottom: 20, height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, fontSize: 20,}}/>

                <Text style={{ marginBottom: 7, fontSize: 18,}}>Residence ID</Text>

                <TextInput placeholder=""  value={personalProfile.data[0].residentId} style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 20, fontSize: 20, }}/>          

                <Text style={{ marginBottom: 7, fontSize: 18,}}>Phone</Text>

                <TextInput placeholder="" value={personalProfile.data[0].phone} style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 20, fontSize: 20, }}/>  

                <Text style={{ marginBottom: 7, fontSize: 18,}}>Marital Status</Text>

                <TextInput placeholder="" value={personalProfile.data[0].maritalStatus} style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 20, fontSize: 20,}}/>   

                <Text style={{ marginBottom: 7, fontSize: 18,}}>Gender</Text>

                <TextInput placeholder="" value={personalProfile.data[0].gender} style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 20, fontSize: 20, }}/>  

                <Text style={{ marginBottom: 7, fontSize: 18,}}>Apartment Type</Text>

                <TextInput placeholder="" value={personalProfile.data[0].apartmentType} style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 20, fontSize: 20, }}/>   

                <Text style={{ marginBottom: 7, fontSize: 18,}}>Apartment Info</Text>

                <TextInput placeholder="" value={personalProfile.data[0].apartmentInfo} style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 20, fontSize: 20, }}/>  

                <Text style={{ marginBottom: 7, fontSize: 18,}}>Date of Birth</Text>

                <TextInput placeholder="" value={personalProfile.data[0].dateOfBirth} style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 20, fontSize: 20,}}/>   

                <Text style={{ marginBottom: 7, fontSize: 18,}}>House Address</Text>

                <TextInput placeholder="" value={personalProfile.data[0].houseAddress} style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 20, fontSize: 20, }}/>  

                <Text style={{ marginBottom: 7, fontSize: 18,}}>zone</Text>

                <TextInput placeholder="" value={personalProfile.data[0].zone}style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, fontSize: 20,}}/>   

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

      textInput: {
          flex: 1,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 20,
          marginBottom: 20,

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
