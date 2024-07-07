import React, { useRef, useState } from "react"
import { useEffect } from "react"

function App() {
  const[income,setIncome] = useState(2000)
  const divRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            divRef.current.innerHTML = 10
        },3000)
    },[]);

    return <div>
     Your income is <div ref={divRef}>{income}</div>
    </div>
}



export default App