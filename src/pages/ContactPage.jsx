import React from "react";
import { DarkTheme } from "./Themes";
import { NavLink } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import LogoComponent from "../components/LogoComponent";
import SocialIcons from "../components/SocialIcons";
import BackButton from "../components/BackButton";
import BigTitlte from "../components/BigTitle";
import hiDavid from "../assets/images/hiDavid.gif";
import { motion } from "framer-motion";
import FormInput from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import { FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  border-radius: 9px;
  padding: 0.5rem;
  width: 60vw;
  height: 65vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  //   font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(4rem + 5vw);
  top: 7rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  @media (max-width: 50em) {
    height: max-content;
    align-items: center;
    padding: 1rem;
    width: 70%;
    left: calc(2rem + 5vw);
  }

  .FormBox {
    display: flex;
    position: relative;
    gap: 1rem;
    justify-content: center;

    @media (max-width: 50em) {
      width: 100%;
    }
  }

  .left {
    padding-top: 0rem;
    width: 100%;
    @media (max-width: 50em) {
      top: 2rem;
      padding-top: 0.5rem;
    }
  }

  .right {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .FormBox {
      flex-direction: column;
    }
  }
`;
const Dancedavid = styled.div`
  position: absolute;
  top: 5%;
  right: 2%;
  width: 40vw;
  img {
    width: 100%;
    height: 100%;
  }
`;
const WORK = styled(NavLink)`
  color: ${(props) => props.theme.text};
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  position: absolute;

  @media only screen and (max-width: 50em) {
    text-shadow: rgb(0 0 0) 0px 0px 4px;
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
const Whatsapp = styled.button`
  background-color: ${(props) => props.theme.purple};
  padding: 0.7rem;
  width: 15rem;
  border-radius: 8px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.purple};
    box-shadow: 0 0 8px 6px rgba(306, 0, 306, 0.3);
    transform: scale(1.1);
  }
`;
// const WhatsappLink = styled.h3`
// color: ${props => props.theme.body};
// text-decoration: none;
// `
const Contact = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        {/* <ParticleComponent theme='dark' /> */}
        <BackButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <Dancedavid>
          <img src={hiDavid} alt="dancingdavid" />
        </Dancedavid>
        {/* <Hitola>
                    <img src={hiDavid} alt='antenna' />
                </Hitola> */}

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
              exit="exit"
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
        <Main>
          <div className="FormBox">
            <div className="left">
              <h3>You can stop by for a chat, drinks or play videogames</h3>
              <ContactInfo icon={<GoMail />} text="tolafandpro@gmail.com" />
              <ContactInfo icon={<FaWhatsapp />} text="Text Me" />
              <Whatsapp
                as="a"
                href="https://wa.me/+2348039662232"
                target="_blank"
                rel="noreferrer"
              >
                Click to Text
              </Whatsapp>
            </div>
            <div className="right">
              <FormInput />
            </div>
          </div>
        </Main>
        <BigTitlte text="CONTACT" top="10%" left="2%" />
      </Box>
    </ThemeProvider>
  );
};

export default Contact;
