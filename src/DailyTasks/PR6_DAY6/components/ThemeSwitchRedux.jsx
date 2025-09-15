import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from './reduxSlice'

function ThemeSwitchRedux() {

    const dispatch = useDispatch()
    const darkMode = useSelector((state) => state.theme.darkMode)

    return (
        <div>
            <div className={`grid grid-cols-2 ${darkMode ? 'dark' : ''}`}>
                <div>
                    <h2 className='text-3xl font-extrabold text-blue-900'>Using Redux Toolkit</h2>
                    <div className={`${darkMode ? 'dark' : ''}`}>
                        <button
                            className={`border border-blue-900 dark:bg-blue-900 dark:text-white bg-blue-300 p-4 rounded-full w-30`}
                            onClick={() => dispatch(toggleTheme())}>
                            Toggle Theme (Current: {darkMode ? "Dark" : "Light"})
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemeSwitchRedux