import { cart_add,remove_cart,total_cal,cart_reset} from './types';

export const AddCart=({cart})=>async dispatch=>{

    try{
        dispatch({
            type:cart_add,
            payload:cart,
        })
     console.log(cart)
    }catch (err) {
    }
  }
  export const ResetCart=()=>async dispatch=>{

    try{
        dispatch({
            type:cart_reset,
            payload:null
        })
     
    }catch (err) {
    }
  }

export const RemoveCart=({_id})=>async dispatch=>{

    try{
        dispatch({
            type:remove_cart,
            payload:_id,
        })
     console.log(_id)
    }catch (err) {
    }
  }
export const Total=({total})=>async dispatch=>{

    try{
        dispatch({
            type:total_cal,
            payload:total
        })
       
    }catch (err) {
    }
  }