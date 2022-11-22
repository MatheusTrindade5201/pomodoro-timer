import styled from "styled-components";

export const BurgerWrapper = styled.div<{open:boolean}>`
    display: flex;
    flex-direction: column;
    gap: 2px;

    div{
        display: block;
        width: 20px;
        height: 5px;
        background-color: ${props => props.theme.settings.secondary};
        border-radius: 8px;
        transform-origin: 0;
        transition: .2s;

        &:nth-child(1){
            transform: ${({open}) => open === true ? 'rotate(45deg)' : 'rotate(0)' }
        }
        &:nth-child(2){
            transform: ${({open}) => open === true ? 'translateX(500%)' : 'rotate(0)' }
        }
        &:nth-child(3){
            transform: ${({open}) => open === true ? 'rotate(-45deg)' : 'rotate(0)' }
        }

    }

    
`