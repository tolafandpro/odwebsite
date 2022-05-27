import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { DarkTheme } from '../pages/Themes';



const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;
text-shadow: rgb(252,246,244) 0px 0px 6px;
position: fixed;
left: 48%;
top: 1rem;
justify-content: center;
text-align: center;
cursor: pointer;
z-index:3;
padding: 5px;
&:hover{
    outline: ${props => props.theme.purple};
    box-shadow: 0 0 8px 6px rgba(306,0,306,0.3);
    transform: scale(1.1);
    border-radius: 50%;
}

@media only screen and (max-width: 50em){
    position: fixed;
    color: ${props => props.theme.text};
    left: 40%;
    top: 2rem;
    justify-content: center;
}
`
const HomeLink = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
letter-spacing: -4px;
`

const LogoComponent = (props) => {
    return (
     
        <Logo color={props.theme}>
           <HomeLink to="/"> OD </HomeLink>
         </Logo>
        
    )
}

export default LogoComponent
