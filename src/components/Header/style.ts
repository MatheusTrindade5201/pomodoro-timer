import styled from "styled-components"

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
padding: .5rem 2vw;
align-items: center;
gap: 5rem;
overflow: hidden;
`

export const Logo = styled.h1`
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    font-size: 1.5rem;
    color: ${props => props.theme.settings.primary_text};
    flex-grow: 1;

    P{
        font-size: 1rem
    }

`