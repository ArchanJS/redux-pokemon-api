import axios from 'axios';

export const fetchLimitedData=async(limit=100)=>{
    try {
        const {data}=await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`,{
            headers:{
                "Content-Type":"application/json"
            }
        });
        // console.log(data.results);
        return data.results;
    } catch (error) {
        console.log(error);
        return [];
    }
}