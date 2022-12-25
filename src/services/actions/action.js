import {INCRE,DECRE,FETCH_LIMITED} from '../Constants';

export const increment=(data)=>{
    return (dispatch)=>dispatch({
        type:INCRE,
        payload:data
    })
}

export const decrement=(data)=>{
    return (dispatch)=>dispatch({
        type:DECRE,
        payload:data
    })
}

export const fetchLimited=(limit)=>{
    return (dispatch)=>dispatch({
        type:FETCH_LIMITED,
        payload:limit
    })
}