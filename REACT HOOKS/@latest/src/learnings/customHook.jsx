import React, { useState } from "react"
import { useEffect } from "react"


//CUSTOM HOOK
function useTodos() {
  const[todos,setTodos] = useState([])

    useEffect(() => {
        setInterval(() => {
            fetch("https://sum-server.100xdevs.com/todos")
            .then(async (res) => {
            const json = await res.json()
            setTodos(json.todos)
        })
    
        },3000)
    },[]);
    return todos
}
//CUSTOM HOOK

function App() {
    const todos = useTodos()

    return <div>
        {
            todos.map((todo) => <Todos key={todo.id} title={todo.title} description={todo.description}> </Todos>)
        }
    </div>
}

function Todos({title,description}) {
    return <div>
        <h1>{title}</h1><br></br>
        <h5>{description}</h5>
    </div>
}

export default App