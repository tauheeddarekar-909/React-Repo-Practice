import React, { useCallback, useEffect, useRef, useState } from 'react'

function useThrottle(onClick, addLog, delay) {

    const lastRef = useRef(0)
    const timeOutRef = useRef(0)



    const throttledClick = useCallback((...args) => {
        const now = Date.now()
        const timeLastClick = now - lastRef.current
        console.log("first 13", now, timeLastClick)

        if (timeLastClick >= delay) {
            console.log("inside if")
            lastRef.current = now
            onClick(...args)
            addLog("API call made using this button")
        }
        else {
            console.log("inside else")
            addLog(`Please wait for ${Math.ceil((delay - timeLastClick) / 1000)} seconds before clicking again`)
        }

    }, [onClick, delay])

    return throttledClick
}

export default useThrottle