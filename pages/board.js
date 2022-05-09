import { useState } from "react";



export default function Board() {

    const [board, setBoard] = useState(
        [[0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]]);
    
    const [turn, setTurn] = useState(1);
    const [gameOver, setGameOver] = useState(false);

    var handleClick = (lane, i) => {
        if(gameOver)
            return;

        var copy = [...board];
        var index = copy[i].lastIndexOf(0);
        if(index >= 0)
            copy[i][index] = turn;
        setBoard(copy);
        setTurn(turn => turn * -1);
        console.log(lane);
        console.log('turn:', turn)
    }

    var resetBoard = (lane, i) => {
        setBoard([[0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]]);
    }
    
    

  return (
      <>
        <button onClick={() => resetBoard()}> RESET </button>
        <div className="board">
            {board.map((lane, index) => (
                <div className="lane" onClick={() => handleClick(lane, index)}>
                    {index}
                    {lane.map((checker) => (
                        <>
                            {checker === 0 && <div className="checker"/>}
                            {checker === 1 && <div className="checker red"/>}
                            {checker === -1 && <div className="checker yellow"/>}
                        </>
                    ))}
                </div>
                
            ))}
        </div>
      </>
    
  )
}
