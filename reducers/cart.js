import { cart_add,remove_cart,total_cal,cart_reset } from "../actions/types";

const initialState = {
    CartItems: [],
    Total: 0
}


export default function (state = initialState, action) {

    const { type, payload } = action


    switch (type) {
        case cart_add:
            const item = payload

            const existItem = state.CartItems.find((x) => x.name === item.name)

            if (existItem) {
                return {
                    ...state,
                CartItems:state.CartItems.map((x)=>{
                    if(x.name===item.name){
                        return item
                    }
                    else{
                        return x
                    }
                }) 
                }
            } else {
                return {
                    ...state,
                    CartItems: [...state.CartItems, item],
                }
            }
        
        case remove_cart:
            return{
                CartItems:state.CartItems.filter((x)=>x._id !== payload)
            }
        
        case total_cal:
            return{
                ...state,
                Total:payload
            }
        case cart_reset:
            return{
                    ...state,
                    CartItems:[]
                }





        default:
            return {
                ...state
            }
    }
}