import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';

import LogoComponent from '../components/LogoComponent';
import SocialIcons from '../components/SocialIcons';
import BackButton from '../components/BackButton';
// import ParticleComponent from '../components/ParticleComponent';
import BigTitle from '../components/BigTitle'
import oyetola from '../assets/images/tolajogging.gif'

const Box = styled.div `
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Jogging = styled.div `
position: absolute;
top: 5%;
right: 2%;
width: 40vw;
// animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: 100%;
}
`
const Main =  styled.div `
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  padding: 1rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(4rem + 5vw);
  top: 6rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  @media (max-width: 30em) {
    width: 50vw;
    height: 50%;
    backdrop-filter: none;
    margin-top: 6rem;
    left: 5rem;
  }
`
const WORK = styled(NavLink) `
color: ${props => props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;

@media only screen and  (max-width: 50em){
    color: ${props => props.theme.text};
    text-shadow: rgb(0 0 0) 0px 0px 4px;
    left: calc(1rem + 0.5vw);
    top: 48%;
    font-size: 0.8em;
}
`

const BottomBar = styled.div `
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`
const CONTACT = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;

@media only screen and  (max-width: 50em){
    color: ${props => props.theme.text};
    text-shadow: rgb(0 0 0) 0px 0px 4px;
    right: calc(1rem + 0.5vw);
    top: 50%;
    font-size: 0.8em;
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

const AboutPage = () => {
    return ( 
        <ThemeProvider theme={DarkTheme}>
            <Box>

<LogoComponent theme='dark'/>

<SocialIcons theme='dark'/>
<BackButton />
{/* <ParticleComponent theme='dark' /> */}

        <Jogging>
            <img src={oyetola} alt="tolajogging" />
        </Jogging>    
        <Main>
        I'm a fullstack software developer. I love to create simple yet beautiful websites with mind blowing experience.
 <br/>
I have keen interest in learning, developing good stuff, trying new things and building great projects. In my spare time i love to workout and play video games.
<br/>
Specal thanks goes to Travesy, Ed, Wrong Akan, Web Unlocked, Codebucks and all great youtubers out there. Stay safe and have a wonderful day.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
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
                    About
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

        </Box>
        </ThemeProvider>
    )
}
export default AboutPage;