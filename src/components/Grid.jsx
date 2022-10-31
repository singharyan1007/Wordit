import React from 'react'
import Row from './Row'
function Grid({currentGuess,guesses,turn}) {
    //We will map through the array of guesses
  return (
    <div>{guesses.map((guess,index)=>{
      if(turn===index){
        return (
          <Row key={index} currentGuess={currentGuess}/>
        )
      }
        return <Row key={index} guess={guess}/>
    })}</div>
  )
}

export default Grid