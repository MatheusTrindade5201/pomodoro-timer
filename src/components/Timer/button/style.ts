import styled from "styled-components";

export const ButtonStart = styled.button<{text: string | boolean}>`
    width: 100%;
    padding: .5rem;
    box-sizing: border-box;
    margin-top: .2rem;
    background-color: ${({text}) => text === 'Reset' ? "#cc0000" : '#f2f2f2'};
    color: ${({text}) => text === 'Reset' ? "white" : ''};
    &:disabled{
        opacity: 0.5
    }
    border: 1px solid ${props => props.theme.settings.secondary};
`