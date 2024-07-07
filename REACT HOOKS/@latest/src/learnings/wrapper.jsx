import React from "react"

function App() {

  return <div>
  <Cardwrapper >
    hii theree
  </Cardwrapper>
  <Cardwrapper >
  hii theree 222
  </Cardwrapper>
    </div>
}

function Cardwrapper({children}) {
  return <div style={{border: "2px solid black", padding:10, margin:10}} >
    {children}
  </div>
}



export default App
