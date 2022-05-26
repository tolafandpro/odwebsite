import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github, Twitter, Linkedin } from '../pages/AllSvgs'
import {DarkTheme} from '../pages/Themes'


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;
z-index:3;

@media (max-width: 50em) {
    left: 1rem;
    color: ${props => props.click ? props.theme.text : props.theme.body };
}

&>*:not(:last-child){
    margin: 0.5rem 0;    
}

`

const Line = styled(motion.span)`
width: 2px;
height: 5rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body  };
`
const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            whileHover={{scale: 1.2}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://github.com/tolafandpro"}}>
                    <Github 
                            width={25} 
                            height={25}  
                            fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.2}}
            whileHover={{scale: 1.2}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://twitter.com/Oyetola_David"}}>
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>
            <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            whileHover={{scale: 1.2, duration: 1}}
            >
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://www.linkedin.com/in/fadairo-oyetola-david-394851102"}}>
                    <Linkedin width={30} height={30} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
                </NavLink>
            </motion.div>

            <Line color={props.theme}

                    initial={
                        {
                            height:0
                        }
                    }
                    animate={{
                        height: '5rem'
                    }}
                    transition={{
                        type:'spring', duration:1, delay:0.8
                    }}
            />
        </Icons>
    )
}

export default SocialIcons
