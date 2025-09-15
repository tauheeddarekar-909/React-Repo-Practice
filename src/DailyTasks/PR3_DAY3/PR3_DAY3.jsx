import React, { useEffect, useState } from 'react'
import useDebounce from './customHooks/useDebounce'
import useThrottle from './customHooks/useThrottle'

function PR3_DAY3() {

    const [input, setInput] = useState("")
    const [logs, setLogs] = useState([])
    const [delay, setDelay] = useState(1000)
    const { debouncedInput } = useDebounce(input, delay)
    const [download, setDownload] = useState(0)
    const [throttlingDelay, setThrottlingDelay] = useState(3000)

    const handleDownload = () => {
        addLog('Starting download...');
        setDownload(prev => prev + 1);
    }

    const handleParentClick = (event) => {
        console.log("inside parent click")
        addLog('Parent clicked', event.target);
        addLog('Event target:', event.target);
        if (event.target.tagName === 'BUTTON') {
            addLog(`Button clicked: ${event.target.textContent}`);
        }
    };

    const handleParentCapture = (event) => {
        addLog('Parent capturing event...');
    };

    const addLog = (message) => {
        setLogs(prev => [...prev, message])
    }

    const throttledButton = useThrottle(handleDownload, addLog, throttlingDelay)

    useEffect(() => {
        if (debouncedInput) {
            addLog(`API call made for ${debouncedInput}`)
            fetch(`https://jsonplaceholder.typicode.com/users?name_like=${debouncedInput}`)
                .then((res) => res.json())
                .then((data) => {
                    const resultString = data.map((dat) => dat.name).join(', ');
                    addLog(`API result: ${resultString}`);
                })
        }
    }, [debouncedInput])


    return (
        <>
            <div>
                <h2 className='text-center font-extrabold text-3xl text-blue-900 mb-3'>Debouncing Demo</h2>
                <div className='flex justify-center gap-3'>
                    <p className='text-blue-900 mt-2'>Enter Some Value</p>
                    <input
                        className='bg-white p-2 rounded-full border border-black ml-1'
                        onChange={(e) => { setInput(e.target.value) }} />
                    <p className='text-blue-900 mt-2'>Enter Delay for Debouncing(in ms)</p>
                    <input
                        value={delay}
                        className='bg-white p-2 rounded-full border border-black ml-1'
                        onChange={(e) => { setDelay(e.target.value) }}
                    />

                </div>
            </div>



            <div>
                <h2 className='text-center font-extrabold text-3xl text-blue-900 mb-3 mt-10'>Throttling Demo</h2>
                <div className='flex justify-center gap-4'>
                    <>
                        <p className='text-blue-900 mt-2'>Enter Delay for Throttling(in ms)</p>
                        <input
                            value={throttlingDelay}
                            className='bg-white p-2 rounded-full border border-black ml-1'
                            onChange={(e) => { setThrottlingDelay(e.target.value) }}
                        />
                    </>
                    <button
                        onClick={throttledButton}
                        className='border bg-blue-500 p-4 rounded-2xl text-white'>Click this button continuously</button>
                </div>
            </div>


            <div>
                <h2 className='text-center font-extrabold text-3xl text-blue-900 mb-3 mt-10'>Event Delegation</h2>
                <div
                    onClick={handleParentClick }
                    onClickCapture={handleParentCapture}
                    className='flex flex-row gap-4 justify-center'
                >
                    <button className='border bg-blue-500 p-4 rounded-2xl text-white'>Button 1</button>
                    <button className='border bg-blue-500 p-4 rounded-2xl text-white'>Button 2</button>
                    <button className='border bg-blue-500 p-4 rounded-2xl text-white'>Button 3</button>
                    <button className='border bg-blue-500 p-4 rounded-2xl text-white'>Button 4</button>
                    <button className='border bg-blue-500 p-4 rounded-2xl text-white'>Button 5</button>
                </div>
            </div>



            <div className='flex flex-col justify-center mt-5'>
                <div className='flex flex-row justify-center gap-7'>
                    <h2 className='text-center mb-2 font-extrabold text-3xl text-blue-900 '>Console</h2>
                    <button
                        onClick={() => { setLogs([]) }}
                        className='rounded-2xl text-white p-1 bg-blue-500'>Clear console</button>
                </div>
                <div className='border mt-3 border-black bg-blue-900 h-[250px] p-4 w-[800px] overflow-y-auto  rounded-2xl self-center'>
                    {logs.map((log, index) => (
                        <div key={index} className="text-white text-left mb-1">
                            {log}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PR3_DAY3