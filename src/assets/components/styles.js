import styled from "styled-components";

export const GameContainer = styled.div`
    background: #2F4F4F;
    padding: 12rem;

    display: grid;
	grid-template-columns: 1fr 1fr 1fr;
    gap: 0.45rem;
`

export const Squares = styled.button`
    background: white;
    border: 1px solid green;
    font-size: 4rem;
    color: orange;
    font-weight: 8rem bold;
    line-height: 34px;
    height: 8rem;
    width: 8rem;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
`

export const WinnerContainer = styled.div`
    position: absolute;
    background: white;
    border: solid #3CB371 2px;
    color: #3CB371;
    font-size: 1.8rem;
    width: 40rem;
    height: 10rem;
    top: 12rem;
    left: 34%;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    box-shadow: 5px 8px 4px 4px gray;

    opacity: 0;
    transition: opacity 1s ease-in-out; /* adicionando a transição */
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s; /* adicionando o delay */

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export const ButtonContainer = styled.button`
    width: 12rem;
    height: 4rem;
    font-size: medium;
    color: green;
    background-color: white;

    &:hover {
    background-color: #3CB371;
    color: white;
    border: solid 1px white;
  }
`