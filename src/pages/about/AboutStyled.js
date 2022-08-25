import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    background-color: var(--bgColor);
    overflow: hidden;
`

export const ContainerImg = styled.div`
    height: 45%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 10px;
`

export const ImgCharacter = styled(motion.img)`
    width: 200px;
    height: 200px;
`

export const Particulars = styled(motion.div)`
    color: white;
    padding: 0 25px;

    h1 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    p {
        font-size: 20px;
    }
`


export const ContainerAbout = styled(motion.div)`
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    box-shadow: 0 0 5px 2.5px rgba(0, 0, 0, 0.3);
    padding: 12px 16px;
    background-color: var(--bgCards);
    height: 55%;
    color: white;
    width: 100%;
`

export const Title = styled.h1`
    margin: 20px 0;
    font-size: 24px !important;
    text-align: center;
    display: block;
`

export const Description = styled.div`
    font-size: 18px;
    text-align: center;
`

export const Characteristic = styled.div`
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    font-size: 20px;
    text-align: center;

    h2 {
        font-weight: normal;
        font-size: 20px !important;
    }

    @media (max-width: 550px) {
        grid-template-columns: 100%;
        gap: 20px;
    }

`