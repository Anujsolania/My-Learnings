import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const[selectedid,setSelectedid] = useState(1)
  

  return <>
    <button onClick={function () {
      setSelectedid(1)
    }} >1</button>
    <button onClick={function () {
      setSelectedid(2)
    }} >2</button>
    <button onClick={function () {
      setSelectedid(3)
    }} >3</button>
    <button onClick={function () {
      setSelectedid(4)
    }} >4</button>
    <button onClick={function () {
      setSelectedid(5)
    }} >5</button>
    <Todo id={selectedid}></Todo>
    
  </>
}

function Todo({id}) {
  const [todo, setTodos] = useState([])

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(function (response) {
      setTodos(response.data.todo)
    })
  },[id])

  return <>
  <h1>{todo.title}</h1>
  <h5>{todo.description}</h5>
  </>
}


export default App


