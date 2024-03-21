import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "request",
    initialState: { requests: [{ id: '0091', fullName: 'Dinesh', mobile: 9999999999, category: 'cloth', description: '1 x White Shirt, 1 x Blue Jeans.' }] },
    reducers: {
        addRequest(state, action) {
            state.requests = [...state.requests, action.payload]
        },
        removeRequest(state, action) {
            state.requests = [...state.requests.filter(request => request.id !== action.payload)]
        }
    }
})
export const { addRequest, removeRequest } = requestSlice.actions
export default requestSlice