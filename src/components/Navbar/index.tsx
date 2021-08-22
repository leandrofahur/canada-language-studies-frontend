import Link from 'next/Link';
import React from 'react';
import { Button } from '../Button';

// icons:
import { FaUserCircle, FaCartPlus } from 'react-icons/fa';

// components
import { Logo } from '../Logo';

import {
    NavbarContainer,
    BrandContainer,
    LinksContainer,
    AccessibilityContainer,
} from './styles';

export const Navbar: React.FC = () => {
    return (
        <>
            <NavbarContainer>
                <BrandContainer>
                    <Logo inline />
                </BrandContainer>
                {/* <LinksContainer>
                    <a href="/">Home</a>
                    <a href="/">Blog</a>
                    <a href="/">Our Classes</a>
                    <a href="/">Plans &amp; Pricing</a>
                    <a href="/">Contact Us</a>
                </LinksContainer> */}
                <AccessibilityContainer>
                    <Button style={{ marginRight: '.5rem' }}>
                        <FaCartPlus />
                    </Button>
                    <Button>
                        <FaUserCircle /> Login
                    </Button>
                </AccessibilityContainer>
            </NavbarContainer>
        </>
    );
};
