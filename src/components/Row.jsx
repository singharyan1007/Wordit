import React from "react";

export default function Row({ guess, currentGuess }) {
  if (guess) {
    //guess is formatted array of letters
    return (
      <div className="row past">
        {guess.map((letter, i) => (
          <div key={i} className={letter.color}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }
  if (currentGuess) {
    let letters = currentGuess.split("");
    //splits all the characters of the current guess and arranges it in an array called letters
    return (
      <div className="row current">
        {letters.map((letter, index) => (
          <div key={index} className="filled">
            {letter}
          </div>
          //Presently only thst msny boxes are appearing as many characters are typed.
          //To remove this we can use an array of undefined values
        ))}
        {[...Array(5 - letters.length)].map((_,index)=>(
            <div key={index}></div>
            //We use this to get the empty squares
        ))}
      </div>
    );
  }
  return (
    // We will check the guess value. It will either cantain value or be undefined. If value, then print in the row, else print emplty row
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
