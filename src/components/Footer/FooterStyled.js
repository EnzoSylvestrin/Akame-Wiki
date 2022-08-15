import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerFooter = styled(motion.footer)`
    padding: 5px 0;
    overflow-y: hidden;
    width: 100%;
    min-height: 80px;
    height: 12vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #343a40;

    .social {
        width: 100%;
        text-align: center;

        #icon-linkedin,
        #icon-github {
            font-size: 35px;
            color: #fff;
        }

        #icon-github {
            margin-left: 12px;
        }

        #icon-linkedin:hover {
            color: rgb(35, 98, 192);
        }

        #icon-github:hover {
            color: #000;
        }
    }

    .copyright {
        color: #fff;
        font-size: 17px;
        transition: all 0.4s ease-out;

        :hover {
            color: red;
        }
    }

`