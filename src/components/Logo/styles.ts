import styled from 'styled-components';

interface ILogoProps {
    inline: boolean;
}

export const LogoContainer = styled.div<ILogoProps>`
    display: flex;
    flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
    justify-content: center;
    align-items: center;
    margin-top: ${({ inline }) => (inline ? '0px' : '5rem')};
`;

export const LogoText = styled.h1<ILogoProps>`
    margin-top: ${({ inline }) => (inline ? '0px' : '3rem')};
    font-size: ${({ inline }) => (inline ? '18px' : '70px')};
    font-weight: ${({ inline }) => (inline ? '400' : 'bold')};
    margin-left: ${({ inline }) => (inline ? '5px' : '0px')};
`;

export const LetterSpan = styled.span<ILogoProps>`
    color: var(--primary);
    font-size: ${({ inline }) => (inline ? '30px' : '90px')};
`;
