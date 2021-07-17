import { review_success,review_get } from "../actions/types";

const initialState={
   access:false,
   reviews:null

}


export default function(state=initialState,action){
 
    const {type,payload}=action;

    switch(type){
        case review_success:
            return{
                ...state,
                ...payload,
                access:true
            }
        case review_get:
                return{
                    ...state,
                    ...payload,
                    reviews:payload
                }
        
        default:
            return{
                ...state
            }
    }
}