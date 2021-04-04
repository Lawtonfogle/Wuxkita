import React, {useState} from 'react';
import './App.css';

import Game from './components/Game';

const App = () => {
  const [gameId, setGameId] = useState(0);
  return (
    <Game key={gameId} gameId={gameId} reset={() => setGameId(gameId + 1)} />
  );
}

export default App;
