import { useState } from "react";
import 'animate.css'

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
    const [mode, setMode] = useState(0);

    var handleClick = (lane, i) => {
        if(gameOver)
            return;
        var copy = [...board];
        var index = copy[i].lastIndexOf(0);
        if(index >= 0)
            copy[i][index] = turn;
        else
            return;
        setBoard(copy);
        
        // if game can end stop
        if(updateGameState(turn))
            return;

        console.log('current mode: ', mode);
        if(turn == 1)
            setTurn(-1);
        else
            setTurn(1);
        if(mode == 1)
        {
            console.log('random clicking');
            setTimeout(() => { randomClick(); }, 5000);
            
            if(turn == 1)
                setTurn(-1);
            else
                setTurn(1);

        }
            

        // console.log(board);
        console.log('turn:', turn)
    }

    var randomClick = () => {
        var copy = [...board];
        var i = Math.floor(Math.random() * 7);
        while(copy[i].lastIndexOf(0) < 0) {
            i = Math.floor(Math.random() * 7);
        }
        if(gameOver)
            return;
        
        var index = copy[i].lastIndexOf(0);
        if(index >= 0)
            copy[i][index] = turn * -1;
        else
            return;
        setBoard(copy);
        
        // if game can end stop
        if(updateGameState(turn))
            return;
        // console.log(board);
        // console.log('turn:', turn)
    }

    

    var resetBoard = (lane, i) => {
        setBoard([[0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]]);
        turn = 1;
        setGameOver(false);
    }

    var updateGameState = (player) => {
        // Check if board has been filled
        var foundZero = false;
        for(var i = 0; i < board.length; i++) {
            var lane = board[i];
            for(var j = 0; j < lane.length; j++) {
                if(lane[j] == 0)
                    foundZero = true;
            }
        }
        if(!foundZero)
        {
            setGameOver(true);
            return true;
        }
            
            

        // Check if anyone has won
        // vertical 
        for (var j = 0; j<board.length-3 ; j++ ){
            for (var i = 0; i< board[j].length; i++){
                if (board[i][j] == player && board[i][j+1] == player && board[i][j+2] == player && board[i][j+3] == player){
                    setGameOver(true);
                    console.log("vertical winner: ", turn);
                    return true;
                }           
            }
        }
        // horizontal
        for (var i = 0; i<board.length-3 ; i++ ){
            for (var j = 0; j<board[i].length; j++){
                if (board[i][j] == player && board[i+1][j] == player && board[i+2][j] == player && board[i+3][j] == player){
                    setGameOver(true);
                    console.log("horizontal winner: ", turn);
                    return true;
                }           
            }
        }
        // ascending 
        for (var i=3; i<board.length; i++){
            var lane = board[i];
            for (var j=0; j<lane.length-3; j++){
                if (board[i][j] == player && board[i-1][j+1] == player && board[i-2][j+2] == player && board[i-3][j+3] == player) {
                    console.log('ascending winner: ', turn)
                    setGameOver(true);
                    return true;
                }
            }
        }
        // descending
        for (var i=3; i<board.length; i++){
            var lane = board[i];
            for (var j=3; j<lane.length; j++){
                if (board[i][j] == player && board[i-1][j-1] == player && board[i-2][j-2] == player && board[i-3][j-3] == player) {
                    console.log('descending winner: ', turn)
                    setGameOver(true);
                    return true;
                }
            }
        }
        return false;
    }    

  return (
      <>
        <div className="gameState">
            <button onClick={() => resetBoard()}> RESET </button>
            <div onChange={(e) => setMode(e.target.value)}>
                <input type="radio" value={0} name="mode" /> Player
                <input type="radio" value={1} name="mode" /> Random
                <input type="radio" value={2} name="mode" /> Minimax
            </div>
            {gameOver && <h1> Game Over</h1>}
            {!gameOver && <h1>Game Started</h1>}
            {turn === 1 && gameOver && <h1 className="color: red">Red Wins!</h1>}
            {turn === -1 && gameOver && <h1 className="color: yellow">Yellow Wins!</h1>}
        </div>
        
        <div className="board">
            {board.map((lane, index) => (
                <div className="lane" onClick={() => handleClick(lane, index)}>
                    {index}
                    {lane.map((checker) => (
                        <>
                            {checker === 0 && <div className="checker"/>}
                            {checker === 1 && <div className="checker">
                                    <div className="checker red animate__animated animate__backInDown animate__faster"></div>
                                </div>}
                            {checker === -1 && <div className="checker">
                                    <div className="checker yellow animate__animated animate__backInDown animate__faster"></div>
                                </div>}
                        </>
                    ))}
                </div>
                
            ))}
        </div>
      </>
    
  )
}
