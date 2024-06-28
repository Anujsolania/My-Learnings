import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createtodo } from './components/Createtodo'
import { Todos } from './components/Todo'

function App() {
  const[todos, setTodos] = useState([])

  fetch("http://localhost:3000/todos")
  .then(async function (res) {
    const json = await res.json()
    setTodos(json.todos)
  })

  return (
    <div>
      <ol>
      <h3>This basic todo website provides only these functionalities : </h3>
        <li>
        <h3>Puts your given todo into the database</h3>
        </li>
        <li>
        <h3>Shows all the todos that are present in the connected database</h3>
        </li>
      </ol>
      
    <Createtodo></Createtodo>
    <Todos todos = {todos} > </Todos>
    </div>
  )
    
}

export default App
