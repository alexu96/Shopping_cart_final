import axios from "axios";
import { payment } from './types';
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"

export const Payment=({data,Items,Total,name,phone,address})=>async dispatch=>{
    const token = await AsyncStorage.getItem("token");

    const config={
        headers:{
            "content-Type":"application/json",
            "x-auth-token":token
        }
    }
    const body=JSON.stringify({data,Items,Total,name,phone,address});
    console.log(body)

    try{
        const res=await axios.post("https://08yp7.sse.codesandbox.io/api/payment",body,config);
        console.log(res.data)
    

        if(res.data!=="success"){
            console.log("hi")
            Alert.alert("payment failed! enter card details properly")
        }

        dispatch({
            type:payment,
            payload:res.data
        })
    }catch (err) {
    }
  }