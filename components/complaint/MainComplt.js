import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import HamburgerMenu from '../HamburgerMenu'

const COMPLAINTS = [

    {
        id: 1,
        issue: 'I had issues with my Security',
        status: 'Status : '
    },

    {
        id: 2,
        issue: 'Excess fee observed in my acccount',
        status: 'Status : '
    },

    {
        id: 3,
        issue: 'I had issue with my Security',
        status: 'Status : '
    },

    {
        id: 4,
        issue: 'Excess fee observed in my account',
        status: 'Status : '
    },

    {
        id: 5,
        issue: 'My account got blocked for no reason',
        status: 'Status : '
    },

    {
        id: 6,
        issue: 'Having issue in pin',
        status: 'Status : '
    },

    {
        id: 7,
        issue: 'My office is pretty messy',
        status: 'Status : '
    },

    {
        id: 8,
        issue: 'Incomplete loging in',
        status: 'Status : '
    },

    {
        id: 9,
        issue: 'Third parties has my account details',
        status: 'Status : '
    },

]

export const MainComplt = (props) => {

  const AddComplaint = () => props.navigation.navigate("GetComplain");

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

                  {/* <Screen /> */}
                  <HamburgerMenu menu__name={clicked}/>

                  <Text style={{ fontSize: 24, color: '#ffffff' }}>ERM Application</Text>

            </View>

            <View style={styles.secondTextNav}>
              
                <Text style={{ color: '#ffffff', fontSize: 24 }}>Complaint</Text>

                <TouchableOpacity style={{ backgroundColor: '#ffffff', borderRadius: 20, paddingVertical: 9, paddingHorizontal: 39, textAlign: 'center', lineHeight: 21, height: 40}} onPress={AddComplaint} >

                  <View style={{  borderRadius: 20, backgroundColor: '#ffffff', }}>

                    <Text style={{ color: '#1261A0', fontSize: 16, }}>                   
                    Add complaint                   
                    </Text>

                  </View>                  

                </TouchableOpacity>
                

            </View>

            </View>

        </SafeAreaView>

        <View style={styles.stateComplaints}>

                <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>

                    {COMPLAINTS.map((elements, id) => {
                    return (

                    <View key={id} style={styles.singleComplain}>

                        <Text style={{ fontSize: 18,}}>{elements.issue}</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between',
                    marginTop: 10, marginBottom: 10,}}>
                           <Text style={{ fontSize: 18,}}>{elements.status}Open</Text> 
                           <Text style={{ fontSize: 18,}}>Feb 7, 2:00am</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>

                        <Text style={{ fontStyle: 'italic', color: '#1261A0'}}>
                            Read complaint
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
      
        // height: 210,
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

      stateComplaints: {
          flex: 1,
          marginTop: 40,
         
          
      },

      singleComplain: {
        //   borderWidth: 3,
          padding: 16,
          marginBottom: 10,
          borderRadius: 10,
          backgroundColor: '#FFFFFF',
          
      },

      scroll: {
        paddingRight: 17,
        paddingLeft: 17,
       
      },

    })
