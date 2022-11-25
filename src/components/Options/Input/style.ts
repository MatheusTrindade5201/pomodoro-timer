import styled from "styled-components";

export const InputOptionsLabel = styled.label`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3{
        color: ${props => props.theme.settings.secondary_text}
    }

    input{
        box-sizing: border-box;
        padding: .2rem .5rem;
        text-align: center;
        font-size: 2rem;
        width: 80%;
        align-self: center
    }
`