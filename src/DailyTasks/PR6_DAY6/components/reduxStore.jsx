import  { configureStore } from '@reduxjs/toolkit'

import themeReducer from './reduxSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})