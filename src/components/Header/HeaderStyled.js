import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Nav = styled(motion.nav)`
    width: 100%;
    height: 10vh;
    background-color: var(--bgColor);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 520px) {
        padding-top: 5px;
        height: 90px;
    }
`

export const Logo = styled(motion.a)`
    color: #fff;
    transition: all 0.6s;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: 4px;

    :hover {
        color: var(--MainRed);
    }

    @media (max-width: 520px) {
        text-align: center;
        width: 100%;
    }
`

export const Label = styled(motion.label)`
    position: relative;
    text-align: center;
    
    ::before {
        display: inline-block;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        transition: all 0.5s ease;
        background-color: #2c2a2a;
        height: 33px;
        width: 40px;
        font: var(--fa-font-solid);
        content: '\f002';
        position: absolute;
        border: 1px solid #868484;
        right: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    :hover:before {
        border-color: #fff;
    }

`

export const SearchInput = styled(motion.input)`
    width: 300px;
    height: 35px;
    font-size: 17px;
    color: #fff;
    padding: 5px;
    padding-right: 45px;
    outline: none;
    background-color: var(--bgColor);
    border: 1px solid #868484;
    border-radius: 5px;
    transition: all 0.5s ease;

    :hover {
        border-color: #fff;
    }

    :focus {
        border-color: var(--MainRed);
    }

    @media (max-width: 520px) {
        margin-bottom: 8px;
    }
`