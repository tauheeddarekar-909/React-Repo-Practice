import React, { useState } from 'react';

function PR2_DAY2() {
    const [input, setInput] = useState(0);
    const [logs, setLogs] = useState([])

    const handleOp = (op) => {
        return () => {
            let num = parseInt(input) || 0;
            const newValue = op === "+" ? num + 1 : num - 1;
            setInput(newValue);
            addLog(`Count ${op === "+" ? "incremented" : "decremented"} using closures: ${newValue}`);
        };
    };

    const hoistingDemo = () => {
        console.log(var1)
        addLog(`variable var1 hoisted and initialized with ${var1}`)

        var var1 = "1234"
        addLog(`variable var1 defined ${var1}`)

        // console.log(letVariable)     // Reference Error
        // let letVariable = 10

        // console.log(constVariable)     // Reference Error
        // const constVariable = 10

    }

    const addLog = (log) => {
        setLogs(prev => [...prev, log])
    }


    const visualizeEventDemo = () => {
        addLog("Starting Event Loop")

        setTimeout(() => {
            addLog("SetTimeout Executed MacroTask Queue given priority")
        })

        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(data => {
                addLog(`Fetched data using fetch ${data.title}`)
            })

        Promise.resolve().then(() => {
            addLog("Promise Resolved MicroTask Queue given priority")
        })

        addLog("Event loop visualization ended")

    }

    return (
        <div>
            <h2 className='text-center font-extrabold text-3xl text-blue-900'>Closure Demo</h2>
            <hr className='border border-black border-[0.5]'/>
            <div className='mt-4 text-center'>
                Enter starting count:
                <input
                    type="number"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='bg-white border border-black p-2 rounded-3xl ml-2'
                />
            </div>
            <div className='flex flex-row justify-center gap-4 mt-4'>
                <button
                    onClick={handleOp("+")}
                    className='rounded-2xl text-white p-3 bg-blue-500'
                >
                    Increment
                </button>
                <button
                    onClick={handleOp("-")}
                    className='rounded-2xl text-white p-3 bg-blue-500'
                >
                    Decrement
                </button>
            </div>

            <div className='flex flex-col justify-center mt-5'>
                <h2 className='text-center mb-2 font-extrabold text-3xl text-blue-900'>Hoisting Demo</h2>
                <hr className='border border-black border-[0.5]'/>
                <div className='flex justify-center flex-col items-center'>
                    <p className='text-sm font-semibold text-blue-500'>Check console for logs</p>
                    <button
                        onClick={() => { hoistingDemo() }}
                        className='rounded-2xl text-white p-3 bg-blue-500'>Check hoisting</button>
                </div>
            </div>


            <div className='flex flex-col justify-center mt-5'>
                <h2 className='text-center mb-2 font-extrabold text-3xl text-blue-900'>Event Loop Visualization</h2>
                <hr className='border border-black border-[0.5]'/>
                <div className='flex justify-center flex-col items-center'>
                    <p className='text-sm font-semibold text-blue-500'>Check console for logs</p>
                    <button
                        onClick={() => { visualizeEventDemo() }}
                        className='rounded-2xl text-white p-3 bg-blue-500'>Visualize Event Loops</button>
                </div>
            </div>

            <div className='flex flex-col justify-center mt-5'>
                <div className='flex flex-row justify-center gap-7'>
                    <h2 className='text-center mb-2 font-extrabold text-3xl text-blue-900 '>Console</h2>
                    <button
                        onClick={() => { setLogs([]) }}
                        className='rounded-2xl text-white p-1 bg-blue-500'>Clear console</button>
                </div>
                <div className='border mt-3 border-black bg-blue-900 h-[250px] p-4 min-w-[800px] overflow-y-auto rounded-2xl self-center'>
                    {logs.map((log, index) => (
                        <div key={index} className="text-white text-left mb-1">
                            {log}
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default PR2_DAY2;