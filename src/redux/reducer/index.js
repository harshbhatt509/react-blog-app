import { authReducer } from './authReducers'
import { combineReducers } from  'redux'
import { blogsReducer } from './blogsReducer'

export const rootReducer = combineReducers({
   auth: authReducer,
   blogs: blogsReducer
})