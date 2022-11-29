import styled from "styled-components";

export const ButtonStart = styled.button<{text: string | boolean}>`
    width: 100%;
    padding: .5rem;
    box-sizing: border-box;
    margin-top: .2rem;
    background-color: ${({text}) => text === 'Reset' ? "red" : ''};
    color: ${({text}) => text === 'Reset' ? "white" : ''};
    &:disabled{
        opacity: 0.5
    }
`