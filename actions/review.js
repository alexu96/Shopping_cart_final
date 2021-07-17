import {review_success,review_get} from "./types";
import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"

export const Review=({ productId,rating,review1 })=>async dispatch=>{
    const token = await AsyncStorage.getItem("token");

    const config={
        headers:{
            "content-Type":"application/json",
            "x-auth-token":token

        }
    }

    const body=JSON.stringify({ productId,rating,review1 });
   
    try{
        const res=await axios.put("https://08yp7.sse.codesandbox.io/api/review",body,config);
        dispatch({
            type:review_success,
            payload:res.data
        })
        
        Alert.alert("Review added")
    }catch (err) {
    
    console.log('error')
  }
}

export const GetReview=({ productId })=>async dispatch=>{
    

    const config={
        headers:{
            "content-Type":"application/json",
        }
    }

    const body=JSON.stringify({ productId });
   
    try{
        const res=await axios.post("https://08yp7.sse.codesandbox.io/api/review",body,config);
        dispatch({
            type:review_get,
            payload:res.data
        })
    }catch (err) {
    
    console.log('error')
  }
}
