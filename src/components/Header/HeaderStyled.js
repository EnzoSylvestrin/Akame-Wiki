import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Nav = styled(motion.nav)`
    width: 100%;
    height: 70px;
    background-color: var(--bgColor);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
`

export const Logo = styled(motion.a)`
    color: #ffffff;
    transition: all 0.6s;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: 4px;

    :hover {
        color: var(--MainRed);
    }
`

export const SearchInput = styled(motion.input)`
    width: 300px;
    height: 35px;
    font-size: 14px;
    color: #fff;
    padding: 5px;
    outline: none;
    background-color: var(--bgColor);
    border: 1px solid #868484;
    border-radius: 5px;
    transition: all 0.5s ease;

    :hover {
        border: 1px solid #fff;
    }

    :focus {
        border: 1px solid var(--MainRed);
    }
`