import React from 'react'
import { ScrollView, StyleSheet, Text, View} from 'react-native'


const TranscArray = [

    {

      id: 1,
      type: 'Due',
      Amount: '500,000 NGN',
      TRNC__type: 'Transaction type',
      date: 'April 3:02Pm',

    },
    {

      id: 2,
      type: 'Due',
      Amount: '600,000 NGN',
      TRNC__type: 'Transaction type',
      date: 'April 3:02Pm',

    },
    
     {

       id: 3,
       type: 'Due',
       Amount: '700,000 NGN',
       TRNC__type: 'Transaction type',
       date: 'April 3:02Pm',

     },
     {

       id: 4,
       type: 'Due',
       Amount: '800,000 NGN',
       TRNC__type: 'Transaction type',
       date: 'April 3:02Pm',

     },
     {

       id: 5,
       type: 'Due',
       Amount: '900,000 NGN',
       TRNC__type: 'Transaction type',
       date: 'April 3:02Pm',

     },
  ]


const SecondTransaction = () => {
  return (
    
    <ScrollView showsVerticalScrollIndicator={false} >
        
            {TranscArray.map(({id, type, Amount, TRNC__type, date}) => {

                return(

                <View key={id} style={styles.container}>
           
                <View style={styles.text__container}>

                  <View style={styles.transFirstDetail}>

                  <Text style={{
                      color: '#000000',
                      fontSize: 18,
                  }}>{type}</Text>

                  <Text style={{
                      color: '#000000',
                      fontSize: 18,
                  }}>{Amount}</Text>

                  </View>
           
                  <View style={styles.transSecondDetail}>

                  <Text style={{
                      color: '#000000',
                      fontSize: 18,
                  }}>{TRNC__type}</Text>

                  <Text style={{
                      color: '#000000',
                      fontSize: 18,
                  }}>{date}</Text>

                  </View>
                  
                </View>
            </View>

                )
            })}

    </ScrollView>
  )
}

export default SecondTransaction

const styles = StyleSheet.create({

    container: {
        marginTop: 9,
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10,
    },


    transFirstDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },

    transSecondDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },

})