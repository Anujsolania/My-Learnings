import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const[count,setcount] = useState(0)
 
  const logsomething = useCallback(() => {
    console.log("hii there")
  },[])


  return <>
  <Buttoncomponent inputfn = {logsomething} ></Buttoncomponent><br></br>
  <button onClick={() => { setcount(count+1) }} >Click me {count}</button>
  </>
}

const Buttoncomponent = memo(({inputfn}) => {
  console.log("Button component rendered")
  
  return <>
  <button >Button</button>
  </>
})
  
export default App


