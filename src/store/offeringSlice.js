import { createSlice } from "@reduxjs/toolkit";

const offeringSlice = createSlice({
    name: "offering",
    initialState: { offerings: [{ id: '0090', fullName: 'Mukesh', mobile: 8888888888, category: 'other', description: '1 x Slippers.' }] },
    reducers: {
        addOffering(state, action) {
            state.offerings = [...state.offerings, action.payload]
        },
        removeOffering(state, action) {
            state.offerings = [...state.offerings.filter(offering => offering.id !== action.payload)]
        }
    }
})
export const { addOffering, removeOffering } = offeringSlice.actions
export default offeringSlice