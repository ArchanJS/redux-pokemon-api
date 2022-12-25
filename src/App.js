import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from './services/actions/actioncreators';
import {fetchLimitedData} from './services/reducers/functions';

const App = () => {
  const amount=useSelector(state=>state.result);
  const dataResult=useSelector(state=>state.dataResult);
  const dispatch=useDispatch();
  const {increment,decrement,fetchLimited}=bindActionCreators(actionCreators,dispatch);
  console.log(amount);
  return (
    <>
    <div>
      <p>{amount}</p>
      <p>{dataResult.length
      &&
      dataResult.map((e,i)=>{
        return(
          <>
          <p>{e.name}</p>
          <br/>
          </>
        )
      })}</p>
      <button  onClick={()=>increment(100)}>Credit</button>
      <button  onClick={()=>decrement(100)}>Debit</button>
      <button  onClick={async()=>{
        const res=await fetchLimitedData();
        fetchLimited(res);
      }}>Fetch Data</button>
    </div>
    </>
  )
}

export default App