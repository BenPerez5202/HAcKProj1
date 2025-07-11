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

  const getRandomChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const determineWinner = (player, bot) => {
  if (player.name === bot.name) return 'tie';
  
  const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };
  
  return winConditions[player.name] === bot.name ? 'win' : 'lose';
};

const playGame = (playerChoice) => {
  const botChoice = getRandomChoice();
  const gameResult = determineWinner(playerChoice, botChoice);
  
  setPlayerChoice(playerChoice);
  setBotChoice(botChoice);
};

// Update the button onClick
<button
  key={choice.name}
  className="choice-button"
  onClick={() => playGame(choice)}
></button>

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
