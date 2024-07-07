import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";



function App() {
 const inputRef = useRef()

 useEffect(() => 
  inputRef.current.focus()
 ,[])

 const inputhandler = () =>
  inputRef.current.focus()

  return <div>
  <input ref={inputRef}></input>
  <button onClick={inputhandler} >Focus input</button>
  </div>
}

export default App

