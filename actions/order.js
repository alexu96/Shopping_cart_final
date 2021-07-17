import {Order_get} from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";

export const Order=()=>async dispatch=>{
    const token = await AsyncStorage.getItem("token");

    const config={
        headers:{
            "x-auth-token":token

        }
    }
   
    try{
        const res=await axios.get("https://08yp7.sse.codesandbox.io/api/order",config);
        dispatch({
            type:Order_get,
            payload:res.data
        })
        
       
    }catch (err) {
    
    console.log('error')
  }
}