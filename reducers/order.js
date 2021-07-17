import { Order_get } from "../actions/types";

const initialState={
   access:false,
   order:null

}


export default function(state=initialState,action){
 
    const {type,payload}=action;

    switch(type){
        case Order_get:
            return{
                ...state,
                ...payload,
                access:true,
                order:payload
            } 
        default:
            return{
                ...state
            }
    }
}