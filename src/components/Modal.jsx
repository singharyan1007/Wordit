import React from 'react'

function Modal({isCorrect,solution,turn}) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <p className='solution'>{solution}</p>
                <p>You guessed the correct word in {turn} turns</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Aww !! Better luck Next time</h1>
                <p className='solution'>Btw the solution is {solution}</p>
            </div>
        )}
    </div>
  )
}

export default Modal