import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";



function App() {
  const[items,setItems] = useState([
    {name: "Chocolate", value: 10},
    {name: "Juice", value: 20},
    {name: "Pizza", value: 30},
    {name: "Burger", value: 40},
  ])

  const totalvalue = useMemo(() => {
    let totalvalue = 0
    for (let i = 0; i < items.length; i++) {
    totalvalue = totalvalue + items[i].value
    }
    return totalvalue
  },[items])
  

  return <>
  <ul>
    {
      items.map((items) => 
      <li>{items.name} - Price ${items.value}</li>)
    }
    <li><h4>
    Total Price: ${totalvalue}
    </h4></li>
  </ul>
  
  </>
}
  
export default App


