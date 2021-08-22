import Image from 'next/image';
import React from 'react';

// assets:
import LogoImg from '../../assets/logo.svg';

interface ILogoProps {
    inline: boolean;
}

import { LogoContainer, LogoText, LetterSpan } from './styles';

export const Logo: React.FC<ILogoProps> = ({ inline }) => {
    return (
        <LogoContainer inline={inline}>
            <Image
                src={LogoImg}
                width={inline ? '30' : '300'}
                height={inline ? '30' : '300'}
            />
            <LogoText inline={inline}>
                <LetterSpan inline={inline}>C</LetterSpan>anada{' '}
                <LetterSpan inline={inline}>L</LetterSpan>anguage{' '}
                <LetterSpan inline={inline}>S</LetterSpan>tudies
            </LogoText>
        </LogoContainer>
    );
};
