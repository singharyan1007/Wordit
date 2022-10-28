import React,{useState} from 'react'
  //the solution generated in app.js will be later used here
  // so a custom hook
const useWordle=(solution)=> {
  const[turn,setTurn]=useState(0);
  const[currentGuess,setCurrentGuess]=useState('')
  //updated when the user hits a key
  const[guesses,setGuesses]=useState([])//it is basically an empty array in the beginning
  const[history,setHistory]=useState([])
  //kepps record of the past guesses
  const[isCorrect,setIsCorect]=useState(false);
  //keeps track of the correctness of the guess
  //on;y turns true when user wins the game

  const formatGuess=()=>{

    //The function here takes the user input and formats the word into an array of objects
    //each of the object will have hey value pair i.e. letter and colour property
  }

  const addNewGuess=()=>{
    // add a new guess to the guesses state
    //store the correct/incorrect state of the guess
    //add one to the number of turns left
  }

  const handleKeyup = ({ key }) => {
    console.log('key pressed - ', key)

    if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1))
      return
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prev => prev + key)
      }
    }
  
    //handle the keyboard basically and keep track of the current guess
    //when the user presses enter then add the input to the guess list
  }
  // In the hook we will create an event listener which will fire a handleKeyUp() when key is pressed
  return {turn,currentGuess,guesses,isCorrect,handleKeyup}
  //these values handled outside the hook

}

export default useWordle