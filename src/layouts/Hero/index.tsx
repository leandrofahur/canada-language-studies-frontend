import React from 'react';

// icons:
import { IoIosArrowDown } from 'react-icons/io';

// components:
import { Navbar } from '../../components/Navbar';
import { Logo } from '../../components/Logo';

import { Element, scroller } from 'react-scroll';

import { HeroContainer, DownArrowContainer, HeroLead } from './styles';

export const Hero: React.FC = () => {
    const scrollToNextSection = () => {
        scroller.scrollTo('aboutUs', { smooth: true });
    };

    return (
        <Element name="hero">
            <HeroContainer>
                <Navbar />
                <Logo inline={false} />
                <HeroLead>
                    It's time to take your language education into your own
                    hands.
                </HeroLead>
                <DownArrowContainer
                    initial={{ translateX: '-50%' }}
                    whileHover={{
                        scale: 1.05,
                        filter: 'brightness(1.2)',
                    }}
                    whileTap={{
                        scale: 0.98,
                        filter: 'brightness(1)',
                    }}
                    // onClick={() => scrollToNextSection()}
                    onClick={() => console.log('here!')}
                >
                    <IoIosArrowDown />
                </DownArrowContainer>
            </HeroContainer>
        </Element>
    );
};
