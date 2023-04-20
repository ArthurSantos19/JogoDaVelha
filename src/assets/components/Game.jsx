import { useState } from "react";
import { GameContainer, Squares } from "./styles";

export function Game() {
    const [squares, setSquares] = useState([null,null,null,null,null,null,null,null,null]);
    const [playerX, setPlayerX] = useState('X');


    const handleClick = (index) => {

        const newSquares = [...squares];
        newSquares[index] = playerX
        setSquares(newSquares);
         
    }
    return(
        
        <GameContainer>
            {squares.map((square, index) =>{
                return <Squares key={index} onClick={() => handleClick(index)}>{square}</Squares>
            })}
            
            
        </GameContainer>
    )
}