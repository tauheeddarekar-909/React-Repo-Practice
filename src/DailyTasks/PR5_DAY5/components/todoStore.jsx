import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import todoReducer from './todoSlice'


export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})