import styled from "styled-components";

export const MenuContainer = styled.div<{open:boolean}>`
position: absolute;
background-color: ${props => props.theme.settings.secondary};
width: 300px;
right: 0;
height: 100vh;
padding: 1rem .5rem;
transition: .2s ease-in-out;
transform: ${({open}) => open === false ? 'translateX(1000%)' : 'translateX(0)' };
`

export const Title = styled.h2`
    color: ${props => props.theme.settings.secondary_text};
`