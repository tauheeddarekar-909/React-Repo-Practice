import React, { useRef, useState } from 'react'

function ToDoFunctionUncontrolled() {

    const inputRef = useRef(null)
    const [todos, setTodos] = useState([])

    const handleAddTodo = (e) => {
        e.preventDefault()
        const value = inputRef.current.value
        setTodos([...todos, { id: Date.now(), text: value }])
        inputRef.current.value = ""
    }

    return (
        <div className='p-2'>
            <h2 className='text-3xl text-center font-extrabold text-blue-900'>ToDo App using Functional Components</h2>
            <form onSubmit={handleAddTodo}>
                <input
                    ref={inputRef}
                    className='bg-white p-2 rounded-2xl border border-gray-700'
                />
                <button
                    className='border bg-blue-900 p-3 text-white rounded-2xl'
                    type='submit'
                >Add Todo</button>
                <div>
                    {todos.map((todo, index) => (
                        <div
                            className='flex flex-col gap-3'
                            key={todo.id}>
                            <p>ID: {todo.id}</p>
                            <p>Text: {todo.text}</p>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    )
}

export default ToDoFunctionUncontrolled