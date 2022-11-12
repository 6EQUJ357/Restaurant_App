import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    table_number : null
}

const Restaurant_Reducer = createSlice({
    name : "Restaurant_Reducer",
    initialState,
    reducers : {
        settable_val : (state, action)=> {
            state.table_number = action.payload
        },
        resettable_val : (state, action)=> {
            state.table_number = null
        }
    }
})

export const {settable_val, resettable_val} = Restaurant_Reducer.actions;
export default Restaurant_Reducer.reducer;
