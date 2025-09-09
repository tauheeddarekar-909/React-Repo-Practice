import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [output, setOutput] = useState([])

  const addOutput = (message) => {
    setOutput(prev => [...prev, message])
  }

  function handleRegular() {
    const message = "Regular function Called"
    addOutput(message)
  }

  const handleArrow = () => {
    const message = "Arrow function Called"
    addOutput(message)
  }

  const curried = (a) => {
    return (b) => {
      let message = `Sum of 2 nos using currying is ${a + b}`
      addOutput(message)
    }
  }

  function handleCurrying() { 
    curried(10)(20)
  }

  function handleIIFE() {
    (function IIFE() {
      console.log("Immediately invoked function expresion")
      let message = "Immediately invoked function expresion"
      addOutput(message)
    })()
  }

  const closures = () => {
    let count = 0
    return () => {
      count += 1
      return count
    }
  }

  function handleClosures() {
    const count = closures()
    let value1 = count()
    let message = `Closure count incremented even after the outer function has executed value = ${value1}`
    addOutput(message)
    let value2 = count()
    let message2 = `Closure count incremented again value = ${value2}`
    addOutput(message2)
  }

  const handleVariableInitializers = () => {
    if (true) {
      var var1 = "inside block"
      addOutput(`Inside if block ${var1}`)
      var1 = "updated inside var"
      addOutput(`update inside if block ${var1}`)
    }
    addOutput(`outside if block ${var1}`)
    var1 = "update outside var"
    addOutput(`update outside if block ${var1}`)

    var var1 = "redeclared"
    addOutput(`redeclared ${var1}`)

    if (true) {
      let letVariable = "declared using let in block"
      addOutput(letVariable)
      letVariable = "update inside block"
      addOutput(letVariable)
    }

    // addToOutput(`Outside block: ${letVariable}`); // This would cause ReferenceError


    if (true) {
      const constVariable = "here it is const"
      addOutput(constVariable)
      // constVariable = "ersca" Unable to update
    }

    // addToOutput(`Outside block: ${constVariable}`); // This would cause ReferenceError
  }

  console.log("output list", output)


  function handleHoisting() {
    console.log(var1)  // Declaration is hoisted to the top, but it's undefined until initialized
    var var1 = "hersd"  // undefined

    console.log(var2)  // Declaration is hoisted but not initialized
    let var2 = "tevsc"  // Reference Error

    console.log(var3)  // Declaration is hoisted but not initialized
    const var3 = "tebvf " // Reference Error

    call1()  // Hoisted to top along with definition and declaration i.e name and body
    call2()  // const call2 is hoisted but not initialized. It's in the Temporal Dead Zone (TDZ) until the assignment is reached.

    const call2 = () => {   // Hoisted but not initialized so it will give a reference error
      console.log("call2")
    }

    function call1() {     // Hoisted and initialized so it won't give a reference error
      console.log("call1")
    }
  }

  // handleHoisting()


  return (
    <>
      <div className="flex flex-col gap-5 items-center justify-center">
        <h2 className='text-blue-900 font-extrabold text-3xl'>Call Different JS Functions</h2>
        <div className='flex flex-row gap-7 text-white'>
          <button onClick={() => handleRegular()} className='p-2 bg-blue-500 font-extrabold'> Call Regular Function</button>
          <button onClick={() => handleArrow()} className='p-2 bg-blue-500 font-extrabold'> Call Arrow Function</button>
          <button onClick={() => handleCurrying()} className='p-2 bg-blue-500 font-extrabold'> Call Currying Function</button>
          <button onClick={() => handleIIFE()} className='p-2 bg-blue-500 font-extrabold'> Call IIFE</button>
          <button onClick={() => handleClosures()} className='p-2 bg-blue-500 font-extrabold'> Call Closures</button>
          <button onClick={() => handleVariableInitializers()} className='p-2 bg-blue-500 font-extrabold'> Call Variable Initializer</button>
        </div>

        <>
          <h2 className='text-center'>Output</h2>
          {output.map((out, idx) => (
            <div key={idx} className='flex flex-col'>
              {out}
            </div>
          ))}
        </>
      </div>
    </>
  )
}

export default App
