import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const[count,setcount] = useState(0)
  const[inputvalue,setinputvalue] = useState("_")
  // const[value2,setvalue2] = useState(0)
  

  let finalsum = useMemo(()=> {
    let sum = 0
   for (let i = 0; i <= inputvalue; i++) {
    sum = sum + i;
  }
  return sum
  },[inputvalue])

  // By using the useEffect()

  // useEffect(()=> {
  //   let sum = 0
  //  for (let i = 1; i <= inputvalue; i++) {
  //   sum = sum + i;
  // }
  // setvalue2(sum)
  // },[inputvalue])



  return <>
  <input onChange={function (e) { setinputvalue(e.target.value) }} ></input><br></br>
  Sum from 1 to {inputvalue} is {finalsum} <br></br>
  <button onClick={() => { setcount(count+1) }} >Counter ({count})</button>
  </>
}
  
export default App


