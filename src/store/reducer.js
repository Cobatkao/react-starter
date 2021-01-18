import { combineReducers } from 'redux-immutable'
import {  reducer as headerReducer } from '../common/header/store'

const rootReducer = combineReducers({
  header: headerReducer
})

export default rootReducer