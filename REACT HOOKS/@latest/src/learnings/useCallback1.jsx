import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";



function App() {
 const[count,setCount] = useState(0)

 const increment = useCallback(() => {
  return setCount(count => count + 1)
//  setCount(function(currentcount) {
//   return currentcount + 1
//  })
 },[])

 const decrement = useCallback(() => 
  setCount(count => count - 1)
 ,[])


  return <div>
  Count : {count} <br></br>
  <Buttoncomponent onincrement={increment} ondecrement={decrement} ></Buttoncomponent>
  </div>
}

const Buttoncomponent = memo(({onincrement,ondecrement}) => {
  console.log("button rendered")
 return <div>
 <button onClick={onincrement} >Increment</button> 
 <button onClick={ondecrement} >Decrement</button>
 </div>
})

// ANOTHER SYNTAX OF DEFINING COMPONENT
// const Buttoncomponent = ({onincrement,ondecrement}) => 
//  <>
//   <button onClick={onincrement} >Increment</button> 
//   <button onClick={ondecrement} >Increment</button>
//   </>

  
export default App

