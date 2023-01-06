import {configureStore} from '@reduxjs/toolkit'
import { shazamCoreApi } from './services/shazamCore'
import playerReducer from './services/playerSlice'
import modalSlice from './services/modalSlice'

export const store=configureStore({
    reducer:{
        [shazamCoreApi.reducerPath]:shazamCoreApi.reducer,
        player:playerReducer,
        modal:modalSlice,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(shazamCoreApi.middleware)
}) 