import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    width: 100%;
    height: 100%;
`

export const GridContainer = styled(motion.div)`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
    margin-top: 10px;
    gap: 32px;

    .mg-r {
        margin-left: 0px !important;
    }

    @media (max-width: 780px) {
        grid-template-columns: 100%;
        gap: 40px;
    }
`

export const LoadingContainer = styled(motion.div)`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoadingComponent = styled(motion.div)`
    animation: is-rotating 1s infinite;
    border: 6px solid var(--bgInverse);
    border-radius: 50%;
    border-top-color: #3adfe7;
    height: 50px;
    width: 50px;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`

export const ErrorComponent = styled(motion.p)`
    color: var(--textColor);
    font-size: 20px;
    text-align: center;

    span {
        color: var(--mainRed);
    }

    a {
        color: blue; 
        text-decoration: none;
    }
`

export const NothingFindComponent = styled(motion.div)`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: var(--textColor);
        font-size: 20px;
    }
`

export const SingleItem = styled(motion.a)`
    width: 100%;
    height: 100%;
    min-height: 200px;
    overflow: hidden;
    padding: 20px;
    margin: 20px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    transition: all 0.5s ease;
    text-decoration: none;
    background-color: var(--bgCards);


    .text-wrapper {
        overflow: hidden !important;
        display: block;
        width: 70%;
        color: #fff;

        h1 {
            padding: 5px;
            font-size: 20px;
            font-weight: lighter;
            letter-spacing: 2px;
        }

        h2 {
            margin-top: 15px;
            margin-bottom: 15px;
            font-size: 30px;
        }

        p {
            font-size: 20px;
            letter-spacing: 1.5px;
        }
    }
    
    .img-wrapper {
        width: 100%;
        align-self: center;
        display: flex;
        justify-content: center;

        img {
            filter: grayscale(80%);
            width: auto;
            height: 175px;
            border-radius: 50%;
            transition: all 0.5s ease;
        }

    }

    :hover {
        border-radius: 12px;
    }

    :hover img {
        filter: grayscale(0%);
        border-radius: 10px;
    }

    @media (max-width: 780px) {
        margin-bottom: 15px;
        margin-left: 0px !important;
    }
    
    @media (max-width: 385px) {
        flex-wrap: wrap;
        flex-direction: column-reverse;

        .text-wrapper {
            width: 100%;
            text-align: center;

            h1 {
                padding: 0;
                margin-top: 10px;
                margin-bottom: 5px;
            }

            h2 {
                margin: 8px 0;
            }
        }
    }
`