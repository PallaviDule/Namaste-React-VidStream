import {configureStore} from '@reduxjs/toolkit';
import appReducer from '../utils/appSlice';
import searchReducer from '../utils/searchSlice';
import chatReducer from '../utils/chatSlice';

const store = configureStore({
    reducer:{
        app: appReducer,
        search: searchReducer,
        chat: chatReducer
    }
});

export default store;