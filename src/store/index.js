import { configureStore } from "@reduxjs/toolkit"
import requestSlice from "./requestSlice"
import offeringSlice from "./offeringSlice"

const store = configureStore({
    reducer: {
        [requestSlice.name]: requestSlice.reducer,
        [offeringSlice.name]: offeringSlice.reducer
    }
})
export default store