import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const[input,setInput] = useState(0)
 
let expensivevalue = useMemo(() => {
 let value = 1
 for (let i = 1; i <= input; i++) {
 value = value * i
 }
 return value
 },[input])


  return <>
  <input type="number" placeholder={input} onChange={(e) => {setInput(Number(e.target.value))}} /><br></br>
  Calculated value: {expensivevalue}
  </>
}

  
export default App


