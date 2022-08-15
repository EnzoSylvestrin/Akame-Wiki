import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    width: 100%;
    height: 100%;
`

export const GridContainer = styled(motion.div)`
    height: 100%;
    display: grid;
    grid-template-columns: 49% 49%;
    gap: 2%;
    overflow: hidden;
    margin-top: 10px;

    .mg-r {
        margin-left: 0px !important;
    }

    @media (max-width: 780px) {
        grid-template-columns: 100%;
        gap: 0;

        .mg-r {
        }
    }
`

export const LoadingComponent = styled(motion.div)`
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    p {
        color: var(--textColor);
        font-size: 30px;        
    }
`

export const SingleItem = styled(motion.a)`
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 20px;
    margin: 5px;
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
            filter: grayscale(50%);
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
    }
    
    @media (max-width: 385px) {
        flex-wrap: wrap;
        flex-direction: column-reverse;

        .text-wrapper {
            width: 100%;
            text-align: center;

            h1 {
                padding: 0;
                margin: 5px 0;
            }

            h2 {
                margin: 8px 0;
            }
        }
    }
`