  import React, {useState} from 'react'
  import {View, Text, StyleSheet, ScrollView } from 'react-native'


  const NEWSX = [

    {

        id: 1,
        type: 'Subject :',
        topic: 'Why excess deaths during the pandemic',
        status: 'Status : '

    },

    {

      id: 2,
      type: 'Subject :',
      topic: 'What is this new variant',
      status: 'Status :'

    },

    {

      id: 3,
      type: 'Subject :',
      topic: 'How is the UK preparing for Omicron?',
      status: 'Status :'

    },

    {

      id: 4,
      type: 'Subject :',
      topic: 'Why excess deaths during the pandemic',
      status: 'Status : '

  },

  {

    id: 5,
    type: 'Subject :',
    topic: 'What is this new variant',
    status: 'Status :'

  },

  {

    id: 6,
    type: 'Subject :',
    topic: 'How is the UK preparing for Omicron?',
    status: 'Status :'

  },

  {

    id: 7,
    type: 'Subject :',
    topic: 'How is the UK preparing for Omicron?',
    status: 'Status :'

  },

  ]
  
  const News = () => {

    const [opened, setOpened] = useState('Unread');

    //function that sets message read or unread...
   function setMessageOpening() {

      setOpened('Read');
    }

    return (

      <View style={styles.container}> 

            <Text style={styles.title}>Estate News Flash</Text> 

            <View style={{ flex: 1, height: '70%',}}>

              <ScrollView showsVerticalScrollIndicator={false} style={{  paddingRight: 17, paddingLeft: 17,   paddingTop: 1,   height: '80%', bottom: 0,}}>

                {NEWSX.map((elements, id) => {
                return (

                  <View key={id} style={styles.news}>

                    <Text style={{ fontSize: 18,}}>{elements.type}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18,}}>{elements.topic}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>

                      <Text style={{ fontSize: 18,}}>{elements.status}<Text style={{ fontWeight: 'bold',}}>{opened}</Text></Text>
                      <Text style={{ alignItems: 'center', fontSize: 18, fontStyle: 'italic', color: '#1261A0'}} onPress={setMessageOpening}>View</Text>

                    </View>

                  </View>

                )
                })}

              </ScrollView>

            </View> 

      </View>
    )
  }

  export default News

  const styles = StyleSheet.create({

      container: {
        marginTop: '55%',
          flex: 1,
      },

      title: {
        color: '#000000',
        width: 157,
        height: 25,
        fontSize: 18,
        paddingLeft: 17,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
      },

      news: {
     
        borderRadius: 10,
        marginBottom: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 6,        
        backgroundColor: '#ffffff', 


      },

  })




  // style={{  paddingRight: 17, paddingLeft: 17,  marginBottom: 90, paddingTop: 1, paddingBottom: 21, }}