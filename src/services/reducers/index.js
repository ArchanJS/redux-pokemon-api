import {combineReducers} from 'redux';
import {numberReducer,dataReducer} from './reducer';

export default combineReducers({
    result:numberReducer,
    dataResult:dataReducer
})