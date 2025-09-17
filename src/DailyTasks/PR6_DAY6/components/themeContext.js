import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) =>{
    const [theme, setTheme] = useState("light")

    const toggleTheme1 = () =>{
        setTheme(prev=>prev === 'dark'? 'light': 'dark')
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme1 }} >
                {children}
            </ThemeContext.Provider>
        </>
    )

}