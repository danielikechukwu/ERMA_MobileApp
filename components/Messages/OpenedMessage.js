import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import Screen from '../Screen'

function OpenedMessage() {
  return (
    
    <View style={styles.main__container}>      

        <SafeAreaView style={styles.container}>

          {/* <Hamburgermeun /> */}
          <View style={styles.Nav__Details}>

            <View style={styles.FirstTextNav}>

                  <Screen />

                  <Text style={{ fontSize: 24, color: '#ffffff' }}>ERM Application</Text>

            </View>

            <View style={styles.secondTextNav}>
              
                <Text style={{ color: '#ffffff', fontSize: 24 }}>Messages</Text>

                {/* <Text style={{ color: '#1261A0', backgroundColor: '#ffffff', borderRadius: 20, paddingVertical: 9, paddingHorizontal: 39, textAlign: 'center', fontSize: 14, fontWeight: 'bold', lineHeight: 21,}}>
                   
                   Add complaint
                   
                </Text> */}

            </View>

            </View>

        </SafeAreaView>

        <View>
            <Text style={{ marginLeft: 20, marginTop: 20, color: '#1261A0',}}>Read Message</Text>
        </View>

        <View>

            <View style={{ flexDirection: 'row',}}>
                <Text style={{ marginLeft: 20, marginTop: 20,}}>Subject:</Text>
                    <Text style={{  marginTop: 20, fontWeight: 'bold', }}> Payroll configuration</Text>

            </View>
            
            <Text style={{ margin: 20, padding: 10, fontSize: 18, backgroundColor: '#ffffff', borderRadius: 10, height: 132, }}> A salary journal template will be provided for the finance team to populate the ledgers entries for all the payroll earnings and deductions respectively. This will be used to configuration the Sage 300 people payroll in order to generate monthly salary journal that will seamlessly intergrage into Sage 300. </Text>
        </View>

        </View>
  )
}

export default OpenedMessage

const styles = StyleSheet.create({

    main__container: {
        flex: 1,
        backgroundColor: '#F1F7FF',
      },

      container: {
      
        height: 203,
        backgroundColor: '#1261A0',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
  
      },

      Nav__Details: {
    
        marginTop: '20%'
  
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

    })