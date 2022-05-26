import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Database, Develope} from './AllSvgs';

import LogoComponent from '../components/LogoComponent';
import SocialIcons from '../components/SocialIcons';
// import PowerButton from '../subComponents/PowerButton';
// import ParticleComponent from '../components/ParticleComponent';
import BigTitle from '../components/BigTitle'
import BackButton from '../components/BackButton';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

@media (max-width: 50em) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px 0px 0px 0px;
}
`

const Main = styled.div`
border: 1px solid ${props => props.theme.text};
border-radius: 15px;
box-shadow: 10px 13px 11px -4px rgba(0,0,0,1);
-webkit-box-shadow: 10px 13px 11px -4px rgba(0,0,0,1);
-moz-box-shadow: 10px 13px 11px -4px rgba(0,0,0,1);
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;


@media (max-width: 50em) {
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    top: 5rem;
    margin-bottom: 4rem;
    position: inherit;
    line-height: 1;
}
@media (max-width: 30em) {
    width: 40vw;
    top: 5rem;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
}

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;

@media (max-width: 50em) {
    visibilty: hidden;
}
`
const CONTACT = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 1vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;

@media (max-width: 50em) {
    top: 55%;
}
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`


const SkillsPage = () => {
    return ( 
        <ThemeProvider theme={lightTheme}>
    <Box>

        <LogoComponent theme='light'/>
        <SocialIcons theme='light'/>
        <BackButton />
        {/* <ParticleComponent theme='light' /> */}
            <Main>
                    <Title>
                        <Develope width={40} height={40} /> Frontend Developer
                    </Title>
                        <Description>
                            I love to create design which speaks, Keep it clean, minimal and simple.
                        </Description>
                    <Description>
                    <strong>I like it Simple and Cool</strong>
                    <ul>
                        <li>
                        Html, Css, Js, React, Redux, Angualr.
                        </li>
                        <li>
                        Wordpress, Shopify, Saas.
                        </li>
                    </ul>
                    </Description>
                    <Description>
                    <strong>Tools</strong>
                    <ul>
                        <li>
                        Figma
                        </li>
                        
                    </ul>
                    </Description>

        </Main>
        <Main>
            <Title>
                <Database width={40} height={40} /> Backend Developer
            </Title>
                <Description>
                    I value business or brand for which i'm creating, however i enjoy bringing new ideas to life.
                </Description>
                <Description>
                    <strong>Skills</strong>
                    <p>
                    Node, MongoDB, Firebase. etc.
                    </p>
                </Description>
                <Description>
                    <strong>Tools</strong>
                    <p>
                    VScode, Github, Codepen etc.
                    </p>
                </Description>

        </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

    </Box>
        <CONTACT to="/contact">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Contact
                </motion.h2>
            </CONTACT>
        <WORK to="/work">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Work
                </motion.h2>
            </WORK>
        <BottomBar>
            <ABOUT to="/about">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    About.
                </motion.h2>
            </ABOUT>
            <SKILLS to="/skills">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    My Skills.
                </motion.h2>
            </SKILLS>

            </BottomBar>
        </ThemeProvider>
     );
}
 
export default SkillsPage;