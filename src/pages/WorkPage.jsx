import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../components/LogoComponent";
import SocialIcons from "../components/SocialIcons";
import BackButton from "../components/BackButton";

import { Work } from "../data/WorkData";
import Card from "../components/Card";
import { Carwheel } from "./AllSvgs";
import BigTitlte from "../components/BigTitle";
import { NavLink } from "react-router-dom";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;

color:white;

@media only screen and (max-width: 25em) {
     {
        left: calc(1rem + 15vw);
    }
@media only screen and (max-width: 40em) {
    {
        top: 30%;
    }

    @media only screen and (max-width: 25em) {
        .card{
           left: calc(1rem + 15vw);
           width: 12rem;
           margin-right: 4rem;
           height: 35vh;
           padding: 1.5rem;
       }
}

`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
  @media (max-width: 50em) {
    bottom: 6rem;
    width: 80px;
    height: 80px;
    right: 1rem;
  }
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const ShipWheel = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (ShipWheel.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <BackButton />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card className="card" key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={ShipWheel}>
          {/* <img src={Carwheel} alt="spinning wheel"/> */}
          <Carwheel width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="WORK" top="10%" right="20%" />
      </Box>
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
    </ThemeProvider>
  );
};

export default WorkPage;
