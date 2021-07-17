import { payment } from "../actions/types";

const initialState={
   status:false,
   payment_status:''
}


export default function(state=initialState,action){
 
    const {type,payload}=action;

    switch(type){
        case payment:
            return{
                ...state,
              status:true,
              payment_status:payload
            }
        default:
            return{
                ...state
            }

    }
}