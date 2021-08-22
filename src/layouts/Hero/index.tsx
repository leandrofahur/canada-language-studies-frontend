import React from 'react';

import { Logo } from '../../components/Logo';

import { HeroContainer, DownArrowContainer } from './styles';

export const Hero: React.FC = () => {
    return (
        <>
            <HeroContainer>
                {/* <Navbar></Navbar> */}
                <Logo inline={false} />
                {/* <DownArrowContainer></DownArrowContainer> */}
            </HeroContainer>
        </>
    );
};
