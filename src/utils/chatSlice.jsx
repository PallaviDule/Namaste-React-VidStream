import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(20, 1);
            state.messages.unshift(action.payload)  // so recent message would go to top
        }
    }
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;  