import { item_success,cat_shop } from "../actions/types";

const initialState={
   value:false,
   items:null,
   shops:null,
   value1:false
}


export default function(state=initialState,action){
 
    const {type,payload}=action;

    switch(type){
        case item_success:
            return{
                ...state,
                ...payload,
                value:true,
                items:payload
              
            }
        case cat_shop:
            return{
                ...state,
                ...payload,
                value1:true,
                shops:payload
              
            }
        default:
            return{
                ...state
            }
    }
}