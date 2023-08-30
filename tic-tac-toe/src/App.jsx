import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList.jsx'
// to do list
function App() {
  useState([])
  return (
    <>
      <TodoList/>
      <input type='text'/>
      <button>poop</button>
      <button>pee</button>
      <button>poop again</button>
      <div>0 left to do</div>
    </>

  )
}
 

export default App
 