import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false,
    todos: []
}

const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) =>{
            state.darkMode = !state.darkMode
        },
        addTodo: (state, action) =>{
            console.log("payload here", payload)
            state.todos.push(action.payload)
        }
    }
})

export const { toggleTheme } = theme.actions
export default theme.reducer