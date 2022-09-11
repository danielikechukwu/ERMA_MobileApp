import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const WelcomeUser = (props) => {

  

  return (
    
    <View style={styles.container}>      

        <Text style={styles.Text}>
            
             <Text style={{ fontWeight: 'bold',}}>Hello Marine{'\n'}</Text> 
              Welcome to ERM Application  
                      
        </Text>
        
        <View style={styles.User}>

           <AntDesign name="user" size={24} color="white" onPress={ props.name}/>

        </View>

    </View>
  )
}

export default WelcomeUser

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 17,
    marginTop: 15,
  },

  User: {
    
    backgroundColor: '#1261A0',
    width: 42,
    height: 42,
    padding: 6,
    borderRadius: 20,
    alignItems: 'center',
  },

  Text: {
    fontSize: 19,    

  },

  sndSubText: {
    marginTop: 10,
  }

})