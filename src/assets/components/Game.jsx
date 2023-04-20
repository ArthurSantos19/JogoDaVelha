import { useState } from "react";
import { GameContainer, Squares } from "./styles";

export function Game() {
    const [squares, setSquares] = useState([0,0,0,0,0,0,0,0,0]);
    const [playerX, setPlayerX] = useState(true);
    const [id, setId] = useState(0);


    const handleClick = () => {

        if(squares == true) {
            setPlayerX('X');
        }
        setPlayerX(i);
        
        
    }
    return(
        
        <GameContainer>
            {squares.map((square, index) =>{
                return <Squares key={index} onClick={handleClick}>{playerX}</Squares>
            })}
            
            
        </GameContainer>
    )
}