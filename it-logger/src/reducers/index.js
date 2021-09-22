//brings in all reducers from the application
import {combineReducers} from 'redux';
import logReducer from './logReducer';
//takes in an object that holds all reducers as an arguement
export default combineReducers({
  log: logReducer
});