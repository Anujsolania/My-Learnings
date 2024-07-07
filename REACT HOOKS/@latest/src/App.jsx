import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";



function App() {
 const[count,setCount] = useState(0)
 const noofrenders = useRef(0)

 function inputhandler() {
  setCount(count + 1)
 }

 noofrenders.current = noofrenders.current + 1


  return <div>
  <p>The component has rendered {noofrenders.current} times</p>
  <button onClick={inputhandler} >Force re-Render</button>
  </div>
}

export default App

