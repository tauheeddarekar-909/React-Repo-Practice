import React from 'react'
import ToDoFunctionControlled from './components/ToDoFunctionControlled'
import ToDoClassControlled from './components/ToDoClassControlled'
import ToDoClassUncontrolled from './components/ToDoClassUncontrolled'
import ToDoFunctionUncontrolled from './components/ToDoFunctionUncontrolled'

function PR4_DAY4() {
    return (
        <>
            <div className='grid grid-cols-2'>
                <div className='border-r-2 border-black flex gap-4 flex-col'>
                    <p className='text-center bg-blue-900 text-white'>Using Controlled Component</p>
                    <ToDoFunctionControlled />
                    <p className='text-center bg-blue-900 text-white'>Using Uncontrolled Component</p>
                    <ToDoFunctionUncontrolled />
                </div>
                <div>
                    <p className='text-center bg-blue-900 text-white'>Using Controlled Component</p>
                    <ToDoClassControlled />
                    <p className='text-center bg-blue-900 text-white'>Using Uncontrolled Component</p>
                    <ToDoClassUncontrolled />
                </div>
            </div>
        </>
    )
}

export default PR4_DAY4