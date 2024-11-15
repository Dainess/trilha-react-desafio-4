import styled from 'styled-components';
import { IButtonContainerProps } from './types';

export const ButtonContainer = styled.button<IButtonContainerProps>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`

//background-color: ${p => p.disabled ? "#81259D" : "white"};