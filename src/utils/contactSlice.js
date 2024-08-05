import { createSlice } from "@reduxjs/toolkit";

const ContactSlice = createSlice({
    name : 'contact',
    initialState: {
        contacts: []
    },
    reducers: {
        storeAllContacts: (state, action) => {
            state.contacts = action.payload
        },
        addContacts: (state, action) => {
            state.contacts.push(action.payload)
        }
    }
})