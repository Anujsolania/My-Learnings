import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { useContext, useState } from 'react';
import { CountContext } from './Context.jsx';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count.jsx';



function App() {
  

  return (
    <div>
    <RecoilRoot>
      <Count />
    </RecoilRoot>
    </div>
 
  )
}

function Count() {
  console.log("re-render")
  return <div>
    <Countrender />
    <Buttons  />
  </div>
}

function Countrender() {
  const count = useRecoilValue(countAtom)

  return <div>
  {count} 
  <br></br>
  <Evencountrenderer />
  </div>
}

function Evencountrenderer() {
  const isEven = useRecoilValue(evenSelector)
  if (isEven) {
    return <div>
    It is Even
    </div>
  } else {
    return <div>
    It is Odd
    </div>
  }
}

function Buttons() {
  // const[count,setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom)
  console.log("buttons re-render")

  return <div>
  <button onClick={() => {
    setCount(count => count+1)
  }} >Increase</button>
  <button onClick={() => {
    setCount(count => count-1)
  }} >Decrease</button>
  </div>
}

export default App
