import {configureStore} from '@reduxjs/toolkit';
import appReducer from '../utils/appSlice';
import searchReducer from '../utils/searchSlice';

const store = configureStore({
    reducer:{
        app: appReducer,
        search: searchReducer
    }
});

export default store;