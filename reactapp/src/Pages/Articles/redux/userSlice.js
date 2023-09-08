import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedInUsername: '',
    },
    reducers: {
        setLoggedInUsername: (state, action) => {
            state.loggedInUsername = action.payload;
        },
    },
});

export const { setLoggedInUsername } = userSlice.actions;
export const selectedUsername = (state) => state.user.loggedInUsername;
export default userSlice.reducer;