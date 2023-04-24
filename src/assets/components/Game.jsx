import { useState, useEffect } from "react";
import { GameContainer, Squares, WinnerContainer, ButtonContainer } from "./styles";

export function Game() {
    const [squares, setSquares] = useState([null,null,null,null,null,null,null,null,null]);
    const [playerX, setPlayerX] = useState(true);
    const [winner, setWinner] = useState(false)

    useEffect(() => {
        checkWinner();
    }, [squares]);

    const handleClick = (index) => {
        const newSquares = [...squares];
        newSquares[index] = playerX ? 'X' : 'O';
        setSquares(newSquares);
        setPlayerX(!playerX) // Alterna Player
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
           if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(true);         
           }
       }
    }

    const restartGame = () => {
        if(winner == true || squares != null) {
            setSquares([null,null,null,null,null,null,null,null,null]);
            setWinner(false);
        }
        
    }

    return(
        <>
            <div style={{opacity: winner ? 0.35 : 1}}>
                <GameContainer>
                    {squares.map((square, index) =>{
                        return <Squares key={index} onClick={() => handleClick(index)}>{square}</Squares> 
                        
                    })}
                </GameContainer>
            </div>
            {winner == true ? <WinnerContainer>Parabéns o jogador {playerX ? "O" : "X"} venceu! 
                <ButtonContainer onClick={restartGame}> Reiniciar jogo</ButtonContainer>
             </WinnerContainer>:null}
        </>
    )
}