


// function App() {
//   const [count, setCount] = useState(0)
  
//   return (
//     <Custombutton count={count} setCount={setCount} ></Custombutton>
//   )
// }

// function Custombutton(props) {
//   function onclickhandler() {
//     props.setCount(props.count+1)
//   }

//   return <button onClick={onclickhandler}>
//     Counter {props.count}
//     </button>

// }
import { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "From 7-9",
      completed: false
    },
    {
      title: "Do DSA",
      description: "From 9-11",
      completed: true
    }
  ]);

  function addtodo() {
    setTodos([...todos,{
      title: "new title",
      description: "new description"
    }])
  }

  function Todo(promps) {
    return <div>
    <h1>{promps.title}</h1>
    <h2>{promps.description}</h2>
    </div>
  }

  return (
    <div>
      <button onClick={addtodo}> Add new TODO </button>
      {todos.map(function(singletodo) { 
      return <Todo title={singletodo.title} description={singletodo.description} />
        })}
    </div>
  );
}

// function Todo(props) {
//   return <div>
//   <h1>{props.title}</h1>
//   <h2>{props.description}</h2>
//   </div>
// }



export default App
