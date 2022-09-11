import { StyleSheet, Text, View, TouchableOpacity, Alert  } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import * as action from '../store/action'
import { TextInput } from 'react-native-paper'


// import * as yup from 'yup';



// const schemaLogin = yup.object({
//     email: yup.string().email().required(),
//     password: yup.string().required(),
// })


export const AppLogin = newData => {

    const dispatch = useDispatch();

    const [text, viewText] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(true);



  return (

   



    <View style={{ flex: 1  }}>      
       
        <Formik 
            
            initialValues={{
                username: "",
                password: ""
            }}

            // validationSchema={schemaLogin}
            // validateOnChange={false}
            // validateOnBlur={false}

            onSubmit={(values) => {

                // console.log(values);
                dispatch(action.Login(values))

                .then(result => {

                   

                    // console.log(result.data[0].gender)

                    console.log(result)

                    if(result.status === 'SUCCESS'){
                      newData.navigation.navigate("Home");
                    }
                    else{
                    //  console.log('No Dashbaord Screen')

                    Alert.alert(result.message)
                    }
                    
                    
                })

                .catch(err => console.log(`${err}: error exist why trying to navigate`))
            }}
            >
                {(props) => (

    
    <View style={styles.container}>        

        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 24, }}>Welcome to South East Zone,</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 24, }}>Magodo GRA</Text>
        </View>

        <View style={{ marginTop: 18, marginBottom: 50,}}>
            <Text style={{ fontSize: 22,}}>Kindly input your details</Text>
        </View>


        <View>

            <View >
 
                <Text style={{ marginBottom: 11, fontSize: 18,}}>Username</Text>

                <View style={{ marginBottom: 30,}}>
                <TextInput placeholder="Username" style={{  height: 48, padding: 9, backgroundColor: '#ffffff', borderRadius: 10, fontSize: 20,}} keyboardType="email-address" onChangeText={props.handleChange('username')} value={props.values.email} />

                {/* <Text>{props.touched.password && props.errors.password}</Text>  */}
                 </View>

               

                <Text style={{ marginBottom: 11, fontSize: 18,}}>Password</Text>

                <View style={{ marginBottom: 30,}}>  

                <TextInput  secureTextEntry={passwordVisible} placeholder="Password"  style={{  height: 48, padding: 9, backgroundColor: 'white', borderRadius: 10, fontSize: 20, borderWidth: '6px' }} onChangeText={props.handleChange('password')} value={props.values.password} onBlur={props.handleBlur('password')} right={<TextInput.Icon name={passwordVisible ? 'eye' : 'eye-off' } onPress={() => setPasswordVisible(!passwordVisible)}/>}/> 

                {/* <Text>{props.touched.password && props.errors.password}</Text> */}
                </View>

         

            </View>   

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 11,}}>

                <Text style={{ fontSize: 18,}}>Forget Password? </Text>
                <Text style={{ fontSize: 18, fontStyle: 'italic', color:'#1261A0', }}>Contact Admin</Text>
                
            </View>

          
        </View>    

            <TouchableOpacity style={styles.appButtonContainer} onPress={props.handleSubmit}>
            
                <Text style={styles.appButtonText} >Login</Text>

            </TouchableOpacity> 

        </View>

        
)

}                
</Formik>   
</View>


  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 18,
        backgroundColor: '#F1F7FF',
       
    },

    appButtonContainer: {
        
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: '#1261A0',
        height: 48,
        borderRadius: 40,
    },

    appButtonText: {
        fontSize: 20,        
    },

    errorMessage: {
        color: `red`,
    }


})