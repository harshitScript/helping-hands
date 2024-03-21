import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "request",
    initialState: { requests: [{ id: '0091', fullName: 'Harshit Bhawsar', mobile: 7974792317, category: 'other', description: 'I do not want anything it was just for testing purpose.' }] },
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