
import { configureStore } from '@reduxjs/toolkit';
import auth from './authSlice'
const store=configureStore({
    reducer:{
        authentication:auth
    }
})

export default store;