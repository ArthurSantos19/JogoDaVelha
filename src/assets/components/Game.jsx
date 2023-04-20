import { useState } from "react";
import { GameContainer, Squares } from "./styles";

export function Game() {
    const [squares, setSquares] = useState([null,null,null,null,null,null,null,null,null]);
    const [playerX, setPlayerX] = useState(true);


    const handleClick = (index) => {

        const newSquares = [...squares];
        newSquares[index] = playerX ? 'X' : 'O';
        setSquares(newSquares);
        setPlayerX(!playerX) // ALTERNA PLAYER
    }
    return(
        
        <GameContainer>
            {squares.map((square, index) =>{
                return <Squares key={index} onClick={() => handleClick(index)}>{square}</Squares>
            })}
            
            
        </GameContainer>
    )
}