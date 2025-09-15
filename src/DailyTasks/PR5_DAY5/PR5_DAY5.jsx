import React, { useEffect, useState } from 'react'
import useWindowSize from './components/useWindowSize'

function PR5_DAY5() {

    const [form, setForm] = useState({
        name: '',
        description: '',
        status: ''
    })

    const [todos, setTodos] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const options = [
        "Completed",
        "Pending",
        "ToDo"
    ]

    console.log("form here", form)

    const handleSubmit = () => {
        setTodos((prev) => [
            ...prev,
            { id: Date.now(), ...form }
        ]);
        setForm({
            name: '',
            description: '',
            status: ''
        })
    }

    const [timer, setTimer] = useState(new Date())

    const size = useWindowSize()

    console.log("size 46", size)

    useEffect(()=>{
        const handler = setInterval(()=>{
            setTimer(new Date())
        }, 1000)

        return () =>{
            clearInterval(handler)
        }
    }, [])

    return (
        <div>
            <div className='grid grid-cols-2'>
                {/* ToDo App */}
                <div>
                    <h2 className='text-3xl text-blue-900 font-extrabold text-center'>TO DO APP</h2>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2'>
                            <label className='mt-2'>Enter Name</label>
                            <input
                                value={form.name}
                                name='name'
                                onChange={(e) => { handleChange(e) }}
                                className='bg-white border border-black p-2 rounded-full' />
                        </div>
                        <div className='flex gap-2'>
                            <label className='mt-2'>Enter Description</label>
                            <input
                                value={form.description}
                                onChange={(e) => { handleChange(e) }}
                                name='description'
                                className='bg-white border border-black p-2 rounded-full' />
                        </div>
                        <div className='flex gap-2'>
                            <label className='mt-2'>Status</label>
                            <select
                                value={form.status}
                                onChange={(e) => { handleChange(e) }}
                                name='status'
                                className='bg-white border border-black p-2 rounded-full'>
                                {options.map((opt, index) => (
                                    <option key={index}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <button onClick={handleSubmit} className='bg-blue-900 p-3 text-white mt-4 rounded-3xl'>Add ToDo</button>

                    <table className='border border-black mt-3 '>
                        <thead>
                            <tr>
                                <th className='p-2 border border-black'>ID</th>
                                <th className='p-2 border border-black'>Name</th>
                                <th className='p-2 border border-black'>Description</th>
                                <th className='p-2 border border-black'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, index) => (
                                <tr key={index}>
                                    <td className='p-2 border border-black'>{todo.id}</td>
                                    <td className='p-2 border border-black'>{todo.name}</td>
                                    <td className='p-2 border border-black'>{todo.description}</td>
                                    <td className='p-2 border border-black'>{todo.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Timer App */}
                <div>
                    <h2 className='text-3xl font-extrabold text-blue-900'>Timer App</h2>
                    <div>
                        {timer.toLocaleTimeString()}
                        <p>Window Size Height: {size.height}</p>
                        <p>Window Size Width: {size.width}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PR5_DAY5