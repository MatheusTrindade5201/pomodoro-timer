import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
       margin: 0;
       padding: 0; 
    }

    body{
        background-color: ${props => props.theme.settings.primary};
        overflow: hidden;
    }

    .timer__section{
        height: calc(100vh - 61px - .5rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }

`

export default GlobalStyle