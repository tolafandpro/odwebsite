import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { BackBtn } from "../pages/AllSvgs";


const Back = styled.button`
    position: fixed;
    top: 2rem;
    left: 2rem;
    display: flex;

    background-color: #FCF6F4;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    border: transparent;
    border-radius: 50%;
    z-index: 3;

    &:hover{
        background-color: ${props => props.theme.purple};
        box-shadow: 0 0 8px 6px rgba(306,0,306,0.3);
        transform: scale(1.1);
    }
`

const BackButton = () => {
    const navigate = useNavigate();
    return(
        <Back>   
                <BackBtn fill="currentColor" onClick={() => navigate(-1)} />
        </Back>     
    )

}

export default BackButton