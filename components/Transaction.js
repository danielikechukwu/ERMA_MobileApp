import React from 'react'
import { ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native'


const TranscArray = [

    {

      id: 1,
      type: 'Due',
      Amount: '5,000 NGN',
      TRNC__type: 'Transaction type',
      date: 'April 05, 3:02Pm',

    },
    {

      id: 2,
      type: 'Due',
      Amount: '5,000 NGN',
      TRNC__type: 'Transaction type',
      date: 'April 05, 3:02Pm',

    },
    
     {

       id: 3,
       type: 'Due',
       Amount: '5,000 NGN',
       TRNC__type: 'Transaction type',
       date: 'April 05, 3:02Pm',

     },

     
     {

      id: 4,
      type: 'Due',
      Amount: '5,000 NGN',
      TRNC__type: 'Transaction type',
      date: 'April 05, 3:02Pm',

    },
    {

      id: 5,
      type: 'Due',
      Amount: '5,000 NGN',
      TRNC__type: 'Transaction type',
      date: 'April 05, 3:02Pm',

    },
    {

     id: 6,
     type: 'Due',
     Amount: '5,000 NGN',
     TRNC__type: 'Transaction type',
     date: 'April 05, 3:02Pm',

   },
   {

     id: 7,
     type: 'Due',
     Amount: '5,000 NGN',
     TRNC__type: 'Transaction type',
     date: 'April 05, 3:02Pm',

   },
   
    {

      id: 8,
      type: 'Due',
      Amount: '5,000 NGN',
      TRNC__type: 'Transaction type',
      date: 'April 05, 3:02Pm',

    },
    {

      id: 9,
      type: 'Due',
      Amount: '5,000 NGN',
      TRNC__type: 'Transaction type',
      date: 'April 05, 3:02Pm',

    },
    {

      id: 10,
      type: 'Due',
      Amount: '5,000 NGN',
      TRNC__type: 'Transaction type',
      date: 'April 05, 3:02Pm',

    },
  ]


const Transaction = () => {

  const screenHeight = Dimensions.get('window').height


  return (  

      <ScrollView showsVerticalScrollIndicator={false} style={{ height:screenHeight, borderWidth: 3, margin: 10,}}>       

            {TranscArray.map(({id, type, Amount, TRNC__type, date}) => {
              
              return(                  

              <View key={id} style={styles.container}>           

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

            

                )}
            )}

      </ScrollView>
  )
}

export default Transaction

const styles = StyleSheet.create({

    container: {
      
      marginTop: 9,
      backgroundColor: 'white',
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