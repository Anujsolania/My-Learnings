import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

const words = ["hii", "hello", "my", "name", "is", "anuj", "solania"]
const ALLWORDS = []
const TOTALLINES = 500
for (let i = 0; i < TOTALLINES; i++) {
    let sentence = ""
    for (let j = 0; j < words.length; j++) {
        sentence += words[Math.floor(words.length * Math.random())]
        sentence += " "
    }
    ALLWORDS.push(sentence)
}

function App() {
  const[sentences,setSentences] = useState(ALLWORDS)
  const[searchinput,setSearchinput] = useState("")

  const filteredsentences = useMemo(() => {
    return sentences.filter(x => x.includes(searchinput))
  },[sentences,searchinput])


  return <>
  <input type="text" onChange={(e) => setSearchinput(e.target.value)} /> <br></br>
  {filteredsentences.map(words => <div>
    {words}
  </div>)}
  </>
}
  
export default App


