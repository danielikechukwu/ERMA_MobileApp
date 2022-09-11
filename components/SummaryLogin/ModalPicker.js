import { View, TouchableOpacity, StyleSheet, Dimensions, Text, ScrollView } from 'react-native'
import React from 'react'



const OPTIONS = [ 'Development Levy/Grace Unit - Annual','Facility Fees','Electricity Facility','Development Levy/Green Valley Unit - Annaul','Development Levy','Project A','Development Levy - Lintel','Development Levy - Casting of decking','Development Levy - Completion']

export const ModalPicker = (props) => {   


const WIDTH = Dimensions.get('window').width;

const HEIGHT = Dimensions.get('window').height;

const onPressItem = (option) => {

    props.changeModalVisibility(false)

    props.setData(option);
}


//Mapping the OPTIONS Array

const option = OPTIONS.map((items, index) => {
    return(

        <TouchableOpacity style={styles.option} key={index} onPress={ () => onPressItem(items)}>

            <Text style={[styles.text]}>{items}</Text>

        </TouchableOpacity>
    )
})

  return (    


        <View style={styles.container} >

        <View style={[styles.Modal, {width: WIDTH - 40, height: HEIGHT / 1.8}] }>

 {/* Calling the map option under the ScrollView component */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ marginBottom: 20, color: '#000000', fontSize: 23, marginTop: 9, marginLeft: 9}}>Select Dues</Text>
                {option}

            </ScrollView>
           
        </View>

        </View>

  )
}


const styles = StyleSheet.create({


container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },

    Modal: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    option: {
        // borderWidth: 3,
        marginBottom: 20,
        height: 48,        
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 28,
        // backgroundColor: '#F1F7FF'
    },
    text: {
        color: '#000000',
        fontSize: 19,
    }

})