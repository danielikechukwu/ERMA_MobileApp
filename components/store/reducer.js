import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from "./action"

const initialState = {

  user: {},
  errors: {}
}

export default ( state = initialState, action) => {

  switch(action.type){

      case LOGIN_USER_SUCCESS:

          return {
              ...state, //Spreading data in the state
              user: action.payload
          }

          case LOGIN_USER_FAILURE:

          return {
              ...state, //Spreading data in the state
              errors: true
          }

          default: 
          return state
  }
}

