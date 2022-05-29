
import { useState } from 'react';
import './App.css';
import Board from './board/borard';
import Footer from './footer/footer';
import Header from './header/header';

function App() {
  const [winnerMessage,setWinnerMessage]=useState('')
  const getWinner=(winner)=>{
    if(winner){
      setWinnerMessage(`The winner is :  ${winner}`)
    }
  }
  return (
    <>
      <Header/>
    <div className='game'>
      <div className='game_board'>
          <Board getWinner={getWinner} />
      </div>
      <div className='game_winner'>
        <div className='call_winner'>{winnerMessage}</div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
