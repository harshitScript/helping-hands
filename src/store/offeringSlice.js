import { createSlice } from "@reduxjs/toolkit";

const offeringSlice = createSlice({
    name: "offering",
    initialState: { offerings: [{ id: '0090', fullName: 'Harshit Bhawsar', mobile: 7974792317, category: 'cloth', description: 'I want to give away my old cloths.' }] },
    reducers: {
        addOffering(state, action) {
            state.offerings = [...state.offerings, action.payload]
        },
        removeOffering(state, action) {
            state.offerings = [...state.offerings.filter(request => request.requestId !== action.payload)]
        }
    }
})
export const { addOffering, removeOffering } = offeringSlice.actions
export default offeringSlice