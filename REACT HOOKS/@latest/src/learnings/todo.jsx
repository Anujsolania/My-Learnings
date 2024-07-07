import React from "react"
import { Fragment, useState } from "react"

let globalid = 4
function App() {
const[todos,setTodos] = useState([{
  id: 1,
  title: "go to gym",
  description: "gymm ja bhai"
},
{
  id: 2,
  title: "eat food",
  description: "khana kha bhai"
},
{
  id: 3,
  title: "drink water",
  description: "paani pee bhai"
}])

function addtodo() {
  setTodos([...todos,{
    id: globalid++,
    title: Math.random(),
    description: Math.random()
  }])

}

  return <div>
    <button onClick={addtodo} >ADD a new todo </button>
      {todos.map(function (todo) {
        return <Createtodo key={todo.id} title={todo.title} description={todo.description} ></Createtodo>
      })}
    </div>
}

function Createtodo({title,description}) {
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}


export default App
