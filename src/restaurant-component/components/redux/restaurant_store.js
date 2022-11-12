import {configureStore} from "@reduxjs/toolkit"
import Restaurant_Reducer from "./restaurant_reducer"
import Restaurant_cart from "./cart_reducer"

const Restaurant_Store = configureStore({
    reducer : {
        Restaurant_Reducer : Restaurant_Reducer,
        Restaurant_cart : Restaurant_cart
    }
})

export default Restaurant_Store;