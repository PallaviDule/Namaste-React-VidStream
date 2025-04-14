import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchCache: {}
    },
    reducers:{
        searchCacheResult: (state, action) => {
            state.searchCache = {
                ...state.searchCache, 
                ...action.payload
            };
        }
    }
});

export const {searchCacheResult} = searchSlice.actions;
export default searchSlice.reducer;