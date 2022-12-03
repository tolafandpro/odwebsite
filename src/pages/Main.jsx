import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import LogoComponent from "../components/LogoComponent";
import Intro from "./Intro";
import { PowerBtn } from "./AllSvgs";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  padding: 2rem;
`;
const CONTACT = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 56%;
  right: calc(0.5rem + 0.5vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 50em) {
    color: ${(props) => props.theme.body};
    text-shadow: rgb(0 0 0) 0px 0px 4px;
    right: calc(0rem + 0.5vw);
    top: 50%;
    font-size: 0.8em;
  }
`;
const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 49%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 50em) {
    color: ${(props) => props.theme.body};
    text-shadow: rgb(0 0 0) 0px 0px 4px;
    font-size: 0.8em;
    top: 48%;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;

  @media only screen and (max-width: 50em) {
    color: ${(props) => (props.click ? props.theme.text : props.theme.text)};
    text-decoration: none;
    z-index: 1;
    font-size: 0.8em;
  }
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
  font-size: 1em;
`;

const float = keyframes`
0% { transform: translateY(17px) }
100% { transform: translateY(-20px) }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "8%" : "50%")};
  left: ${(props) => (props.click ? "95%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "88%" : "50%")};
    left: ${(props) => (props.click ? "94%" : "50%")};
    width: 100px;
    height: 100px;
  }
  @media only screen and (max-width: 30em) {
    width: 100px;
    height: 100px;
  }

  & > :first-child {
    animation: ${float} 2s ease infinite;
    animation-direction: alternate;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media (max-width: 50em) {
    height: ${(props) => (props.click ? "50%" : "0%")};
    right: 0px;
    width: ${(props) => (props.click ? "100%" : "100%")};
    transition: height 1s ease 0.5s;
  }
  @media (max-width: 30em) {
    height: ${(props) => (props.click ? "50%" : "0%")};
    right: 0px;
    width: ${(props) => (props.click ? "100%" : "100%")};
    transition: height 1s ease 0.5s;
  }
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <LogoComponent
          onClick={() => handleClick}
          theme={click ? "dark" : "light"}
        />
        <SocialIcons
          onClick={() => handleClick}
          theme={click ? "dark" : "light"}
        />
        <Center click={click}>
          <PowerBtn
            onClick={() => handleClick()}
            width={click ? 40 : 150}
            height={click ? 60 : 150}
            fill="currentColor"
          />
          <span>Click the button</span>
        </Center>

        {click ? (
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
              exit={{ opacity: 0 }}
            >
              Contact Me.
            </motion.h2>
          </CONTACT>
        ) : null}

        {click ? (
          <WORK to="/work" click={+click}>
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
        ) : null}
        <BottomBar>
          {click ? (
            <ABOUT to="/about" click={+click}>
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
          ) : null}
          {click ? (
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
          ) : null}
        </BottomBar>
      </Container>

      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
