import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.header`
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background-color: var(--dark-gray);
    color: var(--white);
`;

export const HeroLead = styled.p`
    font-size: 38px;
    font-weight: 400;
    text-align: center;
    margin-top: 3rem;
`;

export const DownArrowContainer = styled(motion.div)`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: rgba(125, 125, 125, 0.48);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 30px;
`;
