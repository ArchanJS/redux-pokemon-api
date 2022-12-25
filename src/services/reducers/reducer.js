import {INCRE,DECRE,FETCH_LIMITED} from '../Constants';
import {fetchLimitedData} from './functions';

export const numberReducer=(state=0,action)=>{
    switch(action.type){
        case INCRE:
            return state+action.payload;
        case DECRE:
            return state-action.payload;
        default:
            return state;
    }
}

export const dataReducer=(state=[],action)=>{
    switch(action.type){
        case FETCH_LIMITED:
            return [...state,...action.payload];
        default:
            return state;
    }
}