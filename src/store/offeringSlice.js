import { createSlice } from "@reduxjs/toolkit";

const offeringSlice = createSlice({
    name: "offering",
    initialState: { offerings: [{ requestId: '0091', fullName: 'Harshit Bhawsar', mobile: 7974792317, category: 'other', description: 'I do not want anything it was just for testing purpose.' }] },
    reducers: {
        addOffering(state, action) {
            state.requests = [...state.requests, action.payload]
        },
        removeOffering(state, action) {
            state.requests = [...state.requests.filter(request => request.requestId !== action.payload)]
        }
    }
})
export const { addOffering, removeOffering } = offeringSlice.actions
export default offeringSlice