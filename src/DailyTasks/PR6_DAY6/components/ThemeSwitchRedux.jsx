import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from './reduxSlice'
import { ThemeContext } from './themeContext'

function ThemeSwitchRedux() {

    const dispatch = useDispatch()
    const darkMode = useSelector((state) => state.theme.darkMode)

    const { theme, toggleTheme1 } = useContext( ThemeContext )

    console.log("state value", theme)

    return (
        <div>
            <div className={`grid grid-cols-2`}>
                <div className={`${darkMode ? 'dark' : ''}`}>
                    <h2 className='text-3xl font-extrabold text-blue-900'>Using Redux Toolkit</h2>
                    <div className={`${darkMode ? 'dark' : ''}`}>
                        <button
                            className={`border border-blue-900 dark:bg-blue-900 dark:text-white bg-blue-300 p-4 rounded-full w-30`}
                            onClick={() => dispatch(toggleTheme())}>
                            Toggle Theme (Current: {darkMode ? "Dark" : "Light"})
                        </button>
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl dark:text-blue-200 font-extrabold text-blue-900'>Using React Context</h2>
                    <div>
                        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
                            <button
                                className={`border  border-blue-900 dark:bg-blue-900 dark:text-white bg-blue-300 p-4 rounded-full w-30`}
                                onClick={() => toggleTheme1()}>
                                Toggle Theme (Current: {theme === 'dark' ? "dark" : "light"})
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemeSwitchRedux