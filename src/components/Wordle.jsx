import React, { useEffect,useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid';
import Keyboard from './Keyboard';
import Modal from './Modal';
import Info from './Info';
import { BsFillGearFill} from "react-icons/bs";
export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup ,guesses,turn,isCorrect,usedKeys} = useWordle(solution);
  const [showModal,setShowModal]=useState(false);
  // const [showInfo,setShowInfo]=useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal=()=>{
    setIsModalOpen(false);
  }
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    //We use a cleanup function so that multiple event listeners are not fired simultaneoulsy
    
    //Now we need to write a functinality to end the game and disable the keypad after the correct guess
    // or
    //end the game after you run out of turns
    if(isCorrect){
      setTimeout(()=>setShowModal(true),2000);
      window.removeEventListener('keyup',handleKeyup);
    };
    if(turn>5){
      setTimeout(()=>setShowModal(true),2000);
      window.removeEventListener('keyup',handleKeyup);
    };
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup,isCorrect,turn]);

  // useEffect(()=>{
  //   console.log(turn,guesses,isCorrect);
  // },[turn,guesses,isCorrect]);
  // Just to get some information
  return (
    <div>
      {/* <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div> */}
      <div className="link">
      <button className='modal-btn' onClick={openModal} >
          <BsFillGearFill></BsFillGearFill>
        </button>
      </div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn ={turn}/>
      <Keyboard usedKeys={usedKeys}/>
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
      {isModalOpen && <Info closeModal={closeModal}/>}
    </div>
  )
}