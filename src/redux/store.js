import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlice"

//create store by passing in a reducer
export const store = configureStore({
    reducer: {
        basket: basketReducer,
    }
})

// export default configureStore({
//     reducer: {
//         basket: basketReducer
//     }
// })