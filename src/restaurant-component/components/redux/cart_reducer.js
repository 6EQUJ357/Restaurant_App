import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order_value : []
}

const Restaurant_cart = createSlice({
    name : "Restaurant_cart",
    initialState,
    reducers : {
        placeorder : (state, action)=> {
            state.order_value.push(action.payload);
        },
        removeorder : (state, action)=> {
            const index = state.order_value.findIndex(find => find.name === action.payload.name)
            if(index > -1) {
            state.order_value.splice(index, 1);
            }
        }
    }
})

export const {placeorder, removeorder} = Restaurant_cart.actions
export default Restaurant_cart.reducer