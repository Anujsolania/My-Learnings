import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { allAtom, totalNotificationSelector } from './atom'
import axios from "axios"


function App() {

  return <div>
    <RecoilRoot>
    <MainApp />
    </RecoilRoot>
  </div>
   
}

function MainApp() {
  const[allAtomCount,setallAtomCount] = useRecoilState(allAtom)

  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //   .then(res => {
  //     setallAtomCount(res.data)
  //   })
  // },[])

  return <div>
    <button>Home({})</button>

    <button>My Network({allAtomCount.network >= 100 ? "99+" : allAtomCount.network})</button>
    <button>Jobs({allAtomCount.jobs})</button>
    <button>Messaging({allAtomCount.messaging})</button>
    <button>Notifications({allAtomCount.notifications})</button>

    <button>Me({totalNotificationCount})</button>
  </div>
}

export default App
