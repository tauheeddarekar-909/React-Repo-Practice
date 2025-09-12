import React, { useState } from 'react'

function ToDoFunctionControlled() {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    const handleAddTodo = () => {
        setTodos([...todos, { id: Date.now(), text: input }]);
        setInput("")
    }

    console.log("todos line 13", todos)
    return (
        <div className='p-2'>
            <h2 className='text-3xl text-center font-extrabold text-blue-900'>ToDo App using Functional Components</h2>
            <div className='flex gap-2 flex-col'>
                <input
                value={input}
                    className='bg-white p-2 rounded-2xl border border-gray-700'
                    onChange={(e) => { setInput(e.target.value) }}
                />
                <button
                    className='border bg-blue-900 p-3 text-white rounded-2xl'
                    onClick={handleAddTodo}
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
            </div>
        </div>
    )
}

export default ToDoFunctionControlled