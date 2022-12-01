import styled from "styled-components";

export const RoundDotsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`

export const Dots = styled.span<{round: boolean}>`
    display: inline-block;
    width: 20px;
    height:20px;
    border-radius: 50%;
    background-color: ${({round}) => round ? 'grey' : 'white'}
`