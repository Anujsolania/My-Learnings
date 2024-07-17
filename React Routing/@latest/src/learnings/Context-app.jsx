import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { useContext, useState } from 'react';
import { CountContext } from './Context.jsx';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atoms/count.jsx';



function App() {
  const[count,setCount] = useState(0)

  return (
    <div>
    <CountContext.Provider value={count} >
      <Count setCount={setCount} />
    </CountContext.Provider>
    </div>
 
  )
}

function Count({setCount}) {
  return <div>
    <Countrender />
    <Buttons setCount={setCount} />
  </div>
}

function Countrender() {
  const count = useContext(CountContext)

  return <div>
  {count}
  </div>
}

function Buttons({setCount}) {
  const count = useContext(CountContext) 

  return <div>
  <button onClick={() => {
    setCount(count+1)
  }} >Increase</button>
  <button onClick={() => {
    setCount(count-1)
  }} >Decrease</button>
  </div>
}

export default App
