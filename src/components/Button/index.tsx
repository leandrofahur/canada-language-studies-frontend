import React, { ButtonHTMLAttributes } from 'react';

import { ButtonWrapper } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    // inline: boolean;
};

export const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
    return (
        <ButtonWrapper type="button" {...rest}>
            {children}
        </ButtonWrapper>
    );
};
