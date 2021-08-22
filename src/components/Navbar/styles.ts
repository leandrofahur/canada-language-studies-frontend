import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    padding: 0.7rem 2.5rem 0;
`;

export const BrandContainer = styled.div`
    cursor: pointer;
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;

    a {
        padding: 0.5rem;
        margin: 0.4rem 0.5rem;
    }
`;

export const AccessibilityContainer = styled.div`
    display: flex;
`;
