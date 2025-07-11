import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [botChoice, setBotChoice] = useState(null);

  const choices = [
    { name: 'rock', emoji: '🪨' },
    { name: 'paper', emoji: '📄' },
    { name: 'scissors', emoji: '✂️' }
  ];

  return (
    <div className="game-container">
      <h1>Rock Paper Scissors</h1>
      
      <div className="buttons-container">
        {choices.map((choice) => (
          <button
            key={choice.name}
            className="choice-button"
          >
            <span className="choice-emoji">{choice.emoji}</span>
            <span className="choice-name">{choice.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;