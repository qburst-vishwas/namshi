import { combineReducers } from 'redux'
import productReducer from '../actions/actionReducer';

const rootReducer =combineReducers({
  product: productReducer
})

export default rootReducer