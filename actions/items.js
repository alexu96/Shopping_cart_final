import axios from "axios";
import { item_success,cat_shop } from './types';

export const Items=()=>async dispatch=>{

    try{
        const items=await axios.get("https://08yp7.sse.codesandbox.io/api/items");
        dispatch({
            type:item_success,
            payload:items.data,
        })
       
    }catch (err) {
    }
  }
  export const Category=({content})=>async dispatch=>{
    const config={
        headers:{
            "content-Type":"application/json"
        }
    }

    const body=JSON.stringify({content});

    try{
        const items=await axios.post("https://08yp7.sse.codesandbox.io/api/items",body,config);
        dispatch({
            type:cat_shop,
            payload:items.data,
        })
       
        
    }catch (err) {
    }
  }
