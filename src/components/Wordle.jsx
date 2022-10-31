import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import Keyboard from './Keyboard';

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup ,guesses,turn,isCorrect} = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    //We use a cleanup function so that multiple event listeners are not fired simultaneoulsy

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup]);
  useEffect(()=>{
    console.log(turn,guesses,isCorrect);
  },[turn,guesses,isCorrect]);

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn ={turn}/>
      <Keyboard/>
    </div>
  )
}