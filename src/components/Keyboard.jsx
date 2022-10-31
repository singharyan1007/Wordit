import React,{useState,useEffect} from 'react'

function Keyboard() {
    const [letters, setLetters] = useState(null)

    useEffect(() => {
      fetch('http://localhost:3001/letters')
        .then(res => res.json())
        .then(json => {
          setLetters(json)
        })
    }, [])
  
    return (
      <div className="keypad">
        {letters && letters.map(l => {
          return (
            <div key={l.key}>{l.key}</div>
          )
        })}
      </div>
    )
  }

export default Keyboard