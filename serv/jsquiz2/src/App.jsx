import './App.css';
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  // Added this function here, hadnles the button clickies
  function handleClick() {
    setValue((prevValue) => {
      if (prevValue === null || prevValue === 0) {
        return 3;
      }
      return prevValue - 1;
    });
  }

  const displayValue = value === null ? '' : value;
  
  // square now has the button functionality with the handleClick function
  return (
    <button className="square" onClick={handleClick}>
      {displayValue}
    </button>
  );
}

// board is virtually the same
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
