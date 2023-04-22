import { useState } from "react";
import { GameContainer, Squares } from "./styles";

export function Game() {
    const [squares, setSquares] = useState([null,null,null,null,null,null,null,null,null]);
    const [playerX, setPlayerX] = useState(true);


    const handleClick = (index) => {

        const newSquares = [...squares];
        newSquares[index] = playerX ? 'X' : 'O';
        setSquares(newSquares);
        setPlayerX(!playerX) // Alterna Player
        console.log('Index aqui', index)
        console.log(squares, "SQUARES NEW")
        console.log(squares[1], "SQUARES 0")
        checkWinner();
        if(index[1] === 'X') {
            console.log("estamos no if")
        }
        
    }

    const checkWinner = (squares) => {
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