import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: ''
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action
        },
    }
});

export const { setToken } = userSlice.actions;

export default userSlice.reducer;