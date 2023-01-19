import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/images/Odavid-maker.gif";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 60vw;
  height: 65vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  @media (max-width: 60em) {
    width: 70vw;
  }
  @media (max-width: 50em) {
    linear-gradient: (
          to right,
          ${(props) => props.theme.body} 50%,
          ${(props) => props.theme.text} 50%
        )
        bottom,
      linear-gradient(
          to top,
          ${(props) => props.theme.text} 50%,
          ${(props) => props.theme.body} 50%
        )
        top;
    width: 65vw;
    border-top: 2px solid rgb(252, 246, 244);
    border-bottom: 2px solid rgb(0, 0, 0);
    border-left: 2px solid rgb(0, 0, 0);
    background-size: 100% 2px;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  // @media only screen and (max-width: 50em){
  //     border-style: solid;
  //     border-top: 2px solid rgb(252, 246, 244);
  //     border-bottom: 2px solid rgb(0, 0, 0);
  //     linear-graident(
  //     to right,
  //     border-left: 2px solid ${(props) => props.theme.body} 50%,
  //     border-right: 2px solid ${(props) => props.theme.text} 50%) top;
  //     background-position: 0px 0px, 100%, 0px;
  //     background-repeat: no-repeat;
  //     width: 70vw;
  // }

  // @media (max-width: 40em) {
  //     width: 60vw;
  // }
  // @media (max-width: 30em) {
  //     width: 70vw;
  // }
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  @media only screen and (max-width: 50em) {
    width: 100%;
    height: 50%;
  }
  .pic {
    position: absolute;
    bottom: 0.2rem;
    left: 70%;
    transform: translate(-50%, 0%);
    width: 17em;
    height: 98%;

    @media (max-width: 50em) {
      width: 46vw;
      height: 32vh;
      left: 65%;
      transform: translate(-50%, 0%);
    }
    //         @media (max-width: 40em) {
    //             width: 30vw;
    //             height: 32vh;
    //             left: 78%;
    //             transform: translate(-50%,0%);
    //         }
    //         @media (max-width: 30em) {
    //             width: 50vw;
    //             height: 32vh;
    //             left: 63%;
    //             transform: translate(-50%,0%);
    //         }
  }
`;

const Text = styled.div`
  font-size: calc(0.8em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.4rem + 1.6vw);
    font-weight: 300;
  }
  @media (max-width: 50em) {
    font-size: calc(1.2rem + 1.8vw);
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "65vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h4>I'm Oyetola David</h4>
          <h6>A WebDeveloper, Freelancer, webdesigner and a Gadget lover.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <img className="pic" src={Me} alt="David Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
