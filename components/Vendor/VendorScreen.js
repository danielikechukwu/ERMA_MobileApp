import React from 'react'
import {View, Text, SafeAreaView, StyleSheet,  TextInput, ScrollView} from 'react-native'
import HamburgerMenu from '../HamburgerMenu'


const USERXX = [

    {
        id: 1,
        prof: 'Electrician',
        name: 'Vensolad Ventures',
        contact: 'Jimoh Oluwaseun',
        telephone: '0805673382',
        email: 'jimoholuw2@gmail.com'

    },

     {
        id: 2,
        prof: 'Plumber',
        name: 'Adex Limited',
        contact: 'Oyewale Tommy',
        telephone: '0993445',
        email: 'oyewaletoo@gmail.com'
        
    },

    {
        id: 3,
        prof: 'Furniture',
        name: 'Woodcrafter',
        contact: 'Steven wood',
        telephone: '08343382',
        email: 'woodsteve@gmail.com'
        
    },

    {
        id: 4,
        prof: 'Carpenter',
        name: 'Capwood',
        contact: 'John Friday',
        telephone: '0979623456',
        email: 'johnfriday@gmail.com'
        
    },

    {
        id: 5,
        prof: 'Software Consultant',
        name: 'softcodes',
        contact: 'Festus Okesade',
        telephone: '093479429',
        email: 'sotyy@gmail.com'
        
    },

]


export const VendorScreen = (props) => {

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
    
    <View style={styles.appContainer}>

<SafeAreaView style={styles.container}>
    
    {/* <Hamburgermeun /> */}
    <View style={styles.Nav__Details}>
    
      <View style={styles.FirstTextNav}>
    
            <HamburgerMenu menu__name={clicked}/>
    
            <Text style={{ fontSize: 24, color: '#ffffff' }}>ERM Application</Text>
    
      </View>
    
      <View style={styles.secondTextNav}>
        
          <Text style={{ color: '#ffffff', fontSize: 24,  }}>Vendors</Text>
    
      </View>
    
      </View>
    
    </SafeAreaView>  

    <View style={styles.Search__details}>

        <TextInput style={styles.text__input} placeholder="Search vendor"/>
        <TextInput style={styles.text__filter} placeholder="Filter"/>

    </View>

    <ScrollView style={{ flex: 1, }}>

    <View style={styles.mapped__details}>

        {USERXX.map((elements, id) => {
            return (

              <View key={id} style={styles.professions}>

                  <Text style={{ fontSize: 18, color: '#1261A0', width: 72, lineHeight: 25, fontWeight: 'bold',}}>{elements.prof}</Text>
                  <Text style={{ fontSize: 14,}}>Name :</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 18,}}>{elements.name}</Text>      
                  <Text style={{ fontSize: 14,}} >Contact :</Text>                
                  <Text style={{ fontSize: 18, fontWeight: 'bold',}}>{elements.contact}</Text>
                  <Text style={{ fontSize: 14,}}>Telephone :</Text>
                  <Text style={{ alignItems: 'center', fontSize: 18, fontStyle: 'italic', color: '#1261A0', fontWeight: 'bold',}}>{elements.telephone}</Text>
                  <Text style={{ fontSize: 14,}}>Email :</Text>
                  <Text style={{ fontWeight: 'bold',}}>{elements.email}</Text>

              </View>

            )
        })}

    </View>

    </ScrollView>

    

    </View>
  )
}

const styles = StyleSheet.create({

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

      appContainer: {
          backgroundColor: '#F1F7FF',
          flex: 1,
      },

      text__input: {

        // borderWidth: 2,
        backgroundColor: '#ffffff',
        width: '60%',
        height: 43,
        borderRadius: 20,
        padding: 9,
        marginTop: 20,
        fontSize: 20,
        paddingLeft: 20,
        color: '#000000',
        marginBottom: 20,
      },

      text__filter: {
        backgroundColor: '#ffffff',
        // borderWidth: 2,
        width: '30%',
        height: 43,
        marginTop: 20,
        padding: 9,
        borderRadius: 8,
        fontSize: 20,
        color: '#000000',
        marginBottom: 20,


      },

      Search__details: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
         
      },

      professions: {

        // borderWidth: 3,
        borderRadius: 10,
        padding: 6,
        width: '47%',
        height: 262,
        backgroundColor: '#ffffff',
        margin: 4,
        flexDirection: 'column',
        justifyContent: 'space-between',

      },

      mapped__details: {
         
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,         
          
      },

})
