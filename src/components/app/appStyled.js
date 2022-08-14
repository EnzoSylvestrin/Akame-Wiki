import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    width: 100%;
    min-height: 90vh;
    height: 100%;
    background-color: var(--bgColor);
`

export const GridContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: 49% 49%;
    gap: 1%;
`

export const SingleItem = styled(motion.div)`
    width: 100%;
    overflow: hidden;
    padding: 20px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    background-color: var(--bgColor);

    img {
        border: 1px solid var(--textColor);
        width: 300px;
        height: 300px;
    }

    h1 {
        width: 100%;
        padding: 10px 5px;
        color: var(--textColor);
        font-size: 25px;
        letter-spacing: 2px;
    }

    p {
        color: var(--textColor);
        font-size: 20px;
        letter-spacing: 2px;
    }
`