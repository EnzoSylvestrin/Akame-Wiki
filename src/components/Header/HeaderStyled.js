import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Nav = styled(motion.nav)`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const Logo = styled(motion.h1)`
    color: var(--textColor);
    transition: all 0.6s;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 34px;
    letter-spacing: 2px;
    text-align: center;

    :hover {
        color: var(--mainRed);
    }

    @media (max-width: 350px) {
        width: 100%;
    }
`

export const ThemeDiv = styled(motion.div)`
    margin-right: 12.5px;

    @media (max-width: 350px) {
        width: 100%;
        text-align: center;
        margin: 5px 0;
    }
`

export const Label = styled(motion.label)`
    display: flex;
    flex-wrap: nowrap;
    text-align: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;

    :hover input, 
    :hover div {
        border-color: var(--bgInverse);
    }
    
    @media (max-width: 350px) {
        margin-top: 5px;
    }

`

export const SearchInput = styled(motion.input)`
    height: 50px;
    width: 100%;    
    font-size: 17px;
    color: var(--textColor);
    padding: 5px;
    outline: none;
    background-color: var(--bgColor);
    border: 1px solid #868484;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    text-align: center;
    transition: all 0.5s ease;

    :focus {
        border-color: var(--mainRed) !important;
    }
`

export const SearchIcon = styled(motion.div)`
    width: 60px;
    height: 50px;
    transition: all 0.5s ease;
    background-color: var(--bgColor);
    border: 1px solid #868484;
    border-left: 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .icon {
        font-size: 20px;
        color: var(--textColor);
    }
`