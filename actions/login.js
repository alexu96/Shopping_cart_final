import {login_success,sign_success} from "./types";
import axios from "axios";
import { Alert } from "react-native";

export const Login=({ email, password})=>async dispatch=>{
    const config={
        headers:{
            "content-Type":"application/json"
        }
    }

    const body=JSON.stringify({email, password});

    try{
        const res=await axios.post("https://08yp7.sse.codesandbox.io/api/auth",body,config);
        dispatch({
            type:login_success,
            payload:res.data,
        })
        console.log(res.data)
    }catch (err) {
    
    console.log(err)

    
  }
}


export const Register=({name,email,password})=>async dispatch=>{
    const config={
        headers:{
            "content-Type":"application/json"
        }
    }

    const body=JSON.stringify({name,email,password});

    try{
        const res=await axios.post("https://08yp7.sse.codesandbox.io/api/users",body,config)
        dispatch({
            type:sign_success,
            payload:res.data
        })
    }catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => Alert.alert(error.msg));
    }
  }
}