import { combineReducers } from 'redux';
import { collectalldata } from './datareducer';

const reducers = combineReducers({
    alldata : collectalldata
 });
 
 export default reducers;