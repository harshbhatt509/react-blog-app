import { AUTH_STATE_CHANGE } from '../constants/index'

const initialState = {
   loggedIn: false,
   user: {}
}

export function authReducer(state = initialState, action) {
   switch(action.type) {
      case AUTH_STATE_CHANGE:
         return {
            ...state,
            loggedIn: action.loggedIn,
            user: action.userDetails
         }
      default:
         return state
   }
}