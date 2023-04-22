import { useState } from "react";
import { GameContainer, Squares } from "./styles";

export function Game() {
    const [squares, setSquares] = useState([null,null,null,null,null,null,null,null,null]);
    const [playerX, setPlayerX] = useState(true);
    const [winner, setWinner] = useState(false)

    const handleClick = (index) => {

        const newSquares = [...squares];
        newSquares[index] = playerX ? 'X' : 'O';
        setSquares(newSquares);
        setPlayerX(!playerX) // Alterna Player
        if(winner == false) {
            checkWinner();
        }   
    }

    const restartGame = () => {
        setSquares([null,null,null,null,null,null,null,null,null]);
        setWinner(false);
    }

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

       for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            console.log([a, b, c])
           if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                alert("VITORIA")
                setWinner(true);
                restartGame();
           }
       }
    }
    return(
        
        <GameContainer>
            {squares.map((square, index) =>{
                return <Squares key={index} onClick={() => handleClick(index)}>{square}</Squares>
            })}
            
            
        </GameContainer>
    )
}