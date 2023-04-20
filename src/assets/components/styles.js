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