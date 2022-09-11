import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


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


export default function DetailsTransaction({navigation: {goBack}}) {

    const [activeTab, setActiveTab] = useState('Details');

    const navigation = useNavigation();

    const GetPayScreen = () => navigation.navigate("PaymentScreen")


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
                  <AntDesign name="arrowleft" size={24} color="#fff" onPress={() => goBack()}/>

                  <Text style={{ fontSize: 24, color: '#ffffff' }}>ERM Application</Text>

            </View>

            <View style={styles.secondTextNav}>
              
                <Text style={{ color: '#ffffff', fontSize: 24 }}> Due </Text>

                <TouchableOpacity style={{ backgroundColor: '#ffffff', borderRadius: 20, paddingVertical: 9, paddingHorizontal: 39, textAlign: 'center', fontSize: 14, fontWeight: 'bold', lineHeight: 21, height: 40}} onPress={GetPayScreen}>
                  <Text style={{ color: '#1261A0', fontSize: 18, }} >
                   
                  Make Payment
                   
                </Text>
                </TouchableOpacity>
                

            </View>

            </View>

        </SafeAreaView>

        <View style={{ flexDirection:"row", justifyContent: 'space-between', marginTop: 40, marginLeft: 40, marginRight: 40, marginBottom: 40, color: '#000000',  }}>                 

             {/* Summary Title */}
            {/* <SummaryTitle name="Summary" BottomBorder={3} BottomBorderColor="#1261A0" activestate={activeTab} setactivestate={setActiveTab} /> */}

            <View>
                <Text style={{
                color: 'gray', 
                fontSize: 24,
                fontWeight: '600',              
                paddingBottom: 6,
                }}>Summary</Text>
            </View>

             {/* Detail Title */}
            <SummaryTitle name="Details" BottomBorder={3} BottomBorderColor="#1261A0" activestate={activeTab} setactivestate={setActiveTab} />   

            {/* <View>
                <Text style={{
                color: 'gray', 
                fontSize: 24,
                fontWeight: '600',              
                paddingBottom: 6,
                }}>Details</Text>
            </View> */}
            

    </View>

    <View style={{ flex: 1}}>

    <ScrollView showsVerticalScrollIndicator={false}  style={{ margin: 10}}>       

{TranscArray.map(({id, type, Amount, TRNC__type, date}) => {
  
  return(                  

  <View key={id} style={{  padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    }}>           

      <View style={{  flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,}}>

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

    </View>


    </View>


  )
}



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
    
          transFirstDetail: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            
        },
    
        transSecondDetail: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
        },
    
        
        transac__details: {
      
          padding: 10,
          borderWidth: 5,
          backgroundColor: 'red'
        },
    
    
    })