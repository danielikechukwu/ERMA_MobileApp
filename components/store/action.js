import axios from "axios";

export const LOGIN_USER_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_FAILURE';

//  const BASE_URL = 'http://localhost:8080';

 const BASE_URL = 'https://safe-reef-61060.herokuapp.com';

export const Login = (authData) => {

    const {username, password} = authData;

    return async dispatch => {

        // logic to make a post to get users


        const result = await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })

       

        const resultData = await result.json();
        
        console.log(resultData)  
        
        if(resultData.status === 'SUCCESS'){
            dispatch({
                        type: LOGIN_USER_SUCCESS,
                        payload: resultData
                    });
        }

        else{

            dispatch({
                type: LOGIN_USER_FAILURE,
                payload: resultData
            });
        }


        return resultData;

            
         
    }

}