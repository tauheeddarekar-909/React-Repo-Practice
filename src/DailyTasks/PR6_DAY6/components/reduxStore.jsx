import  { configureStore } from '@reduxjs/toolkit'

import themeReducer from './reduxSlice'
import todoReducer from '../../PR5_DAY5/components/todoSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        todo: todoReducer
    }
})