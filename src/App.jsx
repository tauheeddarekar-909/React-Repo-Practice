import { useState } from 'react'
import './App.css'
import React from 'react'
import PR1_DAY1 from './DailyTasks/PR1_DAY1'
import PR2_DAY2 from './DailyTasks/PR2_DAY2'
import PR3_DAY3 from './DailyTasks/PR3_DAY3/PR3_DAY3'
import PR4_DAY4 from './DailyTasks/PR4_DAY4/PR4_DAY4'
import PR5_DAY5 from './DailyTasks/PR5_DAY5/PR5_DAY5'
import PR6_DAY6 from './DailyTasks/PR6_DAY6/PR6_DAY6'

function App() {

  const [tab, setTab] = useState("PR5_DAY5")

  const getButtonClass = (buttonTab) => {
    return tab === buttonTab ? 'bg-blue-900 p-4 text-white' : 'bg-blue-500 p-4 text-white';
  };

  return (
    <>
      <div className='flex flex-row gap-4 p-10'>
        <button onClick={() => setTab("PR1_DAY1")} className={getButtonClass("PR1_DAY1")}>Day 1 Task</button>
        <button onClick={() => setTab("PR2_DAY2")} className={getButtonClass("PR2_DAY2")}>Day 2 Task</button>
        <button onClick={() => setTab("PR3_DAY3")} className={getButtonClass("PR3_DAY3")}>Day 3 Task</button>
        <button onClick={() => setTab("PR4_DAY4")} className={getButtonClass("PR4_DAY4")}>Day 4 Task</button>
        <button onClick={() => setTab("PR5_DAY5")} className={getButtonClass("PR5_DAY5")}>Day 5 Task</button>
        <button onClick={() => setTab("PR6_DAY6")} className={getButtonClass("PR6_DAY6")}>Day 6 Task</button>
        <button onClick={() => setTab("PR7_DAY7")} className={getButtonClass("PR7_DAY7")}>Day 7 Task</button>
        <button onClick={() => setTab("PR8_DAY8")} className={getButtonClass("PR8_DAY8")}>Day 8 Task</button>
        <button onClick={() => setTab("PR9_DAY9")} className={getButtonClass("PR9_DAY9")}>Day 9 Task</button>
        <button onClick={() => setTab("PR10_DAY10")} className={getButtonClass("PR10_DAY10")}>Day 10 Task</button>
      </div>

      {
        tab === "PR1_DAY1" ? <PR1_DAY1 /> :
        tab === "PR2_DAY2" ? <PR2_DAY2 /> :
        tab === "PR3_DAY3" ? <PR3_DAY3/>:
        tab === "PR4_DAY4" ? <PR4_DAY4/>: 
        tab === "PR5_DAY5"? <PR5_DAY5/>:
        tab === "PR6_DAY6"? <PR6_DAY6/>: null
       }
    </>
  )
}

export default App
