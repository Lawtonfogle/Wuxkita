import React from 'react';

const Game = (props) => {
  return (
    <button onClick={props.reset}>{props.gameId}</button>
  );
}

export default Game;