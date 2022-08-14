import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HomeContainer = styled(motion.section)`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: var(--bgColor);
    padding: 2rem 3rem;
    background-image: url('../assets/logoNightRaid.webp');
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 900px) {
        padding: 2rem 1rem;
    }

    @media (max-width: 500px) {
        padding: 2rem 10px;        
    }
`