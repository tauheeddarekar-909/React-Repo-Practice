import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false
}

const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) =>{
            state.darkMode = !state.darkMode
        }
    }
})

export const { toggleTheme } = theme.actions
export default theme.reducer