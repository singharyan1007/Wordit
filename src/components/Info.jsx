import React from 'react'
import { FaTimes } from 'react-icons/fa'
function Info({closeModal}) {
  return (
    <div className='modal'>
        <div>
        <button onClick={closeModal} className='modal-btn close-modal'>
          <FaTimes></FaTimes>
        </button>
        <h3>Wanna know how to play the game !!</h3>
        </div>
    </div>
  )
}

export default Info