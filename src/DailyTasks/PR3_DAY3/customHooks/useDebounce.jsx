import React, { useEffect, useState } from 'react'

function useDebounce( input, delay = 500 ) {

    const [debouncedInput, setDebouncedInput] = useState("")

    console.log("input", input)

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedInput(input)
        }, delay)

        return () => clearTimeout(handler)
    }, [input, delay])


    return {
        debouncedInput
    }
}

export default useDebounce