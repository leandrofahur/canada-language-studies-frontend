import React from 'react';

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
                <BrandContainer></BrandContainer>
                <LinksContainer></LinksContainer>
                <AccessibilityContainer></AccessibilityContainer>
            </NavbarContainer>
        </>
    );
};
