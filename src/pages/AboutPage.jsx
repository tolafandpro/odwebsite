import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import LogoComponent from "../components/LogoComponent";
import SocialIcons from "../components/SocialIcons";
import BackButton from "../components/BackButton";
// import ParticleComponent from '../components/ParticleComponent';
import BigTitle from "../components/BigTitle";
import oyetola from "../assets/images/tolajogging.gif";
// import { mobile } from './../responsive';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Jogging = styled.div`
  position: absolute;
  top: 5%;
  right: 2%;
  width: 40vw;
  // animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  padding: 1rem;
  width: 50vw;
  height: 50vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(3.8rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  @media only screen and (max-width: 50em) {
    width: "50vw";
    height: "50%";
    margin-top: "6rem";
    left: "5rem";
  }
`;
const WORK = styled(NavLink)`
  color: ${(props) => props.theme.text};

  position: absolute;
  top: 49%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 50em) {
    color: ${(props) => props.theme.text};
    text-shadow: rgb(0 0 0) 0px 0px 4px;
    left: calc(1.8rem + 1vw);
    top: 45%;
    font-size: 0.8em;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const CONTACT = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 56%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 50em) {
    color: ${(props) => props.theme.text};
    text-shadow: rgb(0 0 0) 0px 0px 4px;
    right: calc(0rem + -1vw);
    top: 50%;
    font-size: 0.8em;
  }
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  cursor: disabled;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />

        <SocialIcons theme="dark" />
        <BackButton />
        {/* <ParticleComponent theme='dark' /> */}

        <Jogging>
          <img src={oyetola} alt="tolajogging" />
        </Jogging>
        <Main>
          I love to create interative, simple and building and deploying
          full-stack web applications with mind blowing experience.
          <br />
          Oyetola David is skilled web developer with 5 years of experience
          proficient in MongoDB, Express.js, React.js, Wordpress and Node.js.
          <br />
          In addition to my professional skills, I'm also passionate about
          staying active and healthy through exercise and enjoys playing video
          games in my free time.. Stay safe and have a wonderful day.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
        <WORK to="/work">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            My Works.
          </motion.h2>
        </WORK>
        <CONTACT to="/contact">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact Me.
          </motion.h2>
        </CONTACT>
        <BottomBar>
          <ABOUT to="/about">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About Me.
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills.
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Box>
    </ThemeProvider>
  );
};
export default AboutPage;
