import React, { useEffect, useState } from 'react'

function useWindowSize() {

    const [size, setSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return size
}

export default useWindowSize