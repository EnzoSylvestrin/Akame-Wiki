import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    width: 100%;
    min-height: 90vh;
    height: 100%;
    background-color: #2b2828;
`

export const Titulo = styled(motion.h1)`
    text-align: center;
    color: #fff;
    font-size: 30px;
    padding: 15px 0;
`

export const GridContainer = styled(motion.div)`
    display: grid;
    padding: 10px 2rem;
    grid-template-columns: 49% 49%;
    gap: 1%;
`

export const SingleItem = styled(motion.div)`
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 300px;
    border: 1px solid #fff;
    margin-bottom: 10px;
`