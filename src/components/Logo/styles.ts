import styled from 'styled-components';

interface ILogoProps {
    inline: boolean;
}

export const LogoContainer = styled.div<ILogoProps>`
    display: flex;
    flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
    justify-content: center;
    align-items: center;
`;

export const LogoText = styled.h1<ILogoProps>`
    margin-top: ${({ inline }) => (inline ? '0px' : '3rem')};
    font-size: ${({ inline }) => (inline ? '18px' : '70px')};
    font-weight: bold;
    margin-left: ${({ inline }) => (inline ? '5px' : '0px')};
`;

export const LetterSpan = styled.span<ILogoProps>`
    color: var(--primary);
    font-size: ${({ inline }) => (inline ? '28px' : '90px')};
`;
