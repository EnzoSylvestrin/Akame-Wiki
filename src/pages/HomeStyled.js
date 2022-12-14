import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HomeContainer = styled(motion.section)`
    width: 100%;
    min-height: 88vh;
    height: 100%;
    background-color: var(--bgColor);
    padding: 2rem 3rem;

    @media (max-width: 940px) {
        padding: 2rem 1rem;
    }

    @media (max-width: 500px) {
        padding: 2rem 10px;        
    }
`