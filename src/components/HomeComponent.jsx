import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { DarkTheme } from '../components/Themes';
import { GoHome } from 'react-icons/go';

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 50%;
top: 2rem;
justify-content: center;
text-align: center;
cursor: pointer;
z-index:3;

@media only screen and (max-width: 50em){
    position: fixed;
    left: 40%;
    top: 2rem;
    justify-content: center;
}
`
const HomeLink = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
`

const LogoComponent = (props) => {
    return (
     
        <Logo color={props.theme}>
           <HomeLink to="/"> <GoHome /></HomeLink>
         </Logo>
        
    )
}
export default HomeComponent;