import styled from "styled-components";

export const ToggleLabel = styled.label`
    position: relative;
    width: 40px;
    height: 18px;
    border-radius: 16px;
    
    &:hover{
        cursor: pointer;
    }

    input{
        display: none
    }

    span{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        transition: .2s;
        border-radius: 16px
    }

    span::before {
        position: absolute;
        content: '';
        width: 20px;
        height: 16px;
        background-color: ${props => props.theme.settings.secondary};
        border-radius: 10px;
        top: 1px;
        left: 1px;
        transition: .2s
    }

    input:checked + span::before {
        transform: translateX(18px)
    }

    input:checked + span {
        background-color: #ccc;
    }

`