import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import SecondTransaction from '../SecondTransaction';
import Transaction from '../Transaction';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import HamburgerMenu from '../HamburgerMenu';


export default function Dues() {

    const[display, setDisplay] = useState(false);


    function settingDisplay(){
        setDisplay(true);
      }


  return (
    
    
    <View style={styles.main__container}>      

        <SafeAreaView style={styles.container}>

          {/* <Hamburgermeun /> */}
          <View style={styles.Nav__Details}>

            <View style={styles.FirstTextNav}>

                  {/* <HamburgerMenu menu__name={clicked} /> */}
                  <AntDesign name="arrowleft" size={24} color="#ffffff" />

                  <Text style={{ fontSize: 24, color: '#ffffff' }}>ERM Application</Text>

            </View>

            <View style={styles.secondTextNav}>
              
                <Text style={{ color: '#ffffff', fontSize: 24 }}>Dues</Text>

                <TouchableOpacity>
                  <Text style={{ color: '#1261A0', backgroundColor: '#ffffff', borderRadius: 20, paddingVertical: 9, paddingHorizontal: 39, textAlign: 'center', fontSize: 14, fontWeight: 'bold', lineHeight: 21,}} >
                   
                   Make Payments
                   
                   </Text>
                </TouchableOpacity>
                

            </View>

            </View>

        </SafeAreaView>       

        {/* SubNav component */}
         
    <View style={styles.Sub__container}>

        <Text style={display ? styles.Naved__Sum_Text : styles.Sum_Text} onPress={ () => { setDisplay(false) } } >Summary</Text>

        <Text style={display ? styles.Naved__Due_Text : styles.Due_Text  } onPress={ settingDisplay  } >Details</Text>

    </View>


        <View style={styles.transac__details}>

          { display ? <Transaction /> : <SecondTransaction /> }
                
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
      
      height: 219,
      backgroundColor: '#1261A0',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
  
    },
  
    Nav__Details: {
     
      marginTop: '22%'
  
    },
  
    Sub__container: {
      
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 30, 
      marginBottom: 10,
  
    },
  
    Sum_Text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000000',  
      borderBottomWidth: 2, 
      borderBottomColor: '#1261A0',
      paddingBottom: 6,
    },
  
     Due_Text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000000',
    },
  
    FirstTextNav: {
     
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 30,
      marginRight: 30,  
    },
  
    secondTextNav: {
      
      flexDirection: 'row',
      justifyContent: 'space-between', 
      marginLeft: 30,
      marginRight: 30,
      marginTop: '7%',
      marginBottom: 20,  
    },
  
    transac__details: {
  
      padding: 10,
    },
  
    Naved__Due_Text: {
      
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000000',
      borderBottomWidth: 2,
      borderBottomColor: '#1261A0',
      paddingBottom: 6,      
    },
  
    Naved__Sum_Text: {
      
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000000',       
    }  
  
  });
  
  
  
  