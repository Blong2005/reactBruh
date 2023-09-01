import { useState, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList.jsx'
// to do list
function App() {
  const [todos, setTodos] = useState([{ id: 1, name: 'Todo1', complete: false }])
  const todoNameRef = useRef() 
  function handleAddTodo (e){
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
    todoNameRef.current.value = null
  }
  return (
    <>
      <TodoList todos = {todos}/>
      <input ref={todoNameRef} type='text'/>
      <button onClick={handleAddTodo}>poop</button>
      <button>pee</button>
      <button>poop again</button>
      <div>0 left to do</div>
    </>

  )
}
 

export default App
 