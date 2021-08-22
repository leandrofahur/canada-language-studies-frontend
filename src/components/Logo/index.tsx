import Image from 'next/image';
import React from 'react';

// assets:
import LogoImg from '../../assets/logo.svg';

interface ILogoProps {
    inline: boolean;
}

import { LogoContainer, LogoText, LetterSpan } from './styles';

export const Logo: React.FC<ILogoProps> = ({ inline }) => {
    console.log(inline);
    return (
        <LogoContainer inline={inline}>
            <Image
                src={LogoImg}
                width={inline ? '60' : '300'}
                height={inline ? '60' : '300'}
            />
            <LogoText inline={inline}>
                <LetterSpan inline={inline}>C</LetterSpan>anada
                <LetterSpan inline={inline}>L</LetterSpan>anguge
                <LetterSpan inline={inline}>S</LetterSpan>tudies
            </LogoText>
        </LogoContainer>
    );
};
