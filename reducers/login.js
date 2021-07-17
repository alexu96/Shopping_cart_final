import {
    login_success,
    sign_success
} from "../actions/types";
import AsyncStorage from "@react-native-async-storage/async-storage"


const initialState={
   isAuthentication:false,
    User:null,
    

}

export default function(state=initialState,action){
 
    const {type,payload,cars}=action;

    switch(type){
        case login_success:
            AsyncStorage.setItem("token",payload.token);
            return{
                ...state,
                ...payload,
                isAuthentication:true,
                User:payload.users
            }
        case sign_success:
                AsyncStorage.setItem("token",payload.token);
                return{
                    ...state,
                    ...payload,
                    isAuthentication:true,
                    User:payload.users
                }
            
        default:
            return{
                ...state
            }

    }
}