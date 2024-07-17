import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { Suspense, lazy } from 'react';

const Dashboard = lazy(() => import("./components/Dashboard"))
const Landing = lazy(() => import("./components/Landing"))

//it have two component files DASHBOARD & LANDING, present in the components folder

function App() {

  return (
    <div>
    <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path="/dashboard" element={<Suspense fallback={"loading..."} ><Dashboard/></Suspense>}></Route>
      <Route path="/" element={<Suspense fallback={"loading..."} ><Landing/></Suspense>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
 
  )
}

function Appbar() {
  const navigate = useNavigate()

  return <div>
    <button onClick={() => {
        navigate("/")
      }} >Landing page</button>
      <button onClick={() => {
        navigate("/dashboard")
      }} >Dashboard page</button>
  </div>
}

export default App
