import { View, Text, TouchableOpacity, StyleSheet, Modal  } from 'react-native'
import React, { useState}  from'react'
import { ModalPicker } from '../SummaryLogin/ModalPicker';

export default function StructurePicker() {

    const [isModalVisable, setIsModalVisable] = useState(false);

    const [chosenData, setChosenData] = useState('Select Dues');

    //function responsible for the opening and closing of modal

    const changeModalVisibility = (bool) => {

        setIsModalVisable(bool);
        
    }

    const setData = (option) => {

        setChosenData(option);
    }

    const showModal = () => {

        setIsModalVisable(true)
    }



  return (
    
    
    <View style={styles.view}>

    

    <TouchableOpacity onPress={ () => showModal()}>

            <Text style={[styles.text ]}> {chosenData} </Text>

    </TouchableOpacity>

    <Modal visible={isModalVisable} animationType="fade" transparent={true} onRequestClose={() => changeModalVisibility(false)}>

        <ModalPicker changeModalVisibility={changeModalVisibility} setData={setData}/>

    </Modal> 

</View>

  )
}

const styles = StyleSheet.create({
    
    view: {
            borderWidth: 2,
            padding: 10,
            borderColor: '#1261A0',
            borderRadius: 10,
            height: 48,
            backgroundColor: '#F1F7FF',
        },

        text: {
            color: '#000000',
            alignItems: 'center',
            justifyContent: "center",
            fontSize: 20,
        },

        Modal: {
        backgroundColor: 'white',
        borderRadius: 10,
        }

})