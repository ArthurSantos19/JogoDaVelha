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
    font-size: 2rem;
    width: 46rem;
    height: 10rem;
    top: 20rem;
    left: 30%;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
`

export const ButtonContainer = styled.button`
    width: 12rem;
    height: 4rem;
    font-size: medium;
    color: green;
    background-color: white;
    border: solid 1px #3CB371;

    &:hover {
    background-color: #3CB371;
    color: white;
    border: solid 1px white;
  }
`