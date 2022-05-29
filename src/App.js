
import { useState } from 'react';
import './App.css';
import Board from './board/borard';

function App() {
  const [winnerMessage,setWinnerMessage]=useState('')
  const getWinner=(winner)=>{
    if(winner){
      setWinnerMessage(`The winner is :  ${winner}`)
    }
  }
  return (
    <>
    <div className='game'>
      <div className='game-board'>
          <Board getWinner={getWinner} />
      </div>
      <div className='game-winner'>
        <div className='call_winner'>{winnerMessage}</div>
      </div>
    </div>
    </>
  );
}

export default App;
