import styled from "styled-components"

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
margin: .5rem 2vw;
padding-bottom: .5rem;
align-items: center;
gap: 5rem;
overflow: hidden;
border-bottom: 1px solid ${props => props.theme.settings.secondary}
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