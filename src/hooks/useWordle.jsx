import React,{useState} from 'react'
  //the solution generated in app.js will be later used here
  // so a custom hook
const useWordle=(solution)=> {
  const[turn,setTurn]=useState(0);
  const[currentGuess,setCurrentGuess]=useState('')
  //updated when the user hits a key
  const[guesses,setGuesses]=useState([...Array(6)])//it is basically an empty array in the beginning
  //User is allowed only 6 chances so we define an array and destructure it. 
  const[history,setHistory]=useState([])
  //kepps record of the past guesses
  const[isCorrect,setIsCorect]=useState(false);
  //keeps track of the correctness of the guess
  //on;y turns true when user wins the game
  const[usedKeys,setUsedKeys]=useState({});
  //we add the submitted word in this and then it assess the word and assigns a color on the basis of the solution just like in the grid 

  const formatGuess=()=>{

    //The function here takes the user input and formats the word into an array of objects
    //each of the object will have hey value pair i.e. letter and colour property
    console.log("Formatting the current guess " , currentGuess);
    let solutionArray=[...solution];
    let formattedGuess=[...currentGuess].map((l)=>{
      return {key:l,color:'grey'}
    })

    //find green letters
    formattedGuess.forEach((l,i)=>{
      if(solutionArray[i]===l.key){
        formattedGuess[i].color='green';
        solutionArray[i]=null;
      }
    })

    //find the yellow colors
    formattedGuess.forEach((l,i)=>{
      if(solutionArray.includes(l.key) && l.color !=='green'){
        formattedGuess[i].color='yellow';
        solutionArray[solutionArray.indexOf(l.key)]=null;
      }
    })
    return formattedGuess;
  }

  const addNewGuess=(formattedGuess)=>{
    //this value is the array of formatted letters
      if(currentGuess===solution){
        setIsCorect(true);
      }
    // add a new guess to the guesses state
    //store the correct/incorrect state of the guess
    //add one to the number of turns left
    setGuesses((prevGuess)=>{
      let newGuesses=[...prevGuess];
      newGuesses[turn]=formattedGuess;
      return newGuesses;
    })
    setHistory((prevHistory)=>{
      return [...prevHistory,currentGuess]
    })
    setTurn((prevTurn)=>{
      return prevTurn+1;
    })
    // Now since we have a guess we need to clear the state of the current guess
    setUsedKeys((prevUsedKeys)=>{
      let newKeys={...prevUsedKeys};
      formattedGuess.forEach((l)=>{
        const currentColor=newKeys[l.key];
        if (l.color === 'green') {
          prevUsedKeys[l.key] = 'green'
          return
        }
        if (l.color === 'yellow' && currentColor !== 'green') {
          prevUsedKeys[l.key] = 'yellow'
          return
        }
        if (l.color === 'grey' && currentColor !== ('green' || 'yellow')) {
          prevUsedKeys[l.key] = 'grey'
          return
        }
      });
      return prevUsedKeys;
    })
    setCurrentGuess('');
  }

  const handleKeyup = ({ key }) => {
    console.log('key pressed - ', key)
    //Submitting the guess
    if(key==='Enter'){
      //only add to the list if turn less than 5
      if(turn>5){
        console.log("Greater than 5");
        return

      }
      //Only if the word has not already been present in the guess
      if(history.includes(currentGuess)){
        console.log("Already tried the guess");
        return
      }
      //The word must be 5 character long
      if(currentGuess.length!==5){
        console.log("not proper length");
        return
      }
      //If all these conditions are bypassed then
      const formatted=formatGuess();
      console.log(formatted);
      addNewGuess(formatted);
    }


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
  return {turn,currentGuess,guesses,isCorrect,usedKeys,handleKeyup}
  //these values handled outside the hook

}

export default useWordle