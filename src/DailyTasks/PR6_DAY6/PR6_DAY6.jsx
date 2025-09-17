import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from './components/reduxSlice'
import ThemeSwitchRedux from './components/ThemeSwitchRedux'

function PR6_DAY6() {

    const darkMode = useSelector((state) => state.theme.darkMode)



    return (
        <>
            <ThemeSwitchRedux />
            <div className={darkMode ? 'dark' : ''}>
                <div className='dark:bg-blue-900 bg-blue-300 border border-black h-[100px] w-[100px] dark:text-white text-black'>
                    <p>Text inside</p>
                </div>
            </div>
        </>
    )
}

export default PR6_DAY6